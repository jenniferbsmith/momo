import React, { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const GameEmbed = () => {
  const { toast } = useToast();
  const [gameKey, setGameKey] = useState(Date.now());
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Function to clear all game-related localStorage items
    const clearGameData = () => {
      // Clear specific Retro Bowl storage items
      localStorage.removeItem('retro-bowl-save');
      
      // Clear any other potential storage items that might be used by the game
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.includes('retro') || key.includes('bowl') || key.includes('game'))) {
          keysToRemove.push(key);
        }
      }
      
      // Remove all identified game-related keys
      keysToRemove.forEach(key => localStorage.removeItem(key));
    };

    // Clear game data immediately when component mounts
    clearGameData();
    
    // Force iframe refresh with a new timestamp on mount
    setGameKey(Date.now());
    
    // Notify user that game has loaded
    toast({
      title: "Game Loaded!",
      description: "Enjoy playing Retro Bowl. Good luck with your team!",
      duration: 3000,
    });

    // Play game start sound
    try {
      const audio = new Audio('/sounds/game-start.mp3');
      audio.volume = 0.3;
      audio.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
    } catch (error) {
      console.error('Audio initialization failed:', error);
    }

    // Add event listener for beforeunload to clear game data when page is about to unload
    window.addEventListener('beforeunload', clearGameData);
    
    // Instead of constantly resetting, only clear storage values once on mount
    // and set up a storage listener to detect if the game tries to save state
    const handleStorageChange = (e) => {
      if (e.key && (e.key.includes('retro') || e.key.includes('bowl') || e.key.includes('game'))) {
        console.log('Game attempted to save state:', e.key);
        // Immediately remove the key that was just set
        localStorage.removeItem(e.key);
      }
    };
    
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('beforeunload', clearGameData);
      window.removeEventListener('storage', handleStorageChange);
      clearGameData(); // Also clear data on component unmount
    };
  }, [toast, location.pathname]); // Dependency on location.pathname ensures effect runs on route changes

  return (
    <div className="game-container animate-pixel-fade-in mx-auto w-full max-w-3xl">
      <div className="w-full bg-retro-dark-blue relative overflow-hidden rounded-t-lg">
        <div className="relative w-full" style={{ paddingBottom: isMobile ? '85%' : '72%' }}>
          <iframe 
            key={gameKey}
            src={`https://grokaiapk.com/web/retro/?nocache=${gameKey}`}
            className="absolute inset-0 w-full h-full border-0"
            id="gameIframe"
            allow="fullscreen; autoplay; accelerometer; gyroscope; magnetometer"
            sandbox="allow-forms allow-scripts allow-same-origin allow-modals allow-popups allow-pointer-lock allow-top-navigation allow-top-navigation-by-user-activation"
            style={{
              width: '100%',
              height: '100%'
            }}
          ></iframe>
        </div>
      </div>
      <div className="bg-retro-dark-gray p-4 text-center rounded-b-lg">
        <p className="text-retro-white text-xs font-pixel">
          Use keyboard arrows or tap/click to control. Score touchdowns and lead your team to victory!
        </p>
      </div>
    </div>
  );
};

export default GameEmbed;
