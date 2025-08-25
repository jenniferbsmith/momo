'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Eye, Sparkles, CheckCircle, Loader2 } from 'lucide-react';

interface ProgressStagesProps {
  isVisible: boolean;
}

const stages = [
  {
    id: 'initializing',
    title: 'Initializing AI Engine',
    description: 'Starting up advanced processing systems',
    icon: Eye,
    duration: 6000
  },
  {
    id: 'analyzing',
    title: 'Analyzing Image Structure',
    description: 'AI is examining your photo composition',
    icon: Wand2,
    duration: 6000
  },
  {
    id: 'detecting',
    title: 'Detecting Objects',
    description: 'Identifying subjects and background elements',
    icon: Sparkles,
    duration: 6000
  },
  {
    id: 'separating',
    title: 'Separating Layers',
    description: 'Creating depth maps for perfect text placement',
    icon: CheckCircle,
    duration: 6000
  },
  {
    id: 'processing',
    title: 'Processing Background',
    description: 'Removing background with pixel-perfect precision',
    icon: Loader2,
    duration: 6000
  },
  {
    id: 'optimizing',
    title: 'Optimizing Quality',
    description: 'Enhancing image quality and sharpness',
    icon: Eye,
    duration: 6000
  },
  {
    id: 'preparing',
    title: 'Preparing Canvas',
    description: 'Setting up your creative workspace',
    icon: Wand2,
    duration: 6000
  },
  {
    id: 'finalizing',
    title: 'Finalizing Magic',
    description: 'Your masterpiece is almost ready',
    icon: Sparkles,
    duration: 6000
  },
  {
    id: 'complete',
    title: 'Ready to Create!',
    description: 'Everything is set up perfectly',
    icon: CheckCircle,
    duration: 2000
  }
];

const ProgressStages: React.FC<ProgressStagesProps> = ({ isVisible }) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const [visibleStages, setVisibleStages] = useState<number[]>([]);

  useEffect(() => {
    if (!isVisible) {
      setCurrentStage(0);
      setCompletedStages([]);
      setVisibleStages([]);
      return;
    }

    const progressStages = async () => {
      for (let i = 0; i < stages.length; i++) {
        // Make stage visible with fade-in
        setVisibleStages(prev => [...prev, i]);
        setCurrentStage(i);
        
        await new Promise(resolve => {
          setTimeout(() => {
            setCompletedStages(prev => [...prev, i]);
            // After 1 second, fade out the completed stage (except the last one)
            if (i < stages.length - 1) {
              setTimeout(() => {
                setVisibleStages(prev => prev.filter(idx => idx !== i));
              }, 1000);
            }
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
            const isVisible = visibleStages.includes(index) || index === stages.length - 1;
            const Icon = stage.icon;
            
            if (!isVisible && !isCompleted) return null;
            
            return (
              <AnimatePresence key={stage.id}>
                <motion.div
                  className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm border transition-all duration-500 ${
                    isActive 
                      ? 'bg-primary/10 border-primary/30 shadow-lg' 
                      : isCompleted
                      ? 'bg-green-500/10 border-green-500/30'
                      : 'bg-background/20 border-border/20'
                  }`}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
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
                      scale: isActive ? [1, 1.1, 1] : 1,
                      rotate: isActive ? [0, 10, -10, 0] : 0
                    }}
                    transition={{
                      scale: { duration: 2, repeat: isActive ? Infinity : 0 },
                      rotate: { duration: 3, repeat: isActive ? Infinity : 0 }
                    }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      />
                    )}
                    
                    {isCompleted ? (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          type: 'spring', 
                          stiffness: 600, 
                          damping: 20,
                          delay: 0.2
                        }}
                      >
                        <CheckCircle className="w-6 h-6 text-white" />
                      </motion.div>
                    ) : isActive ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
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
                        duration: 2,
                        repeat: isActive ? Infinity : 0
                      }}
                    >
                      {stage.title}
                    </motion.h4>
                    <motion.p 
                      className="text-xs text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {stage.description}
                    </motion.p>
                  </div>

                  {/* Progress Indicator */}
                  {isActive && (
                    <motion.div
                      className="w-3 h-3 bg-primary rounded-full"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [1, 0.4, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}
                    />
                  )}
                  
                  {isCompleted && (
                    <motion.div
                      className="w-3 h-3 bg-green-500 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 600, 
                        damping: 20,
                        delay: 0.2
                      }}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>

        {/* Overall Progress Bar */}
        <motion.div
          className="mt-6 bg-muted rounded-full h-3 overflow-hidden shadow-inner"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full relative overflow-hidden"
            initial={{ width: '0%' }}
            animate={{ 
              width: `${((completedStages.length + (currentStage < stages.length ? 0.5 : 0)) / stages.length) * 100}%`
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
        </motion.div>

        {/* Progress Text */}
        <motion.p
          className="text-center text-sm font-medium text-muted-foreground mt-4"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity
          }}
        >
          {completedStages.length === stages.length 
            ? '✨ Ready to create magic!' 
            : `Processing... ${Math.round(((completedStages.length + 0.5) / stages.length) * 100)}%`
          }
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProgressStages;
