/**
 * SEO Configuration - Single source of truth for all SEO-related data
 */

export const SITE_CONFIG = {
  name: "HeyFlou",
  domain: "https://heyflou.com",
  twitterHandle: "@Heyflou_",
  linkedIn: "https://www.linkedin.com/company/heyflou",
  email: "Hello@heyflou.com",
  logo: "https://heyflou.com/logo.png",
  ogImage: "https://heyflou.com/og-image.jpg",
  twitterImage: "https://heyflou.com/og-image.jpg",
} as const;

export const DEFAULT_SEO = {
  title: "HeyFlou | AI Consulting for SMB Workflow Automation",
  description: "Save 10–20 hours per week with custom AI automation. WhatsApp AI bots, lead management pipelines, and CRM + email marketing for medical, travel agencies, and private education/fitness.",
} as const;

/**
 * Page-specific SEO configurations
 */
export const PAGE_SEO = {
  home: {
    title: "HeyFlou | AI Consulting for SMB Workflow Automation",
    description: "Save 10–20 hours per week with custom AI automation. WhatsApp AI bots, lead management pipelines, and CRM + email marketing for medical, travel agencies, and private education/fitness.",
    path: "/",
  },
  services: {
    title: "AI Automation Services | Travel, Healthcare, Fitness & Education | HeyFlou",
    description: "Industry-specific AI automation solutions for travel agencies, healthcare practices, fitness studios, and education centers. Eliminate manual work and scale operations with intelligent chatbots, scheduling, and workflow automation.",
    path: "/services",
  },
  caseStudies: {
    title: "Case Studies | HeyFlou",
    description: "See how HeyFlou automations reduce no-shows, improve response time, and increase booked clients across medical, travel, and private education/fitness businesses.",
    path: "/case-studies",
  },
  about: {
    title: "About | HeyFlou",
    description: "HeyFlou builds practical AI automation systems for SMBs—WhatsApp bots, lead pipelines, and CRM + email marketing—designed to save time and drive growth.",
    path: "/about",
  },
  contact: {
    title: "Contact | HeyFlou",
    description: "Get in touch with HeyFlou to discuss AI automation for your business. Book a free strategy call or send us a message.",
    path: "/contact",
  },
  roiCalculator: {
    title: "ROI Calculator | HeyFlou",
    description: "Calculate your potential savings with AI automation. See how WhatsApp AI bots and lead management can impact your bottom line.",
    path: "/roi-calculator",
  },
} as const;

/**
 * Organization Schema - included on all pages
 */
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HeyFlou",
  "url": SITE_CONFIG.domain,
  "logo": SITE_CONFIG.logo,
  "description": "AI Consulting for SMB Workflow Automation",
  "email": SITE_CONFIG.email,
  "sameAs": [
    SITE_CONFIG.linkedIn,
    "https://x.com/Heyflou_"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": SITE_CONFIG.email,
    "contactType": "customer service",
    "availableLanguage": ["English", "Spanish"]
  }
} as const;

/**
 * Service Schema - for Services page
 */
export const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Automation Consulting",
  "provider": {
    "@type": "Organization",
    "name": "HeyFlou",
    "url": SITE_CONFIG.domain
  },
  "name": "AI Workflow Automation for SMBs",
  "description": "WhatsApp AI bots, lead management pipelines, and CRM + email marketing automation for small and medium businesses.",
  "audience": {
    "@type": "Audience",
    "audienceType": "Small and Medium Businesses",
    "geographicArea": {
      "@type": "AdministrativeArea",
      "name": "United States"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Automation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "WhatsApp AI Bot",
          "description": "24/7 lead capture and customer engagement via WhatsApp"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lead Management Pipeline",
          "description": "Automated lead tracking and follow-up system"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CRM + Email Marketing",
          "description": "Client organization and automated email sequences"
        }
      }
    ]
  }
} as const;

/**
 * Helper to get canonical URL
 */
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.domain}${cleanPath === '/' ? '' : cleanPath}`;
}
