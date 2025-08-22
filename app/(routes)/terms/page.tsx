'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { ArrowLeft, FileText, Wand2, Scale, Users, Shield, Zap, Star, Award } from 'lucide-react';

import '@/app/fonts.css';

const TermsPage = () => {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: FileText,
      content: `By accessing and using our text-behind-image editor and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.

These terms apply to all users of our text-behind-image platform, including visitors, registered users, and premium subscribers. If you do not agree with any part of these terms, please discontinue use of our text-behind-image services immediately.

Our text-behind-image platform is designed for creative professionals, content creators, marketers, and anyone looking to create stunning visual designs with AI-powered background removal and text positioning.`
    },
    {
      id: "service-description",
      title: "Text Behind Image Service Description",
      icon: Wand2,
      content: `Our platform provides AI-powered text-behind-image creation tools that automatically:

• **Background Removal**: Advanced AI algorithms detect and remove backgrounds from uploaded images
• **Text Positioning**: Intelligent placement of text elements to create professional text-behind-image effects
• **Typography Controls**: Access to premium fonts, colors, effects, and 3D transformations for text-behind-image designs
• **Export Capabilities**: High-resolution downloads of your text-behind-image creations in multiple formats
• **Mobile Optimization**: Full-featured text-behind-image editor accessible on all devices

The service is provided "as is" and we continuously improve our text-behind-image algorithms based on user feedback and technological advances.`
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities & Content",
      icon: Users,
      content: `When using our text-behind-image editor, you are responsible for:

• **Content Ownership**: Only uploading images you own or have permission to use for text-behind-image creation
• **Copyright Compliance**: Ensuring your text-behind-image designs do not infringe on third-party copyrights
• **Appropriate Use**: Using our text-behind-image tools for lawful purposes only
• **Content Quality**: Uploading appropriate images suitable for text-behind-image processing
• **Account Security**: Maintaining the confidentiality of your account credentials

You retain full ownership of your text-behind-image creations. We do not claim any rights to your original content or final text-behind-image designs.`
    },
    {
      id: "prohibited-uses",
      title: "Prohibited Uses",
      icon: Shield,
      content: `The following activities are strictly prohibited when using our text-behind-image services:

• **Illegal Content**: Creating text-behind-image designs with illegal, harmful, or offensive content
• **Copyright Infringement**: Using copyrighted images without permission for text-behind-image creation
• **Spam or Abuse**: Excessive use that could harm our text-behind-image processing infrastructure
• **Reverse Engineering**: Attempting to replicate or steal our text-behind-image AI algorithms
• **Malicious Activities**: Any attempts to hack, disrupt, or compromise our text-behind-image platform

Violation of these terms may result in immediate suspension of your access to our text-behind-image services.`
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: Award,
      content: `Our text-behind-image platform and underlying technology are protected by intellectual property laws:

• **Our Technology**: The AI algorithms, user interface, and text-behind-image processing methods are our proprietary technology
• **Your Creations**: You retain full rights to text-behind-image designs you create using our platform
• **Trademarks**: "Text Behind Image" and related marks are our registered trademarks
• **Open Source**: Some components may use open-source libraries, credited appropriately
• **Patents**: Our text-behind-image AI methods may be protected by pending or issued patents

You may not copy, modify, or redistribute our text-behind-image platform technology without explicit written permission.`
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      icon: Scale,
      content: `While we strive to provide reliable text-behind-image services, please understand:

• **Service Availability**: Our text-behind-image editor aims for 99.9% uptime but cannot guarantee uninterrupted service
• **Processing Quality**: AI text-behind-image results may vary based on image quality and complexity
• **Data Loss**: While rare, technical issues could affect your text-behind-image projects
• **Third-Party Issues**: We are not responsible for issues with third-party services or platforms
• **Commercial Use**: You assume full responsibility for commercial use of your text-behind-image creations

Our total liability for any claims related to our text-behind-image services shall not exceed the amount you paid for our services in the preceding 12 months.`
    }
  ];

  return (
    <motion.div
      className='flex flex-col min-h-screen gradient-background relative overflow-hidden'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating Award Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 0.1, 0],
              scale: [0, 1, 0],
              rotate: [0, 360]
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
          >
            <Star className="w-3 h-3 text-primary/30" />
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.header 
        className='sticky top-0 z-50 glass border-b border-border/20 flex flex-row items-center justify-between p-3 md:p-5 px-4 md:px-10 backdrop-blur-xl'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 0.7, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <FileText className="w-6 h-6 relative z-10" />
          </motion.div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Terms of Service
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
              Professional service agreement
            </p>
          </div>
        </motion.div>
        
        <div className='flex gap-2 md:gap-4 items-center'>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="outline" size="sm" className="border-primary/30 hover:border-primary hover:bg-primary/5">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Home
              </Link>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
            <ModeToggle />
          </motion.div>
        </div>
      </motion.header>

      <div className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-24 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden"
                animate={{ 
                  rotate: [0, 360],
                  boxShadow: [
                    "0 10px 30px rgba(138, 92, 246, 0.3)",
                    "0 15px 40px rgba(168, 85, 247, 0.4)",
                    "0 10px 30px rgba(138, 92, 246, 0.3)"
                  ]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 3, repeat: Infinity }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent"
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
                <FileText className="w-10 h-10 text-white relative z-10" />
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Professional service agreement for our award-winning text-behind-image platform. 
                Clear, fair terms that protect both creators and our innovative AI technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20"
              >
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Last updated: January 20, 2025</span>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-20"
            >
              {[
                { icon: Shield, label: "Secure & Private", desc: "Your data protected" },
                { icon: Scale, label: "Fair Terms", desc: "Transparent policies" },
                { icon: Users, label: "Creator-Friendly", desc: "Built for artists" },
                { icon: Zap, label: "Always Updated", desc: "Modern standards" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 rounded-xl glass border border-border/20 hover:border-primary/30 transition-all duration-300"
                >
                  <motion.div
                    className="w-10 h-10 mx-auto mb-3 bg-primary/10 rounded-lg flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-sm text-gradient mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5 relative">
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 border border-primary/10 rounded-full"
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0, 0.1, 0],
                  scale: [0.5, 1.2, 0.5],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
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

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto space-y-16">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Section Number */}
                  <motion.div
                    className="absolute -left-4 top-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {index + 1}
                  </motion.div>

                  <motion.div
                    className="bg-background/50 backdrop-blur-xl rounded-3xl border border-border/20 p-8 md:p-12 ml-8 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
                    whileHover={{ scale: 1.01, y: -5 }}
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
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-8">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden"
                          animate={{ 
                            rotate: [0, 10, -10, 0],
                            boxShadow: [
                              "0 10px 25px rgba(138, 92, 246, 0.3)",
                              "0 15px 35px rgba(168, 85, 247, 0.4)",
                              "0 10px 25px rgba(138, 92, 246, 0.3)"
                            ]
                          }}
                          transition={{ 
                            rotate: { duration: 3, repeat: Infinity },
                            boxShadow: { duration: 2, repeat: Infinity }
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                              opacity: [0, 0.8, 0]
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.5
                            }}
                          />
                          <section.icon className="w-8 h-8 text-white relative z-10" />
                        </motion.div>
                        
                        <motion.h2 
                          className="text-3xl md:text-4xl font-bold"
                          animate={{
                            background: [
                              "linear-gradient(45deg, rgb(138, 92, 246), rgb(168, 85, 247))",
                              "linear-gradient(45deg, rgb(168, 85, 247), rgb(59, 130, 246))",
                              "linear-gradient(45deg, rgb(59, 130, 246), rgb(138, 92, 246))"
                            ]
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                          style={{
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundSize: "200% 100%"
                          }}
                        >
                          {section.title}
                        </motion.h2>
                      </div>
                      
                      <motion.div 
                        className="prose prose-lg max-w-none text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        {section.content.split('\n\n').map((paragraph, pIndex) => (
                          <motion.p 
                            key={pIndex} 
                            className="mb-6 text-base md:text-lg leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: pIndex * 0.1 }}
                          >
                            {paragraph.trim()}
                          </motion.p>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agreement Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 md:p-16 border border-border/20 relative overflow-hidden">
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
                  className="w-16 h-16 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center relative"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                >
                  <Scale className="w-8 h-8 text-white" />
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                  Ready to Create?
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                  By using our text-behind-image editor, you agree to these terms. 
                  Join thousands of creators making stunning designs with our AI-powered platform.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      asChild 
                      size="lg" 
                      className="text-xl px-12 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
                    >
                      <Link href="/app">
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
                        <Wand2 className="w-6 h-6 mr-3 relative z-10" />
                        <span className="relative z-10">Start Creating Now</span>
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      asChild 
                      variant="outline" 
                      size="lg" 
                      className="text-xl px-12 py-6 border-primary/50 hover:bg-primary/10 hover:border-primary shadow-xl hover:shadow-2xl transition-all duration-500"
                    >
                      <Link href="/contact">
                        <FileText className="w-6 h-6 mr-3" />
                        Ask Questions
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-gradient-to-r from-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gradient text-center mb-8">
                Important Links
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { href: "/privacy", title: "Privacy Policy", desc: "How we protect your data", icon: Shield },
                  { href: "/contact", title: "Contact Support", desc: "Get help anytime", icon: Users },
                  { href: "/app", title: "Try Our Editor", desc: "Create amazing designs", icon: Wand2 }
                ].map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <Link href={link.href} className="block p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                        >
                          <link.icon className="w-4 h-4 text-primary" />
                        </motion.div>
                        <h3 className="font-bold text-gradient">{link.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">{link.desc}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default TermsPage;
