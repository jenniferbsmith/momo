
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from '@/services/newsletterService';
import { Loader2 } from 'lucide-react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Play sound effect
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(error => {
      console.error('Audio playback failed:', error);
    });
    
    setIsSubmitting(true);
    
    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        toast({
          title: "Subscription Successful!",
          description: result.message,
          duration: 5000,
        });
        setEmail(''); // Clear the input field after successful subscription
      } else {
        toast({
          title: "Subscription Failed",
          description: result.message,
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <Input 
        type="email" 
        placeholder="Your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-retro-dark-gray text-retro-white text-sm px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-retro-yellow w-full"
      />
      <Button 
        type="submit"
        disabled={isSubmitting}
        className="animate-button-neon-glow bg-retro-red hover:bg-retro-orange text-retro-white px-3 py-2 rounded-r-md transition-all duration-300 font-medium text-sm"
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Join"
        )}
      </Button>
    </form>
  );
};

export default NewsletterForm;
