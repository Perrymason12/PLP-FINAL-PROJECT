const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// API functions
export const api = {
  // User
  getUser: async (token) => {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.json();
  },

  // Products
  getProducts: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${API_BASE_URL}/products?${queryString}`);
    return response.json();
  },
  
  getProductById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return response.json();
  },
  
  addProduct: async (formData, token) => {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });
    return response.json();
  },
  
  updateProduct: async (id, formData, token) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });
    return response.json();
  },
  
  deleteProduct: async (id, token) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.json();
  },
  
  toggleStock: async (id, token) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}/toggle-stock`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.json();
  },

  // Bulk upload products (expects array of product objects without images or with image URLs)
  bulkUpload: async (products, token) => {
    const response = await fetch(`${API_BASE_URL}/products/bulk-upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ products })
    });
    return response.json();
  },

  // Cart
  getCart: async (token) => {
    const response = await fetch(`${API_BASE_URL}/cart`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.json();
  },
  
  addToCart: async (productId, size, quantity, token) => {
    const response = await fetch(`${API_BASE_URL}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      },
      body: JSON.stringify({ productId, size, quantity })
    });
    const json = await response.json().catch(() => ({}));
    json.status = response.status;
    return json;
  },
  
  updateCartItem: async (productId, size, quantity, token) => {
    const response = await fetch(`${API_BASE_URL}/cart/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      },
      body: JSON.stringify({ productId, size, quantity })
    });
    const json = await response.json().catch(() => ({}));
    json.status = response.status;
    return json;
  },
  
  removeFromCart: async (productId, size, token) => {
    const response = await fetch(`${API_BASE_URL}/cart/remove/${productId}/${size}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.json();
  },
  
  clearCart: async (token) => {
    const response = await fetch(`${API_BASE_URL}/cart/clear`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.json();
  },

  // Address
  getAddresses: async (token) => {
    const response = await fetch(`${API_BASE_URL}/address`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.json();
  },
  
  addAddress: async (addressData, token) => {
    const response = await fetch(`${API_BASE_URL}/address`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(addressData)
    });
    return response.json();
  },
  
  updateAddress: async (id, addressData, token) => {
    const response = await fetch(`${API_BASE_URL}/address/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(addressData)
    });
    return response.json();
  },
  
  deleteAddress: async (id, token) => {
    const response = await fetch(`${API_BASE_URL}/address/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.json();
  },

  // Orders
  createOrder: async (orderData, token) => {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(orderData)
    });
    return response.json();
  },
  
  getUserOrders: async (token) => {
    const response = await fetch(`${API_BASE_URL}/orders/my-orders`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.json();
  },
  
  getOrderById: async (id, token) => {
    const response = await fetch(`${API_BASE_URL}/orders/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.json();
  },
  
  getDashboardData: async (token) => {
    const response = await fetch(`${API_BASE_URL}/orders/dashboard/stats`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.json();
  },

  // Payment
  createPaymentIntent: async (addressId, token) => {
    const response = await fetch(`${API_BASE_URL}/payments/create-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ addressId })
    });
    return response.json();
  },
  
  confirmPayment: async (paymentIntentId, token) => {
    const response = await fetch(`${API_BASE_URL}/payments/confirm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ paymentIntentId })
    });
    return response.json();
  }
};

