import { clerkClient } from '@clerk/clerk-sdk-node';

// Clerk authentication middleware
export const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    
    // Verify the token with Clerk
    const clerk = clerkClient();
    const session = await clerk.verifyToken(token);
    
    if (!session) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Attach user info to request
    req.userId = session.sub; // Clerk user ID
    req.user = session;
    
    next();
  } catch (error) {
    console.error('Auth error:', error);
    return res.status(401).json({ message: 'Authentication failed', error: error.message });
  }
};

// Optional: Check if user is owner/admin
export const isOwner = async (req, res, next) => {
  try {
    // You can customize this based on your owner identification logic
    // For now, we'll check if user has a specific role or metadata
    const clerk = clerkClient();
    const user = await clerk.users.getUser(req.userId);
    
    // Check if user has owner role in Clerk metadata
    const isOwnerUser = user.publicMetadata?.role === 'owner' || 
                       user.publicMetadata?.isOwner === true;
    
    if (!isOwnerUser) {
      return res.status(403).json({ message: 'Access denied. Owner privileges required.' });
    }
    
    next();
  } catch (error) {
    console.error('Owner check error:', error);
    return res.status(403).json({ message: 'Access denied' });
  }
};

