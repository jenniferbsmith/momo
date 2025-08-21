'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, ExternalLink, Heart, Download, Sparkles, Zap, Star, Award, Eye, Layers, Filter, Grid3X3, Grid2X2 } from 'lucide-react';

const ExamplesPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry' | 'collage'>('collage');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorXSpring = useSpring(mouseX);
  const cursorYSpring = useSpring(mouseY);
  const containerRef = useRef<HTMLDivElement>(null);

  const examples = [
    {
      id: 1,
      src: '/examples/hq720_cleanup.jpg',
      title: 'Nature Adventure',
      category: 'nature',
      description: 'Stunning nature scene with beautiful text overlay',
      featured: true,
      size: 'large'
    },
    {
      id: 2,
      src: '/examples/maxresdefault.jpg',
      title: 'Urban Lifestyle',
      category: 'lifestyle',
      description: 'Modern city vibes with elegant typography',
      featured: false,
      size: 'medium'
    },
    {
      id: 3,
      src: '/examples/povafter.webp',
      title: 'After Effect',
      category: 'creative',
      description: 'Creative text behind image effect demonstration',
      featured: true,
      size: 'large'
    },
    {
      id: 4,
      src: '/examples/text-behind-image-example.webp',
      title: 'Text Behind Magic',
      category: 'example',
      description: 'Perfect example of text behind image technique',
      featured: true,
      size: 'medium'
    },
    {
      id: 5,
      src: '/examples/hq720 (1)_cleanup.jpg',
      title: 'Professional Design',
      category: 'business',
      description: 'Clean and professional text layout',
      featured: false,
      size: 'small'
    },
    {
      id: 6,
      src: '/examples/hq720 (2)_cleanup.jpg',
      title: 'Artistic Expression',
      category: 'creative',
      description: 'Artistic text placement with stunning visuals',
      featured: false,
      size: 'medium'
    },
    {
      id: 7,
      src: '/examples/hq720 (3).jpg',
      title: 'Dynamic Energy',
      category: 'sports',
      description: 'High energy design with bold typography',
      featured: true,
      size: 'large'
    },
    {
      id: 8,
      src: '/examples/hq720 (4).jpg',
      title: 'Elegant Simplicity',
      category: 'lifestyle',
      description: 'Minimalist approach with maximum impact',
      featured: false,
      size: 'small'
    },
    {
      id: 9,
      src: '/examples/hq720 (5).jpg',
      title: 'Bold Statement',
      category: 'creative',
      description: 'Making a statement with powerful text design',
      featured: false,
      size: 'medium'
    },
    {
      id: 10,
      src: '/examples/maxresdefault (1).jpg',
      title: 'Cinematic Feel',
      category: 'entertainment',
      description: 'Movie-like text behind image effect',
      featured: false,
      size: 'large'
    },
    {
      id: 11,
      src: '/examples/123.jpg',
      title: 'Modern Architecture',
      category: 'architecture',
      description: 'Sleek architectural design with text integration',
      featured: false,
      size: 'medium'
    },
    {
      id: 12,
      src: '/examples/1234.jpg',
      title: 'Vintage Vibes',
      category: 'vintage',
      description: 'Retro aesthetic with modern text effects',
      featured: false,
      size: 'small'
    },
    {
      id: 13,
      src: '/examples/maxresdefault (2).jpg',
      title: 'Tech Innovation',
      category: 'tech',
      description: 'Cutting-edge technology with futuristic text',
      featured: true,
      size: 'large'
    },
    {
      id: 14,
      src: '/examples/maxresdefault (3).jpg',
      title: 'Ocean Dreams',
      category: 'nature',
      description: 'Serene ocean views with flowing text design',
      featured: false,
      size: 'medium'
    },
    {
      id: 15,
      src: '/examples/hq720 (7).jpg',
      title: 'Street Art',
      category: 'art',
      description: 'Urban art meets digital typography',
      featured: false,
      size: 'small'
    }
  ];

  const categories = [
    { id: 'all', label: '✨ All Examples', count: examples.length, icon: Sparkles },
    { id: 'creative', label: '🎨 Creative', count: examples.filter(e => e.category === 'creative').length, icon: Star },
    { id: 'lifestyle', label: '🌟 Lifestyle', count: examples.filter(e => e.category === 'lifestyle').length, icon: Heart },
    { id: 'nature', label: '🌿 Nature', count: examples.filter(e => e.category === 'nature').length, icon: Zap },
    { id: 'business', label: '💼 Business', count: examples.filter(e => e.category === 'business').length, icon: Award },
    { id: 'sports', label: '⚡ Sports', count: examples.filter(e => e.category === 'sports').length, icon: Zap },
    { id: 'tech', label: '🚀 Tech', count: examples.filter(e => e.category === 'tech').length, icon: Star },
    { id: 'art', label: '🎭 Art', count: examples.filter(e => e.category === 'art').length, icon: Eye }
  ];

  const filteredExamples = filter === 'all' 
    ? examples 
    : examples.filter(example => example.category === filter);

  // Preload and optimize images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = examples.map(example => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = example.src;
        });
      });
      
      try {
        await Promise.all(imagePromises);
        setTimeout(() => setIsLoading(false), 800); // Add slight delay for smooth transition
      } catch (error) {
        console.log('Some images failed to load:', error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  // Mouse tracking for cursor effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  const handleLike = (id: number) => {
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getGridClass = (size: string) => {
    switch (size) {
      case 'large': return 'md:col-span-2 md:row-span-2';
      case 'medium': return 'md:col-span-1 md:row-span-1';
      case 'small': return 'md:col-span-1 md:row-span-1';
      default: return 'md:col-span-1 md:row-span-1';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
              opacity: [0, 0.6, 0],
              scale: [0, 2, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button asChild variant="outline" size="sm">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Link href="/welcome">
                  <Play className="w-4 h-4 mr-2" />
                  Try Now
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Stunning Examples
            </span>
            <br />
            <span className="text-foreground">That Inspire</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover the magic of text-behind-image design with our curated collection of stunning examples
          </motion.p>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                    : 'bg-background border border-border hover:border-primary/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label} ({category.count})
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Advanced Collage Gallery */}
        <div ref={containerRef} className="relative">
          {/* View Mode Toggle */}
          <motion.div 
            className="flex justify-center mb-8 gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { id: 'collage', icon: Layers, label: 'Collage' },
              { id: 'grid', icon: Grid3X3, label: 'Grid' },
              { id: 'masonry', icon: Grid2X2, label: 'Masonry' }
            ].map((mode) => (
              <motion.button
                key={mode.id}
                onClick={() => setViewMode(mode.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  viewMode === mode.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                    : 'bg-background/50 border border-border hover:border-primary/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <mode.icon className="w-4 h-4" />
                {mode.label}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            {!isLoading && (
              <motion.div
                key={`${filter}-${viewMode}`}
                className={`${
                  viewMode === 'collage' 
                    ? 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-max'
                    : viewMode === 'masonry'
                    ? 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'
                    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                }`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {filteredExamples.map((example, index) => {
                  const isLiked = likedImages.has(example.id);
                  const aspectClass = example.size === 'large' ? 'aspect-[4/5]' : 
                                     example.size === 'medium' ? 'aspect-square' : 'aspect-[3/4]';
                  
                  return (
                    <motion.div
                      key={example.id}
                      variants={itemVariants}
                      className={`group cursor-pointer relative ${
                        viewMode === 'collage' 
                          ? `${getGridClass(example.size)} ${
                              example.featured ? 'ring-2 ring-primary/30 ring-offset-2' : ''
                            }`
                          : viewMode === 'masonry'
                          ? 'break-inside-avoid mb-6'
                          : 'aspect-video'
                      }`}
                      onMouseEnter={() => setHoveredId(example.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      whileHover={{ 
                        scale: viewMode === 'collage' ? 1.02 : 1.05, 
                        y: -8,
                        rotateY: viewMode === 'collage' ? (Math.random() - 0.5) * 6 : 0,
                        rotateX: viewMode === 'collage' ? (Math.random() - 0.5) * 6 : 0,
                        transition: { 
                          duration: 0.4,
                          type: "spring",
                          stiffness: 400,
                          damping: 30
                        }
                      }}
                      onClick={() => setSelectedImage(example.src)}
                    >
                      {/* Floating Effects */}
                      <AnimatePresence>
                        {hoveredId === example.id && (
                          <motion.div
                            className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </AnimatePresence>

                      <div className={`relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-sm ${aspectClass} ${
                        viewMode === 'masonry' ? 'h-auto' : ''
                      }`}>
                        <Image
                          src={example.src}
                          alt={example.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-all duration-700 group-hover:brightness-110"
                          loading={index < 6 ? 'eager' : 'lazy'}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        
                        {/* Gradient Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />

                        {/* Featured Badge */}
                        {example.featured && (
                          <motion.div
                            className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 500, damping: 15 }}
                          >
                            <Star className="w-3 h-3" />
                            FEATURED
                          </motion.div>
                        )}

                        {/* Interactive Elements */}
                        <AnimatePresence>
                          {hoveredId === example.id && (
                            <motion.div
                              className="absolute top-4 left-4 flex flex-col gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3, staggerChildren: 0.1 }}
                            >
                              <motion.button
                                className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                                  isLiked 
                                    ? 'bg-red-500/90 text-white' 
                                    : 'bg-white/20 text-white hover:bg-white/30'
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleLike(example.id);
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                              >
                                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                              </motion.button>
                              
                              <motion.button
                                className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Add download functionality
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                              >
                                <Download className="w-4 h-4" />
                              </motion.button>
                              
                              <motion.button
                                className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open('/welcome', '_blank');
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </motion.button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        {/* Content Overlay */}
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-all duration-500"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: hoveredId === example.id ? 1 : 0, y: hoveredId === example.id ? 0 : 20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="mb-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: hoveredId === example.id ? 1 : 0, y: hoveredId === example.id ? 0 : 10 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                          >
                            <h3 className="font-bold text-xl mb-2 text-shadow">{example.title}</h3>
                            <p className="text-sm text-white/90 leading-relaxed text-shadow-sm">{example.description}</p>
                          </motion.div>
                          
                          <motion.div 
                            className="flex items-center justify-between"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: hoveredId === example.id ? 1 : 0, y: hoveredId === example.id ? 0 : 10 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                          >
                            <span className="px-3 py-1 bg-gradient-to-r from-primary/30 to-accent/30 backdrop-blur-md rounded-full text-xs font-semibold border border-white/20">
                              #{example.category}
                            </span>
                            
                            <span className="text-xs text-white/70 font-medium">
                              {example.size.toUpperCase()}
                            </span>
                          </motion.div>
                        </motion.div>

                        {/* Animated Shimmer Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                          style={{
                            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)'
                          }}
                        />

                        {/* Particle Effects */}
                        <AnimatePresence>
                          {hoveredId === example.id && viewMode === 'collage' && (
                            <>
                              {[...Array(8)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-1 h-1 bg-white/60 rounded-full pointer-events-none"
                                  initial={{ 
                                    opacity: 0, 
                                    scale: 0,
                                    x: Math.random() * 300 - 150,
                                    y: Math.random() * 300 - 150
                                  }}
                                  animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, Math.random() * 2 + 1, 0],
                                    x: Math.random() * 200 - 100,
                                    y: Math.random() * 200 - 100,
                                    rotate: Math.random() * 360
                                  }}
                                  exit={{ opacity: 0, scale: 0 }}
                                  transition={{
                                    duration: 2 + Math.random() * 2,
                                    delay: Math.random() * 0.5,
                                    repeat: Infinity,
                                    repeatDelay: Math.random() * 3
                                  }}
                                  style={{
                                    left: '50%',
                                    top: '50%',
                                  }}
                                />
                              ))}
                            </>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <p className="text-muted-foreground">Loading amazing examples...</p>
            </motion.div>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20 py-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl backdrop-blur-sm border border-border/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Create Your Own?
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Start creating stunning text-behind-image designs just like these examples
          </motion.p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              asChild
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              <Link href="/welcome">
                Get Started Now
                <Play className="w-6 h-6 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal for enlarged view */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Example"
                fill
                className="object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExamplesPage;
