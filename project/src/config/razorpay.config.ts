// Razorpay Configuration
// Replace these with actual credentials from Razorpay Dashboard

export const RAZORPAY_CONFIG = {
  // Test Mode Keys (replace with your test keys)
  KEY_ID: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_XXXXXXXXXXXX',
  KEY_SECRET: import.meta.env.VITE_RAZORPAY_KEY_SECRET || 'your_secret_key_here',
  
  // Business Details
  MERCHANT_NAME: 'Kushi Hygiene Services',
  MERCHANT_LOGO: 'https://kushiservices.com/logo.png', // Update with actual logo URL
  
  // Theme Colors
  THEME_COLOR: '#1e3a8a', // navy-700
  
  // Other Settings
  CURRENCY: 'INR',
  CONTACT_EMAIL: 'support@kushiservices.com',
  CONTACT_PHONE: '+919876543210', // Update with actual number
  
  // Enable/Disable Payment Methods
  PAYMENT_METHODS: {
    card: true,
    netbanking: true,
    wallet: true,
    upi: true,
    paylater: false,
    cardless_emi: false,
  },
};

// Razorpay Script URL
export const RAZORPAY_SCRIPT_URL = 'https://checkout.razorpay.com/v1/checkout.js';
