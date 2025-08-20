'use client';

import React from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border py-4 px-6 md:px-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Text Behind Image</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-right">
            <span>
              Modified from <Link href="https://github.com/RexanWONG/text-behind-image" target="_blank" className="underline hover:text-foreground">RexanWONG/text-behind-image</Link>
            </span>
            
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <Link 
                href="https://github.com/RoversX/text-behind-image" 
                target="_blank"
                className="flex items-center gap-1.5 hover:text-foreground"
              >
                <Github size={16} />
                <span>Project Source</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 