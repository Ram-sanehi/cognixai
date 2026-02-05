import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Award, 
  TrendingUp, 
  Building2,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const isAutoPlaying = true;

  const testimonials = [
    {
      id: 1,
      name: 'Amit Sharma',
      position: 'Founder & CEO',
      company: 'TechNova Solutions',
      rating: 5,
      message: 'Cognix AI transformed our digital presence completely. Their AI-first approach to SEO and development delivered results beyond our expectations. Our organic traffic increased by 300% in just 6 months.',
      image: 'AS',
      industry: 'Technology',
      projectType: 'SEO & Web Development',
      results: ['300% Traffic Growth', '85% Conversion Increase', '60% Cost Reduction'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Neha Verma',
      position: 'Product Manager',
      company: 'SaaSFlow',
      rating: 5,
      message: 'The AI chatbot developed by Cognix AI revolutionized our customer support. It handles 80% of queries automatically while maintaining a personal touch. Our customer satisfaction scores have never been higher.',
      image: 'NV',
      industry: 'SaaS',
      projectType: 'AI Chatbot Development',
      results: ['80% Query Automation', '95% Satisfaction Rate', '50% Response Time Reduction'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Rahul Mehta',
      position: 'Director',
      company: 'FinEdge Corp',
      rating: 5,
      message: 'Working with Cognix AI was a game-changer for our fintech platform. Their expertise in both AI and security ensured we built a robust, scalable solution that our users trust.',
      image: 'RM',
      industry: 'Finance',
      projectType: 'Enterprise Platform',
      results: ['99.9% Uptime', 'Bank-Grade Security', '10x Scalability'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      name: 'Priya Singh',
      position: 'Marketing Head',
      company: 'EcoTech Innovations',
      rating: 5,
      message: 'Cognix AI\'s comprehensive digital marketing strategy helped us reach new heights. Their data-driven approach and AI-powered insights transformed our online presence and brand visibility.',
      image: 'PS',
      industry: 'Clean Tech',
      projectType: 'Digital Marketing & SEO',
      results: ['400% Brand Visibility', '250% Lead Generation', '180% ROI Improvement'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'Vikash Kumar',
      position: 'CTO',
      company: 'DataFlow Systems',
      rating: 5,
      message: 'The AI automation solutions provided by Cognix AI streamlined our entire workflow. What used to take hours now happens in minutes, allowing our team to focus on innovation rather than repetitive tasks.',
      image: 'VK',
      industry: 'Data Analytics',
      projectType: 'AI Automation',
      results: ['90% Time Savings', '99% Accuracy Rate', '70% Cost Efficiency'],
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const stats = [
    { number: '50+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Satisfaction Rate', icon: <Heart className="w-6 h-6" /> },
    { number: '300%', label: 'Average Growth', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <MessageCircle className="w-6 h-6" /> }
  ];

  const industries = [
    { name: 'Technology', count: 15, icon: '💻' },
    { name: 'Finance', count: 12, icon: '💰' },
    { name: 'Healthcare', count: 8, icon: '🏥' },
    { name: 'E-commerce', count: 10, icon: '🛒' },
    { name: 'Education', count: 6, icon: '🎓' },
    { name: 'Manufacturing', count: 4, icon: '🏭' }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

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
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Client{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Discover what our clients say about their transformative journey with Cognix AI. 
            Real stories, real results, real impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['Trusted Partners', 'Proven Results', 'Global Reach', '24/7 Support'].map((item, index) => (
              <motion.span
                key={item}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-gray-900/30 backdrop-blur-md border border-gray-800/30 rounded-2xl p-6 shadow-xl"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg">
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Featured Success Story</h2>
            <p className="text-xl text-gray-400">Spotlight on our most impactful client partnerships</p>
          </motion.div>

          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-3xl p-8 md:p-12 shadow-2xl mx-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <Quote className="w-12 h-12 text-purple-400" />
                      <div className="flex gap-1">
                        {[...Array(currentData.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                      "{currentData.message}"
                    </p>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${currentData.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold text-lg">{currentData.image}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{currentData.name}</h3>
                        <p className="text-purple-400 font-semibold">{currentData.position}</p>
                        <p className="text-gray-400">{currentData.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300">
                        {currentData.industry}
                      </span>
                      <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                        {currentData.projectType}
                      </span>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
                    <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <Award className="w-6 h-6 text-yellow-400" />
                      Key Results
                    </h4>
                    <div className="space-y-4">
                      {currentData.results.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 font-medium">{result}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-purple-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-400">Trusted across diverse sectors and business verticals</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-6 text-center shadow-xl hover:border-gray-700/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-purple-400 font-semibold">{industry.count} Projects</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-indigo-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Let's create your success story together. Start your transformation journey with Cognix AI today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white font-bold rounded-2xl border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
              >
                <span>View Our Services</span>
                <Building2 className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;