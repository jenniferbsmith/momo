
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Mail, MapPin, Phone, MessageSquare, Facebook, Twitter, Instagram, Github } from 'lucide-react';
import SEO from '@/components/seo/SEO';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLdContact = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Retro Bowl Unblocked",
    "description": "Get in touch with the Retro Bowl Unblocked team. We're here to help with any questions or feedback about the game.",
    "publisher": {
      "@type": "Organization",
      "name": "Retro Bowl Unblocked",
      "logo": {
        "@type": "ImageObject",
        "url": "/favicon.ico"
      }
    }
  };

  return (
    <Layout>
      <SEO 
        title="Contact Us"
        description="Get in touch with the Retro Bowl Unblocked team. Contact us for support, feedback, partnerships, or any questions about the game."
        keywords="retro bowl contact, retro bowl support, retro bowl feedback, contact us, retro bowl help, retro bowl team"
        canonicalUrl="https://retrobowlunblocked.com/contact"
        ogType="website"
        jsonLd={jsonLdContact}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-retro-yellow font-pixel text-2xl mb-6 text-center animate-pixel-fade-in">
            CONTACT US
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-retro-dark-gray rounded-lg p-6 animate-pixel-fade-in">
              <h2 className="text-retro-yellow font-pixel text-xl mb-4">Get In Touch</h2>
              <p className="text-retro-light-gray mb-6">
                Have questions, feedback, or just want to say hello? We'd love to hear from you! Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-4">
                <ContactInfoItem 
                  icon={<Mail className="text-retro-yellow" size={20} />}
                  title="Email"
                  info="contact@retrobowlunblocked.com"
                />
                <ContactInfoItem 
                  icon={<MapPin className="text-retro-red" size={20} />}
                  title="Location"
                  info="San Francisco, CA, United States"
                />
                <ContactInfoItem 
                  icon={<Phone className="text-retro-green" size={20} />}
                  title="Phone"
                  info="+1 (555) 123-4567"
                />
                <ContactInfoItem 
                  icon={<MessageSquare className="text-retro-blue" size={20} />}
                  title="Support Hours"
                  info="Monday - Friday, 9am - 5pm PT"
                />
              </div>
              
              <div className="mt-8">
                <h3 className="text-retro-white font-medium mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <SocialIcon icon={<Facebook size={20} />} bgColor="bg-[#1877F2]" />
                  <SocialIcon icon={<Twitter size={20} />} bgColor="bg-[#1DA1F2]" />
                  <SocialIcon icon={<Instagram size={20} />} bgColor="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]" />
                  <SocialIcon icon={<Github size={20} />} bgColor="bg-[#333]" />
                </div>
              </div>
            </div>
            
            <div className="bg-retro-dark-gray rounded-lg p-6 animate-pixel-fade-in">
              <h2 className="text-retro-yellow font-pixel text-xl mb-4">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-retro-white mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 bg-retro-dark-blue border border-retro-gray rounded-md text-retro-white focus:border-retro-yellow focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-retro-white mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 bg-retro-dark-blue border border-retro-gray rounded-md text-retro-white focus:border-retro-yellow focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-retro-white mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-3 bg-retro-dark-blue border border-retro-gray rounded-md text-retro-white focus:border-retro-yellow focus:outline-none"
                    placeholder="Subject of your message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-retro-white mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full p-3 bg-retro-dark-blue border border-retro-gray rounded-md text-retro-white focus:border-retro-yellow focus:outline-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-retro-red hover:bg-retro-yellow text-white font-pixel py-3 px-6 rounded-md transition-colors duration-300 animate-shimmer relative overflow-hidden"
                >
                  <span className="relative z-10">SEND MESSAGE</span>
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-10 bg-retro-dark-gray rounded-lg p-6 animate-pixel-fade-in">
            <h2 className="text-retro-yellow font-pixel text-xl mb-4 text-center">FAQs</h2>
            <div className="space-y-4">
              <FAQ 
                question="How do I report a bug in the game?" 
                answer="If you encounter any bugs or issues while playing Retro Bowl, please use the contact form above and provide as much detail as possible about the problem, including what device and browser you're using." 
              />
              <FAQ 
                question="Can I use Retro Bowl for my YouTube channel?" 
                answer="Yes! We encourage content creators to feature Retro Bowl in their videos. We only ask that you provide proper attribution and a link back to our website in your video description." 
              />
              <FAQ 
                question="Is there a mobile app version of Retro Bowl?" 
                answer="Our web version is designed to work great on mobile browsers! Just visit our website on your mobile device and enjoy the game." 
              />
              <FAQ 
                question="How can I reset my game progress?" 
                answer="Your game progress is stored locally on your device. To reset it, you can clear your browser's local storage for this site or simply refresh the page." 
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const ContactInfoItem = ({ icon, title, info }: { icon: React.ReactNode, title: string, info: string }) => (
  <div className="flex items-start">
    <div className="bg-retro-dark-blue p-3 rounded-lg mr-3">
      {icon}
    </div>
    <div>
      <h3 className="text-retro-white font-medium">{title}</h3>
      <p className="text-retro-light-gray text-sm">{info}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon, bgColor }: { icon: React.ReactNode, bgColor: string }) => (
  <a href="#" className={`${bgColor} p-3 rounded-full text-white hover:opacity-80 transition-opacity duration-200`}>
    {icon}
  </a>
);

const FAQ = ({ question, answer }: { question: string, answer: string }) => (
  <div className="bg-retro-dark-blue rounded-lg p-4 hover:border hover:border-retro-yellow transition-all duration-200">
    <h3 className="text-retro-white font-medium mb-2">{question}</h3>
    <p className="text-retro-light-gray text-sm">{answer}</p>
  </div>
);

export default Contact;
