
/**
 * Newsletter subscription service
 */
export const subscribeToNewsletter = async (email: string): Promise<{ success: boolean, message: string }> => {
  // This would typically be an API call to your backend service
  // For now, we'll simulate a successful subscription after a short delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailRegex.test(email)) {
        resolve({ 
          success: false, 
          message: "Please enter a valid email address."
        });
        return;
      }
      
      resolve({ 
        success: true, 
        message: "Thanks for subscribing to our newsletter!" 
      });
    }, 1000);
  });
};
