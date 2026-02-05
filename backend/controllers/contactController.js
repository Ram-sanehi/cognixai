const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

// Email configuration
const createTransporter = () => {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }
  return null;
};

const createContact = async (req, res) => {
  try {
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('Received contact form data:', req.body);
    
    // Check database connection first
    if (mongoose.connection.readyState !== 1) {
      console.error('❌ Database not connected. Ready state:', mongoose.connection.readyState);
      return res.status(503).json({
        message: 'Database connection unavailable. Please try again later.',
        success: false,
        error: 'Database not connected'
      });
    }
    
    const { fullName, email, phone, companyName, serviceInterested, message } = req.body;

    // Validate required fields
    if (!fullName || !email) {
      console.log('❌ Validation failed - missing required fields');
      return res.status(400).json({ 
        message: 'Please fill in all required fields (Name and Email)',
        success: false 
      });
    }

    console.log('✅ Validation passed, creating contact record...');
    
    // Create contact data object
    const contactData = {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : '',
      companyName: companyName ? companyName.trim() : '',
      serviceInterested: serviceInterested || 'General Inquiry',
      message: message ? message.trim() : 'No specific message provided'
    };

    console.log('Contact data to save:', contactData);
    
    // Save to MongoDB Atlas with timeout handling
    console.log('🔄 Attempting to save to MongoDB Atlas...');
    
    const contact = await Promise.race([
      Contact.create(contactData),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Database operation timeout after 8 seconds')), 8000)
      )
    ]);
    
    console.log('✅ Contact record saved to MongoDB Atlas successfully!');
    console.log('🆔 Saved contact ID:', contact._id);
    console.log('📊 Database:', mongoose.connection.name);
    console.log('🌐 Atlas Cluster:', mongoose.connection.host);
    console.log('📅 Created at:', contact.createdAt);

    // Send email notification (optional - won't fail if email not configured)
    const transporter = createTransporter();
    if (transporter) {
      try {
        console.log('📧 Attempting to send email notifications...');
        
        // Email to admin
        const adminMailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `New Contact Form Submission - ${fullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Company:</strong> ${companyName || 'Not provided'}</p>
                <p><strong>Service Interested:</strong> ${serviceInterested || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #8b5cf6;">${message}</p>
              </div>
              <p style="color: #64748b; font-size: 14px;">This email was sent from the Cognix AI contact form.</p>
            </div>
          `
        };

        await transporter.sendMail(adminMailOptions);
        console.log('✅ Admin email sent successfully');
        
        // Auto-reply to user
        const userMailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Thank you for contacting Cognix AI',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #8b5cf6;">Thank you for reaching out!</h2>
              <p>Dear ${fullName},</p>
              <p>Thank you for contacting Cognix AI. We have received your message and our team will get back to you within 24 hours.</p>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #374151; margin-top: 0;">Your Message:</h3>
                <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #8b5cf6;">${message}</p>
              </div>
              <p>In the meantime, feel free to explore our services and solutions on our website.</p>
              <div style="margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #8b5cf6, #3b82f6); border-radius: 8px; text-align: center;">
                <h3 style="color: white; margin: 0 0 10px 0;">Contact Information</h3>
                <p style="color: white; margin: 5px 0;">📧 cognixpvtltb@gmail.com</p>
                <p style="color: white; margin: 5px 0;">📱 +91 7991955775</p>
                <p style="color: white; margin: 5px 0;">📍 Noida, Uttar Pradesh</p>
              </div>
              <p>Best regards,<br><strong>Ravikant Prajapati</strong><br><em>Co-Founder & Technical Lead</em><br><strong>Cognix AI Team</strong></p>
            </div>
          `
        };

        await transporter.sendMail(userMailOptions);
        console.log('✅ User confirmation email sent successfully');
        
      } catch (emailError) {
        console.error('❌ Error sending email:', emailError);
        // Don't fail the request if email fails - just log the error
      }
    } else {
      console.log('📧 Email not configured - skipping email notifications');
    }

    // Return success response
    console.log('✅ Contact form submission completed successfully');
    return res.status(201).json({
      message: 'Thank you for contacting us. We will get back to you within 24 hours.',
      data: {
        id: contact._id,
        fullName: contact.fullName,
        email: contact.email,
        createdAt: contact.createdAt
      },
      success: true
    });

  } catch (error) {
    console.error('❌ Contact form submission error:', error);
    
    let errorMessage = 'Error submitting contact form. Please try again.';
    let statusCode = 500;
    
    if (error.message.includes('timeout') || error.message.includes('buffering timed out')) {
      errorMessage = 'Database connection timeout. Please check your internet connection and try again.';
      statusCode = 503;
    } else if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
      errorMessage = 'Cannot connect to database. Please try again later.';
      statusCode = 503;
    }
    
    return res.status(statusCode).json({ 
      message: errorMessage, 
      error: error.message,
      success: false 
    });
  }
};

const getContacts = async (req, res) => {
  try {
    console.log('📋 Fetching all contacts from database...');
    const contacts = await Contact.find().sort({ createdAt: -1 });
    console.log(`✅ Found ${contacts.length} contacts in database`);
    
    return res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('❌ Error fetching contacts:', error);
    return res.status(500).json({ 
      message: 'Error fetching contacts', 
      error: error.message,
      success: false 
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    return res.json({ message: 'Contact deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting contact', error: error.message });
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact
};
