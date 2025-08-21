'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Eye, Sparkles, CheckCircle, Loader2 } from 'lucide-react';

interface ProgressStagesProps {
  isVisible: boolean;
}

const stages = [
  {
    id: 'analyzing',
    title: 'Analyzing Image',
    description: 'AI is examining your photo',
    icon: Eye,
    duration: 2000
  },
  {
    id: 'processing',
    title: 'Processing Background',
    description: 'Removing background with precision',
    icon: Wand2,
    duration: 3000
  },
  {
    id: 'finalizing',
    title: 'Finalizing Magic',
    description: 'Preparing your masterpiece',
    icon: Sparkles,
    duration: 1500
  }
];

const ProgressStages: React.FC<ProgressStagesProps> = ({ isVisible }) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  useEffect(() => {
    if (!isVisible) {
      setCurrentStage(0);
      setCompletedStages([]);
      return;
    }

    const progressStages = async () => {
      for (let i = 0; i < stages.length; i++) {
        setCurrentStage(i);
        
        await new Promise(resolve => {
          setTimeout(() => {
            setCompletedStages(prev => [...prev, i]);
            resolve(void 0);
          }, stages[i].duration);
        });
      }
    };

    progressStages();
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="mt-8 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          {stages.map((stage, index) => {
            const isActive = currentStage === index;
            const isCompleted = completedStages.includes(index);
            const Icon = stage.icon;
            
            return (
              <motion.div
                key={stage.id}
                className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm border transition-all duration-500 ${
                  isActive 
                    ? 'bg-primary/10 border-primary/30 shadow-lg' 
                    : isCompleted
                    ? 'bg-green-500/10 border-green-500/30'
                    : 'bg-background/20 border-border/20'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                {/* Icon Container */}
                <motion.div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-br from-primary to-accent'
                      : isCompleted
                      ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                      : 'bg-muted'
                  }`}
                  animate={{
                    scale: isActive ? [1, 1.05, 1] : 1,
                    rotate: isActive ? [0, 5, -5, 0] : 0
                  }}
                  transition={{
                    scale: { duration: 1.5, repeat: isActive ? Infinity : 0 },
                    rotate: { duration: 2, repeat: isActive ? Infinity : 0 }
                  }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                  )}
                  
                  {isCompleted ? (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                    >
                      <CheckCircle className="w-6 h-6 text-white" />
                    </motion.div>
                  ) : isActive ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Loader2 className="w-6 h-6 text-white" />
                    </motion.div>
                  ) : (
                    <Icon className="w-6 h-6 text-muted-foreground" />
                  )}
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <motion.h4 
                    className={`font-semibold text-sm mb-1 ${
                      isActive 
                        ? 'text-primary' 
                        : isCompleted
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-muted-foreground'
                    }`}
                    animate={{
                      opacity: isActive ? [0.7, 1, 0.7] : 1
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isActive ? Infinity : 0
                    }}
                  >
                    {stage.title}
                  </motion.h4>
                  <p className="text-xs text-muted-foreground">
                    {stage.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                {isActive && (
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity
                    }}
                  />
                )}
                
                {isCompleted && (
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Overall Progress Bar */}
        <motion.div
          className="mt-6 bg-muted rounded-full h-2 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: '0%' }}
            animate={{ 
              width: `${((completedStages.length + (currentStage < stages.length ? 0.5 : 0)) / stages.length) * 100}%`
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Progress Text */}
        <motion.p
          className="text-center text-sm text-muted-foreground mt-3"
          animate={{
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          {completedStages.length === stages.length 
            ? '🎉 Ready to create magic!' 
            : `Processing... ${Math.round(((completedStages.length + 0.5) / stages.length) * 100)}%`
          }
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProgressStages;
