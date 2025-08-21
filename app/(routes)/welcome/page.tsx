'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Upload, Sparkles, Wand2, Zap, Type, ArrowLeft } from 'lucide-react';

import '@/app/fonts.css';

const WelcomePage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleUploadImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Store the image in localStorage or session storage for the editor
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          localStorage.setItem('uploadedImage', e.target.result as string);
          router.push('/app');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      className='flex flex-col min-h-screen gradient-background'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.header 
        className='sticky top-0 z-50 glass border-b border-border/20 flex flex-row items-center justify-between p-3 md:p-5 px-4 md:px-10'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Wand2 className="w-6 h-6" />
          </motion.div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Text Behind Image Studio
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
              Professional text-behind-image editor
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
          
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <ModeToggle />
          </motion.div>
        </div>
      </motion.header>
      
      <motion.div 
        className="h-px bg-gradient-to-r from-transparent via-border to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      <motion.div 
        className='flex items-center justify-center flex-1 w-full p-4 md:p-8 text-center animated-bg min-h-[calc(100vh-120px)]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="max-w-lg w-full space-y-4 md:space-y-6 professional-card p-6 md:p-8 rounded-3xl hover-lift mx-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative"
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl flex items-center justify-center glow animate-pulse-glow shadow-2xl">
                <Wand2 className="w-10 h-10 text-white" />
              </div>
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full"
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary rounded-full"
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gradient leading-tight">
              Ready to Create
              <br />
              Amazing Designs?
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Upload your image and watch our AI transform it into a stunning text-behind-image masterpiece. 
              No design experience required!
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Zap, title: "AI Processing", desc: "Smart background removal" },
                { icon: Type, title: "Rich Typography", desc: "Advanced text controls" },
                { icon: Sparkles, title: "Pro Effects", desc: "Stunning visual results" }
              ].map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="flex flex-col items-center p-4 rounded-xl glass hover-lift group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="mb-3 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground text-center">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pt-4"
          >
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
              accept=".jpg, .jpeg, .png, .webp"
            />
            
            <Button 
              onClick={handleUploadImage} 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl hover:shadow-2xl transition-all duration-500 glow animate-pulse-glow group w-full md:w-auto"
            >
              <motion.div
                className="flex items-center gap-3"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Upload className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Upload Your Image
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </motion.div>
            </Button>
          </motion.div>
          
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Supports JPG, PNG, WEBP • Max 10MB • AI-powered processing
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomePage;
