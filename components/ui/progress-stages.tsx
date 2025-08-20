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
            <motion.div
                className="flex flex-col space-y-3"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {stages.map((stage, index) => {
                    const isActive = index < currentStage;
                    const isCurrent = index === currentStage - 1;
                    
                    return (
                        <AnimatePresence key={stage.id}>
                            {index < currentStage && (
                                <motion.div
                                    initial={{ 
                                        opacity: 0, 
                                        x: -50, 
                                        scale: 0.8,
                                        filter: "blur(10px)"
                                    }}
                                    animate={{ 
                                        opacity: isCurrent ? 1 : 0.6, 
                                        x: 0, 
                                        scale: isCurrent ? 1 : 0.95,
                                        filter: "blur(0px)"
                                    }}
                                    exit={{ 
                                        opacity: 0, 
                                        x: 50, 
                                        scale: 0.8,
                                        filter: "blur(5px)"
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10
                                    }}
                                    className={`
                                        flex items-center space-x-3 p-3 rounded-xl glass
                                        ${isCurrent ? 'ring-2 ring-primary/50 shadow-lg' : 'shadow-md'}
                                        hover-lift transition-all duration-300
                                    `}
                                    style={{
                                        background: isCurrent 
                                            ? `linear-gradient(135deg, rgba(138, 92, 246, 0.1), rgba(168, 85, 247, 0.1))`
                                            : 'rgba(255, 255, 255, 0.02)'
                                    }}
                                >
                                    <motion.div
                                        className={`
                                            p-2 rounded-lg bg-gradient-to-br ${stage.gradient}
                                            shadow-lg flex items-center justify-center
                                        `}
                                        animate={isCurrent ? {
                                            rotate: [0, 10, -10, 0],
                                            scale: [1, 1.1, 1],
                                            boxShadow: [
                                                "0 4px 15px rgba(0, 0, 0, 0.2)",
                                                "0 8px 25px rgba(138, 92, 246, 0.4)",
                                                "0 4px 15px rgba(0, 0, 0, 0.2)"
                                            ]
                                        } : {
                                            opacity: [1, 0.7, 1]
                                        }}
                                        transition={{
                                            duration: isCurrent ? 2 : 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <stage.icon 
                                            className="w-5 h-5 text-white" 
                                            style={{
                                                filter: isCurrent ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))' : 'none'
                                            }}
                                        />
                                    </motion.div>
                                    
                                    <div className="flex-1 min-w-0">
                                        <motion.h4 
                                            className={`
                                                font-semibold text-sm 
                                                ${isCurrent ? 'text-gradient' : 'text-foreground/80'}
                                            `}
                                            animate={isCurrent ? {
                                                background: [
                                                    "linear-gradient(45deg, rgb(138, 92, 246), rgb(168, 85, 247))",
                                                    "linear-gradient(45deg, rgb(168, 85, 247), rgb(138, 92, 246))",
                                                    "linear-gradient(45deg, rgb(138, 92, 246), rgb(168, 85, 247))"
                                                ]
                                            } : {}}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            style={{
                                                backgroundClip: isCurrent ? 'text' : 'initial',
                                                WebkitBackgroundClip: isCurrent ? 'text' : 'initial',
                                                WebkitTextFillColor: isCurrent ? 'transparent' : 'initial'
                                            }}
                                        >
                                            {stage.title}
                                        </motion.h4>
                                        <motion.p 
                                            className="text-xs text-muted-foreground"
                                            animate={isCurrent ? {
                                                opacity: [0.7, 1, 0.7]
                                            } : {
                                                opacity: 0.5
                                            }}
                                            transition={{ 
                                                duration: 2, 
                                                repeat: isCurrent ? Infinity : 0 
                                            }}
                                        >
                                            {stage.description}
                                        </motion.p>
                                    </div>
                                    
                                    {isCurrent && (
                                        <motion.div
                                            className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"
                                            animate={{
                                                scale: [0, 1.5, 0],
                                                opacity: [0, 1, 0]
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    )}
                                    
                                    {!isCurrent && isActive && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-2 h-2 rounded-full bg-green-500"
                                            style={{
                                                boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)"
                                            }}
                                        />
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    );
                })}
            </motion.div>
            
            {/* Progress bar */}
            <motion.div
                className="mt-4 h-2 bg-muted/20 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <motion.div
                    className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStage / stages.length) * 100}%` }}
                    transition={{ 
                        duration: 1.2,
                        ease: "easeOut"
                    }}
                    style={{
                        background: `linear-gradient(90deg, 
                            rgb(138, 92, 246) 0%, 
                            rgb(168, 85, 247) 50%, 
                            rgb(138, 92, 246) 100%
                        )`,
                        backgroundSize: "200% 100%"
                    }}
                >
                    <motion.div
                        className="h-full w-full"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{
                            duration: 3,
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
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/30 rounded-full"
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
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
