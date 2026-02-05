import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import Logo from './Logo.jsx';

const DarkFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          source: 'footer' 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setEmail('');
      } else {
        setMessage(data.message || 'Error subscribing to newsletter');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setMessage('❌ Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const quickLinks = [
    { text: 'About Us', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact Us', path: '/contact' },
    { text: 'Blog', path: '/blog' }
  ];

  const leadership = [
    { name: 'Ravikant Prajapati', role: 'Co-Founder & Technical Lead' },
    { name: 'Ram Vishwakarma', role: 'Co-Founder & AI Lead' }
  ];

  const services = [
    'SEO & AEO Optimization',
    'Web Development',
    'App Development',
    'AI Solutions',
    'Digital Marketing'
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-6">
                <div className="mb-4">
                  <Logo size="large" showText={true} animated={true} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  Trusted by startups and technology-led organizations for delivering 
                  future-ready digital solutions powered by artificial intelligence.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">cognixpvtltb@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 7991955775</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Noida, Uttar Pradesh</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Leadership */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">Leadership</h4>
              <div className="space-y-4">
                {leadership.map((leader, index) => (
                  <div key={index} className="group">
                    <div className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors duration-300">
                      {leader.name}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      {leader.role}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Services */}
              <div className="mt-6">
                <h5 className="text-md font-medium text-white mb-3">Our Services</h5>
                <div className="space-y-2">
                  {services.slice(0, 3).map((service, index) => (
                    <div
                      key={index}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-xs cursor-pointer"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">Stay Connected</h4>
              
              {/* Newsletter */}
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest updates on AI trends and our services.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors duration-300 disabled:opacity-50"
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-r-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <Mail className="w-4 h-4" />
                    )}
                  </motion.button>
                </form>
                {message && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-xs mt-2 ${message.includes('❌') ? 'text-red-400' : 'text-green-400'}`}
                  >
                    {message}
                  </motion.p>
                )}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-400 text-sm mb-4">Follow us on social media</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-900/50 hover:bg-purple-600/20 border border-gray-700 hover:border-purple-500/50 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © 2026 Cognix AI. All Rights Reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-purple-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-purple-400 transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link to="/cookies" className="text-gray-500 hover:text-purple-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  );
};

export default DarkFooter;