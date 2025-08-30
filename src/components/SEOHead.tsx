import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function SEOHead({ 
  title, 
  description, 
  keywords = [], 
  image, 
  url,
  type = 'website' 
}: SEOHeadProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector);
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords.length > 0) {
      updateMetaTag('keywords', keywords.join(', '));
    }
    updateMetaTag('author', 'Hamdam - Full Stack Developer');

    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    if (url) {
      updateMetaTag('og:url', url, true);
    }
    if (image) {
      updateMetaTag('og:image', image, true);
    }
    updateMetaTag('og:site_name', 'Hamdam\'s Portfolio', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    if (image) {
      updateMetaTag('twitter:image', image, true);
    }

    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Structured data for projects
    if (type === 'article') {
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        'name': title,
        'description': description,
        'author': {
          '@type': 'Person',
          'name': 'Hamdam'
        },
        'datePublished': new Date().toISOString(),
        'keywords': keywords.join(', ')
      };

      let scriptTag = document.querySelector('#structured-data');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('id', 'structured-data');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      
      scriptTag.textContent = JSON.stringify(structuredData);
    }

  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything
}

export default SEOHead;