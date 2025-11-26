// Razorpay Configuration
// ⚠️ SECURITY: Only include PUBLIC key (KEY_ID) in frontend
// Secret key (KEY_SECRET) should NEVER be in frontend code

export const RAZORPAY_CONFIG = {
  // ✅ PUBLIC Key - Safe to expose in frontend
  KEY_ID: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_XXXXXXXXXXXX',
  
  // ❌ DO NOT include KEY_SECRET here - it belongs in backend only!
  // Backend handles: razorpay.key.secret=${RAZORPAY_KEY_SECRET}
  
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
