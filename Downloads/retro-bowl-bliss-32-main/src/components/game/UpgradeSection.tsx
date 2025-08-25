
import React, { useState, useEffect } from 'react';
import { Trophy, Star, Sparkles, Zap, Shield, ArrowUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface PowerUp {
  id: string;
  name: string;
  description: string;
  cost: number;
  level: number;
  maxLevel: number;
  icon: React.ReactNode;
  benefits: string[];
  color: string;
}

const UpgradeSection = () => {
  const [coins, setCoins] = useState(1000);
  const [earnRate, setEarnRate] = useState(1);
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('offense');
  
  const [powerUps, setPowerUps] = useState<PowerUp[]>([
    {
      id: 'speed',
      name: 'Speed Boost',
      description: 'Increase your players\' movement speed',
      cost: 150,
      level: 0,
      maxLevel: 5,
      icon: <Zap size={28} className="text-yellow-400" />,
      benefits: ['+5% Speed', '+10% Speed', '+15% Speed', '+20% Speed', '+25% Speed'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'strength',
      name: 'Player Strength',
      description: 'Boost your team\'s physical strength',
      cost: 200,
      level: 0,
      maxLevel: 5,
      icon: <Shield size={28} className="text-blue-500" />,
      benefits: ['+10% Tackles', '+15% Tackles', '+20% Tackles', '+25% Tackles', '+30% Tackles'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'accuracy',
      name: 'Passing Accuracy',
      description: 'Improve your quarterback\'s passing accuracy',
      cost: 250,
      level: 0,
      maxLevel: 5,
      icon: <Trophy size={28} className="text-green-500" />,
      benefits: ['+8% Accuracy', '+12% Accuracy', '+16% Accuracy', '+20% Accuracy', '+25% Accuracy'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'training',
      name: 'Training Facility',
      description: 'Enhance your team\'s training capabilities',
      cost: 300,
      level: 0,
      maxLevel: 5,
      icon: <ArrowUp size={28} className="text-purple-500" />,
      benefits: ['+10% XP Gain', '+15% XP Gain', '+20% XP Gain', '+25% XP Gain', '+30% XP Gain'],
      color: 'from-purple-500 to-fuchsia-600'
    },
    {
      id: 'coaching',
      name: 'Coach Upgrade',
      description: 'Hire better assistant coaches for your team',
      cost: 350,
      level: 0,
      maxLevel: 5,
      icon: <Award size={28} className="text-red-500" />,
      benefits: ['+5% All Stats', '+10% All Stats', '+15% All Stats', '+20% All Stats', '+25% All Stats'],
      color: 'from-red-500 to-rose-600'
    },
    {
      id: 'starPower',
      name: 'Star Power',
      description: 'Increase your chances of finding star players',
      cost: 400,
      level: 0,
      maxLevel: 5,
      icon: <Star size={28} className="text-amber-500" />,
      benefits: ['+10% Star Chance', '+15% Star Chance', '+20% Star Chance', '+25% Star Chance', '+30% Star Chance'],
      color: 'from-amber-400 to-yellow-600'
    }
  ]);

  // Auto increment coins based on earn rate
  useEffect(() => {
    const interval = setInterval(() => {
      setCoins(prev => prev + earnRate);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [earnRate]);

  const calculateUpgradeCost = (powerUp: PowerUp) => {
    return Math.floor(powerUp.cost * Math.pow(1.4, powerUp.level));
  };

  const purchasePowerUp = (powerUpId: string) => {
    setPowerUps(prev => prev.map(powerUp => {
      if (powerUp.id === powerUpId) {
        const cost = calculateUpgradeCost(powerUp);
        
        if (coins >= cost && powerUp.level < powerUp.maxLevel) {
          // Play purchase sound
          const audio = new Audio('/sounds/upgrade.mp3');
          audio.volume = 0.4;
          audio.play().catch(error => {
            console.error('Audio playback failed:', error);
          });
          
          // Show toast
          toast({
            title: `${powerUp.name} Upgraded!`,
            description: `Your team now has ${powerUp.benefits[powerUp.level]}`,
            duration: 3000,
          });
          
          // Deduct coins and increase level
          setCoins(coins - cost);
          
          // If this is a level 1 upgrade, increase earn rate
          if (powerUp.level === 0 && powerUp.id === 'training') {
            setEarnRate(prev => prev + 1);
          }
          
          return { ...powerUp, level: powerUp.level + 1 };
        }
        
        // If can't afford it
        if (coins < cost) {
          toast({
            title: "Not enough coins!",
            description: `You need ${cost - coins} more coins for this upgrade.`,
            variant: "destructive",
            duration: 3000,
          });
        }
      }
      return powerUp;
    }));
  };

  const getTabPowerUps = () => {
    if (activeTab === 'offense') {
      return powerUps.slice(0, 3);
    } else {
      return powerUps.slice(3);
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-pixel-fade-in my-8">
      <div className="bg-gradient-to-r from-retro-dark-blue to-retro-blue rounded-t-lg p-6 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div>
            <h2 className="text-retro-yellow font-pixel text-xl mb-2">Power Up Your Team</h2>
            <p className="text-retro-light-gray text-sm">Unlock special abilities and upgrade your football squad</p>
          </div>
          <div className="flex items-center gap-2 bg-retro-black bg-opacity-50 px-6 py-3 mt-4 md:mt-0 rounded-full border-2 border-retro-yellow">
            <Sparkles className="text-retro-yellow" size={20} />
            <span className="text-retro-yellow font-pixel text-lg">
              {coins.toLocaleString()}
            </span>
          </div>
        </div>
        
        <div className="flex justify-center gap-2 mb-6">
          <Button 
            variant={activeTab === 'offense' ? 'default' : 'outline'}
            onClick={() => setActiveTab('offense')}
            className={activeTab === 'offense' ? 'bg-retro-red border-2 border-retro-yellow text-white' : 'bg-retro-dark-gray text-retro-light-gray'}
          >
            OFFENSE
          </Button>
          <Button 
            variant={activeTab === 'defense' ? 'default' : 'outline'}
            onClick={() => setActiveTab('defense')}
            className={activeTab === 'defense' ? 'bg-retro-blue border-2 border-retro-yellow text-white' : 'bg-retro-dark-gray text-retro-light-gray'}
          >
            DEFENSE
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-retro-dark-gray p-6 rounded-b-lg">
        {getTabPowerUps().map((powerUp) => (
          <Card 
            key={powerUp.id} 
            className="overflow-hidden border-2 border-retro-gray hover:border-retro-yellow transition-all duration-300 bg-retro-dark-blue text-retro-white"
          >
            <div className={`h-2 bg-gradient-to-r ${powerUp.color}`}></div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-retro-black p-2 rounded-lg">
                    {powerUp.icon}
                  </div>
                  <CardTitle className="text-retro-white text-lg">{powerUp.name}</CardTitle>
                </div>
                <span className="text-retro-light-gray text-xs font-bold px-2 py-1 bg-retro-black rounded-full">
                  Lvl {powerUp.level}/{powerUp.maxLevel}
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-retro-light-gray mb-3">
                {powerUp.description}
              </CardDescription>
              
              <div className="w-full h-2 bg-retro-black rounded-full mb-4">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${powerUp.color}`}
                  style={{ width: `${(powerUp.level / powerUp.maxLevel) * 100}%` }}
                ></div>
              </div>
              
              {powerUp.level < powerUp.maxLevel && (
                <div className="text-xs text-retro-white mb-2">
                  Next: <span className="text-retro-yellow">{powerUp.benefits[powerUp.level]}</span>
                </div>
              )}
            </CardContent>
            <CardFooter className="pt-0 pb-4">
              <Button
                className={`w-full ${
                  powerUp.level >= powerUp.maxLevel 
                    ? "bg-retro-gray text-retro-dark-gray cursor-not-allowed"
                    : coins >= calculateUpgradeCost(powerUp)
                      ? "bg-gradient-to-r from-retro-green to-retro-blue hover:from-retro-blue hover:to-retro-green text-white shadow-lg" 
                      : "bg-retro-dark-gray text-retro-light-gray"
                }`}
                onClick={() => purchasePowerUp(powerUp.id)}
                disabled={powerUp.level >= powerUp.maxLevel}
              >
                {powerUp.level >= powerUp.maxLevel ? (
                  "MAXED OUT"
                ) : (
                  <div className="flex items-center justify-center w-full">
                    <span>{calculateUpgradeCost(powerUp)}</span>
                    <Sparkles className="ml-1 text-retro-yellow" size={16} />
                  </div>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpgradeSection;
