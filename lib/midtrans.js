import midtransClient from 'midtrans-client';

// Validate required environment variables
const validateMidtransEnv = () => {
  const required = ['MIDTRANS_SERVER_KEY', 'MIDTRANS_CLIENT_KEY', 'MIDTRANS_MERCHANT_ID'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing Midtrans environment variables: ${missing.join(', ')}`);
  }
};

// Create Snap instance for generating payment tokens
export const getSnapInstance = () => {
  validateMidtransEnv();
  
  const snap = new midtransClient.Snap({
    isProduction: process.env.MIDTRANS_ENVIRONMENT === 'production',
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
  });

  return snap;
};

// Create Core API instance for transaction verification
export const getCoreApiInstance = () => {
  validateMidtransEnv();
  
  const coreApi = new midtransClient.CoreApi({
    isProduction: process.env.MIDTRANS_ENVIRONMENT === 'production',
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
  });

  return coreApi;
};

// Generate unique transaction ID
export const generateTransactionId = () => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  return `TXN-${timestamp}-${random}`.toUpperCase();
};

// Format cart items for Midtrans
export const formatCartItemsForMidtrans = (cartItems) => {
  return cartItems.map(item => ({
    id: item.id,
    price: item.price,
    quantity: item.qty,
    name: item.name,
  }));
};
