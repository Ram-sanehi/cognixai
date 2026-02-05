const Newsletter = require('../models/Newsletter');
const nodemailer = require('nodemailer');

// Email configuration
const createTransporter = () => {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }
  return null;
};

const subscribeNewsletter = async (req, res) => {
  try {
    const { email, source = 'footer' } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if email already exists
    const existingSubscription = await Newsletter.findOne({ email });
    if (existingSubscription) {
      if (existingSubscription.isActive) {
        return res.status(400).json({ message: 'Email is already subscribed to our newsletter' });
      } else {
        // Reactivate subscription
        existingSubscription.isActive = true;
        existingSubscription.subscribedAt = new Date();
        existingSubscription.source = source;
        await existingSubscription.save();
        
        return res.status(200).json({ 
          message: 'Welcome back! Your subscription has been reactivated.',
          data: existingSubscription 
        });
      }
    }

    // Create new subscription
    const newsletter = await Newsletter.create({
      email,
      source
    });

    // Send welcome email
    const transporter = createTransporter();
    if (transporter) {
      try {
        const welcomeMailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: '🎉 Welcome to Cognix AI Newsletter!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; border-radius: 10px;">
              <div style="background: white; padding: 30px; border-radius: 10px; text-align: center;">
                <h1 style="color: #333; margin-bottom: 20px;">🚀 Welcome to Cognix AI!</h1>
                <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                  Thank you for subscribing to our newsletter! You're now part of our AI-powered community.
                </p>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #333; margin-bottom: 15px;">🎯 What to expect:</h3>
                  <ul style="text-align: left; color: #666; line-height: 1.8;">
                    <li>🤖 Latest AI trends and insights</li>
                    <li>💡 Expert tips on SEO & digital growth</li>
                    <li>🚀 Exclusive updates on our services</li>
                    <li>📊 Case studies and success stories</li>
                    <li>🎁 Special offers and early access</li>
                  </ul>
                </div>
                <div style="margin: 30px 0;">
                  <a href="http://localhost:3000" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;">
                    🌐 Visit Our Website
                  </a>
                </div>
                <p style="color: #999; font-size: 12px; margin-top: 30px;">
                  You can unsubscribe at any time by replying to this email with "UNSUBSCRIBE"
                </p>
              </div>
            </div>
          `
        };

        await transporter.sendMail(welcomeMailOptions);
        console.log('Welcome email sent successfully to:', email);
      } catch (emailError) {
        console.error('Error sending welcome email:', emailError);
        // Don't fail the request if email fails
      }
    }

    return res.status(201).json({
      message: '🎉 Thank you for subscribing! Welcome to Cognix AI newsletter. ✨',
      data: newsletter
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email is already subscribed' });
    }
    
    return res.status(500).json({ 
      message: 'Error subscribing to newsletter', 
      error: error.message 
    });
  }
};

const getNewsletterSubscriptions = async (req, res) => {
  try {
    const { page = 1, limit = 50, source } = req.query;
    
    const query = { isActive: true };
    if (source) {
      query.source = source;
    }

    const subscriptions = await Newsletter.find(query)
      .sort({ subscribedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Newsletter.countDocuments(query);

    return res.json({
      subscriptions,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    return res.status(500).json({ 
      message: 'Error fetching newsletter subscriptions', 
      error: error.message 
    });
  }
};

const unsubscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const subscription = await Newsletter.findOneAndUpdate(
      { email },
      { isActive: false },
      { new: true }
    );

    if (!subscription) {
      return res.status(404).json({ message: 'Email not found in our newsletter list' });
    }

    return res.json({ message: 'Successfully unsubscribed from newsletter' });
  } catch (error) {
    return res.status(500).json({ 
      message: 'Error unsubscribing from newsletter', 
      error: error.message 
    });
  }
};

module.exports = {
  subscribeNewsletter,
  getNewsletterSubscriptions,
  unsubscribeNewsletter
};