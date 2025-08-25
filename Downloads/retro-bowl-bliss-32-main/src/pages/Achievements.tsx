
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Trophy, Star, Medal, Crown, Award, Target, Flame } from 'lucide-react';

const Achievements = () => {
  useEffect(() => {
    document.title = 'Achievements - Retro Bowl Unblocked';
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-retro-yellow font-pixel text-2xl mb-6 text-center animate-pixel-fade-in">
            ACHIEVEMENTS
          </h1>
          
          <div className="bg-retro-dark-gray rounded-lg p-6 mb-8 animate-pixel-fade-in">
            <p className="text-retro-light-gray mb-4">
              Challenge yourself to unlock these special achievements in Retro Bowl. Each achievement represents a milestone in your journey to gridiron greatness. How many can you collect?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <AchievementCategory 
              icon={<Trophy className="text-retro-gold" size={24} />}
              title="Team Achievements"
              description="Accomplishments with your team"
              count="8"
            />
            <AchievementCategory 
              icon={<Star className="text-retro-light-blue" size={24} />}
              title="Player Achievements"
              description="Individual player milestones"
              count="12"
            />
            <AchievementCategory 
              icon={<Medal className="text-retro-red" size={24} />}
              title="Career Achievements"
              description="Long-term career goals"
              count="6"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-retro-yellow font-pixel text-xl mb-4">Team Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Achievement 
                  icon={<Crown className="text-retro-gold" size={20} />}
                  title="Champion"
                  description="Win your first championship"
                  reward="50 Coaching Credits"
                />
                <Achievement 
                  icon={<Trophy className="text-retro-gold" size={20} />}
                  title="Dynasty"
                  description="Win 3 championships in a row"
                  reward="150 Coaching Credits"
                />
                <Achievement 
                  icon={<Star className="text-retro-gold" size={20} />}
                  title="Perfect Season"
                  description="Finish a season undefeated"
                  reward="100 Coaching Credits"
                />
                <Achievement 
                  icon={<Award className="text-retro-gold" size={20} />}
                  title="Comeback Kings"
                  description="Win a game after being down by 14+ points"
                  reward="25 Coaching Credits"
                />
                <Achievement 
                  icon={<Target className="text-retro-gold" size={20} />}
                  title="Defensive Dominance"
                  description="Hold opponents to under 10 points for 5 consecutive games"
                  reward="75 Coaching Credits"
                />
                <Achievement 
                  icon={<Flame className="text-retro-gold" size={20} />}
                  title="Offensive Powerhouse"
                  description="Score 40+ points in 3 consecutive games"
                  reward="75 Coaching Credits"
                />
                <Achievement 
                  icon={<Star className="text-retro-silver" size={20} />}
                  title="Rebuilder"
                  description="Take a team with a 1-star rating to the playoffs"
                  reward="50 Coaching Credits"
                />
                <Achievement 
                  icon={<Trophy className="text-retro-silver" size={20} />}
                  title="Underdog Story"
                  description="Win the championship as a wild card team"
                  reward="100 Coaching Credits"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-retro-yellow font-pixel text-xl mb-4">Player Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Achievement 
                  icon={<Star className="text-retro-light-blue" size={20} />}
                  title="QB Legend"
                  description="Throw for 5,000+ yards in a season"
                  reward="50 Coaching Credits"
                />
                <Achievement 
                  icon={<Award className="text-retro-light-blue" size={20} />}
                  title="Rushing King"
                  description="Rush for 2,000+ yards with a single player"
                  reward="50 Coaching Credits"
                />
                <Achievement 
                  icon={<Trophy className="text-retro-light-blue" size={20} />}
                  title="TD Machine"
                  description="Score 50+ touchdowns in a season with one player"
                  reward="75 Coaching Credits"
                />
                <Achievement 
                  icon={<Medal className="text-retro-light-blue" size={20} />}
                  title="Defensive MVP"
                  description="Record 10+ interceptions with one player"
                  reward="50 Coaching Credits"
                />
                <Achievement 
                  icon={<Star className="text-retro-silver" size={20} />}
                  title="Rookie Sensation"
                  description="Win Rookie of the Year award"
                  reward="25 Coaching Credits"
                />
                <Achievement 
                  icon={<Crown className="text-retro-silver" size={20} />}
                  title="League MVP"
                  description="Have a player win the MVP award"
                  reward="50 Coaching Credits"
                />
                <Achievement 
                  icon={<Flame className="text-retro-silver" size={20} />}
                  title="Perfect Game"
                  description="Complete 100% of passes in a game (min. 15 attempts)"
                  reward="35 Coaching Credits"
                />
                <Achievement 
                  icon={<Target className="text-retro-silver" size={20} />}
                  title="Long Distance"
                  description="Complete a 80+ yard touchdown pass"
                  reward="20 Coaching Credits"
                />
                <Achievement 
                  icon={<Award className="text-retro-silver" size={20} />}
                  title="Receiving Ace"
                  description="1,500+ receiving yards with one player"
                  reward="40 Coaching Credits"
                />
                <Achievement 
                  icon={<Trophy className="text-retro-silver" size={20} />}
                  title="Iron Man"
                  description="Play 100+ games with a single player"
                  reward="50 Coaching Credits"
                />
                <Achievement 
                  icon={<Medal className="text-retro-silver" size={20} />}
                  title="Hall of Famer"
                  description="Have a player inducted into the Hall of Fame"
                  reward="100 Coaching Credits"
                />
                <Achievement 
                  icon={<Star className="text-retro-bronze" size={20} />}
                  title="Special Teams Ace"
                  description="Return 3+ kickoffs for touchdowns in a season"
                  reward="30 Coaching Credits"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-retro-yellow font-pixel text-xl mb-4">Career Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Achievement 
                  icon={<Crown className="text-retro-gold" size={20} />}
                  title="Coaching Legend"
                  description="Win 5+ championships in your career"
                  reward="200 Coaching Credits"
                />
                <Achievement 
                  icon={<Trophy className="text-retro-gold" size={20} />}
                  title="Century Club"
                  description="Win 100+ games as a coach"
                  reward="100 Coaching Credits"
                />
                <Achievement 
                  icon={<Medal className="text-retro-gold" size={20} />}
                  title="Team Builder"
                  description="Develop 10 players to 5-star rating"
                  reward="75 Coaching Credits"
                />
                <Achievement 
                  icon={<Award className="text-retro-gold" size={20} />}
                  title="Longevity"
                  description="Complete 10 seasons as a coach"
                  reward="100 Coaching Credits"
                />
                <Achievement 
                  icon={<Star className="text-retro-gold" size={20} />}
                  title="Franchise Builder"
                  description="Improve team facilities to max level"
                  reward="50 Coaching Credits"
                />
                <Achievement 
                  icon={<Flame className="text-retro-gold" size={20} />}
                  title="Fan Favorite"
                  description="Achieve 100% fan rating for an entire season"
                  reward="75 Coaching Credits"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const AchievementCategory = ({ icon, title, description, count }: { icon: React.ReactNode, title: string, description: string, count: string }) => (
  <div className="bg-retro-dark-blue rounded-lg p-5 text-center animate-pixel-fade-in">
    <div className="flex justify-center mb-3">
      <div className="bg-retro-black p-3 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-retro-white font-medium mb-2">{title}</h3>
    <p className="text-retro-light-gray text-sm mb-2">{description}</p>
    <div className="text-retro-yellow font-pixel">
      {count} Achievements
    </div>
  </div>
);

const Achievement = ({ icon, title, description, reward }: { icon: React.ReactNode, title: string, description: string, reward: string }) => (
  <div className="bg-retro-dark-blue rounded-lg p-4 border border-retro-gray hover:border-retro-yellow transition-colors duration-200 animate-pixel-fade-in">
    <div className="flex items-center gap-3 mb-2">
      <div className="bg-retro-black p-2 rounded-full">
        {icon}
      </div>
      <h3 className="text-retro-white font-medium">{title}</h3>
    </div>
    <p className="text-retro-light-gray text-sm mb-2">{description}</p>
    <p className="text-retro-green text-xs font-medium">Reward: {reward}</p>
  </div>
);

export default Achievements;
