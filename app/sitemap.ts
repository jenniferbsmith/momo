import { MetadataRoute } from 'next';
import { generateSitemapData } from '@/lib/seo-utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = generateSitemapData();
  
  return pages.map(page => ({
    url: page.url,
    lastModified: new Date(page.lastModified),
    changeFrequency: page.changeFreq as any,
    priority: page.priority,
  }));
}
