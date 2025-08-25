
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Gamepad, Target, Book, RotateCcw } from 'lucide-react';
import SEO from '@/components/seo/SEO';

const GameInstructions = () => {
  useEffect(() => {
    document.title = 'Game Instructions - Retro Bowl Unblocked';
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Play Retro Bowl Unblocked",
    "description": "Step-by-step guide on how to play and master Retro Bowl Unblocked, including controls, game modes, and team management.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Master the Passing Controls",
        "text": "Tap and hold on a receiver, draw back to set power and angle, then release to throw the ball."
      },
      {
        "@type": "HowToStep",
        "name": "Learn Running Techniques",
        "text": "Tap on the quarterback or running back, drag your finger to control direction, and avoid defenders as you aim for the end zone."
      },
      {
        "@type": "HowToStep",
        "name": "Manage Your Team",
        "text": "Scout and draft talented players, manage morale, balance salary cap, and develop player attributes using coaching credits."
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Game Instructions"
        description="Comprehensive guide to playing Retro Bowl Unblocked. Learn the controls, master advanced techniques, manage your team effectively, and explore different game modes."
        keywords="retro bowl instructions, how to play retro bowl, retro bowl controls, football game tutorial, team management guide, retro bowl gameplay, player development"
        canonicalUrl="https://retrobowlunblocked.com/game-instructions"
        ogType="article"
        jsonLd={jsonLd}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-retro-yellow font-pixel text-2xl mb-6 text-center animate-pixel-fade-in">
            GAME INSTRUCTIONS
          </h1>
          
          <div className="bg-retro-dark-gray rounded-lg p-6 mb-8 animate-pixel-fade-in">
            <p className="text-retro-light-gray mb-4">
              Welcome to Retro Bowl! This guide will help you understand the game mechanics and get started on your journey to football glory. Master these controls and strategies to lead your team to victory!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <InstructionCard 
              icon={<Gamepad className="text-retro-red" size={24} />}
              title="Basic Controls"
              description="Learn how to pass, run, and perform other basic actions on the field."
            />
            <InstructionCard 
              icon={<Target className="text-retro-yellow" size={24} />}
              title="Advanced Techniques"
              description="Master special moves and techniques to outplay your opponents."
            />
            <InstructionCard 
              icon={<Book className="text-retro-green" size={24} />}
              title="Team Management"
              description="Understand how to build and manage your roster effectively."
            />
            <InstructionCard 
              icon={<RotateCcw className="text-retro-purple" size={24} />}
              title="Game Modes"
              description="Explore the different game modes and challenges available."
            />
          </div>
          
          <div className="space-y-6">
            <InstructionSection 
              title="Offense Controls"
              content={`
                <h4 class="text-retro-light-blue mb-2">Passing</h4>
                <p>To pass the ball:</p>
                <ol class="list-decimal pl-5 space-y-2 mb-4">
                  <li>Tap and hold on a receiver</li>
                  <li>Draw back to set power and angle</li>
                  <li>Release to throw the ball</li>
                </ol>
                
                <h4 class="text-retro-light-blue mb-2">Running</h4>
                <p>To run with the ball:</p>
                <ol class="list-decimal pl-5 space-y-2 mb-4">
                  <li>Tap on the quarterback or running back</li>
                  <li>Drag your finger to control direction</li>
                  <li>Avoid defenders and aim for the end zone</li>
                </ol>
                
                <h4 class="text-retro-light-blue mb-2">Special Moves</h4>
                <p>While running, you can:</p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Swipe up to perform a jump</li>
                  <li>Swipe down to dive</li>
                  <li>Swipe left/right to perform a juke move</li>
                </ul>
              `}
            />
            
            <InstructionSection 
              title="Defense Controls"
              content={`
                <p>On defense, the game AI controls your players, but you can influence the outcome by:</p>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                  <li>Building a strong defensive roster</li>
                  <li>Upgrading defensive players' attributes</li>
                  <li>Setting appropriate defensive strategies before the game</li>
                </ul>
                
                <p>The better your defensive players and your strategy, the more likely they are to make stops and create turnovers.</p>
              `}
            />
            
            <InstructionSection 
              title="Game Modes"
              content={`
                <h4 class="text-retro-light-blue mb-2">Regular Season</h4>
                <p>Play through a full season of games, aiming to make the playoffs and win the championship.</p>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Playoffs</h4>
                <p>Qualify for the playoffs by performing well in the regular season, then compete in a knockout tournament for the championship.</p>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Practice Mode</h4>
                <p>Hone your skills without the pressure of competitive games. Perfect for learning the controls and testing strategies.</p>
              `}
            />
            
            <InstructionSection 
              title="Team Management"
              content={`
                <h4 class="text-retro-light-blue mb-2">Managing Your Roster</h4>
                <p>To build a successful team:</p>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                  <li>Scout and draft talented players</li>
                  <li>Manage player morale by giving them adequate playing time</li>
                  <li>Balance your salary cap to keep your best players</li>
                  <li>Trade for better players when opportunities arise</li>
                  <li>Release underperforming players to free up roster spots</li>
                </ul>
                
                <h4 class="text-retro-light-blue mb-2">Player Development</h4>
                <p>Improve your players by:</p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Using coaching credits to boost attributes</li>
                  <li>Giving young players game time to develop naturally</li>
                  <li>Managing player condition to prevent injuries</li>
                </ul>
              `}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const InstructionCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-retro-dark-blue rounded-lg p-5 border border-retro-gray hover:border-retro-blue transition-colors duration-200 animate-pixel-fade-in">
    <div className="flex items-start gap-4">
      <div className="bg-retro-black p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-retro-white font-medium mb-2">{title}</h3>
        <p className="text-retro-light-gray text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const InstructionSection = ({ title, content }: { title: string, content: string }) => (
  <div className="bg-retro-dark-blue rounded-lg p-5 border border-retro-gray animate-pixel-fade-in">
    <h3 className="text-retro-yellow font-medium mb-3">{title}</h3>
    <div 
      className="text-retro-light-gray text-sm"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default GameInstructions;
