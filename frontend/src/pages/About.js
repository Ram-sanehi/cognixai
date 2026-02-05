import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Award, Zap, Brain, TrendingUp, Star } from 'lucide-react';
import PremiumLogo from '../components/PremiumLogo.jsx';

const About = () => {
  const founders = [
    {
      name: 'Mr. Ravikant Prajapati',
      role: 'Co-Founder & Technical Lead',
      education: 'B.Tech – Computer Science Engineering',
      description: 'Ravikant leads the technical architecture, development, and infrastructure at Cognix AI, ensuring scalable and performance-driven solutions.',
      expertise: ['System Architecture', 'Cloud Infrastructure', 'Performance Optimization', 'Team Leadership'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Mr. Ram Vishwakarma',
      role: 'Co-Founder & AI Lead',
      education: 'B.Tech – Artificial Intelligence & Machine Learning',
      description: 'Ram drives AI strategy and development, specializing in NLP, computer vision, generative AI, and automation systems.',
      expertise: ['Machine Learning', 'NLP & Computer Vision', 'Generative AI', 'AI Strategy'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-First Innovation',
      description: 'We leverage cutting-edge artificial intelligence to solve complex business challenges and drive innovation.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Centric Approach',
      description: 'Every solution is tailored to meet specific client needs, ensuring maximum value and satisfaction.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Rapid Execution',
      description: 'We deliver high-quality solutions quickly without compromising on excellence or attention to detail.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence & Quality',
      description: 'We maintain the highest standards in everything we do, from code quality to client communication.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const achievements = [
    { number: '50+', label: 'AI Projects Delivered', icon: <Brain className="w-6 h-6" /> },
    { number: '300%', label: 'Average Growth Rate', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '99.9%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'AI-Powered Support', icon: <Zap className="w-6 h-6" /> }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Foundation',
      description: 'Cognix AI was founded with a vision to democratize AI technology for businesses of all sizes.'
    },
    {
      year: '2024',
      title: 'Growth & Expansion',
      description: 'Expanded our team and service offerings, delivering 50+ successful AI projects across various industries.'
    },
    {
      year: '2025',
      title: 'Innovation Leadership',
      description: 'Established as a leading AI consultancy, pioneering new approaches in SEO automation and intelligent systems.'
    },
    {
      year: '2026',
      title: 'Global Vision',
      description: 'Scaling globally while maintaining our commitment to personalized, high-quality AI solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-indigo-900/50 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-bounce-slow"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <PremiumLogo variant="default" size="large" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            About{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Cognix AI
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto"
          >
            AI-first technology partner for SEO, product engineering, and intelligent automation. 
            We transform businesses through cutting-edge artificial intelligence solutions.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To help businesses grow and innovate by delivering intelligent, reliable, and data-driven digital solutions. 
                We believe in democratizing AI technology and making it accessible to organizations of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become a globally trusted AI-first technology partner for startups, enterprises, and innovation-driven organizations. 
                We envision a future where intelligent automation empowers every business to reach its full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do at Cognix AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-3xl p-8 shadow-2xl hover:border-gray-700/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 bg-gradient-to-r ${value.gradient} rounded-2xl shadow-lg`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-400">Numbers that speak for our commitment to excellence</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
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
                      {achievement.icon}
                    </div>
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-400 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Meet Our Founders</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The visionary leaders driving innovation at Cognix AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-3xl p-8 shadow-2xl hover:border-gray-700/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className={`w-24 h-24 bg-gradient-to-r ${founder.gradient} rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl`}>
                    <span className="text-3xl font-bold text-white">{founder.name.split(' ')[1][0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                  <p className="text-purple-400 font-semibold mb-2">{founder.role}</p>
                  <p className="text-gray-400 text-sm">{founder.education}</p>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">{founder.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-400">The milestones that shaped Cognix AI</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-6 shadow-xl">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-gray-900 shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;