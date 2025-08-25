
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { toast } = useToast();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const playSound = () => {
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(error => {
      console.error('Audio playback failed:', error);
    });
  };

  const handleNavClick = () => {
    playSound();
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-retro-blue border-b-4 border-retro-purple sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 animate-pixel-fade-in"
            onClick={handleNavClick}
          >
            <div className="w-10 h-10 bg-retro-orange rounded-full flex items-center justify-center">
              <span className="font-pixel text-sm text-retro-white">RB</span>
            </div>
            <span className="font-pixel text-retro-white text-lg hidden sm:inline-block">
              Retro Bowl Unblocked
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLinks handleClick={handleNavClick} />
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-retro-white hover:bg-retro-purple hover:text-retro-white"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 animate-pixel-fade-in">
            <div className="flex flex-col space-y-3">
              <NavLinks handleClick={handleNavClick} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLinks = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <>
      <Link 
        to="/" 
        className="text-retro-white hover:text-retro-yellow font-medium transition-colors duration-200 text-sm px-2 py-1"
        onClick={handleClick}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className="text-retro-white hover:text-retro-yellow font-medium transition-colors duration-200 text-sm px-2 py-1"
        onClick={handleClick}
      >
        About Us
      </Link>
      <Link 
        to="/privacy" 
        className="text-retro-white hover:text-retro-yellow font-medium transition-colors duration-200 text-sm px-2 py-1"
        onClick={handleClick}
      >
        Privacy
      </Link>
      <Link 
        to="/dmca" 
        className="text-retro-white hover:text-retro-yellow font-medium transition-colors duration-200 text-sm px-2 py-1"
        onClick={handleClick}
      >
        DMCA
      </Link>
      <Link 
        to="/contact" 
        className="text-retro-white hover:text-retro-yellow font-medium transition-colors duration-200 text-sm px-2 py-1"
        onClick={handleClick}
      >
        Contact
      </Link>
    </>
  );
};

export default Header;
