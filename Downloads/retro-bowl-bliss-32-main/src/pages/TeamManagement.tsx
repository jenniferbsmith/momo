
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Users, Briefcase, Award, TrendingUp } from 'lucide-react';

const TeamManagement = () => {
  useEffect(() => {
    document.title = 'Team Management - Retro Bowl Unblocked';
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-retro-yellow font-pixel text-2xl mb-6 text-center animate-pixel-fade-in">
            TEAM MANAGEMENT
          </h1>
          
          <div className="bg-retro-dark-gray rounded-lg p-6 mb-8 animate-pixel-fade-in">
            <p className="text-retro-light-gray mb-4">
              Building a championship team requires more than just skill on the field. Learn how to effectively manage your roster, develop players, and create a dynasty that will dominate for seasons to come.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <FeatureCard 
              icon={<Users className="text-retro-blue" size={24} />}
              title="Roster Management"
              description="Learn how to build and maintain your team roster effectively."
            />
            <FeatureCard 
              icon={<Briefcase className="text-retro-green" size={24} />}
              title="Salary Cap"
              description="Master the art of managing your team's finances and salary cap."
            />
            <FeatureCard 
              icon={<Award className="text-retro-yellow" size={24} />}
              title="Player Development"
              description="Turn promising rookies into superstars through proper development."
            />
            <FeatureCard 
              icon={<TrendingUp className="text-retro-red" size={24} />}
              title="Team Morale"
              description="Keep your team happy and motivated for peak performance."
            />
          </div>
          
          <div className="space-y-6">
            <ManagementSection 
              title="Building Your Roster"
              content={`
                <p>A balanced roster is crucial for success in Retro Bowl. Here's how to build a winning team:</p>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Draft Wisely</h4>
                <p>The draft is your primary source of new talent. When drafting:</p>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                  <li>Prioritize positions based on your team needs</li>
                  <li>Look for players with high potential (4-5 star potential)</li>
                  <li>Balance between immediate impact and long-term potential</li>
                  <li>Consider personality traits that affect morale and development</li>
                </ul>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Free Agency</h4>
                <p>Free agency allows you to sign veteran players to fill immediate needs:</p>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                  <li>Target positions of weakness in your roster</li>
                  <li>Consider the salary demands against your cap space</li>
                  <li>Evaluate age vs. skill level (older players may decline)</li>
                  <li>Look for specialists who excel in specific areas</li>
                </ul>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Trading</h4>
                <p>Trading can help you acquire talent or clear cap space:</p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Trade aging stars for draft picks before they decline</li>
                  <li>Use draft picks to acquire established players for a championship push</li>
                  <li>Consider trading disgruntled players before morale becomes an issue</li>
                </ul>
              `}
            />
            
            <ManagementSection 
              title="Managing the Salary Cap"
              content={`
                <p>The salary cap limits how much you can spend on player contracts. Effective management is essential:</p>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Contract Priorities</h4>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                  <li>Quarterback: Often worth a large investment as the most important position</li>
                  <li>Offensive playmakers: Wide receivers and running backs who score touchdowns</li>
                  <li>Defensive stars: Players who can create turnovers</li>
                  <li>Offensive line: Protects your quarterback and creates running lanes</li>
                </ul>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Cap Management Strategies</h4>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Keep a balanced approach - don't invest too heavily in one position</li>
                  <li>Maintain some cap flexibility for mid-season acquisitions</li>
                  <li>Develop rookies on cheaper contracts to replace expensive veterans</li>
                  <li>Cut underperforming players on large contracts to free up space</li>
                </ul>
              `}
            />
            
            <ManagementSection 
              title="Player Development"
              content={`
                <p>Developing your players is key to long-term success:</p>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Training Points</h4>
                <p>Use coaching credits to improve player attributes:</p>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                  <li>Focus on improving a player's weakest attributes first</li>
                  <li>Prioritize young players with high potential</li>
                  <li>Invest in key attributes for each position (e.g., accuracy for QBs, speed for WRs)</li>
                </ul>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Game Experience</h4>
                <p>Players develop through playing time:</p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Give promising rookies playing time to accelerate development</li>
                  <li>Balance development with competitiveness</li>
                  <li>Use easier games as opportunities to give playing time to developing players</li>
                </ul>
              `}
            />
            
            <ManagementSection 
              title="Team Morale and Chemistry"
              content={`
                <p>Happy players perform better on the field:</p>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Factors Affecting Morale</h4>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                  <li>Playing time: Players want to contribute on the field</li>
                  <li>Team success: Winning improves overall morale</li>
                  <li>Player personality: Some players are naturally more temperamental</li>
                  <li>Contract satisfaction: Players want to feel valued</li>
                </ul>
                
                <h4 class="text-retro-light-blue mb-2 mt-4">Managing Problematic Players</h4>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Address morale issues quickly before they affect the team</li>
                  <li>Give disgruntled stars more opportunities to shine</li>
                  <li>Sometimes it's best to trade players who don't fit your team culture</li>
                  <li>Balance talent with temperament when building your roster</li>
                </ul>
              `}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
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

const ManagementSection = ({ title, content }: { title: string, content: string }) => (
  <div className="bg-retro-dark-blue rounded-lg p-5 border border-retro-gray animate-pixel-fade-in">
    <h3 className="text-retro-yellow font-medium mb-3">{title}</h3>
    <div 
      className="text-retro-light-gray text-sm"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default TeamManagement;
