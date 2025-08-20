import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
// import SupabaseProvider from "@/providers/SupabaseProvider";
// import UserProvider from "@/providers/UserProvider";
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/ui/footer";
import { generateMetadata, generateStructuredData } from "@/lib/seo-utils";
import { ScrollToTopButton } from "@/components/scroll-to-top";
import Script from "next/script";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true
})

export const metadata: Metadata = generateMetadata({
  title: "Text Behind Image - AI-Powered Photo Editor | Create Stunning Visual Effects",
  description: "Create professional text behind image effects with AI-powered background removal. Free online photo editor trusted by 50,000+ creators worldwide. No signup required.",
  keywords: [
    "text behind image",
    "ai photo editor",
    "background removal",
    "photo editing tool",
    "visual effects",
    "graphic design",
    "content creation"
  ]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = generateStructuredData('website');

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preload critical resources for Core Web Vitals */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Enhanced favicon and icons for better branding */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        
        {/* Critical CSS for faster First Contentful Paint */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body { 
              font-family: 'Inter', 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              font-feature-settings: 'cv11', 'ss01';
              font-variation-settings: 'opsz' 32;
            }
            .gradient-background { 
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              min-height: 100vh;
            }
            .glass { 
              backdrop-filter: blur(16px) saturate(180%);
              background: rgba(255, 255, 255, 0.1);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }
            .text-gradient {
              background: linear-gradient(135deg, #8b5cf6, #a855f7, #3b82f6);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          `
        }} />
      </head>
      <body className={GeistSans.className}>
        {/* Enhanced Structured Data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
        
        {/* Remove SupabaseProvider and UserProvider wrapping */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
            <ScrollToTopButton />
            <Analytics />
            <SpeedInsights />
            <Toaster />
          </div>
        </ThemeProvider>
        
        {/* Enhanced Web Vitals monitoring for performance optimization */}
        <Script
          id="web-vitals-enhanced"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Enhanced Web Vitals tracking for 2025 SEO
              function sendToAnalytics(metric) {
                console.log('Web Vital Enhanced:', metric.name, metric.value);
                // Send to analytics service with enhanced data
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'web_vital', {
                    event_category: 'performance',
                    event_label: metric.name,
                    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value)
                  });
                }
              }
              
              // Track Core Web Vitals for SEO ranking
              function trackWebVitals() {
                try {
                  new PerformanceObserver((entryList) => {
                    for (const entry of entryList.getEntries()) {
                      if (entry.entryType === 'largest-contentful-paint') {
                        sendToAnalytics({ name: 'LCP', value: entry.startTime });
                      } else if (entry.entryType === 'first-input') {
                        sendToAnalytics({ name: 'FID', value: entry.processingStart - entry.startTime });
                      }
                    }
                  }).observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
                  
                  // Track CLS
                  let clsValue = 0;
                  new PerformanceObserver((entryList) => {
                    for (const entry of entryList.getEntries()) {
                      if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                      }
                    }
                    sendToAnalytics({ name: 'CLS', value: clsValue });
                  }).observe({ entryTypes: ['layout-shift'] });
                } catch (e) {
                  console.log('Web Vitals tracking not supported');
                }
              }
              
              // Initialize tracking when DOM is ready
              if (document.readyState === 'complete') {
                trackWebVitals();
              } else {
                window.addEventListener('load', trackWebVitals);
              }
            `
          }}
        />
      </body>
    </html>
  );
}
