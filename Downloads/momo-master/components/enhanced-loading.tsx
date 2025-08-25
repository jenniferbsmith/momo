'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wand2, Loader2, Zap } from 'lucide-react';

interface EnhancedLoadingProps {
  message?: string;
  subMessage?: string;
  showProgress?: boolean;
  progress?: number;
  variant?: 'default' | 'minimal' | 'advanced';
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  message = 'Creating Magic...',
  subMessage = 'Our AI is working on your text behind image effect',
  showProgress = false,
  progress = 0,
  variant = 'default'
}) => {
  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center p-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full p-1"
        >
          <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
        </motion.div>
      </div>
    );
  }

  if (variant === 'advanced') {
    return (
      <div className="fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="text-center max-w-md mx-auto px-6">
          {/* Animated logo */}
          <motion.div
            className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 10px 30px rgba(138, 92, 246, 0.3)",
                "0 15px 40px rgba(168, 85, 247, 0.4)",
                "0 20px 50px rgba(59, 130, 246, 0.5)",
                "0 15px 40px rgba(168, 85, 247, 0.4)",
                "0 10px 30px rgba(138, 92, 246, 0.3)"
              ]
            }}
            transition={{ 
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity },
              boxShadow: { duration: 3, repeat: Infinity }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent"
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Wand2 className="w-10 h-10 text-white relative z-10" />
          </motion.div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              >
                <Sparkles className="w-3 h-3 text-primary/40" />
              </motion.div>
            ))}
          </div>

          {/* Main message */}
          <motion.h3 
            className="text-2xl font-bold text-gradient mb-3"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {message}
          </motion.h3>

          <motion.p 
            className="text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subMessage}
          </motion.p>

          {/* Progress bar */}
          {showProgress && (
            <div className="w-full bg-secondary rounded-full h-2 mb-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          )}

          {/* Loading dots */}
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      {/* Main spinner */}
      <motion.div
        className="relative w-16 h-16 mb-6"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20" />
        <div className="absolute inset-2 bg-background rounded-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
      </motion.div>

      {/* Orbiting elements */}
      <div className="relative w-24 h-24 mb-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-accent rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, delay: i * 0.5 }
            }}
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: `0 -${32 + i * 8}px`,
              marginTop: "-6px",
              marginLeft: "-6px"
            }}
          />
        ))}
      </div>

      {/* Text content */}
      <motion.h3 
        className="text-xl font-semibold text-gradient mb-2"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {message}
      </motion.h3>

      <motion.p 
        className="text-muted-foreground text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {subMessage}
      </motion.p>

      {/* Progress indicator */}
      {showProgress && (
        <div className="mt-6 w-full max-w-xs">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>Processing</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedLoading;
