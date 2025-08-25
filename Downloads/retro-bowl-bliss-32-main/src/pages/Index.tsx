
import React from 'react';
import Layout from '@/components/layout/Layout';
import GameEmbed from '@/components/game/GameEmbed';
import { Button } from '@/components/ui/button';
import { Trophy, Users, Star, PenTool, Maximize2, Award, Zap, Gamepad, Smartphone } from 'lucide-react';
import SEO from '@/components/seo/SEO';

const Index = () => {
  const playFullScreen = () => {
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(error => {
      console.error('Audio playback failed:', error);
    });

    // Request fullscreen for the iframe
    const gameIframe = document.getElementById('gameIframe') as HTMLIFrameElement;
    if (gameIframe) {
      if (gameIframe.requestFullscreen) {
        gameIframe.requestFullscreen().catch(err => {
          console.error('Could not enter fullscreen mode:', err);
        });
      } else if ((gameIframe as any).webkitRequestFullscreen) {
        (gameIframe as any).webkitRequestFullscreen();
      } else if ((gameIframe as any).mozRequestFullScreen) {
        (gameIframe as any).mozRequestFullScreen();
      } else if ((gameIframe as any).msRequestFullscreen) {
        (gameIframe as any).msRequestFullscreen();
      }
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Retro Bowl Unblocked",
    "description": "Experience the thrill of American football in this pixel art sports game. Build your dream team, devise winning strategies, and become a champion!",
    "genre": ["Sports", "American Football", "Simulation", "Retro"],
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Layout>
      <SEO 
        title="Play Retro Bowl Unblocked - Free Online American Football Game"
        description="Play Retro Bowl Unblocked - the ultimate pixel art American football game. Build your dream team, manage players, and win championships in this addictive sports sim."
        keywords="retro bowl, retro bowl unblocked, football game, american football, pixel art game, sports game, free online game, football simulation"
        canonicalUrl="https://retrobowlunblocked.com/"
        ogImage="/og-image.png"
        jsonLd={jsonLd}
      />
      
      <div className="w-full">
        <section className="text-center mb-6 animate-pixel-fade-in px-4">
          <h1 className="text-retro-yellow font-pixel text-2xl sm:text-3xl mb-4">
            RETRO BOWL UNBLOCKED
          </h1>
          <p className="text-retro-light-gray max-w-2xl mx-auto mb-6">
            Experience the thrill of American football in this pixel art sports game. 
            Build your dream team, devise winning strategies, and become a champion!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <FeatureTag icon={<Trophy size={16} />} text="Win Championships" />
            <FeatureTag icon={<Users size={16} />} text="Build Your Team" />
            <FeatureTag icon={<Star size={16} />} text="Score Touchdowns" />
            <FeatureTag icon={<PenTool size={16} />} text="Retro Pixel Art" />
          </div>
        </section>

        <GameEmbed />
        
        <div className="flex justify-center my-6 px-4">
          <Button 
            className="animate-glow-pulse relative bg-retro-red hover:bg-retro-orange text-white px-6 py-3 rounded-md font-pixel text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-retro-yellow"
            onClick={playFullScreen}
          >
            <div className="flex items-center gap-2">
              <Maximize2 size={18} />
              PLAY FULL SCREEN
            </div>
          </Button>
        </div>
        
        <section className="max-w-4xl mx-auto my-12 animate-pixel-fade-in px-4">
          <div className="text-center mb-8">
            <h2 className="text-retro-yellow font-pixel text-xl mb-2">RETRO BOWL UNBLOCKED 🏈 - LATEST VERSION & FREE ENDLESS FUN!</h2>
            <p className="text-retro-light-gray max-w-2xl mx-auto">A unique blend of vintage aesthetics and modern football gameplay</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-retro-dark-blue to-retro-blue rounded-lg p-6 shadow-lg border border-retro-gray hover:border-retro-yellow transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="bg-retro-black p-3 rounded-lg inline-block mb-3">
                    <Trophy className="text-retro-red" size={28} />
                  </div>
                  <h3 className="text-retro-white font-pixel text-lg mb-2">Classic Gameplay</h3>
                </div>
                <p className="text-retro-light-gray mb-4 flex-grow">
                  Retro Bowl combines the nostalgic charm of pixel graphics with addictive football management and gameplay. As coach and general manager, you'll call the plays, make the passes, and lead your team to glory.
                </p>
                <ul className="space-y-2 text-retro-light-gray text-sm">
                  <li className="flex items-center gap-2">
                    <span className="bg-retro-green rounded-full p-1">
                      <Zap size={12} className="text-retro-dark-blue" />
                    </span>
                    Simple but challenging gameplay
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-retro-green rounded-full p-1">
                      <Zap size={12} className="text-retro-dark-blue" />
                    </span>
                    Authentic football simulation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-retro-green rounded-full p-1">
                      <Zap size={12} className="text-retro-dark-blue" />
                    </span>
                    Perfect balance of skill and strategy
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-retro-dark-blue to-retro-red rounded-lg p-6 shadow-lg border border-retro-gray hover:border-retro-yellow transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="bg-retro-black p-3 rounded-lg inline-block mb-3">
                    <Trophy className="text-retro-yellow" size={28} />
                  </div>
                  <h3 className="text-retro-white font-pixel text-lg mb-2">Team Management</h3>
                </div>
                <p className="text-retro-light-gray mb-4 flex-grow">
                  Build your dream team through drafting, trading, and developing players. Balance your salary cap, manage player morale, and make tough decisions to create a dynasty that will dominate for seasons to come.
                </p>
                <ul className="space-y-2 text-retro-light-gray text-sm">
                  <li className="flex items-center gap-2">
                    <span className="bg-retro-yellow rounded-full p-1">
                      <Zap size={12} className="text-retro-dark-blue" />
                    </span>
                    Scout and draft star players
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-retro-yellow rounded-full p-1">
                      <Zap size={12} className="text-retro-dark-blue" />
                    </span>
                    Develop rookies into superstars
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-retro-yellow rounded-full p-1">
                      <Zap size={12} className="text-retro-dark-blue" />
                    </span>
                    Strategic salary cap management
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <GameFeatureCard 
              icon={<Award className="text-retro-green" size={24} />}
              title="Season Mode"
              description="Lead your team through a full season, manage your roster, and aim for the playoffs and championship."
              color="from-retro-dark-blue to-retro-green"
            />
            <GameFeatureCard 
              icon={<Gamepad className="text-retro-blue" size={24} />}
              title="Intuitive Controls"
              description="Simple touch or keyboard controls make it easy to play, but difficult to master."
              color="from-retro-dark-blue to-retro-blue"
            />
            <GameFeatureCard 
              icon={<Smartphone className="text-retro-purple" size={24} />}
              title="Play Anywhere"
              description="Enjoy the game on any device with a browser - desktop, tablet, or mobile."
              color="from-retro-dark-blue to-retro-purple"
            />
          </div>
          
          <div className="bg-retro-dark-gray p-6 rounded-lg mt-8 text-center">
            <h3 className="text-retro-yellow font-pixel text-lg mb-4">Ready to become a champion?</h3>
            <p className="text-retro-light-gray mb-6">
              Take control of your team, make strategic decisions, and experience the thrill of victory in Retro Bowl. 
              Are you up for the challenge?
            </p>
            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-retro-red via-retro-yellow to-retro-green opacity-70 blur-lg animate-pulse-slow rounded-lg"></div>
              <Button 
                className="relative animate-button-pulse bg-retro-red hover:bg-retro-yellow text-white px-8 py-4 rounded-md font-pixel text-sm uppercase tracking-wider border-2 border-transparent hover:border-retro-blue"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>PLAY NOW</span>
              </Button>
            </div>
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto my-8 bg-retro-dark-gray rounded-lg p-6 animate-pixel-fade-in mx-4">
          <h2 className="text-retro-yellow font-pixel text-xl mb-4 text-center">How To Play</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InstructionCard 
              number="1" 
              title="Build Your Team" 
              description="Draft players, manage your roster, and make strategic trades to build a championship-caliber team."
            />
            <InstructionCard 
              number="2" 
              title="Develop Skills" 
              description="Train your players, improve their abilities, and watch them grow into superstars on the field."
            />
            <InstructionCard 
              number="3" 
              title="Win Games" 
              description="Lead your team on the field, call the right plays, and score touchdowns to win games and championships."
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

const FeatureTag = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="bg-retro-blue px-4 py-2 rounded-full flex items-center gap-2 text-retro-white text-xs">
    {icon}
    <span>{text}</span>
  </div>
);

const GameFeatureCard = ({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) => (
  <div className={`bg-gradient-to-br ${color} rounded-lg p-5 border border-retro-gray hover:border-retro-yellow transition-all duration-300 h-full flex flex-col`}>
    <div className="bg-retro-black p-3 rounded-lg inline-flex items-center justify-center mb-3 mx-auto">
      {icon}
    </div>
    <h3 className="text-retro-white font-medium mb-2 text-center">{title}</h3>
    <p className="text-retro-light-gray text-sm mt-auto text-center">{description}</p>
  </div>
);

const InstructionCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="bg-retro-dark-blue rounded-lg p-4 border border-retro-gray hover:border-retro-yellow transition-colors duration-200">
    <div className="w-10 h-10 bg-retro-red rounded-full flex items-center justify-center mb-3 mx-auto">
      <span className="font-pixel text-retro-white">{number}</span>
    </div>
    <h3 className="text-retro-white font-medium text-center mb-2">{title}</h3>
    <p className="text-retro-light-gray text-sm text-center">{description}</p>
  </div>
);

export default Index;
