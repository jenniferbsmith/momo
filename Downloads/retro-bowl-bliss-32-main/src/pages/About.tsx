
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Gamepad2, Trophy, Users, Target } from 'lucide-react';
import SEO from '@/components/seo/SEO';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - Retro Bowl Unblocked';
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Retro Bowl Unblocked",
    "description": "Learn about Retro Bowl Unblocked, a retro-style American football game that combines pixel graphics with modern gameplay.",
    "publisher": {
      "@type": "Organization",
      "name": "Retro Bowl Unblocked",
      "logo": {
        "@type": "ImageObject",
        "url": "/og-image.png"
      }
    }
  };

  return (
    <Layout>
      <SEO 
        title="About Us"
        description="Learn about the Retro Bowl Unblocked game - our story, features, and our passion for creating accessible and fun retro-style football gaming experiences."
        keywords="retro bowl about, pixel football history, retro gaming, about retro bowl, sports game development, retro bowl team, pixel art sports games"
        canonicalUrl="https://retrobowlunblocked.com/about"
        ogType="article"
        jsonLd={jsonLd}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-retro-yellow font-pixel text-2xl mb-6 text-center animate-pixel-fade-in">
            ABOUT RETRO BOWL
          </h1>
          
          <div className="bg-retro-dark-gray rounded-lg p-6 mb-8 animate-pixel-fade-in">
            <p className="text-retro-light-gray mb-4">
              Welcome to Retro Bowl Unblocked, the ultimate destination for fans of retro-style American football gaming. Our platform offers a nostalgic yet modern gaming experience that captures the essence of classic sports games while providing smooth, accessible gameplay for today's players.
            </p>
            <p className="text-retro-light-gray mb-4">
              Retro Bowl combines the pixel art aesthetics of the 8-bit and 16-bit eras with modern gameplay mechanics, creating a unique and addictive football management simulation. As a coach and general manager, you'll build your team from the ground up, making crucial decisions both on and off the field.
            </p>
            <p className="text-retro-light-gray">
              Our mission is to provide a fun, accessible, and engaging football gaming experience that can be enjoyed by players of all ages and skill levels. Whether you're a seasoned football fan or new to the sport, Retro Bowl offers an entertaining and challenging experience that will keep you coming back for more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <FeatureCard 
              icon={<Gamepad2 className="text-retro-red" size={24} />}
              title="Retro Gaming Experience"
              description="Experience the nostalgia of pixel graphics combined with modern gameplay mechanics."
            />
            <FeatureCard 
              icon={<Trophy className="text-retro-yellow" size={24} />}
              title="Championship Challenges"
              description="Lead your team through seasons and playoffs to win the ultimate prize."
            />
            <FeatureCard 
              icon={<Users className="text-retro-green" size={24} />}
              title="Team Management"
              description="Draft, trade, and develop players to build your dream football team."
            />
            <FeatureCard 
              icon={<Target className="text-retro-purple" size={24} />}
              title="Strategic Gameplay"
              description="Make tactical decisions that impact your team's performance on the field."
            />
          </div>
          
          <div className="bg-retro-dark-gray rounded-lg p-6 animate-pixel-fade-in">
            <h2 className="text-retro-yellow font-pixel text-xl mb-4">Our Story</h2>
            <p className="text-retro-light-gray mb-4">
              Retro Bowl Unblocked started as a passion project by a group of gaming enthusiasts who loved both retro video games and American football. Frustrated by the complexity and micro-transaction-heavy nature of modern sports games, we wanted to create something that captured the pure fun and simplicity of classic sports titles.
            </p>
            <p className="text-retro-light-gray mb-4">
              Our team consists of developers, designers, and football fans who work tirelessly to maintain and improve the Retro Bowl experience. We're dedicated to keeping the game accessible to players everywhere, which is why we've made it available in an unblocked format that can be played on various platforms.
            </p>
            <p className="text-retro-light-gray">
              We believe in the power of gaming to bring joy and entertainment to people's lives, and we're committed to preserving the classic gaming experience for both nostalgic fans and new generations of players. As we continue to grow and evolve, we remain true to our core values of simplicity, accessibility, and pure gaming fun.
            </p>
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

export default About;
