import { Metadata } from 'next';
import seoConfig from './seo-config.json';

export interface SEOPageData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  author?: string;
  noindex?: boolean;
}

// Generate comprehensive metadata for pages
export function generateMetadata({
  title,
  description,
  keywords = [],
  image = seoConfig.openGraph.image,
  url = seoConfig.siteUrl,
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  author = seoConfig.author,
  noindex = false
}: SEOPageData): Metadata {
  const fullTitle = title.includes(seoConfig.siteName) 
    ? title 
    : `${title} | ${seoConfig.siteName}`;
  
  const allKeywords = [
    ...seoConfig.keywords,
    ...keywords,
    ...tags
  ].join(', ');

  const robots = noindex 
    ? 'noindex, nofollow'
    : seoConfig.robots;

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: author }],
    creator: seoConfig.creator,
    publisher: seoConfig.publisher,
    category: seoConfig.category,
    robots,
    alternates: {
      canonical: url,
      languages: seoConfig.alternateLanguages.reduce((acc, lang) => ({
        ...acc,
        [lang.lang]: lang.url
      }), {})
    },
    openGraph: {
      type: type as any,
      title: fullTitle,
      description,
      url,
      siteName: seoConfig.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: seoConfig.openGraph.imageAlt,
          type: 'image/jpeg'
        }
      ],
      locale: seoConfig.locale,
      publishedTime,
      modifiedTime,
      section,
      tags
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: seoConfig.twitter.creator,
      site: seoConfig.twitter.site
    },
    viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#ffffff' },
      { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' }
    ],
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180' }
      ],
      other: [
        { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#8b5cf6' }
      ]
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: seoConfig.siteName,
      startupImage: [
        { url: '/apple-launch-1125x2436.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)' }
      ]
    },
    other: {
      'mobile-web-app-capable': 'yes',
      'application-name': seoConfig.siteName,
      'msapplication-TileColor': '#8b5cf6',
      'msapplication-config': '/browserconfig.xml'
    }
  };
}

// Generate JSON-LD structured data
export function generateStructuredData(pageType: string = 'website', additionalData: any = {}) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      seoConfig.schema.organization,
      seoConfig.schema.website,
      seoConfig.schema.softwareApplication,
      seoConfig.schema.breadcrumb,
      seoConfig.schema.service
    ]
  };

  // Add page-specific structured data
  if (pageType === 'faq') {
    baseStructuredData['@graph'].push(seoConfig.schema.faq as any);
  }

  if (pageType === 'article' || pageType === 'blog') {
    const articleSchema = {
      '@type': 'Article',
      headline: additionalData.title,
      description: additionalData.description,
      image: additionalData.image || seoConfig.openGraph.image,
      author: {
        '@type': 'Person',
        name: additionalData.author || seoConfig.author
      },
      publisher: seoConfig.schema.organization,
      datePublished: additionalData.publishedTime,
      dateModified: additionalData.modifiedTime || additionalData.publishedTime,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': additionalData.url || seoConfig.siteUrl
      }
    };
    baseStructuredData['@graph'].push(articleSchema as any);
  }

  if (pageType === 'howto' || pageType === 'website') {
    // Always include HowTo schema for main website pages
    baseStructuredData['@graph'].push(seoConfig.schema.howto as any);
  }

  return JSON.stringify(baseStructuredData, null, 2);
}

// SEO optimization utilities for content
export class SEOOptimizer {
  // Calculate keyword density
  static calculateKeywordDensity(text: string, keyword: string): number {
    const words = text.toLowerCase().split(/\s+/);
    const keywordWords = keyword.toLowerCase().split(/\s+/);
    const keywordLength = keywordWords.length;
    let matches = 0;

    for (let i = 0; i <= words.length - keywordLength; i++) {
      const phrase = words.slice(i, i + keywordLength).join(' ');
      if (phrase === keyword.toLowerCase()) {
        matches++;
      }
    }

    return (matches / (words.length / keywordLength)) * 100;
  }

  // Generate NLP-optimized content variations
  static generateKeywordVariations(mainKeyword: string): string[] {
    const variations = [
      mainKeyword,
      mainKeyword.replace(/\s/g, '-'),
      mainKeyword.replace(/\s/g, ''),
      `${mainKeyword} tool`,
      `${mainKeyword} app`,
      `${mainKeyword} generator`,
      `${mainKeyword} creator`,
      `${mainKeyword} maker`,
      `${mainKeyword} editor`,
      `${mainKeyword} online`,
      `${mainKeyword} free`,
      `ai ${mainKeyword}`,
      `best ${mainKeyword}`,
      `professional ${mainKeyword}`,
      `${mainKeyword} software`
    ];
    return [...new Set(variations)];
  }

