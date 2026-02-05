import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Zap, 
  Search,
  Brain,
  Award,
  CheckCircle,
  ArrowRight,
  Eye,
  Calendar,
  Target
} from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalType, setModalType] = useState(null); // 'details' or 'case-study'

  const categories = ['All', 'SEO & Marketing', 'Web Development', 'AI Solutions', 'Mobile Apps'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Growth Platform',
      category: 'SEO & Marketing',
      industry: 'Retail',
      client: 'ShopFlow Inc.',
      duration: '6 months',
      services: ['SEO Optimization', 'Content Strategy', 'Performance Marketing'],
      description: 'Comprehensive SEO and digital marketing strategy that transformed an e-commerce platform into a market leader.',
      challenge: 'Low organic visibility and poor conversion rates were limiting business growth.',
      solution: 'Implemented AI-driven SEO strategies, optimized user experience, and created data-driven content.',
      detailedDescription: 'ShopFlow Inc. approached us with a struggling e-commerce platform that was losing market share to competitors. Their organic traffic was minimal, conversion rates were below industry standards, and their digital presence was virtually non-existent. Our comprehensive approach involved a complete SEO overhaul, content strategy redesign, and performance marketing implementation.',
      projectScope: [
        'Complete technical SEO audit and optimization',
        'Keyword research and content strategy development',
        'On-page and off-page SEO implementation',
        'Performance marketing campaigns setup',
        'Analytics and tracking implementation',
        'Ongoing monitoring and optimization'
      ],
      timeline: [
        { phase: 'Discovery & Audit', duration: '2 weeks', description: 'Comprehensive analysis of current state and competitor research' },
        { phase: 'Strategy Development', duration: '1 week', description: 'SEO strategy, content plan, and campaign setup' },
        { phase: 'Implementation Phase 1', duration: '6 weeks', description: 'Technical SEO fixes and initial content creation' },
        { phase: 'Implementation Phase 2', duration: '8 weeks', description: 'Content deployment and marketing campaigns launch' },
        { phase: 'Optimization & Monitoring', duration: '8 weeks', description: 'Performance tracking and continuous optimization' }
      ],
      caseStudyDetails: {
        businessContext: 'ShopFlow Inc. was a mid-sized e-commerce retailer specializing in home and garden products. Despite having quality products and competitive pricing, they were struggling to compete with larger retailers in the digital space.',
        challenges: [
          'Organic search visibility was less than 5% for target keywords',
          'Website conversion rate was 1.2% (industry average: 2.86%)',
          'High bounce rate of 78% indicating poor user experience',
          'Limited brand awareness in target markets',
          'Inefficient ad spend with poor ROAS'
        ],
        approach: [
          'Conducted comprehensive technical SEO audit identifying 150+ issues',
          'Performed extensive keyword research revealing 500+ opportunity keywords',
          'Redesigned site architecture for better user experience and SEO',
          'Created content strategy targeting buyer journey stages',
          'Implemented advanced tracking and analytics setup'
        ],
        implementation: [
          'Fixed critical technical SEO issues affecting crawlability',
          'Optimized page load speeds from 8s to 2.1s average',
          'Created 200+ pieces of optimized content',
          'Built high-quality backlink profile with 50+ authoritative domains',
          'Launched targeted PPC campaigns with optimized landing pages'
        ],
        outcomes: [
          'Organic traffic increased from 5,000 to 20,000 monthly visitors',
          'Conversion rate improved from 1.2% to 2.23%',
          'Revenue growth of 250% within 6 months',
          'Brand awareness increased by 180% in target demographics',
          'Return on ad spend (ROAS) improved from 2.1x to 4.8x'
        ]
      },
      results: [
        { metric: 'Organic Traffic', value: '+300%', icon: <TrendingUp className="w-5 h-5" /> },
        { metric: 'Conversion Rate', value: '+85%', icon: <Target className="w-5 h-5" /> },
        { metric: 'Revenue Growth', value: '+250%', icon: <Award className="w-5 h-5" /> },
        { metric: 'Page Load Speed', value: '+40%', icon: <Zap className="w-5 h-5" /> }
      ],
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Search Console', 'Screaming Frog', 'Google Ads'],
      image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80',
      gradient: 'from-green-500 to-emerald-500',
      featured: true
    },
    {
      id: 2,
      title: 'AI Customer Support Chatbot',
      category: 'AI Solutions',
      industry: 'SaaS',
      client: 'TechSupport Pro',
      duration: '4 months',
      services: ['NLP Development', 'AI Training', 'System Integration'],
      description: 'Intelligent chatbot system that revolutionized customer support operations with advanced NLP capabilities.',
      challenge: 'High support ticket volume and slow response times were affecting customer satisfaction.',
      solution: 'Developed custom NLP model with contextual understanding and seamless human handoff.',
      detailedDescription: 'TechSupport Pro was drowning in customer support tickets, with response times averaging 24-48 hours and customer satisfaction scores declining. They needed an intelligent solution that could handle routine inquiries while seamlessly escalating complex issues to human agents.',
      projectScope: [
        'Custom NLP model development and training',
        'Integration with existing support systems',
        'Multi-language support implementation',
        'Advanced conversation flow design',
        'Analytics and reporting dashboard',
        'Staff training and change management'
      ],
      timeline: [
        { phase: 'Requirements Analysis', duration: '1 week', description: 'Understanding support workflows and customer needs' },
        { phase: 'AI Model Development', duration: '6 weeks', description: 'Custom NLP model training and testing' },
        { phase: 'System Integration', duration: '4 weeks', description: 'Integration with existing support infrastructure' },
        { phase: 'Testing & Refinement', duration: '3 weeks', description: 'Comprehensive testing and model optimization' },
        { phase: 'Deployment & Training', duration: '2 weeks', description: 'Go-live and staff training' }
      ],
      caseStudyDetails: {
        businessContext: 'TechSupport Pro provided customer support services for multiple SaaS companies. Their growing client base was straining their human support team, leading to longer response times and decreased customer satisfaction.',
        challenges: [
          'Average response time of 24-48 hours for initial contact',
          'Support team overwhelmed with 500+ daily tickets',
          'Customer satisfaction score declining to 3.2/5',
          'High operational costs due to large support team',
          'Inconsistent response quality across different agents'
        ],
        approach: [
          'Analyzed 50,000+ historical support conversations',
          'Identified common query patterns and response templates',
          'Developed custom NLP model using transformer architecture',
          'Created intelligent routing system for complex queries',
          'Designed seamless human handoff mechanisms'
        ],
        implementation: [
          'Trained AI model on company-specific knowledge base',
          'Implemented real-time sentiment analysis',
          'Created multi-turn conversation capabilities',
          'Built integration APIs for existing support tools',
          'Developed comprehensive analytics dashboard'
        ],
        outcomes: [
          '80% of routine queries handled automatically',
          'Response time reduced from 24-48 hours to under 2 minutes',
          'Customer satisfaction improved from 3.2/5 to 4.7/5',
          'Support costs reduced by 60% while handling 3x more queries',
          'Human agents now focus on complex, high-value interactions'
        ]
      },
      results: [
        { metric: 'Support Automation', value: '80%', icon: <Brain className="w-5 h-5" /> },
        { metric: 'Response Time', value: '-90%', icon: <Zap className="w-5 h-5" /> },
        { metric: 'Customer Satisfaction', value: '+95%', icon: <Users className="w-5 h-5" /> },
        { metric: 'Cost Reduction', value: '-60%', icon: <Award className="w-5 h-5" /> }
      ],
      technologies: ['Python', 'TensorFlow', 'OpenAI GPT', 'React', 'Node.js', 'MongoDB', 'Redis'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      gradient: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      id: 3,
      title: 'Enterprise Web Platform',
      category: 'Web Development',
      industry: 'Finance',
      client: 'FinSecure Corp',
      duration: '8 months',
      services: ['Full-Stack Development', 'Security Implementation', 'Performance Optimization'],
      description: 'Secure, scalable web platform for financial services with enterprise-grade security and performance.',
      challenge: 'Legacy system limitations and strict security requirements for financial data.',
      solution: 'Built modern, secure architecture with advanced encryption and real-time monitoring.',
      detailedDescription: 'FinSecure Corp needed to modernize their legacy financial platform while maintaining the highest security standards. The new system required real-time transaction processing, advanced security features, and the ability to scale to handle millions of transactions daily.',
      projectScope: [
        'Complete system architecture redesign',
        'Advanced security implementation (encryption, authentication)',
        'Real-time transaction processing system',
        'Comprehensive audit logging and monitoring',
        'API development for third-party integrations',
        'Performance optimization and scalability planning'
      ],
      timeline: [
        { phase: 'Architecture Planning', duration: '3 weeks', description: 'System design and security architecture planning' },
        { phase: 'Core Development', duration: '16 weeks', description: 'Backend services and database development' },
        { phase: 'Frontend Development', duration: '8 weeks', description: 'User interface and experience development' },
        { phase: 'Security Implementation', duration: '4 weeks', description: 'Advanced security features and testing' },
        { phase: 'Testing & Deployment', duration: '3 weeks', description: 'Comprehensive testing and production deployment' }
      ],
      caseStudyDetails: {
        businessContext: 'FinSecure Corp was operating on a 15-year-old legacy system that was becoming increasingly difficult to maintain and scale. Regulatory requirements and customer expectations demanded a modern, secure platform.',
        challenges: [
          'Legacy system unable to handle growing transaction volumes',
          'Security vulnerabilities in outdated infrastructure',
          'Poor user experience affecting customer retention',
          'High maintenance costs and frequent downtime',
          'Inability to integrate with modern financial APIs'
        ],
        approach: [
          'Conducted comprehensive security audit and risk assessment',
          'Designed microservices architecture for scalability',
          'Implemented zero-trust security model',
          'Created comprehensive API strategy',
          'Planned phased migration to minimize business disruption'
        ],
        implementation: [
          'Built secure microservices using Node.js and Docker',
          'Implemented advanced encryption for data at rest and in transit',
          'Created real-time monitoring and alerting systems',
          'Developed responsive web interface with React',
          'Established CI/CD pipeline for secure deployments'
        ],
        outcomes: [
          'System uptime improved to 99.9% from previous 95%',
          'Transaction processing speed increased by 10x',
          'Security audit score improved to A+ rating',
          'User capacity increased to handle 10x more concurrent users',
          'Maintenance costs reduced by 40% annually'
        ]
      },
      results: [
        { metric: 'System Uptime', value: '99.9%', icon: <CheckCircle className="w-5 h-5" /> },
        { metric: 'Load Time', value: '<2s', icon: <Zap className="w-5 h-5" /> },
        { metric: 'Security Score', value: 'A+', icon: <Award className="w-5 h-5" /> },
        { metric: 'User Capacity', value: '10x', icon: <Users className="w-5 h-5" /> }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'Redis'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      gradient: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      category: 'Mobile Apps',
      industry: 'Banking',
      client: 'NeoBank Solutions',
      duration: '10 months',
      services: ['Mobile Development', 'UI/UX Design', 'Security Integration'],
      description: 'Next-generation mobile banking application with biometric security and AI-powered insights.',
      challenge: 'Creating a secure, user-friendly mobile banking experience for digital-first customers.',
      solution: 'Developed native iOS/Android apps with advanced security features and intuitive design.',
      detailedDescription: 'NeoBank Solutions wanted to launch a digital-first banking experience that would appeal to millennials and Gen Z customers. The app needed to combine cutting-edge security with an intuitive user experience.',
      projectScope: [
        'Native iOS and Android app development',
        'Advanced biometric authentication system',
        'AI-powered financial insights and recommendations',
        'Real-time transaction monitoring and alerts',
        'Comprehensive security implementation',
        'Integration with banking APIs and third-party services'
      ],
      timeline: [
        { phase: 'Design & Prototyping', duration: '4 weeks', description: 'User research, wireframing, and prototype development' },
        { phase: 'Core App Development', duration: '20 weeks', description: 'Native app development for iOS and Android' },
        { phase: 'Security Implementation', duration: '6 weeks', description: 'Biometric authentication and security features' },
        { phase: 'AI Features Development', duration: '6 weeks', description: 'Financial insights and recommendation engine' },
        { phase: 'Testing & Launch', duration: '4 weeks', description: 'Comprehensive testing and app store deployment' }
      ],
      caseStudyDetails: {
        businessContext: 'NeoBank Solutions was a fintech startup aiming to disrupt traditional banking with a mobile-first approach. They needed a flagship app that would differentiate them in the competitive digital banking space.',
        challenges: [
          'Highly competitive digital banking market',
          'Strict regulatory requirements for financial apps',
          'Need for bank-level security with consumer-friendly UX',
          'Integration with multiple banking and payment systems',
          'Building trust with security-conscious users'
        ],
        approach: [
          'Conducted extensive user research with target demographics',
          'Designed security-first architecture with user experience focus',
          'Implemented advanced biometric authentication methods',
          'Created AI-powered financial insights engine',
          'Established comprehensive testing and security audit processes'
        ],
        implementation: [
          'Built native apps using React Native for cross-platform efficiency',
          'Implemented multi-factor biometric authentication',
          'Created real-time transaction monitoring system',
          'Developed AI algorithms for spending insights and budgeting',
          'Integrated with major payment networks and banking APIs'
        ],
        outcomes: [
          'User adoption rate 400% higher than industry average',
          'Transaction processing speed 3x faster than competitors',
          'Security rating of 5/5 from independent auditors',
          'App store rating of 4.9 stars with 50,000+ reviews',
          'Customer acquisition cost 60% lower than traditional banks'
        ]
      },
      results: [
        { metric: 'User Adoption', value: '+400%', icon: <Users className="w-5 h-5" /> },
        { metric: 'Transaction Speed', value: '+300%', icon: <Zap className="w-5 h-5" /> },
        { metric: 'Security Rating', value: '5/5', icon: <Award className="w-5 h-5" /> },
        { metric: 'App Store Rating', value: '4.9★', icon: <Target className="w-5 h-5" /> }
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Biometric APIs', 'TensorFlow', 'AWS'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
      gradient: 'from-orange-500 to-red-500',
      featured: false
    },
    {
      id: 5,
      title: 'AI Content Generation Platform',
      category: 'AI Solutions',
      industry: 'Marketing',
      client: 'ContentFlow Agency',
      duration: '5 months',
      services: ['AI Development', 'Web Platform', 'API Integration'],
      description: 'AI-powered content generation platform that creates high-quality marketing content at scale.',
      challenge: 'Manual content creation was time-consuming and inconsistent in quality.',
      solution: 'Built AI platform using advanced language models with custom training for brand voice.',
      detailedDescription: 'ContentFlow Agency was struggling to meet the growing demand for content from their clients. Manual content creation was bottlenecking their growth and affecting quality consistency across different writers.',
      projectScope: [
        'Custom AI model development for content generation',
        'Web-based platform for content management',
        'Brand voice training and customization',
        'Multi-format content generation (blogs, social, ads)',
        'Quality assurance and editing tools',
        'Client collaboration and approval workflows'
      ],
      timeline: [
        { phase: 'AI Model Research', duration: '2 weeks', description: 'Research and selection of base language models' },
        { phase: 'Platform Development', duration: '8 weeks', description: 'Web platform and user interface development' },
        { phase: 'AI Integration', duration: '6 weeks', description: 'AI model integration and custom training' },
        { phase: 'Testing & Optimization', duration: '3 weeks', description: 'Quality testing and performance optimization' },
        { phase: 'Launch & Training', duration: '1 week', description: 'Platform launch and user training' }
      ],
      caseStudyDetails: {
        businessContext: 'ContentFlow Agency was a growing marketing agency serving 50+ clients across various industries. Their content team was overwhelmed with requests, leading to longer turnaround times and inconsistent quality.',
        challenges: [
          'Content creation bottleneck limiting agency growth',
          'Inconsistent quality across different writers',
          'High costs associated with hiring and training writers',
          'Difficulty maintaining brand voice consistency',
          'Long turnaround times affecting client satisfaction'
        ],
        approach: [
          'Analyzed existing content to understand quality patterns',
          'Researched and tested various language models',
          'Designed platform architecture for scalability',
          'Created brand voice training methodology',
          'Developed quality assurance workflows'
        ],
        implementation: [
          'Built web platform using React and Node.js',
          'Integrated GPT-4 with custom fine-tuning capabilities',
          'Created brand voice analysis and replication system',
          'Implemented multi-format content generation',
          'Developed collaboration tools for client feedback'
        ],
        outcomes: [
          'Content generation speed increased by 1000%',
          'Quality consistency improved with 95% client approval rate',
          'Content production costs reduced by 70%',
          'Client satisfaction scores increased to 98%',
          'Agency able to take on 3x more clients with same team'
        ]
      },
      results: [
        { metric: 'Content Speed', value: '+1000%', icon: <Zap className="w-5 h-5" /> },
        { metric: 'Quality Score', value: '95%', icon: <Award className="w-5 h-5" /> },
        { metric: 'Cost Savings', value: '-70%', icon: <Target className="w-5 h-5" /> },
        { metric: 'Client Satisfaction', value: '98%', icon: <Users className="w-5 h-5" /> }
      ],
      technologies: ['OpenAI GPT-4', 'Python', 'React', 'FastAPI', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
      gradient: 'from-indigo-500 to-purple-500',
      featured: false
    },
    {
      id: 6,
      title: 'Healthcare Management System',
      category: 'Web Development',
      industry: 'Healthcare',
      client: 'MediCare Plus',
      duration: '12 months',
      services: ['System Development', 'HIPAA Compliance', 'Integration'],
      description: 'Comprehensive healthcare management system with patient records, scheduling, and telemedicine.',
      challenge: 'Fragmented systems and compliance requirements were hindering patient care efficiency.',
      solution: 'Developed integrated platform with HIPAA compliance and seamless workflow automation.',
      detailedDescription: 'MediCare Plus was operating with multiple disconnected systems that made patient care coordination difficult and time-consuming. They needed a unified platform that would streamline operations while maintaining strict HIPAA compliance.',
      projectScope: [
        'Unified patient management system development',
        'HIPAA-compliant data handling and storage',
        'Telemedicine platform integration',
        'Automated scheduling and appointment management',
        'Electronic health records (EHR) system',
        'Billing and insurance integration'
      ],
      timeline: [
        { phase: 'Requirements & Compliance', duration: '4 weeks', description: 'Detailed requirements gathering and HIPAA compliance planning' },
        { phase: 'Core System Development', duration: '24 weeks', description: 'Patient management and EHR system development' },
        { phase: 'Integration Development', duration: '12 weeks', description: 'Third-party integrations and telemedicine features' },
        { phase: 'Security & Compliance', duration: '6 weeks', description: 'Security implementation and compliance testing' },
        { phase: 'Testing & Deployment', duration: '6 weeks', description: 'Comprehensive testing and phased deployment' }
      ],
      caseStudyDetails: {
        businessContext: 'MediCare Plus was a multi-location healthcare provider serving 10,000+ patients. Their fragmented systems were causing inefficiencies, compliance risks, and poor patient experience.',
        challenges: [
          'Multiple disconnected systems causing data silos',
          'Manual processes leading to errors and delays',
          'HIPAA compliance risks with current infrastructure',
          'Poor patient experience due to system limitations',
          'High operational costs from system inefficiencies'
        ],
        approach: [
          'Conducted comprehensive system audit and workflow analysis',
          'Designed unified architecture with HIPAA compliance focus',
          'Created phased implementation plan to minimize disruption',
          'Established comprehensive testing and validation processes',
          'Developed staff training and change management strategy'
        ],
        implementation: [
          'Built unified platform using React and Node.js',
          'Implemented HIPAA-compliant data encryption and access controls',
          'Created automated workflow management system',
          'Integrated with major EHR and billing systems',
          'Developed telemedicine capabilities with video conferencing'
        ],
        outcomes: [
          'Operational efficiency improved by 200%',
          'Patient satisfaction scores increased by 150%',
          'HIPAA compliance score achieved 100%',
          'Administrative costs reduced by 40%',
          'Patient wait times reduced by 60%'
        ]
      },
      results: [
        { metric: 'Efficiency Gain', value: '+200%', icon: <TrendingUp className="w-5 h-5" /> },
        { metric: 'Patient Satisfaction', value: '+150%', icon: <Users className="w-5 h-5" /> },
        { metric: 'Compliance Score', value: '100%', icon: <CheckCircle className="w-5 h-5" /> },
        { metric: 'Cost Reduction', value: '-40%', icon: <Award className="w-5 h-5" /> }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'FHIR', 'AWS HIPAA', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1200&q=80',
      gradient: 'from-cyan-500 to-blue-500',
      featured: false
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

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
              Projects
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Explore our portfolio of successful AI-powered solutions that have transformed businesses 
            across industries. Real projects, real impact, real results.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['50+ Projects', 'Multiple Industries', 'Proven Results', 'Global Clients'].map((item, index) => (
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

      {/* Featured Projects */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Spotlight on our most impactful projects and transformative solutions
            </p>
          </motion.div>

          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-3xl p-2 shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-80 object-cover rounded-2xl"
                      />
                      <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-sm font-semibold`}>
                          {project.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300">
                          {project.industry}
                        </span>
                        <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                          {project.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                              <div className="text-white">
                                {result.icon}
                              </div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-white">{result.value}</div>
                              <div className="text-sm text-gray-400">{result.metric}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedProject(project);
                        setModalType('case-study');
                      }}
                      className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                    >
                      <span>View Case Study</span>
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">All Projects</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Browse our complete portfolio of successful projects across different industries
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-3xl overflow-hidden shadow-2xl hover:border-gray-700/50 transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-sm font-semibold`}>
                        {project.category}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-white text-sm">
                        {project.industry}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                    {/* Key Results */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {project.results.slice(0, 2).map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-lg font-bold text-white">{result.value}</div>
                          <div className="text-xs text-gray-400">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-800/50 rounded-lg text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-800/50 rounded-lg text-xs text-gray-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedProject(project);
                        setModalType('details');
                      }}
                      className="w-full py-2 bg-gray-800/50 hover:bg-gray-700/50 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No projects found matching your criteria.</div>
            </div>
          )}
        </div>
      </section>

      {/* Founder Quote Section */}
      <section className="py-20 bg-black">
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
                <div className="absolute top-4 right-4 text-2xl animate-pulse">🚀</div>
                <div className="absolute bottom-4 left-4 text-xl animate-bounce">⭐</div>
                
                <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic">
                  "Each project we undertake is a testament to our commitment to excellence. We don't just deliver solutions – we create digital experiences that transform businesses and drive measurable success."
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Let's create something amazing together. Transform your ideas into reality with our expert team.
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
              onClick={() => window.location.href = '/contact'}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white font-bold rounded-2xl border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
            >
            >
              <span>Schedule Consultation</span>
              <Calendar className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && modalType === 'details' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setSelectedProject(null);
              setModalType(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex gap-2 mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${selectedProject.gradient} rounded-full text-white text-sm font-semibold`}>
                        {selectedProject.category}
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-sm">
                        {selectedProject.industry}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setModalType(null);
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Project Image */}
                <div className="mb-8">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>

                {/* Project Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-800/50 rounded-2xl p-4">
                    <h4 className="text-white font-semibold mb-2">Client</h4>
                    <p className="text-gray-300">{selectedProject.client}</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-2xl p-4">
                    <h4 className="text-white font-semibold mb-2">Duration</h4>
                    <p className="text-gray-300">{selectedProject.duration}</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-2xl p-4">
                    <h4 className="text-white font-semibold mb-2">Industry</h4>
                    <p className="text-gray-300">{selectedProject.industry}</p>
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.detailedDescription}</p>
                </div>

                {/* Project Scope */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Project Scope</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.projectScope.map((scope, index) => (
                      <div key={index} className="flex items-center gap-3 bg-gray-800/30 rounded-xl p-4">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{scope}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Project Timeline</h3>
                  <div className="space-y-4">
                    {selectedProject.timeline.map((phase, index) => (
                      <div key={index} className="bg-gray-800/30 rounded-xl p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-white font-semibold">{phase.phase}</h4>
                          <span className="text-purple-400 text-sm font-medium">{phase.duration}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{phase.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Key Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedProject.results.map((result, index) => (
                      <div key={index} className="bg-gray-800/30 rounded-xl p-4 text-center">
                        <div className={`w-12 h-12 bg-gradient-to-r ${selectedProject.gradient} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                          <div className="text-white">
                            {result.icon}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                        <div className="text-sm text-gray-400">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Services Provided</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.services.map((service, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-xl font-medium`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && modalType === 'case-study' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setSelectedProject(null);
              setModalType(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Case Study: {selectedProject.title}</h2>
                    <p className="text-gray-400">In-depth analysis of our approach and results</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setModalType(null);
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Business Context */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Business Context</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.caseStudyDetails.businessContext}</p>
                </div>

                {/* Challenges */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Challenges</h3>
                  <div className="space-y-3">
                    {selectedProject.caseStudyDetails.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start gap-3 bg-red-900/20 border border-red-800/30 rounded-xl p-4">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our Approach */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
                  <div className="space-y-3">
                    {selectedProject.caseStudyDetails.approach.map((approach, index) => (
                      <div key={index} className="flex items-start gap-3 bg-blue-900/20 border border-blue-800/30 rounded-xl p-4">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-300">{approach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Implementation */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Implementation</h3>
                  <div className="space-y-3">
                    {selectedProject.caseStudyDetails.implementation.map((impl, index) => (
                      <div key={index} className="flex items-start gap-3 bg-purple-900/20 border border-purple-800/30 rounded-xl p-4">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{impl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Outcomes & Impact</h3>
                  <div className="space-y-3">
                    {selectedProject.caseStudyDetails.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3 bg-green-900/20 border border-green-800/30 rounded-xl p-4">
                        <Award className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Key Performance Metrics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedProject.results.map((result, index) => (
                      <div key={index} className="bg-gray-800/30 rounded-xl p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${selectedProject.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                          <div className="text-white">
                            {result.icon}
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">{result.value}</div>
                        <div className="text-sm text-gray-400">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & Tools */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Technologies & Tools Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects;