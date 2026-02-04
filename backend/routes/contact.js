const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// POST contact form
router.post('/', async (req, res) => {
  try {
    const { fullName, email, phone, companyName, serviceInterested, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    const contact = new Contact({
      fullName,
      email,
      phone,
      companyName,
      serviceInterested,
      message
    });

    await contact.save();
    res.status(201).json({ message: 'Thank you for contacting us. We will get back to you soon.' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact form', error: error.message });
  }
});

// GET all contacts (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts', error: error.message });
  }
});

module.exports = router;
