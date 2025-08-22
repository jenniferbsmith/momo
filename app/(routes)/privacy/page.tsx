'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { ArrowLeft, Shield, Wand2, Lock, Eye, Database, Cookie } from 'lucide-react';

import '@/app/fonts.css';

const PrivacyPage = () => {
  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      content: `When you use our text-behind-image editor, we may collect certain information to provide and improve our services:

• **Images**: Photos you upload for text-behind-image processing are temporarily processed on our servers and automatically deleted after 24 hours
• **Usage Data**: Information about how you interact with our text-behind-image tools and features
• **Device Information**: Browser type, operating system, and device specifications for optimal text-behind-image rendering
• **Performance Metrics**: Processing times and success rates to improve our AI text-behind-image algorithms

We do not store or access the content of your text-behind-image creations unless explicitly necessary for service provision.`
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information", 
      icon: Eye,
      content: `Your information helps us deliver exceptional text-behind-image services:

• **Service Delivery**: Processing your images to create text-behind-image effects using our AI technology
• **Quality Improvement**: Analyzing usage patterns to enhance our text-behind-image algorithms and user experience
• **Technical Support**: Helping you troubleshoot issues with text-behind-image creation
• **Feature Development**: Understanding user needs to develop new text-behind-image editing capabilities
• **Security**: Protecting our platform and preventing misuse of our text-behind-image tools

We never sell your personal information or use your images for training our AI without explicit consent.`
    },
    {
      id: "data-protection",
      title: "Data Protection & Security",
      icon: Lock,
      content: `We implement industry-standard security measures to protect your text-behind-image projects:

• **Encryption**: All data transmission is encrypted using TLS/SSL protocols
• **Temporary Storage**: Uploaded images for text-behind-image processing are automatically purged within 24 hours
• **Access Controls**: Strict internal access controls limit who can access user data
• **Regular Audits**: Security assessments to ensure your text-behind-image creations remain private
• **Compliance**: We follow GDPR, CCPA, and other applicable privacy regulations

Your text-behind-image designs and personal information are never shared with third parties without your explicit consent.`
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      icon: Cookie,
      content: `We use cookies to enhance your text-behind-image editing experience:

• **Essential Cookies**: Required for basic functionality of our text-behind-image editor
• **Preference Cookies**: Remember your text-behind-image editor settings and preferences
• **Analytics Cookies**: Help us understand how users interact with our text-behind-image tools
• **Performance Cookies**: Monitor and improve the speed of our text-behind-image processing

You can control cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our text-behind-image editor.`
    },
    {
      id: "your-rights",
      title: "Your Privacy Rights",
      icon: Shield,
      content: `You have complete control over your data when using our text-behind-image services:

• **Access**: Request information about data we hold regarding your text-behind-image usage
• **Deletion**: Request removal of your account and associated text-behind-image project data
• **Portability**: Export your text-behind-image creations and account data
• **Correction**: Update or correct any personal information in your account
• **Opt-out**: Unsubscribe from marketing communications about text-behind-image features

To exercise these rights, contact us at privacy@text-behind-image.io with your request.`
    }
  ];

  return (
    <motion.div
      className='flex flex-col min-h-screen gradient-background'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.header 
        className='sticky top-0 z-50 glass border-b border-border/20 flex flex-row items-center justify-between p-3 md:p-5 px-4 md:px-10'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent text-white"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Shield className="w-6 h-6" />
          </motion.div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Privacy Policy
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
              Your privacy matters to us
            </p>
          </div>
        </motion.div>
        
        <div className='flex gap-2 md:gap-4 items-center'>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="outline" size="sm">
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
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
                Your privacy is fundamental to our text-behind-image service. Learn how we protect your data 
                and ensure your text-behind-image creations remain secure and private.
              </p>
              <p className="text-muted-foreground mt-4">
                Last updated: January 20, 2025
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm rounded-2xl border border-border/20 p-8 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <section.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gradient">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    {section.content.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-border/20 max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                If you have any questions about this Privacy Policy or how we handle your data 
                when using our text-behind-image editor, please don't hesitate to contact us.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    <Link href="/contact">
                      <Shield className="w-5 h-5 mr-2" />
                      Contact Privacy Team
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                    <Link href="/app">
                      <Wand2 className="w-5 h-5 mr-2" />
                      Try Text Behind Image
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default PrivacyPage;
