'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      className="w-full border-t border-border/50 py-6 px-6 md:px-10 bg-gradient-to-r from-background via-secondary/20 to-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <motion.div 
          className="flex items-center gap-2 text-muted-foreground"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span>© {new Date().getFullYear()} Text Behind Image Studio</span>
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span>Made with</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </motion.div>
          <span>for creators</span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 