  // Check content for E-E-A-T signals
  static analyzeEEAT(content: string): {
    experience: number;
    expertise: number;
    authoritativeness: number;
    trustworthiness: number;
    suggestions: string[];
  } {
    const suggestions: string[] = [];
    
    // Experience signals
    const experienceWords = ['experience', 'used', 'tested', 'tried', 'hands-on', 'real-world'];
    const experienceScore = experienceWords.filter(word => 
      content.toLowerCase().includes(word)
    ).length / experienceWords.length * 100;

    // Expertise signals
    const expertiseWords = ['professional', 'expert', 'advanced', 'technical', 'specialized'];
    const expertiseScore = expertiseWords.filter(word =>
      content.toLowerCase().includes(word)
    ).length / expertiseWords.length * 100;

    // Authoritativeness signals
    const authorityWords = ['certified', 'award', 'recognized', 'industry', 'standard'];
    const authorityScore = authorityWords.filter(word =>
      content.toLowerCase().includes(word)
    ).length / authorityWords.length * 100;

    // Trustworthiness signals
    const trustWords = ['secure', 'privacy', 'guarantee', 'reliable', 'trusted'];
    const trustScore = trustWords.filter(word =>
      content.toLowerCase().includes(word)
    ).length / trustWords.length * 100;

    if (experienceScore < 20) {
      suggestions.push('Add more personal experience and real-world usage examples');
    }
    if (expertiseScore < 30) {
      suggestions.push('Include more technical expertise and professional terminology');
    }
    if (authorityScore < 15) {
      suggestions.push('Add authority signals like certifications or industry recognition');
    }
    if (trustScore < 25) {
      suggestions.push('Include trust signals like security features and user testimonials');
    }

    return {
      experience: Math.round(experienceScore),
      expertise: Math.round(expertiseScore),
      authoritativeness: Math.round(authorityScore),
      trustworthiness: Math.round(trustScore),
      suggestions
    };
  }

  // Generate semantic keyword clusters
  static generateSemanticClusters(mainKeyword: string): { [key: string]: string[] } {
    return {
      primary: [mainKeyword, `${mainKeyword} editor`, `${mainKeyword} tool`],
      intent: [`how to ${mainKeyword}`, `${mainKeyword} tutorial`, `create ${mainKeyword}`],
      features: [`ai ${mainKeyword}`, `automatic ${mainKeyword}`, `professional ${mainKeyword}`],
      comparisons: [`best ${mainKeyword}`, `${mainKeyword} vs`, `${mainKeyword} alternative`],
      problems: [`${mainKeyword} not working`, `fix ${mainKeyword}`, `${mainKeyword} help`],
      commercial: [`${mainKeyword} free`, `${mainKeyword} online`, `${mainKeyword} app`]
    };
  }
}

// Core Web Vitals optimization
export const coreWebVitalsOptimization = {
  // Preload critical resources
  preloadResources: [
    { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: '' },
    { rel: 'preload', href: '/images/hero-bg.webp', as: 'image', type: 'image/webp' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' }
  ],
  
  // Image optimization settings
  imageSettings: {
    quality: 85,
    formats: ['webp', 'avif'],
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    placeholder: 'blur' as const,
    loading: 'lazy' as const
  },
  
  // Critical CSS inlining
  criticalCSS: `
    body { font-family: 'Inter', sans-serif; }
    .gradient-background { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
    .glass { backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.1); }
  `
};

// Generate sitemap data
export function generateSitemapData() {
  const pages = [
    { url: '/', priority: 1.0, changeFreq: 'daily' },
    { url: '/app', priority: 0.9, changeFreq: 'daily' },
    { url: '/examples', priority: 0.8, changeFreq: 'weekly' },
    { url: '/contact', priority: 0.7, changeFreq: 'monthly' },
    { url: '/privacy', priority: 0.6, changeFreq: 'yearly' },
    { url: '/terms', priority: 0.6, changeFreq: 'yearly' }
  ];

  return pages.map(page => ({
    ...page,
    url: `${seoConfig.siteUrl}${page.url}`,
    lastModified: new Date().toISOString()
  }));
}

export default seoConfig;
