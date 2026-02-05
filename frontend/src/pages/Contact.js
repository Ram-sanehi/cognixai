import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName.trim() || !formData.email.trim()) {
      alert('❌ Please fill in all required fields (Name and Email)');
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Submitting form data:', {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.company,
        serviceInterested: formData.service,
        message: formData.message
      });

      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          companyName: formData.company.trim(),
          serviceInterested: formData.service || 'General Inquiry',
          message: formData.message.trim() || 'No specific message provided'
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('Success response:', data);

      if (data.success) {
        alert(`🎉 Message sent successfully! 
        
✅ Your message has been saved to our database
📧 We will get back to you within 24 hours
🆔 Reference ID: ${data.data.id}
📅 Submitted: ${new Date(data.data.createdAt).toLocaleString()}

Thank you for contacting Cognix AI! ✨`);
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Unknown error occurred');
      }

    } catch (error) {
      console.error('Contact form submission error:', error);
      
      if (error.message.includes('Failed to fetch')) {
        alert('❌ Cannot connect to server. Please check if the backend is running on port 5000.');
      } else if (error.message.includes('NetworkError')) {
        alert('❌ Network error. Please check your internet connection.');
      } else {
        alert(`❌ Error sending message: ${error.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    '🔍 SEO & AEO Optimization',
    '💻 Web Development',
    '📱 App Development',
    '🤖 AI Solutions',
    '📈 Digital Marketing',
    '💡 Consultation'
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: '📧 Email',
      details: 'cognixpvtltb@gmail.com',
      subtitle: 'Send us an email anytime! ⚡',
      gradient: 'from-blue-500 to-cyan-500',
      emoji: '📧'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: '📱 Phone',
      details: '+91 7991955775',
      subtitle: 'Mon-Fri from 9am to 6pm 🕘',
      gradient: 'from-green-500 to-emerald-500',
      emoji: '📱'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '📍 Office',
      details: 'Noida, Uttar Pradesh',
      subtitle: '3rd Floor, Tech Park - 201301 🏢',
      gradient: 'from-purple-500 to-pink-500',
      emoji: '📍'
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', href: '#' },
    { icon: <Github className="w-5 h-5" />, name: 'GitHub', href: '#' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', href: '#' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-indigo-900/50 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-bounce-slow"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 px-4 text-center"
          >
            Get in{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
            <span className="ml-2 sm:ml-3 text-2xl sm:text-4xl md:text-6xl">🚀</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 text-center"
          >
            We're here to help you transform your business with AI-powered solutions. 
            Let's discuss your project and bring your vision to life! ✨💡
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4"
          >
            {[
              { text: '🎯 Strategy & Roadmap', emoji: '🎯' },
              { text: '🤖 AI Systems', emoji: '🤖' },
              { text: '📈 SEO/AEO Growth', emoji: '📈' },
              { text: '💻 Web & App Build', emoji: '💻' }
            ].map((item, index) => (
              <motion.span
                key={item.text}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all duration-300"
              >
                {item.text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-lg sm:text-2xl animate-bounce">✨</div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-base sm:text-xl animate-pulse">💫</div>
                <div className="absolute top-1/2 right-1 sm:right-2 text-sm sm:text-lg animate-ping">🌟</div>
                <div className="absolute bottom-1/2 left-1 sm:left-2 text-xs sm:text-sm animate-bounce">💎</div>
                
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Send us a Message</h2>
                  <span className="text-xl sm:text-2xl lg:text-3xl animate-bounce">📝</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">Fill out the form below and our team will get back to you within 24 hours! 🚀💌</p>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="absolute top-3 left-3 text-lg opacity-70 group-focus-within:opacity-100 transition-opacity duration-300">👤</div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full Name *"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-gray-800/70 transition-all duration-300"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="absolute top-3 left-3 text-lg opacity-70 group-focus-within:opacity-100 transition-opacity duration-300">📧</div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email *"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-gray-800/70 transition-all duration-300"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="absolute top-3 left-3 text-lg opacity-70 group-focus-within:opacity-100 transition-opacity duration-300">📱</div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone"
                        className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-gray-800/70 transition-all duration-300"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="absolute top-3 left-3 text-lg opacity-70 group-focus-within:opacity-100 transition-opacity duration-300">🏢</div>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                        className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-gray-800/70 transition-all duration-300"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <div className="absolute top-3 left-3 text-lg opacity-70 group-focus-within:opacity-100 transition-opacity duration-300">🎯</div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:border-purple-500/50 focus:bg-gray-800/70 transition-all duration-300"
                    >
                      <option value="">Service Interested In</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <div className="absolute top-3 left-3 text-lg opacity-70 group-focus-within:opacity-100 transition-opacity duration-300">💭</div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-gray-800/70 transition-all duration-300 resize-none"
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden group"
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Button content */}
                    <div className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending your message...</span>
                          <span className="text-lg animate-pulse">📤</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                          <span className="text-lg animate-bounce">🚀</span>
                        </>
                      )}
                    </div>
                    
                    {/* Sparkle effects */}
                    <div className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full animate-ping opacity-75"></div>
                    <div className="absolute bottom-1 left-2 w-1 h-1 bg-white rounded-full animate-ping opacity-50" style={{animationDelay: '0.5s'}}></div>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-6 shadow-xl hover:border-gray-700/50 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating emoji */}
                  <div className="absolute top-2 right-2 text-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    {info.emoji}
                  </div>
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 bg-gradient-to-r ${info.gradient} rounded-xl shadow-lg`}
                    >
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-gray-300 font-medium mb-1 group-hover:text-white transition-colors duration-300">
                        {info.details}
                      </p>
                      <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-6 shadow-xl relative overflow-hidden"
              >
                {/* Decorative emoji */}
                <div className="absolute top-2 right-2 text-lg animate-pulse">🌟</div>
                
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
                  <span className="text-xl">🤝</span>
                </div>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gray-800/50 hover:bg-purple-600/20 border border-gray-700/50 hover:border-purple-500/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300 relative group"
                      aria-label={social.name}
                    >
                      {social.icon}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                    </motion.a>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">Follow us for updates and insights! 📱✨</p>
              </motion.div>


            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;