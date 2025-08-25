'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Sparkles, Wand2, Image, Zap, Shield, Star, Award, Lightbulb, Users, Crown } from 'lucide-react';

const faqData = [
  {
    id: 'text-behind-image',
    question: 'What is text behind image effect and how does it work?',
    answer: 'Text behind image effect is a stunning visual design technique where text appears to be positioned behind objects in a photo, creating incredible depth and professional appeal. Our AI-powered text behind image editor automatically detects the main subject in your photo using advanced machine learning algorithms, removes the background with pixel-perfect precision, and intelligently positions your text behind the subject. This creates a captivating text behind image design that makes your content stand out on social media, marketing materials, and creative projects.',
    icon: Image,
    category: 'basics'
  },
  {
    id: 'ai-text-behind-image',
    question: 'How does the AI text behind image generator create professional results?',
    answer: 'Our award-winning AI text behind image generator uses cutting-edge computer vision and machine learning technology to analyze your photos with incredible precision. The AI identifies foreground subjects, removes backgrounds automatically, and creates perfect text behind image effects in seconds. The system recognizes people, objects, animals, and complex shapes with 99.5% accuracy, ensuring your text behind image designs look professionally crafted every time. No manual editing required - just upload, add text, and watch the AI create stunning text behind image effects instantly.',
    icon: Wand2,
    category: 'ai'
  },
  {
    id: 'free-text-behind-image',
    question: 'Is the text behind image editor completely free to use?',
    answer: 'Yes! Our text behind image editor is completely free to use with no hidden costs or signup requirements. You can create unlimited text behind image designs, download high-quality results, and use them for personal or commercial projects. We believe everyone should have access to professional text behind image creation tools. While we offer premium features like ultra-high resolution exports, advanced fonts, and batch processing for power users, the core text behind image functionality remains free forever.',
    icon: Crown,
    category: 'pricing'
  },
  {
    id: 'text-behind-image-tutorial',
    question: 'How do I create text behind image effects step by step?',
    answer: 'Creating stunning text behind image effects is incredibly simple with our AI-powered editor: Step 1: Upload your photo (JPG, PNG, WEBP supported). Step 2: Our AI automatically removes the background and identifies the main subject. Step 3: Add your text using our extensive font library with 200+ professional typefaces. Step 4: Customize colors, size, effects, and positioning. Step 5: Preview your text behind image design in real-time. Step 6: Download your professional text behind image creation in high resolution. The entire process takes less than 60 seconds!',
    icon: Lightbulb,
    category: 'tutorial'
  },
  {
    id: 'best-text-behind-image',
    question: 'What makes this the best text behind image tool available?',
    answer: 'Our text behind image editor is considered the industry leader for several reasons: ⭐ 99.5% AI accuracy for perfect background removal ⭐ 200+ professional fonts and typography options ⭐ Real-time preview and instant processing ⭐ Mobile-optimized for editing on any device ⭐ No watermarks or signup required ⭐ Commercial usage rights included ⭐ Award-winning user interface design ⭐ Trusted by 50,000+ creators worldwide ⭐ Regular updates with new features ⭐ 24/7 customer support. Used by top brands, influencers, and creative professionals globally.',
    icon: Award,
    category: 'features'
  },
  {
    id: 'text-behind-image-formats',
    question: 'What image formats work with the text behind image editor?',
    answer: 'Our versatile text behind image editor supports all popular image formats for maximum compatibility: ✅ JPEG/JPG - Perfect for photos and complex images ✅ PNG - Ideal for images with transparency ✅ WEBP - Modern format with excellent compression ✅ HEIC - Apple\'s high-efficiency format ✅ BMP - Windows bitmap format ✅ TIFF - High-quality professional format. Upload images up to 50MB in size and up to 8K resolution. Export your text behind image creations in PNG (with transparency) or JPEG formats optimized for web, print, or social media use.',
    icon: Zap,
    category: 'technical'
  },
  {
    id: 'text-behind-image-commercial',
    question: 'Can I use text behind image designs for commercial projects?',
    answer: 'Absolutely! All text behind image designs created with our editor come with full commercial usage rights. Use your text behind image creations for: 📈 Marketing campaigns and advertisements 📈 Social media content and posts 📈 Website banners and headers 📈 Print materials and brochures 📈 Product packaging and labels 📈 Digital and physical merchandise 📈 Client projects and freelance work 📈 Business presentations and proposals. No attribution required, no licensing fees, complete creative freedom for your text behind image designs.',
    icon: Users,
    category: 'licensing'
  },
  {
    id: 'text-behind-image-mobile',
    question: 'Does the text behind image editor work on mobile devices?',
    answer: 'Yes! Our text behind image editor is fully optimized for mobile devices with a responsive, touch-friendly interface. Create stunning text behind image effects on your phone or tablet with: 📱 Full-featured mobile editor 📱 Touch gestures for easy text positioning 📱 Mobile-optimized AI processing 📱 Quick sharing to social media 📱 Offline editing capabilities 📱 Cross-device synchronization 📱 Works on iOS, Android, and all browsers. The mobile experience is just as powerful as desktop, ensuring you can create professional text behind image designs anywhere, anytime.',
    icon: Shield,
    category: 'mobile'
  },
  {
    id: 'text-behind-image-tips',
    question: 'What are the best practices for creating amazing text behind image effects?',
    answer: 'Create award-winning text behind image designs with these professional tips: 🎨 Choose high-contrast photos with clear subjects 🎨 Use bold, readable fonts that complement the image 🎨 Ensure text color contrasts well with the background 🎨 Position text to enhance the composition 🎨 Keep text concise and impactful 🎨 Use consistent branding colors 🎨 Test different font sizes and weights 🎨 Consider the final usage context 🎨 Experiment with text effects and shadows 🎨 Preview on different devices before finalizing. Follow these guidelines to create text behind image designs that captivate and convert.',
    icon: Star,
    category: 'tips'
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['text-behind-image']));
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const categories = [
    { id: 'all', label: 'All Questions', icon: Sparkles },
    { id: 'basics', label: 'Getting Started', icon: Lightbulb },
    { id: 'ai', label: 'AI Technology', icon: Wand2 },
    { id: 'features', label: 'Features', icon: Award },
    { id: 'tutorial', label: 'How To', icon: Image },
    { id: 'technical', label: 'Technical', icon: Zap },
    { id: 'pricing', label: 'Pricing', icon: Crown },
    { id: 'mobile', label: 'Mobile', icon: Shield },
    { id: 'tips', label: 'Pro Tips', icon: Star },
    { id: 'licensing', label: 'Commercial Use', icon: Users }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  return (
    <section id="FAQs" className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-br from-primary/3 via-accent/3 to-primary/5">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0, 0.05, 0],
              scale: [0, 0.8, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            <Sparkles className="w-3 h-3 text-primary/15" />
          </motion.div>
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-primary/10 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 0.05, 0],
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${80 + Math.random() * 120}px`,
              height: `${80 + Math.random() * 120}px`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden"
            animate={{ 
              rotate: [0, 360],
              boxShadow: [
                "0 10px 30px rgba(138, 92, 246, 0.3)",
                "0 15px 40px rgba(168, 85, 247, 0.4)",
                "0 20px 50px rgba(59, 130, 246, 0.5)",
                "0 15px 40px rgba(168, 85, 247, 0.4)",
                "0 10px 30px rgba(138, 92, 246, 0.3)"
              ]
            }}
            transition={{ 
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              boxShadow: { duration: 4, repeat: Infinity }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent"
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Sparkles className="w-8 h-8 text-white relative z-10" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Text Behind Image
            </span>
            <br />
            <span className="text-xl md:text-2xl text-muted-foreground font-normal">
              Frequently Asked Questions
            </span>
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Everything you need to know about creating stunning text behind image effects with our award-winning AI-powered editor. 
            Get answers to common questions and discover pro tips for amazing results.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-xl font-medium text-xs md:text-sm transition-all duration-300 relative overflow-hidden group ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-xl scale-105'
                    : 'bg-background/50 backdrop-blur-sm border border-border/20 hover:border-primary/30 hover:bg-primary/5'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {selectedCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
                
                <motion.div
                  animate={{ rotate: selectedCategory === category.id ? [0, 360] : 0 }}
                  transition={{ duration: 2, repeat: selectedCategory === category.id ? Infinity : 0 }}
                >
                      <category.icon className="w-3 h-3 md:w-4 md:h-4 relative z-10" />
                </motion.div>
                <span className="relative z-10">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6"
            >
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-background/50 backdrop-blur-xl rounded-3xl border border-border/20 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden shadow-lg hover:shadow-2xl"
                  whileHover={{ scale: 1.005, y: -2 }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(138, 92, 246, 0.05), rgba(168, 85, 247, 0.05))",
                        "linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(59, 130, 246, 0.05))",
                        "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(138, 92, 246, 0.05))"
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />

                  <motion.button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 md:p-8 text-left flex items-center gap-4 relative z-10"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden flex-shrink-0"
                      animate={{ 
                        rotate: openItems.has(faq.id) ? [0, 360] : 0,
                        boxShadow: [
                          "0 10px 25px rgba(138, 92, 246, 0.3)",
                          "0 15px 35px rgba(168, 85, 247, 0.4)",
                          "0 10px 25px rgba(138, 92, 246, 0.3)"
                        ]
                      }}
                      transition={{ 
                        rotate: { duration: 3 },
                        boxShadow: { duration: 3, repeat: Infinity }
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                          opacity: [0, 0.8, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                      />
                      <faq.icon className="w-6 h-6 text-white relative z-10" />
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-gradient mb-1 leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: openItems.has(faq.id) ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openItems.has(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden relative z-10"
                      >
                        <motion.div 
                          className="px-6 md:px-8 pb-6 md:pb-8 ml-16"
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                            {faq.answer.split('\n').map((paragraph, pIndex) => (
                              <motion.p 
                                key={pIndex}
                                className="mb-3 text-sm md:text-base leading-relaxed"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: pIndex * 0.1 }}
                                dangerouslySetInnerHTML={{ __html: paragraph.trim() }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-border/20 relative overflow-hidden max-w-3xl mx-auto">
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 20%, rgba(138, 92, 246, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 20%, rgba(138, 92, 246, 0.3) 0%, transparent 50%)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <motion.div
              className="w-12 h-12 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center relative"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
            >
              <Wand2 className="w-6 h-6 text-white" />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-4">
              Ready to Create Amazing Text Behind Image Effects?
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of creators using our AI-powered text behind image editor to create stunning visual content that captivates audiences and drives results.
            </p>
            
            <motion.button 
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/welcome'}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              />
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                Start Creating Now - It's Free!
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
