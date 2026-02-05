import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Sparkles, Cpu, Network } from 'lucide-react';

const PremiumLogo = ({ variant = 'default', size = 'large' }) => {
  const variants = {
    default: {
      primary: 'from-purple-600 via-blue-600 to-indigo-700',
      secondary: 'from-purple-400 via-blue-400 to-cyan-400',
      accent: 'from-yellow-400 to-orange-500',
      glow: 'from-purple-500 via-blue-500 to-indigo-600'
    },
    neon: {
      primary: 'from-cyan-500 via-purple-500 to-pink-500',
      secondary: 'from-cyan-300 via-purple-300 to-pink-300',
      accent: 'from-green-400 to-cyan-400',
      glow: 'from-cyan-400 via-purple-400 to-pink-400'
    },
    gold: {
      primary: 'from-yellow-600 via-orange-600 to-red-600',
      secondary: 'from-yellow-400 via-orange-400 to-red-400',
      accent: 'from-white to-yellow-200',
      glow: 'from-yellow-500 via-orange-500 to-red-500'
    }
  };

  const sizes = {
    small: { container: 'w-16 h-16', icon: 'w-6 h-6', text: 'text-xl' },
    medium: { container: 'w-20 h-20', icon: 'w-8 h-8', text: 'text-2xl' },
    large: { container: 'w-24 h-24', icon: 'w-10 h-10', text: 'text-3xl' },
    xl: { container: 'w-32 h-32', icon: 'w-12 h-12', text: 'text-4xl' }
  };

  const currentVariant = variants[variant];
  const currentSize = sizes[size];

  return (
    <div className="relative flex flex-col items-center">
      {/* Main Logo Container */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 5 }}
        className={`relative ${currentSize.container} mb-4`}
      >
        {/* Outer Glow Ring */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className={`absolute inset-0 bg-gradient-to-r ${currentVariant.glow} rounded-full blur-lg opacity-60`}
        />
        
        {/* Middle Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className={`absolute inset-2 border-2 border-gradient-to-r ${currentVariant.secondary} rounded-full opacity-40`}
        />
        
        {/* Main Logo Background */}
        <div className={`relative w-full h-full bg-gradient-to-br ${currentVariant.primary} rounded-full shadow-2xl border-2 border-white/20`}>
          {/* Inner Highlight */}
          <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
          
          {/* Logo Content */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Main Brain Icon */}
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative"
            >
              <Brain className={`${currentSize.icon} text-white drop-shadow-2xl`} />
              
              {/* Neural Network Lines */}
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0"
              >
                <Network className={`${currentSize.icon} text-cyan-300 opacity-50`} />
              </motion.div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-1 right-1"
            >
              <Sparkles className="w-3 h-3 text-yellow-300" />
            </motion.div>
            
            <motion.div
              animate={{
                rotate: -360,
                y: [0, -5, 0]
              }}
              transition={{
                rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute bottom-1 left-1"
            >
              <Zap className="w-3 h-3 text-cyan-300" />
            </motion.div>
            
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1 left-1"
            >
              <Cpu className="w-2 h-2 text-purple-300" />
            </motion.div>
          </div>
          
          {/* Corner Accents */}
          <div className="absolute top-2 right-2 w-2 h-2 bg-white/40 rounded-full" />
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/30 rounded-full" />
        </div>
        
        {/* Particle Effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: 360,
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 40}%`,
              left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 40}%`
            }}
          />
        ))}
      </motion.div>
      
      {/* Premium Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={`${currentSize.text} font-bold text-center`}
      >
        <motion.span
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`bg-gradient-to-r ${currentVariant.secondary} bg-clip-text text-transparent bg-[length:200%_100%]`}
        >
          Cognix
        </motion.span>
        <span className="mx-2 text-white/20">•</span>
        <motion.span
          animate={{
            backgroundPosition: ['100% 50%', '0% 50%', '100% 50%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className={`bg-gradient-to-r ${currentVariant.accent} bg-clip-text text-transparent bg-[length:200%_100%] font-extrabold`}
        >
          AI
        </motion.span>
      </motion.div>
      
      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-gray-400 text-sm mt-2 text-center font-medium tracking-wide"
      >
        Intelligent • Innovative • Infinite
      </motion.p>
    </div>
  );
};

export default PremiumLogo;