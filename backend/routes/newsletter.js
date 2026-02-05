const express = require('express');
const router = express.Router();
const { 
  subscribeNewsletter, 
  getNewsletterSubscriptions, 
  unsubscribeNewsletter 
} = require('../controllers/newsletterController');

// Subscribe to newsletter
router.post('/subscribe', subscribeNewsletter);

// Get all newsletter subscriptions (admin)
router.get('/', getNewsletterSubscriptions);

// Unsubscribe from newsletter
router.post('/unsubscribe', unsubscribeNewsletter);

module.exports = router;