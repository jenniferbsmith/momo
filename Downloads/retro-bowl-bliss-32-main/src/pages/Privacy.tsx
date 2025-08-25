
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - Retro Bowl Unblocked';
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-retro-yellow font-pixel text-2xl mb-6 text-center animate-pixel-fade-in">
            PRIVACY POLICY
          </h1>
          
          <div className="bg-retro-dark-gray rounded-lg p-6 mb-8 animate-pixel-fade-in">
            <p className="text-retro-light-gray mb-4">
              Last Updated: May 15, 2023
            </p>
            <p className="text-retro-light-gray mb-4">
              Welcome to Retro Bowl Unblocked. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-retro-green" size={20} />
              <span className="text-retro-white font-medium">Your data is protected</span>
            </div>
            <p className="text-retro-light-gray">
              Please read this privacy policy carefully to understand our policies and practices regarding your personal data and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our website. By accessing or using our website, you agree to this privacy policy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <PolicyFeature 
              icon={<Lock className="text-retro-yellow" size={24} />}
              title="Data Security"
              description="We implement appropriate security measures to protect your personal information."
            />
            <PolicyFeature 
              icon={<Eye className="text-retro-red" size={24} />}
              title="Transparency"
              description="We are clear about what data we collect and how we use it."
            />
            <PolicyFeature 
              icon={<FileText className="text-retro-blue" size={24} />}
              title="Compliance"
              description="We follow all applicable data protection laws and regulations."
            />
          </div>
          
          <div className="space-y-6">
            <PolicySection 
              title="Information We Collect"
              content={`
                <p>We may collect several types of information from and about users of our website, including:</p>
                <ul class="list-disc pl-5 space-y-2 mt-2">
                  <li>Information that you provide by filling in forms on our website.</li>
                  <li>Records and copies of your correspondence if you contact us.</li>
                  <li>Details of your visits to our website, including traffic data, location data, and other communication data.</li>
                </ul>
              `}
            />
            
            <PolicySection 
              title="How We Use Your Information"
              content={`
                <p>We use information that we collect about you or that you provide to us:</p>
                <ul class="list-disc pl-5 space-y-2 mt-2">
                  <li>To present our website and its contents to you.</li>
                  <li>To provide you with information, products, or services that you request from us.</li>
                  <li>To fulfill any other purpose for which you provide it.</li>
                  <li>To carry out our obligations and enforce our rights.</li>
                  <li>To improve our website and user experience.</li>
                </ul>
              `}
            />
            
            <PolicySection 
              title="Cookies and Similar Technologies"
              content={`
                <p>We may use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
                <p class="mt-2">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>
              `}
            />
            
            <PolicySection 
              title="Third-Party Disclosure"
              content={`
                <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users.</p>
              `}
            />
            
            <PolicySection 
              title="Children's Privacy"
              content={`
                <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this website.</p>
              `}
            />
            
            <PolicySection 
              title="Changes to Our Privacy Policy"
              content={`
                <p>We may update our privacy policy from time to time. We will post the updated policy on this page with a notice that the policy has been updated.</p>
                <p class="mt-2">You are responsible for periodically visiting our website and this privacy policy to check for any changes.</p>
              `}
            />
            
            <PolicySection 
              title="Contact Information"
              content={`
                <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
                <p class="mt-2 text-retro-yellow">privacy@retrobowlunblocked.com</p>
              `}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const PolicyFeature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
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

const PolicySection = ({ title, content }: { title: string, content: string }) => (
  <div className="bg-retro-dark-blue rounded-lg p-5 border border-retro-gray animate-pixel-fade-in">
    <h3 className="text-retro-yellow font-medium mb-3">{title}</h3>
    <div 
      className="text-retro-light-gray text-sm"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default Privacy;
