import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Sparkles } from 'lucide-react';

const Logo = ({ size = 'default', showText = true, animated = true }) => {
  const sizes = {
    small: {
      container: 'h-8 w-8',
      text: 'text-lg',
      icon: 'w-4 h-4'
    },
    default: {
      container: 'h-12 w-12',
      text: 'text-xl',
      icon: 'w-5 h-5'
    },
    large: {
      container: 'h-16 w-16',
      text: 'text-2xl',
      icon: 'w-6 h-6'
    },
    hero: {
      container: 'h-20 w-20',
      text: 'text-3xl',
      icon: 'w-8 h-8'
    }
  };

  const currentSize = sizes[size];

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    animate: { 
      rotate: 360,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const LogoIcon = () => (
    <div className={`relative ${currentSize.container} flex items-center justify-center`}>
      {/* Main Logo Container */}
      <div className="relative w-full h-full">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 rounded-2xl blur-sm opacity-75"></div>
        
        {/* Main Logo Background */}
        <div className="relative w-full h-full bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm">
          {/* Inner Glow */}
          <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
          
          {/* Logo Content */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Animated Brain Icon */}
            <motion.div
              variants={animated ? iconVariants : {}}
              initial="initial"
              animate={animated ? "animate" : "initial"}
              className="relative"
            >
              <Brain className={`${currentSize.icon} text-white drop-shadow-lg`} />
              
              {/* Sparkle Effects */}
              <motion.div
                variants={animated ? sparkleVariants : {}}
                animate={animated ? "animate" : ""}
                className="absolute -top-1 -right-1"
              >
                <Sparkles className="w-3 h-3 text-yellow-300" />
              </motion.div>
              
              <motion.div
                variants={animated ? sparkleVariants : {}}
                animate={animated ? "animate" : ""}
                style={{ animationDelay: '0.5s' }}
                className="absolute -bottom-1 -left-1"
              >
                <Zap className="w-2 h-2 text-cyan-300" />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Corner Accents */}
          <div className="absolute top-1 right-1 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-white/20 rounded-full"></div>
        </div>
        
        {/* Outer Ring Animation */}
        {animated && (
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-0 border-2 border-purple-400/30 rounded-2xl"
          ></motion.div>
        )}
      </div>
    </div>
  );

  if (!showText) {
    return (
      <motion.div
        variants={animated ? logoVariants : {}}
        initial={animated ? "initial" : ""}
        animate={animated ? "animate" : ""}
        whileHover={animated ? "hover" : ""}
      >
        <LogoIcon />
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={animated ? logoVariants : {}}
      initial={animated ? "initial" : ""}
      animate={animated ? "animate" : ""}
      whileHover={animated ? "hover" : ""}
      className="flex items-center gap-3"
    >
      <LogoIcon />
      
      {/* Text Logo */}
      <div className={`${currentSize.text} font-bold tracking-tight`}>
        <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-sm">
          Cognix
        </span>
        <span className="ml-2 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
          AI
        </span>
      </div>
      
      {/* Floating Particles */}
      {animated && (
        <div className="relative">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-10, -20, -10],
                x: [0, 5, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              className={`absolute w-1 h-1 bg-purple-400 rounded-full`}
              style={{
                left: `${i * 8}px`,
                top: `${-10 - i * 3}px`
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Logo;