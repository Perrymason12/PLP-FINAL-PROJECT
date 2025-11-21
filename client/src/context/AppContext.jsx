/* eslint-disable react-refresh/only-export-components */
import { useUser, useAuth } from "@clerk/clerk-react";
import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { api } from "../utils/api";
import { API_BASE_URL } from "../utils/constants";
import { dummyProducts } from "../assets/data";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem('plp_cart');
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });
  const [method, setMethod] = useState("COD");
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const delivery_charges = 10; //10 dollars

  // Clerk
  const { user } = useUser();
  const { getToken } = useAuth();

  // Helper function to make authenticated API requests
  const apiRequest = async (endpoint, options = {}) => {
    const token = await getToken();
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers
      }
    });
    return response.json();
  };

  // Sync user with backend
  useEffect(() => {
    const syncUser = async () => {
      if (user) {
        try {
          const token = await getToken();
          const data = await api.getUser(token);
          if (data.success) {
            setIsOwner(data.user.isOwner || data.user.role === 'owner');
          }
        } catch (error) {
          console.error('Error syncing user:', error);
        }
      }
    };
    syncUser();
  }, [user, getToken]);

  // FETCH ALL PRODUCTS
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await api.getProducts();
      if (data && data.success && Array.isArray(data.products) && data.products.length > 0) {
        // Prefer local images from dummyProducts when available: match by normalized title
        const normalize = (s = '') => s.toString().trim().replace(/\s+/g, ' ').toLowerCase();
        const localMap = new Map();
        dummyProducts.forEach(dp => localMap.set(normalize(dp.title), dp.images));

        const merged = data.products.map(p => {
          const key = normalize(p.title);
          if (localMap.has(key)) {
            // replace images with local asset refs so UI shows bundled images
            return { ...p, images: localMap.get(key) };
          }
          return p;
        });

        setProducts(merged);
      } else {
        // fallback to local dummy products when API returns empty or on unexpected response
        setProducts(dummyProducts);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to fetch products');
      // fallback to local dummy products on network/error
      setProducts(dummyProducts);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load cart from backend
  const loadCart = useCallback(async () => {
    if (!user) return;
    try {
      const token = await getToken();
      const data = await api.getCart(token);
      if (data.success && data.cart) {
        const cartData = {};
        data.cart.items.forEach(item => {
          const productId = item.productId._id || item.productId;
          cartData[productId] = cartData[productId] || {};
          cartData[productId][item.size] = item.quantity;
        });
        setCartItems(cartData);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  }, [user, getToken]);

  // Load addresses
  const loadAddresses = useCallback(async () => {
    if (!user) return;
    try {
      const token = await getToken();
      const data = await api.getAddresses(token);
      if (data.success) {
        setAddresses(data.addresses);
      }
    } catch (error) {
      console.error('Error loading addresses:', error);
    }
  }, [user, getToken]);

  // Add Product to cart
  const persistLocalCart = (cart) => {
    try {
      localStorage.setItem('plp_cart', JSON.stringify(cart));
    } catch {
      // ignore storage errors
    }
  };

  const addToCart = async (itemId, size, quantity = 1) => {
    if (!size) return toast.error('Please select a size first');

    // Guest flow: store cart in localStorage
    if (!user) {
      // safe deep clone fallback
      const cartData = JSON.parse(JSON.stringify(cartItems || {}));
      cartData[itemId] = cartData[itemId] || {};
      cartData[itemId][size] = (cartData[itemId][size] || 0) + quantity;
      setCartItems(cartData);
      persistLocalCart(cartData);
      toast.success('Product added to cart');
      return true;
    }

    // Authenticated user: sync with server
    try {
      const token = await getToken();
      let data = await api.addToCart(itemId, size, quantity, token);
      // If unauthorized try to refresh token and retry once
      if (data && data.status === 401 && token) {
        try {
          const refreshed = await getToken();
          if (refreshed && refreshed !== token) {
            data = await api.addToCart(itemId, size, quantity, refreshed);
          }
        } catch {
          // ignore refresh error
        }
      }

      // If still unauthorized, fall back to local cart and ask user to sign in
      if (data && data.status === 401) {
        const cartData = JSON.parse(JSON.stringify(cartItems || {}));
        cartData[itemId] = cartData[itemId] || {};
        cartData[itemId][size] = (cartData[itemId][size] || 0) + quantity;
        setCartItems(cartData);
        persistLocalCart(cartData);
        toast.error('Session expired — added to local cart. Please sign in again to persist.');
        return false;
      }

      if (data && data.success) {
        // Build local cart from server response
        const cartData = {};
        (data.cart.items || []).forEach((item) => {
          const pid = item.productId && item.productId._id ? item.productId._id : item.productId;
          cartData[pid] = cartData[pid] || {};
          cartData[pid][item.size] = item.quantity;
        });
        setCartItems(cartData);
        persistLocalCart(cartData);
        toast.success('Product added to cart');
        return true;
      }
    } catch (error) {
      toast.error(error.message || 'Failed to add to cart');
      return false;
    }
    return false;
  };

  // Get Cart Count
  const getCartCount = () => {
    let count = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        count += cartItems[itemId][size]
      }
    }
    return count
  }

  // Update Cart Quantity
  const updateQuantity = async (itemId, size, quantity) => {
    // Guest: update local cart
    if (!user) {
      const cartData = structuredClone(cartItems);
      if (!cartData[itemId]) return;
      if (quantity === 0) {
        delete cartData[itemId][size];
        if (Object.keys(cartData[itemId]).length === 0) delete cartData[itemId];
      } else {
        cartData[itemId] = cartData[itemId] || {};
        cartData[itemId][size] = quantity;
      }
      setCartItems(cartData);
      persistLocalCart(cartData);
      return;
    }

    try {
      const token = await getToken();
      let data = await api.updateCartItem(itemId, size, quantity, token);
      if (data && data.status === 401 && token) {
        try {
          const refreshed = await getToken();
          if (refreshed && refreshed !== token) {
            data = await api.updateCartItem(itemId, size, quantity, refreshed);
          }
        } catch {
          // ignore
        }
      }

      if (data && data.status === 401) {
        toast.error('Session expired — please sign in again to update your cart.');
        return;
      }

      if (data && data.success) {
        const cartData = structuredClone(cartItems);
        if (quantity === 0) {
          if (cartData[itemId]) {
            delete cartData[itemId][size];
            if (Object.keys(cartData[itemId]).length === 0) delete cartData[itemId];
          }
        } else {
          cartData[itemId] = cartData[itemId] || {};
          cartData[itemId][size] = quantity;
        }
        setCartItems(cartData);
        persistLocalCart(cartData);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to update cart');
    }
  }

  //get Cart Amount
  const getCartAmount = () => {
    let total = 0
    for (const itemId in cartItems) {
      const product = products.find(p => p._id === itemId)
      if (!product) continue
      const priceMap = product.price instanceof Map ? product.price : new Map(Object.entries(product.price));
      for (const size in cartItems[itemId]) {
        const price = priceMap.get(size) || product.price[size];
        if (price) {
          total += price * cartItems[itemId][size]
        }
      }
    }
    return total
  }

  useEffect(() => {
    fetchProducts();
    if (user) {
      loadCart();
      loadAddresses();
    }
  }, [user, fetchProducts, loadCart, loadAddresses]);

  const value = {
    navigate,
    user,
    products,
    currency,
    fetchProducts,
    searchQuery,
    setSearchQuery,
    cartItems,
    setCartItems,
    method,
    setMethod,
    delivery_charges,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    isOwner,
    setIsOwner,
    loading,
    addresses,
    loadAddresses,
    apiRequest,
    getToken
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
