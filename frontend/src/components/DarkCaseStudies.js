import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Zap } from 'lucide-react';

const DarkCaseStudies = () => {
  const studies = [
    {
      title: "E-Commerce Growth Platform",
      tag: "Retail", 
      result: "300% Traffic Growth",
      description: "Implemented data-driven SEO strategy with AI-powered content optimization",
      metrics: [
        { label: "Organic Traffic", value: "+300%" },
        { label: "Conversion Rate", value: "+85%" },
        { label: "Revenue Growth", value: "+250%" }
      ],
      tagColor: "from-green-400 to-emerald-500",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "AI Support Chatbot",
      tag: "SaaS",
      result: "60% Workload Reduction",
      description: "Developed NLP-based intelligent customer support automation system",
      metrics: [
        { label: "Response Time", value: "-90%" },
        { label: "Customer Satisfaction", value: "+95%" },
        { label: "Support Costs", value: "-60%" }
      ],
      tagColor: "from-blue-400 to-cyan-500",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Enterprise Web Platform", 
      tag: "Finance",
      result: "High-Performance Scale",
      description: "Built secure, scalable platform handling millions of transactions",
      metrics: [
        { label: "Load Time", value: "<2s" },
        { label: "Uptime", value: "99.9%" },
        { label: "Security Score", value: "A+" }
      ],
      tagColor: "from-orange-400 to-yellow-500",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
            Selected Case Studies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real clients - see how we've transformed businesses with AI and technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {studies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="relative bg-gray-900/50 rounded-3xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 h-full">
                {/* Header with gradient */}
                <div className={`h-32 bg-gradient-to-br ${study.tagColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white">
                    {study.icon}
                  </div>

                  {/* Bottom Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tag */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${study.tagColor} text-white mb-4`}>
                    {study.tag}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-3 mb-6">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">{metric.label}</span>
                        <span className="text-white font-bold">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Result Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-purple-400 font-semibold">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">{study.result}</span>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-purple-600/20 hover:bg-purple-600/30 rounded-full flex items-center justify-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.tagColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DarkCaseStudies;