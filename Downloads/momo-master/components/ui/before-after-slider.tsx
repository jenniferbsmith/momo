'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface BeforeAfterSliderProps {
  className?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [dragValue, setDragValue] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  // Curated before/after pairs
  const beforeAfterPairs = [
    {
      before: "/images/before-after/text-behind-image.jpg",
      after: "/images/before-after/text-behind-image-ai.webp",
      title: "Fearless Adventure",
      description: "Transform vehicle photography with stunning text-behind effects"
    },
    {
      before: "/images/before-after/Screenshot 2025-08-16 142101.jpg", 
      after: "/images/before-after/nature.png",
      title: "Nature Photography",
      description: "Bring life to natural landscapes with artistic text integration"
    },
    {
      before: "/images/before-after/Screenshot 2025-08-16 142135.jpg",
      after: "/images/before-after/bear.png", 
      title: "Wildlife Artistry",
      description: "Create captivating wildlife compositions with professional text effects"
    },
    {
      before: "/images/before-after/Screenshot 2025-08-16 141900.jpg",
      after: "/images/before-after/sf.png",
      title: "Urban Scenes",
      description: "Transform cityscapes with dynamic text-behind-image designs"
    }
  ];

  useEffect(() => {
    if (!isPlaying || isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % beforeAfterPairs.length);
      setDragValue(50); // Reset slider position
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, beforeAfterPairs.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterPairs.length);
    setDragValue(50);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterPairs.length) % beforeAfterPairs.length);
    setDragValue(50);
  };

  const currentPair = beforeAfterPairs[currentIndex];

  return (
    <div className={`relative w-full max-w-3xl mx-auto ${className}`}>
      {/* Main Container */}
      <motion.div
        className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-xl border border-border/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Header */}
        <motion.div 
          className="p-6 border-b border-border/20 bg-gradient-to-r from-primary/5 to-accent/5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200% 100%" }}
          >
            Before & After Showcase
          </motion.h3>
          <motion.p 
            className="text-center text-muted-foreground mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            See the magic of AI-powered text-behind-image creation
          </motion.p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-muted/20 to-muted/40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              {/* Before Image */}
              <div className="absolute inset-0">
                <Image
                  src={currentPair.before}
                  alt="Before"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-red-500/90 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                  Before
                </div>
              </div>

              {/* After Image with Mask */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - dragValue}% 0 0)`
                }}
                animate={{
                  clipPath: `inset(0 ${100 - dragValue}% 0 0)`
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Image
                  src={currentPair.after}
                  alt="After"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/90 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                  After
                </div>
              </motion.div>

              {/* Draggable Divider */}
              <motion.div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-lg"
                style={{ left: `${dragValue}%` }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0}
                onDrag={(_, info) => {
                  const rect = info.point.x;
                  const container = (info.point.x / window.innerWidth) * 100;
                  setDragValue(Math.max(0, Math.min(100, container)));
                }}
                whileHover={{ scale: 1.1 }}
                whileDrag={{ scale: 1.2 }}
              >
                {/* Handle */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-primary/20"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(138, 92, 246, 0.5)" }}
                  whileDrag={{ scale: 1.2, boxShadow: "0 0 30px rgba(138, 92, 246, 0.7)" }}
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <ChevronLeft className="w-3 h-3 text-white" />
                      <ChevronRight className="w-3 h-3 text-white ml-1" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Auto-play toggle */}
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full backdrop-blur-sm z-20 hover:bg-black/70 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </motion.button>
        </div>

        {/* Content */}
        <motion.div 
          className="p-6 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h4 className="text-xl font-bold text-gradient mb-2">
                {currentPair.title}
              </h4>
              <p className="text-muted-foreground">
                {currentPair.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
          <motion.button
            onClick={prevSlide}
            className="ml-4 p-3 bg-black/50 text-white rounded-full backdrop-blur-sm pointer-events-auto hover:bg-black/70 transition-colors z-20"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="mr-4 p-3 bg-black/50 text-white rounded-full backdrop-blur-sm pointer-events-auto hover:bg-black/70 transition-colors z-20"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {beforeAfterPairs.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setDragValue(50);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={index === currentIndex ? {
                boxShadow: ["0 0 0 0 rgba(138, 92, 246, 0.7)", "0 0 0 10px rgba(138, 92, 246, 0)"]
              } : {}}
              transition={{ duration: 1.5, repeat: index === currentIndex ? Infinity : 0 }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 0.6, 0],
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
    </div>
  );
};

export default BeforeAfterSlider;
