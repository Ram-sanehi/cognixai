import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Code, 
  Smartphone, 
  Brain, 
  Search, 
  Eye, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Database,
  Shield,
  Rocket,
  X
} from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };
  const mainServices = [
    {
      title: '🔍 SEO, AEO & GEO Optimization',
      description: 'Dominate traditional search engines and optimize for AI-powered answer engines with our comprehensive SEO strategies. Increase organic traffic by 300%+ and establish authority in your industry. 📈',
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500',
      emoji: '🔍',
      features: [
        '🔧 Technical SEO audits and optimization (Core Web Vitals, Site Speed)',
        '📄 On-page and off-page SEO (Content optimization, Link building)',
        '📍 Local SEO and Google Business optimization (GMB, Local citations)',
        '🤖 Answer Engine Optimization (AEO) for ChatGPT, Bard, Bing Chat',
        '⚡ Generative Engine Optimization (GEO) for AI search results',
        '🎯 AI-search visibility strategies (Schema markup, Featured snippets)',
        '📊 Advanced analytics and conversion tracking',
        '🏆 Competitor analysis and market research',
        '📱 Mobile-first SEO optimization',
        '🔍 Keyword research and content strategy'
      ],
      process: [
        '🔍 Comprehensive SEO Audit & Technical Analysis',
        '📋 Custom Strategy Development & Roadmap',
        '⚙️ Implementation & Content Optimization',
        '📊 Performance Monitoring & Monthly Reporting'
      ],
      benefits: [
        '📈 Average 300% increase in organic traffic within 6 months',
        '🎯 Higher conversion rates through targeted optimization',
        '💰 Reduced cost per acquisition compared to paid ads',
        '🏆 Long-term sustainable growth and brand authority',
        '🤖 Future-proof optimization for AI search engines'
      ],
      technologies: ['Google Analytics 4', 'Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Schema.org'],
      deliverables: [
        'Monthly SEO performance reports',
        'Technical SEO audit document',
        'Content optimization guidelines',
        'Backlink acquisition strategy',
        'Local SEO setup and optimization'
      ],
      caseStudy: {
        title: 'E-Commerce Growth Success',
        client: 'TechStore Inc.',
        challenge: 'Low organic visibility and poor search rankings',
        solution: 'Comprehensive SEO strategy with technical optimization and content marketing',
        results: [
          '300% increase in organic traffic within 6 months',
          '150% improvement in conversion rates',
          'First page rankings for 50+ target keywords',
          '200% increase in online revenue'
        ]
      }
    },
    {
      title: '💻 Web Development',
      description: 'Build modern, secure, and scalable web solutions that drive business growth and deliver exceptional user experiences. From responsive websites to complex web applications, we create digital experiences that convert. 🌟',
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      emoji: '💻',
      features: [
        '🏢 Business and corporate websites (Custom design, CMS integration)',
        '🚀 SaaS and startup platforms (Scalable architecture, User dashboards)',
        '📈 SEO-optimized landing pages (High conversion, A/B testing)',
        '🛒 E-commerce solutions (Payment integration, Inventory management)',
        '📝 CMS and headless solutions (WordPress, Strapi, Contentful)',
        '📱 Progressive Web Apps (PWAs) (Offline functionality, App-like experience)',
        '🔐 Secure authentication systems (OAuth, JWT, Multi-factor auth)',
        '⚡ Performance optimization (CDN, Caching, Image optimization)',
        '📊 Analytics and tracking integration (Google Analytics, Hotjar)',
        '🔧 API development and third-party integrations'
      ],
      process: [
        '📋 Requirements Analysis & Project Planning',
        '🎨 UI/UX Design & Interactive Prototyping',
        '⚙️ Development, Testing & Quality Assurance',
        '🚀 Deployment, Launch & Ongoing Maintenance'
      ],
      benefits: [
        '🚀 99.9% uptime with reliable hosting and monitoring',
        '📱 Fully responsive design for all devices',
        '⚡ Fast loading speeds (under 3 seconds)',
        '🔍 SEO-optimized for better search rankings',
        '🛡️ Enterprise-level security and data protection'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript'],
      deliverables: [
        'Fully functional website/web application',
        'Source code and documentation',
        'Admin panel and content management',
        'Performance optimization report',
        '3 months free maintenance and support'
      ],
      caseStudy: {
        title: 'SaaS Platform Development',
        client: 'StartupFlow',
        challenge: 'Need for scalable web platform with complex user management',
        solution: 'Custom React/Node.js application with advanced features',
        results: [
          '99.9% uptime since launch',
          '10,000+ active users within first month',
          '40% faster loading times than competitors',
          'Successful $2M funding round after launch'
        ]
      }
    },
    {
      title: '📱 App Development',
      description: 'Create powerful mobile applications that engage users and drive business success across iOS and Android platforms. Build apps that users love with intuitive design and robust functionality. 🎯',
      icon: <Smartphone className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
      emoji: '📱',
      features: [
        '🍎 Native iOS development (Swift, SwiftUI, Xcode)',
        '🤖 Native Android development (Kotlin, Java, Android Studio)',
        '🔄 Cross-platform solutions (React Native, Flutter)',
        '🏢 Enterprise mobile applications (Custom workflows, Security)',
        '📈 App Store optimization (ASO, Keywords, Screenshots)',
        '🔧 Mobile app maintenance (Updates, Bug fixes, Performance)',
        '🔗 Backend integration (APIs, Databases, Cloud services)',
        '💳 Payment gateway integration (Stripe, PayPal, In-app purchases)',
        '📊 Analytics and crash reporting (Firebase, Crashlytics)',
        '🔔 Push notifications and real-time features'
      ],
      process: [
        '💡 Concept Development & Market Research',
        '🎨 UI/UX Design & User Journey Mapping',
        '⚙️ Development, Testing & Beta Release',
        '🚀 App Store Launch & Post-Launch Support'
      ],
      benefits: [
        '📱 Native performance and user experience',
        '🏪 App Store and Google Play Store approval',
        '📊 Built-in analytics and user behavior tracking',
        '🔄 Regular updates and feature enhancements',
        '🛡️ Secure data handling and user privacy protection'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify', 'MongoDB', 'Node.js'],
      deliverables: [
        'Published mobile application on app stores',
        'Source code and technical documentation',
        'Admin dashboard for content management',
        'App analytics and performance monitoring',
        '6 months free maintenance and updates'
      ],
      caseStudy: {
        title: 'Mobile App Success Story',
        client: 'FitLife Wellness',
        challenge: 'Create engaging fitness app with social features',
        solution: 'React Native app with real-time features and gamification',
        results: [
          '50,000+ downloads in first 3 months',
          '4.8-star rating on both app stores',
          '85% user retention rate after 30 days',
          'Featured in App Store "Health & Fitness" category'
        ]
      }
    },
    {
      title: '🤖 AI & Intelligent Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, enhance decision-making, and drive innovation. Transform your business with cutting-edge AI technology that delivers measurable results. ⚡',
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-500',
      emoji: '🤖',
      features: [
        '💬 AI-powered chatbots and virtual assistants (24/7 customer support)',
        '👁️ Computer vision and image recognition (Object detection, OCR)',
        '🗣️ Natural Language Processing (NLP) (Sentiment analysis, Text processing)',
        '✨ Generative AI applications (Content creation, Code generation)',
        '⚙️ Workflow automation systems (Process optimization, Task automation)',
        '🧠 Custom AI model development (Machine learning, Deep learning)',
        '📊 Predictive analytics and forecasting (Sales, Demand, Risk analysis)',
        '🔍 Intelligent search and recommendation systems',
        '📝 Document processing and data extraction (AI-powered OCR)',
        '🎯 Personalization engines (User behavior, Content recommendations)'
      ],
      process: [
        '💡 AI Strategy Consultation & Use Case Identification',
        '📊 Data Analysis, Preparation & Model Selection',
        '🧠 AI Model Development, Training & Validation',
        '🔗 Integration, Deployment & Performance Monitoring'
      ],
      benefits: [
        '⚡ 60% reduction in manual processing time',
        '🎯 Improved accuracy and decision-making',
        '💰 Significant cost savings through automation',
        '📈 Enhanced customer experience and satisfaction',
        '🚀 Competitive advantage through AI innovation'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI GPT', 'Hugging Face', 'AWS SageMaker', 'Google AI', 'Azure AI'],
      deliverables: [
        'Custom AI solution tailored to your needs',
        'AI model training and optimization',
        'Integration with existing systems',
        'Performance monitoring dashboard',
        'Ongoing model maintenance and updates'
      ],
      caseStudy: {
        title: 'AI Automation Success',
        client: 'ManufacturingPro',
        challenge: 'Manual quality control processes causing delays',
        solution: 'Computer vision AI system for automated quality inspection',
        results: [
          '90% reduction in inspection time',
          '99.5% accuracy in defect detection',
          '$500K annual cost savings',
          '50% improvement in production efficiency'
        ]
      }
    }
  ];

  const additionalServices = [
    {
      icon: <Search className="w-6 h-6" />,
      title: '📈 Digital Marketing',
      description: 'Comprehensive digital marketing strategies including social media marketing, PPC campaigns, content marketing, and email automation to boost your online presence and drive growth! 🚀',
      gradient: 'from-indigo-500 to-purple-500',
      emoji: '📈',
      features: [
        'Social Media Marketing (Facebook, Instagram, LinkedIn, Twitter)',
        'Pay-Per-Click (PPC) Advertising (Google Ads, Facebook Ads)',
        'Content Marketing Strategy and Creation',
        'Email Marketing Automation and Campaigns',
        'Influencer Marketing and Partnerships',
        'Marketing Analytics and Performance Tracking'
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: '🛡️ Security Audits',
      description: 'Comprehensive security assessments, penetration testing, and vulnerability analysis to protect your business from cyber threats and ensure compliance with industry standards. 🔒',
      gradient: 'from-red-500 to-pink-500',
      emoji: '🛡️',
      features: [
        'Web Application Security Testing (OWASP Top 10)',
        'Network Security Assessment and Penetration Testing',
        'Code Review and Static Analysis',
        'Compliance Audits (GDPR, HIPAA, SOC 2)',
        'Security Policy Development and Training',
        'Incident Response Planning and Implementation'
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: '📊 Data Analytics',
      description: 'Transform your data into actionable insights and business intelligence for better decision-making. Advanced analytics, reporting dashboards, and data visualization to drive growth. 💡',
      gradient: 'from-cyan-500 to-blue-500',
      emoji: '📊',
      features: [
        'Business Intelligence Dashboard Development',
        'Data Warehouse Design and Implementation',
        'Advanced Analytics and Statistical Modeling',
        'Real-time Data Processing and Visualization',
        'Customer Analytics and Segmentation',
        'Predictive Analytics and Forecasting Models'
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: '☁️ Cloud Solutions',
      description: 'Scalable cloud infrastructure, migration services, and DevOps solutions for modern businesses. Optimize performance, reduce costs, and ensure reliability. ⚡',
      gradient: 'from-green-500 to-teal-500',
      emoji: '☁️',
      features: [
        'Cloud Migration Strategy and Implementation (AWS, Azure, GCP)',
        'DevOps and CI/CD Pipeline Setup',
        'Container Orchestration (Docker, Kubernetes)',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Cloud Security and Compliance Management',
        'Performance Monitoring and Cost Optimization'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: '🔍 Discovery & Analysis',
      description: 'We start by understanding your business goals, challenges, and requirements through comprehensive analysis. Deep dive into your current systems, market position, and growth objectives. 📋',
      icon: <Search className="w-6 h-6" />,
      emoji: '🔍',
      details: [
        'Business requirements gathering and stakeholder interviews',
        'Technical audit of existing systems and infrastructure',
        'Competitor analysis and market research',
        'Risk assessment and opportunity identification',
        'Project scope definition and timeline planning'
      ]
    },
    {
      step: '02',
      title: '📋 Strategy & Planning',
      description: 'Develop a customized strategy and detailed project plan tailored to your specific needs and objectives. Create roadmaps that align with your business vision and budget. 🎯',
      icon: <Brain className="w-6 h-6" />,
      emoji: '📋',
      details: [
        'Custom solution architecture and technology selection',
        'Detailed project timeline and milestone planning',
        'Resource allocation and team assignment',
        'Budget planning and cost optimization strategies',
        'Risk mitigation and contingency planning'
      ]
    },
    {
      step: '03',
      title: '🎨 Design & Development',
      description: 'Execute the plan with precision, creating solutions that are both functional and aesthetically pleasing. Agile development with regular updates and feedback loops. ✨',
      icon: <Code className="w-6 h-6" />,
      emoji: '🎨',
      details: [
        'UI/UX design and user experience optimization',
        'Agile development with sprint-based delivery',
        'Quality assurance and automated testing',
        'Regular client reviews and feedback integration',
        'Performance optimization and security implementation'
      ]
    },
    {
      step: '04',
      title: '🧪 Testing & Deployment',
      description: 'Rigorous testing ensures quality, followed by smooth deployment and comprehensive support. Multiple testing phases to guarantee reliability and performance. 🚀',
      icon: <Rocket className="w-6 h-6" />,
      emoji: '🧪',
      details: [
        'Comprehensive testing (Unit, Integration, User Acceptance)',
        'Performance testing and load optimization',
        'Security testing and vulnerability assessment',
        'Staging environment setup and final reviews',
        'Production deployment with zero-downtime strategies'
      ]
    },
    {
      step: '05',
      title: '📈 Optimization & Support',
      description: 'Continuous monitoring, optimization, and support to ensure long-term success and growth. Ongoing maintenance and feature enhancements. 🌟',
      icon: <TrendingUp className="w-6 h-6" />,
      emoji: '📈',
      details: [
        'Performance monitoring and analytics setup',
        'Regular maintenance and security updates',
        'Feature enhancements and scalability improvements',
        'User training and documentation',
        '24/7 technical support and issue resolution'
      ]
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
            Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
            <span className="ml-3 text-4xl md:text-6xl">🚀</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4"
          >
            Comprehensive AI-powered solutions designed to transform your business and drive sustainable growth! 
            From advanced SEO optimization to intelligent automation, we deliver excellence at every step. 
            <br className="hidden sm:block" />
            <span className="text-purple-400 font-semibold">Join 50+ successful businesses</span> who trust us with their digital transformation. ✨💡
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { text: '🤖 AI-First Approach', emoji: '🤖' },
              { text: '⚡ Scalable Solutions', emoji: '⚡' },
              { text: '👥 Expert Team', emoji: '👥' },
              { text: '🛡️ 24/7 Support', emoji: '🛡️' }
            ].map((item, index) => (
              <motion.span
                key={item.text}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white hover:bg-white/20 transition-all duration-300"
              >
                {item.text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">🎯 Core Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs ✨
            </p>
          </motion.div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-2xl shadow-lg`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    onClick={() => openServiceModal(service)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Process Steps */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-3xl p-8 shadow-2xl">
                    <h4 className="text-2xl font-bold text-white mb-6">Our Process</h4>
                    <div className="space-y-4">
                      {service.process.map((step, stepIndex) => (
                        <motion.div
                          key={stepIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: stepIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30"
                        >
                          <div className={`w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                            {stepIndex + 1}
                          </div>
                          <span className="text-gray-300 font-medium">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">⭐ Additional Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complementary services to complete your digital transformation 🚀
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-6 shadow-xl hover:border-gray-700/50 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
                
                {/* Features for additional services */}
                {service.features && (
                  <div className="mb-4">
                    <ul className="text-left space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-500 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <button
                  onClick={() => openServiceModal(service)}
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${service.gradient} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 text-sm`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">⚙️ Our Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time 🎯
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
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
                <div className="absolute top-4 right-4 text-2xl animate-pulse">✨</div>
                <div className="absolute bottom-4 left-4 text-xl animate-bounce">💫</div>
                
                <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic">
                  "Every service we offer is designed with one goal in mind: to empower businesses with intelligent, scalable solutions that drive real growth. We don't just deliver projects – we build partnerships for success."
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
              Ready to Transform Your Business? 🚀
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Let's discuss how our AI-powered solutions can drive your business forward! 
              Get started with a free consultation today. ✨💡
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20"
            >
              <span>Get Free Consultation</span>
              <span className="text-xl">💬</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white font-bold rounded-2xl border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
            >
              <span>View Our Work</span>
              <span className="text-xl">👀</span>
              <Eye className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" 
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-gradient-to-r ${selectedService?.gradient || 'from-purple-500 to-blue-500'} rounded-xl`}>
                    {selectedService?.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedService?.title}</h2>
                    <p className="text-gray-400">Comprehensive Service Details</p>
                  </div>
                </div>
                <button onClick={closeModal} className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200">
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Service Overview */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{selectedService?.description}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedService?.features?.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process Steps */}
                {selectedService?.process && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Our Process</h3>
                    <div className="space-y-3">
                      {selectedService.process.map((step, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                          <div className={`w-8 h-8 bg-gradient-to-r ${selectedService?.gradient || 'from-purple-500 to-blue-500'} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                            {index + 1}
                          </div>
                          <span className="text-gray-300 font-medium">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Benefits */}
                {selectedService?.benefits && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Key Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-green-900/20 rounded-lg border border-green-500/20">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                {selectedService?.technologies && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Technologies We Use</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Case Study */}
                {selectedService?.caseStudy && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Success Story</h3>
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/30">
                      <h4 className="text-lg font-semibold text-white mb-2">{selectedService.caseStudy.title}</h4>
                      <p className="text-purple-400 font-medium mb-3">Client: {selectedService.caseStudy.client}</p>
                      <p className="text-gray-300 mb-4"><strong>Challenge:</strong> {selectedService.caseStudy.challenge}</p>
                      <p className="text-gray-300 mb-4"><strong>Solution:</strong> {selectedService.caseStudy.solution}</p>
                      <div>
                        <strong className="text-white">Results:</strong>
                        <ul className="mt-2 space-y-1">
                          {selectedService.caseStudy.results.map((result, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-500/20">
                  <h3 className="text-xl font-semibold text-white mb-2">Ready to Get Started?</h3>
                  <p className="text-gray-300 mb-4">Let's discuss how {selectedService?.title?.toLowerCase()} can transform your business.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button onClick={closeModal} className={`flex-1 py-3 px-6 bg-gradient-to-r ${selectedService?.gradient || 'from-purple-500 to-blue-500'} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}>
                      Get Free Consultation
                    </button>
                    <button onClick={closeModal} className="flex-1 py-3 px-6 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors duration-300">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;