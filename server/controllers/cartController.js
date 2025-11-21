import Cart from '../models/Cart.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

// Get user's cart
export const getCart = async (req, res) => {
  try {
    const { userId } = req;
    
    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    let cart = await Cart.findOne({ userId: user._id }).populate('items.productId');
    
    if (!cart) {
      cart = await Cart.create({ userId: user._id, items: [] });
    }
    
    res.json({
      success: true,
      cart
    });
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ message: 'Error fetching cart', error: error.message });
  }
};

// Add to cart
export const addToCart = async (req, res) => {
  try {
    const { userId } = req;
    const { productId, size, quantity = 1 } = req.body;
    
    if (!productId || !size) {
      return res.status(400).json({ message: 'Product ID and size are required' });
    }
    
    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Verify product exists and is in stock
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    if (!product.inStock) {
      return res.status(400).json({ message: 'Product is out of stock' });
    }
    
    if (!product.sizes.includes(size)) {
      return res.status(400).json({ message: 'Invalid size for this product' });
    }
    
    // Check stock availability
    const stock = product.stock.get(size);
    if (stock !== undefined && stock < quantity) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }
    
    // Get or create cart
    let cart = await Cart.findOne({ userId: user._id });
    if (!cart) {
      cart = await Cart.create({ userId: user._id, items: [] });
    }
    
    // Check if item already exists in cart
    const existingItemIndex = cart.items.findIndex(
      item => item.productId.toString() === productId && item.size === size
    );
    
    if (existingItemIndex !== -1) {
      // Update quantity
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      cart.items.push({
        productId,
        size,
        quantity
      });
    }
    
    await cart.save();
    
    const updatedCart = await Cart.findById(cart._id).populate('items.productId');
    
    res.json({
      success: true,
      cart: updatedCart
    });
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({ message: 'Error adding to cart', error: error.message });
  }
};

// Update cart item
export const updateCartItem = async (req, res) => {
  try {
    const { userId } = req;
    const { productId, size, quantity } = req.body;
    
    if (!productId || !size || quantity === undefined) {
      return res.status(400).json({ message: 'Product ID, size, and quantity are required' });
    }
    
    if (quantity < 0) {
      return res.status(400).json({ message: 'Quantity cannot be negative' });
    }
    
    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const cart = await Cart.findOne({ userId: user._id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    const itemIndex = cart.items.findIndex(
      item => item.productId.toString() === productId && item.size === size
    );
    
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }
    
    if (quantity === 0) {
      // Remove item
      cart.items.splice(itemIndex, 1);
    } else {
      // Update quantity
      // Check stock availability
      const product = await Product.findById(productId);
      if (product) {
        const stock = product.stock.get(size);
        if (stock !== undefined && stock < quantity) {
          return res.status(400).json({ message: 'Insufficient stock' });
        }
      }
      cart.items[itemIndex].quantity = quantity;
    }
    
    await cart.save();
    
    const updatedCart = await Cart.findById(cart._id).populate('items.productId');
    
    res.json({
      success: true,
      cart: updatedCart
    });
  } catch (error) {
    console.error('Update cart item error:', error);
    res.status(500).json({ message: 'Error updating cart item', error: error.message });
  }
};

// Remove from cart
export const removeFromCart = async (req, res) => {
  try {
    const { userId } = req;
    const { productId, size } = req.params;
    
    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const cart = await Cart.findOne({ userId: user._id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    cart.items = cart.items.filter(
      item => !(item.productId.toString() === productId && item.size === size)
    );
    
    await cart.save();
    
    const updatedCart = await Cart.findById(cart._id).populate('items.productId');
    
    res.json({
      success: true,
      cart: updatedCart
    });
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ message: 'Error removing from cart', error: error.message });
  }
};

// Clear cart
export const clearCart = async (req, res) => {
  try {
    const { userId } = req;
    
    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const cart = await Cart.findOne({ userId: user._id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    cart.items = [];
    await cart.save();
    
    res.json({
      success: true,
      message: 'Cart cleared successfully'
    });
  } catch (error) {
    console.error('Clear cart error:', error);
    res.status(500).json({ message: 'Error clearing cart', error: error.message });
  }
};

