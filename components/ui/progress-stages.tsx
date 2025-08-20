'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wand2, Zap, Eye, CheckCircle, Brain, Layers, Palette } from 'lucide-react';

interface ProgressStagesProps {
    isVisible: boolean;
}

const ProgressStages: React.FC<ProgressStagesProps> = ({ isVisible }) => {
    const [currentStage, setCurrentStage] = useState(0);

    const stages = [
        {
            id: 1,
            icon: Sparkles,
            title: "Initializing AI Engine",
            description: "Starting magical processing",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            id: 2,
            icon: Brain,
            title: "AI Deep Learning Analysis",
            description: "Understanding image content",
            gradient: "from-cyan-500 to-blue-500"
        },
        {
            id: 3,
            icon: Eye,
            title: "Analyzing Image Structure",
            description: "Identifying key elements",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            id: 4,
            icon: Layers,
            title: "Mapping Object Boundaries",
            description: "Detecting precise edges",
            gradient: "from-teal-500 to-green-500"
        },
        {
            id: 5,
            icon: Wand2,
            title: "Applying AI Magic",
            description: "Separating background layers",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            id: 6,
            icon: Palette,
            title: "Color Correction & Enhancement",
            description: "Perfecting visual quality",
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            id: 7,
            icon: Zap,
            title: "Processing Background",
            description: "Removing unwanted elements",
            gradient: "from-orange-500 to-red-500"
        },
        {
            id: 8,
            icon: CheckCircle,
            title: "Finalizing Results",
            description: "Preparing your masterpiece",
            gradient: "from-indigo-500 to-purple-600"
        }
    ];

    useEffect(() => {
        if (!isVisible) {
            setCurrentStage(0);
            return;
        }

        const timer = setInterval(() => {
            setCurrentStage((prev) => {
                if (prev < stages.length) {
                    return prev + 1;
                }
                return prev;
            });
        }, 7000);

        return () => clearInterval(timer);
    }, [isVisible, stages.length]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="mt-6 w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
        >
            {/* Current Stage Display */}
            <AnimatePresence mode="wait">
                {currentStage > 0 && currentStage <= stages.length && (
                    <motion.div
                        key={currentStage}
                        initial={{ 
                            opacity: 0, 
                            scale: 0.8,
                            rotateX: -90,
                            filter: "blur(20px)"
                        }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1,
                            rotateX: 0,
                            filter: "blur(0px)"
                        }}
                        exit={{ 
                            opacity: 0, 
                            scale: 1.1,
                            rotateX: 90,
                            filter: "blur(20px)"
                        }}
                        transition={{
                            duration: 1.2,
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                        }}
                        className="flex items-center space-x-4 p-6 rounded-2xl glass ring-2 ring-primary/30 shadow-2xl hover-lift"
                        style={{
                            background: `linear-gradient(135deg, rgba(138, 92, 246, 0.15), rgba(168, 85, 247, 0.15))`,
                            backdropFilter: "blur(20px)"
                        }}
                    >
                        <motion.div
                            className={`
                                p-4 rounded-xl bg-gradient-to-br ${stages[currentStage - 1].gradient}
                                shadow-2xl flex items-center justify-center relative overflow-hidden
                            `}
                            animate={{
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.15, 1],
                                boxShadow: [
                                    "0 8px 25px rgba(0, 0, 0, 0.3)",
                                    "0 12px 35px rgba(138, 92, 246, 0.6)",
                                    "0 8px 25px rgba(0, 0, 0, 0.3)"
                                ]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            {/* Animated background overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                                animate={{
                                    x: ["-100%", "100%"],
                                    opacity: [0, 0.7, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            
                            <stages[currentStage - 1].icon 
                                className="w-8 h-8 text-white relative z-10" 
                                style={{
                                    filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))'
                                }}
                            />
                        </motion.div>
                        
                        <div className="flex-1 min-w-0">
                            <motion.h4 
                                className="font-bold text-lg text-gradient mb-2"
                                animate={{
                                    background: [
                                        "linear-gradient(45deg, rgb(138, 92, 246), rgb(168, 85, 247))",
                                        "linear-gradient(45deg, rgb(168, 85, 247), rgb(59, 130, 246))",
                                        "linear-gradient(45deg, rgb(59, 130, 246), rgb(138, 92, 246))"
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                                style={{
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundSize: "200% 100%"
                                }}
                            >
                                {stages[currentStage - 1].title}
                            </motion.h4>
                            <motion.p 
                                className="text-sm text-muted-foreground leading-relaxed"
                                animate={{
                                    opacity: [0.8, 1, 0.8]
                                }}
                                transition={{ 
                                    duration: 2.5, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {stages[currentStage - 1].description}
                            </motion.p>
                        </div>
                        
                        {/* Animated pulse indicator */}
                        <motion.div
                            className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent relative"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent"
                                animate={{
                                    scale: [1, 2, 1],
                                    opacity: [0.8, 0, 0.8]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeOut"
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Enhanced Progress bar */}
            <motion.div
                className="mt-8 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                {/* Background track */}
                <motion.div
                    className="h-3 bg-gradient-to-r from-muted/30 to-muted/50 rounded-full overflow-hidden backdrop-blur-sm border border-border/20"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {/* Progress fill */}
                    <motion.div
                        className="h-full rounded-full relative overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: `${(currentStage / stages.length) * 100}%` }}
                        transition={{ 
                            duration: 1.5,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 100
                        }}
                        style={{
                            background: `linear-gradient(90deg, 
                                rgb(138, 92, 246) 0%, 
                                rgb(168, 85, 247) 25%,
                                rgb(59, 130, 246) 50%,
                                rgb(168, 85, 247) 75%,
                                rgb(138, 92, 246) 100%
                            )`,
                            backgroundSize: "300% 100%"
                        }}
                    >
                        {/* Animated shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                                x: ["-100%", "100%"],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                        
                        {/* Moving gradient */}
                        <motion.div
                            className="h-full w-full"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                background: "inherit",
                                backgroundSize: "inherit"
                            }}
                        />
                    </motion.div>
                </motion.div>
                
                {/* Progress percentage */}
                <motion.div
                    className="absolute -top-8 right-0 text-xs font-semibold text-primary"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    {Math.round((currentStage / stages.length) * 100)}%
                </motion.div>
            </motion.div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/40 rounded-full"
                        animate={{
                            x: [0, Math.random() * 200 - 100],
                            y: [0, Math.random() * 200 - 100],
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.5, 0]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut"
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default ProgressStages;
