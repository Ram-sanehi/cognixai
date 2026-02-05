import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Users, Award } from 'lucide-react';
import axios from 'axios';
import AnimatedHero from '../components/AnimatedHero';
import DarkExpertise from '../components/DarkExpertise';
import DarkCaseStudies from '../components/DarkCaseStudies';
import DarkFooter from '../components/DarkFooter';

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials
    axios.get('/api/testimonials')
      .then(response => setTestimonials(response.data.slice(0, 3)))
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);

  const trustPoints = [
    { icon: <CheckCircle className="w-5 h-5" />, text: 'AI-First Engineering' },
    { icon: <Award className="w-5 h-5" />, text: 'SEO & Growth Expertise' },
    { icon: <Users className="w-5 h-5" />, text: 'Transparent Delivery' }
  ];

  const whyChooseUs = [
    'AI-first and engineering-driven approach',
    'Data-backed SEO strategies',
    'Custom-built, scalable solutions',
    'Clear communication and accountability',
    'Focus on long-term business value'
  ];

  const stats = [
    { number: '300%', label: 'Average Growth Rate' },
    { number: '50+', label: 'AI Projects Delivered' },
    { number: '99.9%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'AI-Powered Support' }
  ];

  return (
    <div className="bg-gray-900">
      {/* Animated Hero Section */}
      <AnimatedHero />

      {/* Trust Statement */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Trusted by startups, growing businesses, and technology-led organizations
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              for delivering reliable, scalable, and future-ready digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-green-400">
                  {point.icon}
                </div>
                <span className="text-white font-medium">{point.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dark Expertise Section */}
      <DarkExpertise />

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Delivering Results That Matter
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cognix AI */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Why Businesses Choose{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Cognix AI
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 h-full text-center">
                  <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {reason}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Case Studies */}
      <DarkCaseStudies />

      {/* Client Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 h-full">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Message */}
                    <p className="text-gray-300 italic mb-6 leading-relaxed">
                      "{testimonial.message}"
                    </p>

                    {/* Author */}
                    <div className="border-t border-gray-800 pt-4">
                      <div className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.position} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/50 to-blue-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Build Intelligent Solutions Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Partner with Cognix AI to unlock growth through technology and artificial intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 font-bold rounded-full text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"
        />
      </section>

      {/* Dark Footer */}
      <DarkFooter />
    </div>
  );
};

export default Home;