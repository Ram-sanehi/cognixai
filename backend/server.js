const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting - disabled for development
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
//   standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//   legacyHeaders: false, // Disable the `X-RateLimit-*` headers
//   trustProxy: false // Disable trust proxy to avoid X-Forwarded-For issues
// });
// app.use('/api/', limiter);

// MongoDB Connection with enhanced error handling for Atlas
const connectDB = async () => {
  try {
    console.log('🔄 Connecting to MongoDB Atlas...');
    console.log('Connection string:', process.env.MONGODB_URI ? 'Configured' : 'Not configured');
    
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cognixai', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000,
      maxPoolSize: 10,
      minPoolSize: 2,
      maxIdleTimeMS: 30000,
      retryWrites: true,
      w: 'majority'
    });
    
    console.log('✅ MongoDB Atlas connected successfully!');
    console.log(`📊 Database: ${conn.connection.name}`);
    console.log(`🌐 Host: ${conn.connection.host}`);
    console.log(`📡 Ready State: ${conn.connection.readyState}`);
    console.log(`🔗 Connection Type: ${process.env.MONGODB_URI?.includes('mongodb+srv') ? 'MongoDB Atlas (Cloud)' : 'Local MongoDB'}`);
    
  } catch (error) {
    console.error('❌ MongoDB Atlas connection error:', error.message);
    console.error('🔧 Please check your MongoDB Atlas connection string and credentials');
    console.error('💡 Make sure your IP is whitelisted in MongoDB Atlas');
    console.error('🌐 Verify your cluster is running and accessible');
    
    // Don't exit the process, just log the error
    console.log('⚠️  Server will continue running, but database operations will fail');
  }
};

// Connect to database
connectDB();

// Handle MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('🟢 MongoDB Atlas connection established');
});

mongoose.connection.on('error', (err) => {
  console.error('🔴 MongoDB Atlas connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('🟡 MongoDB Atlas disconnected');
  console.log('🔄 Attempting to reconnect...');
});

mongoose.connection.on('reconnected', () => {
  console.log('🟢 MongoDB Atlas reconnected');
});

// Routes
app.use('/api/contact', require('./routes/contact'));
app.use('/api/testimonials', require('./routes/testimonials'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/blogs', require('./routes/blog'));
app.use('/api/newsletter', require('./routes/newsletter'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running',
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    database: mongoose.connection.name || 'not connected'
  });
});

// Database status check
app.get('/api/db-status', async (req, res) => {
  try {
    const Contact = require('./models/Contact');
    const contactCount = await Contact.countDocuments();
    
    const dbInfo = {
      status: 'Database connected',
      type: process.env.MONGODB_URI?.includes('mongodb+srv') ? 'MongoDB Atlas (Cloud)' : 'Local MongoDB',
      database: mongoose.connection.name,
      host: mongoose.connection.host,
      readyState: mongoose.connection.readyState,
      contactsCount: contactCount,
      timestamp: new Date().toISOString()
    };
    
    console.log('📊 Database status check:', dbInfo);
    res.json(dbInfo);
    
  } catch (error) {
    console.error('❌ Database status error:', error);
    res.status(500).json({
      status: 'Database error',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Test MongoDB Atlas connection
app.get('/api/test-atlas', async (req, res) => {
  try {
    console.log('🧪 Testing MongoDB Atlas connection...');
    
    // Test database connection
    const isConnected = mongoose.connection.readyState === 1;
    
    if (!isConnected) {
      throw new Error('Database not connected');
    }
    
    // Test creating a test document
    const Contact = require('./models/Contact');
    const testContact = {
      fullName: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message to verify Atlas connection',
      phone: '+91 9999999999',
      companyName: 'Test Company',
      serviceInterested: 'Testing'
    };
    
    const savedContact = await Contact.create(testContact);
    console.log('✅ Test contact created:', savedContact._id);
    
    // Delete the test contact
    await Contact.findByIdAndDelete(savedContact._id);
    console.log('🗑️ Test contact deleted');
    
    res.json({
      success: true,
      message: 'MongoDB Atlas connection test successful!',
      database: mongoose.connection.name,
      host: mongoose.connection.host,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Atlas connection test failed:', error);
    res.status(500).json({
      success: false,
      message: 'MongoDB Atlas connection test failed',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Test contact endpoint
app.post('/api/contact/test', (req, res) => {
  console.log('Test endpoint hit with body:', req.body);
  res.json({ 
    message: 'Test endpoint working',
    receivedData: req.body,
    timestamp: new Date().toISOString()
  });
});

// Admin endpoint to view all contacts (for debugging)
app.get('/api/contacts', async (req, res) => {
  try {
    const Contact = require('./models/Contact');
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(10);
    
    res.json({
      success: true,
      count: contacts.length,
      data: contacts.map(contact => ({
        id: contact._id,
        fullName: contact.fullName,
        email: contact.email,
        phone: contact.phone,
        companyName: contact.companyName,
        serviceInterested: contact.serviceInterested,
        message: contact.message.substring(0, 100) + (contact.message.length > 100 ? '...' : ''),
        createdAt: contact.createdAt
      }))
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
