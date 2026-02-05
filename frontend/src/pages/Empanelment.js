import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Handshake, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  TrendingUp, 
  Shield,
  Target,
  Star,
  Briefcase,
  Network,
  Heart,
  Lightbulb,
  Rocket,
  Code,
  Brain,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Empanelment = () => {
  const industries = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Technology & SaaS',
      description: 'Empowering tech companies with AI-driven solutions for scalable growth and innovation.',
      projects: '25+ Projects',
      gradient: 'from-blue-500 to-cyan-500',
      services: ['AI Integration', 'Platform Development', 'API Solutions', 'Cloud Migration']
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Finance & FinTech',
      description: 'Secure, compliant financial solutions with advanced AI capabilities and robust security.',
      projects: '18+ Projects',
      gradient: 'from-green-500 to-emerald-500',
      services: ['Secure Platforms', 'Compliance Solutions', 'Risk Management', 'Payment Systems']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'E-Commerce & Retail',
      description: 'Transforming retail experiences with AI-powered personalization and optimization.',
      projects: '22+ Projects',
      gradient: 'from-purple-500 to-pink-500',
      services: ['SEO Optimization', 'Conversion Enhancement', 'Inventory AI', 'Customer Analytics']
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Education & EdTech',
      description: 'Innovative educational platforms that enhance learning through intelligent technology.',
      projects: '12+ Projects',
      gradient: 'from-orange-500 to-red-500',
      services: ['Learning Platforms', 'AI Tutoring', 'Assessment Tools', 'Content Management']
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Healthcare & MedTech',
      description: 'HIPAA-compliant healthcare solutions that improve patient outcomes and operational efficiency.',
      projects: '15+ Projects',
      gradient: 'from-indigo-500 to-purple-500',
      services: ['Patient Management', 'Telemedicine', 'Data Analytics', 'Compliance Systems']
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Manufacturing & Industry',
      description: 'Smart manufacturing solutions with IoT integration and predictive analytics.',
      projects: '8+ Projects',
      gradient: 'from-cyan-500 to-blue-500',
      services: ['Process Automation', 'Quality Control', 'Supply Chain', 'Predictive Maintenance']
    }
  ];

  const partnershipBenefits = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Accelerated Growth',
      description: 'Fast-track your digital transformation with our proven methodologies and expert team.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance standards across all our solutions and processes.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Expertise',
      description: 'Access to cutting-edge AI technologies and deep learning capabilities for competitive advantage.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Scalable Solutions',
      description: 'Future-proof architectures that grow with your business and adapt to changing needs.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Dedicated Support',
      description: '24/7 technical support and dedicated account management for seamless operations.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Measurable ROI',
      description: 'Data-driven solutions with clear metrics and measurable business impact.',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const empanelmentProcess = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Comprehensive assessment of your business needs, goals, and technical requirements.',
      icon: <Handshake className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Partnership Proposal',
      description: 'Customized partnership proposal with detailed scope, timeline, and investment structure.',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Technical Evaluation',
      description: 'In-depth technical review and proof-of-concept development to validate approach.',
      icon: <Code className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Agreement & Onboarding',
      description: 'Formal partnership agreement and comprehensive onboarding process initiation.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: '05',
      title: 'Project Execution',
      description: 'Full-scale project implementation with regular milestones and progress reviews.',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: '100+', label: 'Partner Organizations', icon: <Building2 className="w-6 h-6" /> },
    { number: '95%', label: 'Client Retention Rate', icon: <Heart className="w-6 h-6" /> },
    { number: '300%', label: 'Average ROI Increase', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Coverage', icon: <Shield className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      quote: "Cognix AI's empanelment program transformed our entire digital infrastructure. Their AI-first approach delivered results beyond our expectations.",
      author: "Sarah Johnson",
      position: "CTO, TechFlow Solutions",
      company: "Fortune 500 Technology Company",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      quote: "The partnership with Cognix AI has been instrumental in our digital transformation journey. Their expertise in AI and automation is unmatched.",
      author: "Michael Chen",
      position: "Head of Innovation, FinSecure Corp",
      company: "Leading Financial Services",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      quote: "Working with Cognix AI through their empanelment program gave us access to world-class AI solutions that revolutionized our operations.",
      author: "Emily Rodriguez",
      position: "VP of Technology, HealthTech Plus",
      company: "Healthcare Technology Leader",
      gradient: "from-purple-500 to-pink-500"
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Strategic{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Empanelment
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Partner with Cognix AI as your trusted technology partner across multiple industries. 
            We're empanelled with leading organizations to deliver AI-powered solutions that drive sustainable growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['Trusted Partner', 'Multi-Industry', 'Proven Results', 'Global Reach'].map((item, index) => (
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

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Empanelled across diverse sectors with deep industry expertise and proven track records
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-3xl p-8 shadow-2xl hover:border-gray-700/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${industry.gradient} rounded-2xl shadow-lg`}>
                    <div className="text-white">
                      {industry.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                    <p className="text-purple-400 font-semibold">{industry.projects}</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {industry.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Services</h4>
                  {industry.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Why leading organizations choose Cognix AI as their strategic technology partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-6 shadow-xl hover:border-gray-700/50 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Empanelment Process */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Empanelment Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our streamlined process ensures smooth onboarding and successful partnership outcomes
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {empanelmentProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  {/* Step Circle */}
                  <div className="relative z-10 w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-sm font-bold text-purple-400 mb-2">{step.step}</div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">What Our Partners Say</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from organizations that have transformed their business through our empanelment program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-3xl p-8 shadow-2xl hover:border-gray-700/50 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">{testimonial.author}</div>
                    <div className="text-purple-400 font-semibold text-sm">{testimonial.position}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 text-2xl animate-pulse">🤝</div>
                <div className="absolute bottom-4 left-4 text-xl animate-bounce">💼</div>
                
                <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic">
                  "Our empanelment program is built on trust, excellence, and mutual growth. We believe in creating long-term partnerships that drive innovation and deliver exceptional value to all stakeholders."
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">R</span>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-xl">Ravikant Prajapati</div>
                    <div className="text-purple-400 font-medium">Co-Founder & Technical Lead</div>
                    <div className="text-gray-400 text-sm">Cognix AI</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Join leading organizations that trust Cognix AI for their digital transformation journey. 
              Let's explore how our empanelment program can accelerate your growth.
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
                <span>Start Partnership Discussion</span>
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
                <span>View Our Capabilities</span>
                <Target className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Empanelment;