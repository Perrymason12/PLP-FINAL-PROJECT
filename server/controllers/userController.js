import User from '../models/User.js';
import { clerkClient } from '@clerk/clerk-sdk-node';

// Get or create user
export const getUser = async (req, res) => {
  try {
    const { userId } = req;
    
    // Get user from Clerk
    const clerk = clerkClient();
    const clerkUser = await clerk.users.getUser(userId);
    
    // Check if user exists in database
    let user = await User.findOne({ clerkId: userId });
    
    if (!user) {
      // Create new user
      user = await User.create({
        clerkId: userId,
        email: clerkUser.emailAddresses[0]?.emailAddress || '',
        firstName: clerkUser.firstName || '',
        lastName: clerkUser.lastName || '',
        imageUrl: clerkUser.imageUrl || '',
        role: clerkUser.publicMetadata?.role || 'user',
        isOwner: clerkUser.publicMetadata?.isOwner || false
      });
    } else {
      // Update user info from Clerk
      user.email = clerkUser.emailAddresses[0]?.emailAddress || user.email;
      user.firstName = clerkUser.firstName || user.firstName;
      user.lastName = clerkUser.lastName || user.lastName;
      user.imageUrl = clerkUser.imageUrl || user.imageUrl;
      user.role = clerkUser.publicMetadata?.role || user.role;
      user.isOwner = clerkUser.publicMetadata?.isOwner || user.isOwner;
      await user.save();
    }
    
    res.json({
      success: true,
      user: {
        _id: user._id,
        clerkId: user.clerkId,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl,
        role: user.role,
        isOwner: user.isOwner
      }
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Error fetching user', error: error.message });
  }
};

// Create or update user (sync with Clerk)
export const createOrUpdateUser = async (req, res) => {
  try {
    const { userId } = req;
    const clerk = clerkClient();
    const clerkUser = await clerk.users.getUser(userId);
    
    let user = await User.findOne({ clerkId: userId });
    
    if (!user) {
      user = await User.create({
        clerkId: userId,
        email: clerkUser.emailAddresses[0]?.emailAddress || '',
        firstName: clerkUser.firstName || '',
        lastName: clerkUser.lastName || '',
        imageUrl: clerkUser.imageUrl || '',
        role: clerkUser.publicMetadata?.role || 'user',
        isOwner: clerkUser.publicMetadata?.isOwner || false
      });
    } else {
      user.email = clerkUser.emailAddresses[0]?.emailAddress || user.email;
      user.firstName = clerkUser.firstName || user.firstName;
      user.lastName = clerkUser.lastName || user.lastName;
      user.imageUrl = clerkUser.imageUrl || user.imageUrl;
      user.role = clerkUser.publicMetadata?.role || user.role;
      user.isOwner = clerkUser.publicMetadata?.isOwner || user.isOwner;
      await user.save();
    }
    
    res.json({
      success: true,
      user
    });
  } catch (error) {
    console.error('Create/Update user error:', error);
    res.status(500).json({ message: 'Error syncing user', error: error.message });
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const { userId } = req;
    const { firstName, lastName, role, isOwner } = req.body;
    
    const user = await User.findOne({ clerkId: userId });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (role) user.role = role;
    if (typeof isOwner === 'boolean') user.isOwner = isOwner;
    
    await user.save();
    
    res.json({
      success: true,
      user
    });
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

// Get all users (admin only)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-__v').sort({ createdAt: -1 });
    res.json({
      success: true,
      users
    });
  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

