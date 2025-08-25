
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { FileWarning, Scale, FileCheck, AlertCircle } from 'lucide-react';
import SEO from '@/components/seo/SEO';

const DMCA = () => {
  useEffect(() => {
    document.title = 'DMCA Policy - Retro Bowl Unblocked';
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "DMCA Policy - Retro Bowl Unblocked",
    "description": "Our official Digital Millennium Copyright Act (DMCA) policy and procedures for reporting copyright infringement claims.",
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
        title="DMCA Policy"
        description="Our Digital Millennium Copyright Act (DMCA) policy details the process for reporting copyright infringement claims relating to Retro Bowl Unblocked content."
        keywords="DMCA notice, copyright infringement, retro bowl copyright, intellectual property, game copyright, DMCA takedown, copyright policy"
        canonicalUrl="https://retrobowlunblocked.com/dmca"
        ogType="article"
        jsonLd={jsonLd}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-retro-yellow font-pixel text-2xl mb-6 text-center animate-pixel-fade-in">
            DMCA POLICY
          </h1>
          
          <div className="bg-retro-dark-gray rounded-lg p-6 mb-8 animate-pixel-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <FileWarning className="text-retro-orange" size={24} />
              <h2 className="text-retro-white font-pixel text-lg">Digital Millennium Copyright Act</h2>
            </div>
            <p className="text-retro-light-gray mb-4">
              Retro Bowl Unblocked respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond expeditiously to claims of copyright infringement that are reported to our designated copyright agent.
            </p>
            <p className="text-retro-light-gray">
              If you are a copyright owner, or authorized on behalf of one, and you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to dmca@retrobowlunblocked.com, with the subject line: "DMCA Takedown Request."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <DMCAFeature 
              icon={<Scale className="text-retro-blue" size={24} />}
              title="Fair Use"
              description="We respect fair use principles under copyright law."
            />
            <DMCAFeature 
              icon={<FileCheck className="text-retro-green" size={24} />}
              title="Quick Response"
              description="We process all DMCA notices promptly and efficiently."
            />
            <DMCAFeature 
              icon={<AlertCircle className="text-retro-red" size={24} />}
              title="Zero Tolerance"
              description="We have a strict policy against copyright infringement."
            />
          </div>
          
          <div className="space-y-6">
            <DMCASection 
              title="DMCA Takedown Notice Requirements"
              content={`
                <p>To be effective, your DMCA Takedown Notice must include the following:</p>
                <ul class="list-decimal pl-5 space-y-2 mt-2">
                  <li>A physical or electronic signature of a person authorized to act on behalf of the copyright owner.</li>
                  <li>Identification of the copyrighted work claimed to have been infringed.</li>
                  <li>Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material.</li>
                  <li>Your contact information, including your address, telephone number, and email address.</li>
                  <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
                  <li>A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</li>
                </ul>
              `}
            />
            
            <DMCASection 
              title="Counter-Notice Procedure"
              content={`
                <p>If you believe that your content was removed due to a mistake or misidentification, you may submit a counter-notice to our designated agent containing the following information:</p>
                <ul class="list-decimal pl-5 space-y-2 mt-2">
                  <li>Your physical or electronic signature.</li>
                  <li>Identification of the material that has been removed and the location where it appeared before it was removed.</li>
                  <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.</li>
                  <li>Your name, address, telephone number, and email address.</li>
                  <li>A statement that you consent to the jurisdiction of the federal court in the district where you reside and that you will accept service of process from the person who provided the original DMCA notification.</li>
                </ul>
              `}
            />
            
            <DMCASection 
              title="Repeat Infringer Policy"
              content={`
                <p>In accordance with the DMCA, we have adopted a policy of terminating, in appropriate circumstances, users who are deemed to be repeat infringers. We may also limit access to our website and/or terminate the accounts of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.</p>
              `}
            />
            
            <DMCASection 
              title="Modifications to Policy"
              content={`
                <p>Retro Bowl Unblocked reserves the right to modify this DMCA Policy at any time. Changes and clarifications will take effect immediately upon their posting on the website. We encourage you to periodically review this policy to stay informed of our updates.</p>
              `}
            />
            
            <DMCASection 
              title="Contact Information"
              content={`
                <p>If you have any questions about our DMCA Policy, please contact us at:</p>
                <p class="mt-2 text-retro-yellow">dmca@retrobowlunblocked.com</p>
              `}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const DMCAFeature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
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

const DMCASection = ({ title, content }: { title: string, content: string }) => (
  <div className="bg-retro-dark-blue rounded-lg p-5 border border-retro-gray animate-pixel-fade-in">
    <h3 className="text-retro-yellow font-medium mb-3">{title}</h3>
    <div 
      className="text-retro-light-gray text-sm"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default DMCA;
