'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ModeToggle } from '@/components/mode-toggle';
import { 
  ArrowLeft, Mail, MessageSquare, Send, MapPin, Phone, 
  Clock, Sparkles, Wand2, CheckCircle, Users, Zap
} from 'lucide-react';

import '@/app/fonts.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@text-behind-image.io",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      value: "Available 24/7",
      description: "Instant support for urgent questions"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 2 hours",
      description: "Average response time for support"
    }
  ];

  const faqs = [
    {
      question: "How does the AI text-behind-image processing work?",
      answer: "Our advanced AI analyzes your image, identifies objects and subjects, then intelligently positions text layers to create the perfect text-behind-image effect without manual masking."
    },
    {
      question: "What file formats are supported?",
      answer: "We support JPG, JPEG, PNG, and WEBP formats. For best text-behind-image results, use high-resolution photos with clear subject-background separation."
    },
    {
      question: "Can I use this for commercial projects?",
      answer: "Yes! All text-behind-image creations are yours to use for personal and commercial projects without restrictions or watermarks."
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
            <Wand2 className="w-6 h-6" />
          </motion.div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
              We're here to help
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
                <MessageSquare className="w-8 h-8 text-white" />
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Have questions about text-behind-image creation? Need help with our AI-powered editor? 
                We're here to help you create amazing designs.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="text-center p-6 rounded-2xl glass border border-border/20 hover:border-primary/30 transition-all duration-300"
                >
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gradient mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold mb-1">{info.value}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gradient mb-4">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    Whether you need help with text-behind-image creation, have feature requests, 
                    or just want to say hello, we'd love to hear from you.
                  </p>
                </div>

                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-border/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label className="text-sm font-semibold">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="border-border/20 focus:border-primary"
                        required
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label className="text-sm font-semibold">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="border-border/20 focus:border-primary"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div 
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className="text-sm font-semibold">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="border-border/20 focus:border-primary"
                      required
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className="text-sm font-semibold">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your question or feedback..."
                      className="border-border/20 focus:border-primary min-h-[120px]"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={isSubmitting || isSubmitted}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg py-3 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-5 h-5 mr-2" />
                        </motion.div>
                      ) : isSubmitted ? (
                        <CheckCircle className="w-5 h-5 mr-2" />
                      ) : (
                        <Send className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
                    </Button>
                  </motion.div>
                </motion.form>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gradient mb-4">Quick Answers</h2>
                  <p className="text-muted-foreground">
                    Find instant answers to common questions about our text-behind-image editor.
                  </p>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="bg-background/50 backdrop-blur-sm rounded-2xl border border-border/20 p-6 hover:border-primary/30 transition-colors"
                    >
                      <h3 className="font-semibold text-gradient mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-border/20"
                >
                  <h3 className="text-xl font-bold text-gradient mb-4">Why Choose Us?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">2K+</div>
                      <div className="text-sm text-muted-foreground">Happy Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">&lt;2hr</div>
                      <div className="text-sm text-muted-foreground">Response</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-border/20"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                Ready to Create Amazing Designs?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't let questions hold you back. Start creating stunning text-behind-image designs today!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    <Link href="/welcome">
                      <Zap className="w-5 h-5 mr-2" />
                      Try Our Editor
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                    <Link href="/">
                      <Users className="w-5 h-5 mr-2" />
                      View Examples
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

export default ContactPage;
