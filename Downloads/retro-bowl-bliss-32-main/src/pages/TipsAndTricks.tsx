
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Lightbulb, Zap, ShieldAlert, Trophy } from 'lucide-react';

const TipsAndTricks = () => {
  useEffect(() => {
    document.title = 'Tips & Tricks - Retro Bowl Unblocked';
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-retro-yellow font-pixel text-2xl mb-6 text-center animate-pixel-fade-in">
            TIPS & TRICKS
          </h1>
          
          <div className="bg-retro-dark-gray rounded-lg p-6 mb-8 animate-pixel-fade-in">
            <p className="text-retro-light-gray mb-4">
              Master Retro Bowl with these expert tips and strategies. From gameplay techniques to roster management wisdom, these insights will help you dominate the competition and build a championship dynasty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <TipCard 
              icon={<Lightbulb className="text-retro-yellow" size={24} />}
              title="Offensive Strategies"
              description="Score more points with these proven offensive tactics."
            />
            <TipCard 
              icon={<ShieldAlert className="text-retro-blue" size={24} />}
              title="Defensive Insights"
              description="Stop your opponents with smart defensive investments."
            />
            <TipCard 
              icon={<Zap className="text-retro-orange" size={24} />}
              title="Performance Boosters"
              description="Maximize your team's potential with these optimization tips."
            />
            <TipCard 
              icon={<Trophy className="text-retro-green" size={24} />}
              title="Championship Mindset"
              description="Develop the winning mentality needed for sustained success."
            />
          </div>
          
          <div className="space-y-6">
            <TipSection 
              title="Passing Game Mastery"
              content={`
                <h4 class="text-retro-light-blue mb-2">Perfect Your Throw</h4>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                  <li>Lead your receivers by throwing slightly ahead of them</li>
                  <li>Adjust throw power based on distance - soft tosses for short routes, full power for deep passes</li>
                  <li>Watch the defender's position and throw away from coverage</li>
                  <li>Don't force passes into tight coverage - check down to your running back if needed</li>
                </ul>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Route Selection</h4>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Deep routes work best against man coverage or single high safety</li>
                  <li>Short and medium routes are effective against zone coverage</li>
                  <li>Running backs can be valuable safety valves when receivers are covered</li>
                  <li>Mix up your routes to keep the defense guessing</li>
                </ul>
              `}
            />
            
            <TipSection 
              title="Running Game Strategies"
              content={`
                <h4 class="text-retro-light-blue mb-2">Breaking Tackles</h4>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                  <li>Use the dive move (swipe down) to break arm tackles</li>
                  <li>The jump move (swipe up) helps hurdle over low tacklers</li>
                  <li>Juke moves (swipe left/right) are effective in open space</li>
                  <li>Change direction quickly to throw off pursuit angles</li>
                </ul>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Finding Holes</h4>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Be patient and let your blockers establish position</li>
                  <li>Look for running lanes between defenders rather than trying to outrun everyone</li>
                  <li>Use the sideline to limit the angles defenders can take</li>
                  <li>Don't be afraid to cut back against the grain when defenders over-pursue</li>
                </ul>
              `}
            />
            
            <TipSection 
              title="Defensive Investment"
              content={`
                <p>While you don't directly control the defense, smart investment in defensive players pays off:</p>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Priority Positions</h4>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                  <li>Linebackers: Versatile players who can stop the run and drop into coverage</li>
                  <li>Defensive backs: Create interception opportunities</li>
                  <li>Defensive line: Generate pressure and disrupt the opposing quarterback</li>
                </ul>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Key Attributes</h4>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Speed: Essential for defensive backs to cover receivers</li>
                  <li>Strength: Important for defensive linemen to shed blocks</li>
                  <li>Tackling: Critical for all defensive positions to prevent yards after catch</li>
                  <li>Intelligence: Helps players recognize plays and be in the right position</li>
                </ul>
              `}
            />
            
            <TipSection 
              title="Game Management"
              content={`
                <h4 class="text-retro-light-blue mb-2">Clock Management</h4>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                  <li>When leading, keep the ball on the ground to run down the clock</li>
                  <li>Use your timeouts strategically when trailing</li>
                  <li>Consider going out of bounds to stop the clock when behind</li>
                  <li>Don't rush plays when you have a comfortable lead</li>
                </ul>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Situational Awareness</h4>
                <ul class="list-disc pl-5 space-y-2">
                  <li>On 4th down, know when to punt and when to go for it</li>
                  <li>In the red zone, don't force passes that could be intercepted</li>
                  <li>Adapt your strategy based on the score and time remaining</li>
                  <li>Consider field position when making decisions - play more conservatively deep in your own territory</li>
                </ul>
              `}
            />
            
            <TipSection 
              title="Advanced Roster Strategies"
              content={`
                <h4 class="text-retro-light-blue mb-2">Long-term Success</h4>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                  <li>Maintain a pipeline of young talent through regular drafting</li>
                  <li>Plan succession for aging stars before they decline</li>
                  <li>Don't overpay for positions that can be filled adequately with cheaper options</li>
                  <li>Keep some salary cap flexibility for unexpected opportunities</li>
                </ul>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Team Building Philosophy</h4>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Build around a star quarterback - the most important position</li>
                  <li>Invest in offensive line to protect your QB investment</li>
                  <li>Speed at skill positions creates mismatches against the defense</li>
                  <li>Balance your roster between offense and defense rather than focusing too heavily on one side</li>
                </ul>
              `}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const TipCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
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

const TipSection = ({ title, content }: { title: string, content: string }) => (
  <div className="bg-retro-dark-blue rounded-lg p-5 border border-retro-gray animate-pixel-fade-in">
    <h3 className="text-retro-yellow font-medium mb-3">{title}</h3>
    <div 
      className="text-retro-light-gray text-sm"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default TipsAndTricks;
