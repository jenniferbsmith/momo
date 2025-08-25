
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { HelpCircle, RefreshCw, MessageSquare, Settings } from 'lucide-react';
import SEO from '@/components/seo/SEO';

const FAQ = () => {
  useEffect(() => {
    document.title = 'FAQ - Retro Bowl Unblocked';
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I start a new game?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To start a new game in Retro Bowl, simply refresh the page or click the 'New Game' button on the main menu. This will allow you to begin a fresh campaign with a new team."
        }
      },
      {
        "@type": "Question",
        "name": "How do I throw the ball to my receivers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To throw the ball in Retro Bowl, tap and hold on the receiver you want to target, then pull back to set the power and angle of your throw. Release to throw the ball. The longer you pull back, the more power your throw will have."
        }
      },
      {
        "@type": "Question",
        "name": "How do I improve my team's ratings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can improve your team's ratings by drafting better players, signing free agents, and developing your existing players using coaching credits. Focus on upgrading key positions like quarterback, wide receiver, and defensive positions based on your team needs."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to the most common questions about Retro Bowl Unblocked. Learn about game mechanics, team management, player development, and technical support."
        keywords="retro bowl FAQ, retro bowl questions, retro bowl help, football game help, retro bowl mechanics, player development, team management tips"
        canonicalUrl="https://retrobowlunblocked.com/faq"
        ogType="article"
        jsonLd={jsonLd}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-retro-yellow font-pixel text-2xl mb-6 text-center animate-pixel-fade-in">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          
          <div className="bg-retro-dark-gray rounded-lg p-6 mb-8 animate-pixel-fade-in">
            <p className="text-retro-light-gray mb-4">
              Find answers to the most common questions about Retro Bowl Unblocked. If you can't find what you're looking for, feel free to contact us!
            </p>
            <div className="flex justify-center mt-6">
              <div className="bg-retro-black p-4 rounded-full">
                <HelpCircle className="text-retro-yellow" size={32} />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <FAQCategory 
              icon={<RefreshCw className="text-retro-blue" size={24} />}
              title="Game Basics"
              description="Questions about gameplay and controls"
            />
            <FAQCategory 
              icon={<MessageSquare className="text-retro-green" size={24} />}
              title="Technical Support"
              description="Help with common technical issues"
            />
            <FAQCategory 
              icon={<Settings className="text-retro-purple" size={24} />}
              title="Game Features"
              description="Information about game modes and features"
            />
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="How do I start a new game?"
              answer="To start a new game in Retro Bowl, simply refresh the page or click the 'New Game' button on the main menu. This will allow you to begin a fresh campaign with a new team."
            />
            
            <FAQItem 
              question="How do I throw the ball to my receivers?"
              answer="To throw the ball in Retro Bowl, tap and hold on the receiver you want to target, then pull back to set the power and angle of your throw. Release to throw the ball. The longer you pull back, the more power your throw will have."
            />
            
            <FAQItem 
              question="How do I improve my team's ratings?"
              answer="You can improve your team's ratings by drafting better players, signing free agents, and developing your existing players using coaching credits. Focus on upgrading key positions like quarterback, wide receiver, and defensive positions based on your team needs."
            />
            
            <FAQItem 
              question="What does the morale stat affect?"
              answer="Player morale affects performance on the field. Players with high morale are more likely to make big plays and fewer mistakes. Morale is influenced by playing time, team success, your coaching decisions, and contract satisfaction."
            />
            
            <FAQItem 
              question="How do I earn coaching credits?"
              answer="Coaching credits are earned by winning games, completing achievements, and meeting team objectives. You can also earn them by watching in-game ads (in some versions). These credits can be used to improve player attributes, facilities, and other team aspects."
            />
            
            <FAQItem 
              question="Why does the game keep refreshing my progress?"
              answer="Retro Bowl Unblocked is designed to start a new game with each refresh for the best user experience. If you want to save your progress, make sure you're playing on a version that supports saving (such as the mobile app version)."
            />
            
            <FAQItem 
              question="How do I unlock new uniforms and team options?"
              answer="New uniforms and team customization options can be unlocked by spending coaching credits or by achieving certain milestones in the game, such as winning championships or completing specific challenges."
            />
            
            <FAQItem 
              question="What's the best way to build a championship team?"
              answer="Balance is key. Invest in a good quarterback first, then surround them with quality receivers and a strong offensive line. On defense, focus on linebackers and defensive backs who can create turnovers. Manage your salary cap carefully and develop young players to maintain long-term success."
            />
            
            <FAQItem 
              question="How do I play the game on mobile devices?"
              answer="Retro Bowl Unblocked works on most mobile browsers. Simply navigate to our website on your mobile device. For the best experience, consider downloading the official app from your device's app store if available."
            />
            
            <FAQItem 
              question="Can I play Retro Bowl offline?"
              answer="The web version requires an internet connection. However, once loaded, some versions may continue to function for a short time without internet. For true offline play, the downloadable app versions offer this capability."
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const FAQCategory = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-retro-dark-blue rounded-lg p-5 text-center animate-pixel-fade-in">
    <div className="flex justify-center mb-3">
      <div className="bg-retro-black p-3 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-retro-white font-medium mb-2">{title}</h3>
    <p className="text-retro-light-gray text-sm">{description}</p>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="bg-retro-dark-blue rounded-lg p-5 border border-retro-gray animate-pixel-fade-in">
    <h3 className="text-retro-yellow font-medium mb-3">{question}</h3>
    <p className="text-retro-light-gray text-sm">{answer}</p>
  </div>
);

export default FAQ;
