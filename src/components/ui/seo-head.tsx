import { useEffect } from 'react';
import { SITE_CONFIG, DEFAULT_SEO, ORGANIZATION_SCHEMA, getCanonicalUrl } from '@/lib/seo-config';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
  jsonLd?: object | object[];
  noIndex?: boolean;
}

/**
 * SEOHead Component - Manages all SEO meta tags
 * 
 * Features:
 * - Title and meta description
 * - Open Graph tags (Facebook, LinkedIn)
 * - Twitter Card tags
 * - Canonical URL
 * - JSON-LD structured data (always includes Organization schema)
 */
export const SEOHead = ({ 
  title = DEFAULT_SEO.title, 
  description = DEFAULT_SEO.description, 
  canonical, 
  image = SITE_CONFIG.ogImage,
  type = "website",
  jsonLd,
  noIndex = false,
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Helper to update/create meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', description);
    updateMeta('author', SITE_CONFIG.name);
    
    // Robots
    if (noIndex) {
      updateMeta('robots', 'noindex, nofollow');
    } else {
      updateMeta('robots', 'index, follow');
    }

    // Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', type, true);
    updateMeta('og:image', image, true);
    updateMeta('og:site_name', SITE_CONFIG.name, true);
    
    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:site', SITE_CONFIG.twitterHandle);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // Canonical URL
    const canonicalUrl = canonical || getCanonicalUrl(window.location.pathname);
    updateMeta('og:url', canonicalUrl, true);
    
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // JSON-LD structured data
    // Always include Organization schema, plus any page-specific schemas
    const schemas: object[] = [ORGANIZATION_SCHEMA];
    
    if (jsonLd) {
      if (Array.isArray(jsonLd)) {
        // Filter out any Organization schemas from jsonLd to avoid duplicates
        const filteredSchemas = jsonLd.filter(
          (schema: any) => schema['@type'] !== 'Organization'
        );
        schemas.push(...filteredSchemas);
      } else if ((jsonLd as any)['@type'] !== 'Organization') {
        schemas.push(jsonLd);
      }
    }

    // Update or create JSON-LD script
    const scriptId = 'structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    // If multiple schemas, wrap in @graph
    if (schemas.length === 1) {
      script.textContent = JSON.stringify(schemas[0]);
    } else {
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": schemas.map(s => {
          // Remove @context from individual schemas when using @graph
          const { "@context": _, ...rest } = s as any;
          return rest;
        })
      });
    }

  }, [title, description, canonical, image, type, jsonLd, noIndex]);

  return null;
};
