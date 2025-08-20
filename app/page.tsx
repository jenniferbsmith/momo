'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BeforeAfterSlider from '@/components/ui/before-after-slider';
import FAQSection from '@/components/faq-section';
import { 
  Sparkles, Wand2, Zap, Type, ArrowRight, Star, Users, Image as ImageIcon, 
  Palette, Brain, Eye, CheckCircle, Play, ChevronDown, ChevronUp, ArrowUp,
  Clock, Shield, Layers, Download, Camera, Smartphone
} from 'lucide-react';

import '@/app/fonts.css';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const galleryImages = [
    { src: '/images/gallery/beauty.png', title: 'Beauty Portrait', category: 'Portrait' },
    { src: '/images/gallery/serenity.png', title: 'Serenity Landscape', category: 'Nature' },
    { src: '/images/gallery/grace.png', title: 'Graceful Design', category: 'Artistic' },
    { src: '/images/gallery/explore.png', title: 'Adventure Spirit', category: 'Travel' },
    { src: '/images/gallery/f1.png', title: 'Speed Racing', category: 'Sports' },
    { src: '/images/gallery/katana.png', title: 'Warrior Spirit', category: 'Action' },
    { src: '/images/gallery/nostalgic.png', title: 'Nostalgic Moments', category: 'Vintage' },
    { src: '/images/gallery/peace.png', title: 'Peaceful Scene', category: 'Zen' },
    { src: '/images/gallery/timeless.png', title: 'Timeless Beauty', category: 'Classic' }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Processing",
      description: "Advanced machine learning algorithms automatically detect and separate background elements with pixel-perfect precision.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process images in seconds, not minutes. Our optimized engine delivers professional results at unprecedented speed.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Type,
      title: "Professional Typography",
      description: "Access premium fonts, advanced text effects, 3D transformations, and complete creative control over your designs.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Layers,
      title: "Smart Layer Management",
      description: "Intelligent layering system that automatically positions text behind objects while maintaining visual hierarchy.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: "Color Harmony",
      description: "AI-suggested color palettes that complement your images perfectly, ensuring professional-grade visual appeal.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Download,
      title: "Export Excellence",
      description: "Download in multiple formats and resolutions. From social media to print-ready files, we've got you covered.",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  const stats = [
    { number: "2M+", label: "Images Created", icon: ImageIcon },
    { number: "45%", label: "Faster than Photoshop", icon: Zap },
    { number: "280+", label: "Happy Creators", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield }
  ];

  const howToSteps = [
    {
      step: "01",
      title: "Upload Your Image",
      description: "Simply drag and drop or click to upload any JPG, PNG, or WEBP image. Our AI instantly begins analyzing your photo.",
      icon: Camera
    },
    {
      step: "02", 
      title: "Add Your Text",
      description: "Type your message and customize fonts, colors, size, and effects. Use our advanced typography controls for perfect results.",
      icon: Type
    },
    {
      step: "03",
      title: "AI Magic Happens",
      description: "Our intelligent algorithms automatically position your text behind objects, creating stunning depth and professional appeal.",
      icon: Wand2
    },
    {
      step: "04",
      title: "Download & Share",
      description: "Export your masterpiece in high resolution. Perfect for social media, marketing, or professional presentations.",
      icon: Download
    }
  ];

  const faqs = [
    {
      question: "What is text behind image effect and how does it work?",
      answer: "Text behind image is a popular design technique where text appears to go behind objects in a photo, creating depth and visual interest. Our AI automatically detects objects in your image and intelligently positions text layers to create this professional effect without manual masking or complex editing."
    },
    {
      question: "Do I need design experience to create text behind image effects?",
      answer: "Not at all! Our intuitive interface makes it easy for anyone to create professional text behind image designs. Simply upload your photo, add text, and our AI handles the complex background separation automatically. No Photoshop skills required."
    },
    {
      question: "What image formats are supported for text behind image creation?",
      answer: "We support all popular image formats including JPG, JPEG, PNG, and WEBP. For best results with text behind image effects, use high-resolution photos with clear subject separation from the background."
    },
    {
      question: "Can I create text behind image effects on mobile devices?",
      answer: "Yes! Our text behind image editor is fully responsive and optimized for mobile devices. Create stunning designs on your phone or tablet with the same powerful AI processing and professional results."
    },
    {
      question: "How accurate is the AI for text behind image positioning?",
      answer: "Our advanced AI achieves 99%+ accuracy in object detection and text positioning for text behind image effects. The system continuously learns and improves, delivering professional-quality results that rival manual editing."
    },
    {
      question: "Can I customize fonts and colors for text behind image designs?",
      answer: "Absolutely! Choose from hundreds of premium fonts, unlimited colors, text effects, shadows, 3D transformations, and more. Our text behind image editor gives you complete creative control while maintaining ease of use."
    },
    {
      question: "Is there a limit to how many text behind image designs I can create?",
      answer: "Create unlimited text behind image designs! There are no restrictions on the number of projects you can make. Perfect for content creators, marketers, and designers who need frequent text behind image effects."
    },
    {
      question: "How do I download my text behind image creations?",
      answer: "Simply click the download button to save your text behind image design in high resolution PNG format. Your creation maintains full quality and transparency, perfect for any use case."
    }
  ];

  return (
    <>
      {/* SEO Meta Tags - handled in layout.tsx */}
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              animate={{
                x: [0, Math.random() * 300 - 150],
                y: [0, Math.random() * 300 - 150],
                opacity: [0, 0.6, 0],
                scale: [0, 2, 0]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
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

        {/* Navigation Header */}
        <motion.header 
          className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/20"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent text-white"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Wand2 className="w-6 h-6" />
              </motion.div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Text Behind Image
                </h2>
                <p className="text-xs text-muted-foreground hidden md:block">
                  Professional AI-Powered Editor
                </p>
              </div>
            </motion.div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/welcome" className="text-muted-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Link href="/welcome">
                  Get Started <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="mb-6"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary via-accent to-primary rounded-3xl flex items-center justify-center shadow-2xl">
                <Wand2 className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Create Stunning
              </span>
              <br />
              <span className="text-foreground">Text Behind Images</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Professional AI-powered editor for creating breathtaking text-behind-image designs. 
              No layers, no manual masking - just upload, edit, and create pro-level designs in seconds.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild
                  size="lg" 
                  className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <Link href="/welcome">
                    <Play className="w-5 h-5 mr-2" />
                    Get Started Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 border-primary/50 hover:bg-primary/10"
                  onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View Examples
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-xl glass hover-lift"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="mx-auto mb-2 p-2 w-fit rounded-lg bg-primary/10"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <stat.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Before/After Showcase */}
        <section id="showcase" className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
                See the Magic in Action
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Witness the transformation from ordinary photos to extraordinary text-behind-image masterpieces
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <BeforeAfterSlider className="max-w-4xl mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
                Why Choose Text Behind Image?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional tools, zero learning curve. Built for creators who demand excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-6 rounded-2xl glass border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-gradient">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-r from-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
                How to Create Text Behind Image
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Master the art of text behind image design in four simple steps
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howToSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold text-sm">
                      {step.step}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gradient">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  
                  {index < howToSteps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-10 -right-4 text-primary/30"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section id="gallery" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
                Gallery of Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover stunning text behind image creations from our community of designers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-bold text-lg">{image.title}</h3>
                      <p className="text-sm text-white/80">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Award-Winning Interactive FAQ */}
        <FAQSection />

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 backdrop-blur-sm border border-border/20"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
                Ready to Create Magic?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are already making stunning text behind image designs
              </p>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild
                  size="lg" 
                  className="text-xl px-12 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-2xl hover:shadow-3xl transition-all duration-500"
                >
                  <Link href="/welcome">
                    Start Creating Now
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border/20 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                    <Wand2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gradient">Text Behind Image</h3>
                    <p className="text-sm text-muted-foreground">Professional AI Editor</p>
                  </div>
                </div>
                <p className="text-muted-foreground max-w-md">
                  Create professional text-behind-image designs with our AI-powered editor. 
                  No technical skills required - just upload, edit, and create.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <div className="space-y-2">
                  <Link href="/welcome" className="block text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </Link>
                  <Link href="#gallery" className="block text-muted-foreground hover:text-primary transition-colors">
                    Gallery
                  </Link>
                  <Link href="#faq" className="block text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <div className="space-y-2">
                  <Link href="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="block text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border/20 mt-8 pt-8 text-center text-muted-foreground">
              <p>&copy; 2025 Text Behind Image. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-2xl z-50 hover:shadow-3xl transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default HomePage;
