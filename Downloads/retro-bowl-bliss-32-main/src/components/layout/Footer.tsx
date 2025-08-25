
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';
import NewsletterForm from '@/components/newsletter/NewsletterForm';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const playSound = () => {
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.2;
    audio.play().catch(error => {
      console.error('Audio playback failed:', error);
    });
  };

  return (
    <footer className="bg-retro-blue border-t-4 border-retro-purple">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-pixel-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-pixel text-retro-yellow text-sm mb-4">Retro Bowl Unblocked</h3>
            <p className="text-retro-light-gray text-sm mb-4">
              Experience the excitement of retro football gaming with Retro Bowl Unblocked. 
              Manage your team and lead them to victory!
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Twitter size={18} />} onClick={playSound} />
              <SocialIcon icon={<Facebook size={18} />} onClick={playSound} />
              <SocialIcon icon={<Instagram size={18} />} onClick={playSound} />
              <SocialIcon icon={<Github size={18} />} onClick={playSound} />
            </div>
          </div>
          
          <div className="animate-pixel-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-pixel text-retro-yellow text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/" text="Home" onClick={playSound} />
              <FooterLink to="/about" text="About Us" onClick={playSound} />
              <FooterLink to="/privacy" text="Privacy Policy" onClick={playSound} />
              <FooterLink to="/dmca" text="DMCA" onClick={playSound} />
              <FooterLink to="/contact" text="Contact Us" onClick={playSound} />
            </ul>
          </div>
          
          <div className="animate-pixel-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-pixel text-retro-yellow text-sm mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink to="/game-instructions" text="Game Instructions" onClick={playSound} />
              <FooterLink to="/team-management" text="Team Management" onClick={playSound} />
              <FooterLink to="/tips-and-tricks" text="Tips & Tricks" onClick={playSound} />
              <FooterLink to="/achievements" text="Achievements" onClick={playSound} />
              <FooterLink to="/faq" text="FAQ" onClick={playSound} />
            </ul>
          </div>
          
          <div className="animate-pixel-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-pixel text-retro-yellow text-sm mb-4">Newsletter</h3>
            <p className="text-retro-light-gray text-sm mb-4">
              Subscribe to our newsletter for updates, new features, and game tips.
            </p>
            <NewsletterForm />
          </div>
        </div>
        
        <div className="border-t border-retro-gray mt-8 pt-6 text-center">
          <p className="text-retro-light-gray text-xs">
            &copy; {currentYear} Retro Bowl Unblocked. All rights reserved. This is a fan-made site and not affiliated with the original game developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, onClick }: { icon: React.ReactNode, onClick: () => void }) => (
  <a 
    href="#" 
    className="bg-retro-dark-gray hover:bg-retro-purple text-retro-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
    onClick={onClick}
  >
    {icon}
  </a>
);

const FooterLink = ({ to, text, onClick }: { to: string, text: string, onClick: () => void }) => (
  <li>
    <Link 
      to={to} 
      className="text-retro-light-gray hover:text-retro-yellow transition-colors duration-200 text-sm"
      onClick={onClick}
    >
      {text}
    </Link>
  </li>
);

export default Footer;
