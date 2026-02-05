import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Brain } from 'lucide-react';
import Logo from './Logo.jsx';

const AnimatedHero = () => {
  const [textIndex, setTextIndex] = useState(0);

  const animatedTexts = [
    { text: 'Smart Automation Systems', icon: <Zap className="w-6 h-6" /> },
    { text: 'Intelligent SEO Solutions', icon: <Brain className="w-6 h-6" /> },
    { text: 'AI-Powered Development', icon: <Sparkles className="w-6 h-6" /> },
    { text: 'Digital Transformation', icon: <ArrowRight className="w-6 h-6" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-bounce-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-2xl"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="relative flex w-2 h-2">
              <div className="absolute w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
              <div className="relative w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
              Next-Gen AI Solutions
            </span>
          </div>
        </motion.div>

        {/* Main Headline with Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-col items-center"
        >
          {/* Large Logo */}
          <div className="mb-6">
            <Logo size="hero" showText={false} animated={true} />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-white mb-4 leading-none tracking-tight text-center px-4">
            Cognix{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              AI
            </span>
          </h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="h-16 flex items-center justify-center mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={textIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="text-purple-400">
                {animatedTexts[textIndex].icon}
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-gray-200 text-center px-4">
                {animatedTexts[textIndex].text}
              </h2>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 px-4"
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-center">
            We are an AI-driven technology agency helping businesses increase visibility, 
            build scalable digital products, and automate operations using cutting-edge SEO strategies 
            and intelligent AI systems.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-bold rounded-full text-base sm:text-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:shadow-white/20"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white font-bold rounded-full text-base sm:text-lg border border-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/30"
            >
              <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
              Talk to Our AI Expert
            </Link>
          </motion.div>
        </motion.div>

        {/* Founder Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-base sm:text-lg md:text-xl text-gray-300 italic leading-relaxed mb-4 text-center">
              "At Cognix AI, we don't just build technology – we craft intelligent solutions that transform how businesses operate in the digital age. Our mission is to make AI accessible and impactful for every organization."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">R</span>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-white font-semibold text-sm sm:text-base">Ravikant Prajapati</div>
                <div className="text-gray-400 text-xs sm:text-sm">Co-Founder & Technical Lead</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-16 px-4"
        >
          <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-widest mb-4 sm:mb-6 text-center">
            Powering the next generation of digital scale
          </p>
          
          {/* Floating Stats */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-8 text-center max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-3 sm:p-4 min-w-[100px] sm:min-w-[120px]"
            >
              <div className="text-xl sm:text-2xl font-bold text-white">300%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Growth Rate</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-3 sm:p-4 min-w-[100px] sm:min-w-[120px]"
            >
              <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">AI Projects</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-4 min-w-[120px]"
            >
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">AI Support</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
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
    </div>
  );
};

export default AnimatedHero;