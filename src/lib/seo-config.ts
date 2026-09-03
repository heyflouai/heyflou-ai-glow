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
  description: "AI agents and custom automation for SMBs — built around your finance, operations, customer service and marketing workflows. Industry-agnostic.",
} as const;

/**
 * Page-specific SEO configurations
 */
export const PAGE_SEO = {
  home: {
    title: "HeyFlou | AI Consulting for SMB Workflow Automation",
    description: "AI agents and custom automation for SMBs — built around your finance, operations, customer service and marketing workflows. Industry-agnostic.",
    path: "/",
  },
  services: {
    title: "AI Automation Services for SMBs | HeyFlou",
    description: "AI automation for finance, operations, customer service and marketing — AI agents, custom platforms and strategy for Mexican SMBs.",
    path: "/services",
  },
  caseStudies: {
    title: "Case Studies | HeyFlou",
    description: "Real HeyFlou builds: how SMBs cut response time, recovered hours per week, and automated finance, operations, customer service and marketing workflows.",
    path: "/case-studies",
  },
  about: {
    title: "About | HeyFlou",
    description: "HeyFlou builds AI agents and automation infrastructure for SMBs, organized by business function — finance, operations, customer service and marketing.",
    path: "/about",
  },
  contact: {
    title: "Contact | HeyFlou",
    description: "Get in touch with HeyFlou to discuss AI automation for your business. Book a free strategy call or send us a message.",
    path: "/contact",
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
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_CONFIG.domain}/logo.png`,
    "width": 512,
    "height": 512
  },
  "image": `${SITE_CONFIG.domain}/logo.png`,
  "description": "HeyFlou builds AI agents, custom automation platforms and AI strategy for business functions — finance, operations, customer service and marketing.",
  "email": SITE_CONFIG.email,
  "founder": [
    { "@type": "Person", "name": "Samy Nakach", "jobTitle": "Co-Founder, CEO & Product" },
    { "@type": "Person", "name": "Salo Zayat", "jobTitle": "Co-Founder, CTO & Engineering" }
  ],
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
  "description": "AI agents, custom automation platforms and AI strategy for SMBs, organized by business function — finance, operations, customer service and marketing.",
  "audience": {
    "@type": "Audience",
    "audienceType": "Small and Medium Businesses",
    "geographicArea": {
      "@type": "AdministrativeArea",
      "name": "Worldwide"
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
          "name": "AI Agents",
          "description": "Autonomous agents that answer, qualify, book and follow up across your existing channels"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom AI Automation",
          "description": "Bespoke automation built around a specific workflow in finance, operations, customer service or marketing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Infrastructure",
          "description": "Agentic AI platforms and the infrastructure to run them in production"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Strategy Consulting",
          "description": "Assessment and roadmap for where AI actually pays back in your business"
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
  return `${SITE_CONFIG.domain}${cleanPath === '/' ? '/' : cleanPath}`;
}

/**
 * Build a Service schema for a specific service/industry route.
 */
export function buildServiceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: string;
  audienceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: getCanonicalUrl(opts.path),
    provider: {
      "@type": "Organization",
      name: "HeyFlou",
      url: SITE_CONFIG.domain,
      logo: SITE_CONFIG.logo,
    },
    areaServed: opts.areaServed ?? "Worldwide",
    audience: opts.audienceType
      ? { "@type": "Audience", audienceType: opts.audienceType }
      : undefined,
  };
}

/**
 * WebSite schema - emitted on every page alongside Organization.
 * Declares the site itself and its two language versions.
 */
export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SITE_CONFIG.name,
  "url": SITE_CONFIG.domain,
  "inLanguage": ["en", "es-MX"],
  "publisher": { "@type": "Organization", "name": SITE_CONFIG.name, "url": SITE_CONFIG.domain },
} as const;

/**
 * Build a BreadcrumbList for a nested route.
 * Pass crumbs excluding the site root - the root is prepended automatically.
 */
export function buildBreadcrumbSchema(
  crumbs: { name: string; path: string }[],
  lang: 'en' | 'es' = 'en',
) {
  const root = { name: "HeyFlou", path: lang === 'es' ? '/es' : '/' };
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [root, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: getCanonicalUrl(c.path),
    })),
  };
}

/**
 * Build a CollectionPage wrapping an ItemList - for index pages such as
 * /case-studies that list entities but are not themselves an article.
 */
export function buildCollectionPageSchema(opts: {
  name: string;
  description: string;
  path: string;
  lang?: 'en' | 'es';
  items: { name: string; description?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: getCanonicalUrl(opts.path),
    inLanguage: opts.lang === 'es' ? 'es-MX' : 'en',
    isPartOf: { "@type": "WebSite", name: SITE_CONFIG.name, url: SITE_CONFIG.domain },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: opts.items.length,
      itemListElement: opts.items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        ...(it.description ? { description: it.description } : {}),
      })),
    },
  };
}

/**
 * Human labels for breadcrumb trails, keyed by English path.
 * Used to auto-build a BreadcrumbList for any nested route.
 */
export const BREADCRUMB_LABELS: Record<string, { en: string; es: string }> = {
  '/services': { en: 'Services', es: 'Servicios' },
  '/services/agents': { en: 'AI Agents', es: 'Agentes de IA' },
  '/services/infrastructure': { en: 'AI Infrastructure', es: 'Infraestructura de IA' },
  '/services/consulting': { en: 'AI Consulting', es: 'Asesoría en IA' },
  '/services/custom': { en: 'Custom Automation', es: 'Automatización personalizada' },
  '/case-studies': { en: 'Case Studies', es: 'Casos de éxito' },
  '/about': { en: 'About', es: 'Quiénes somos' },
  '/contact': { en: 'Contact', es: 'Contacto' },
  '/blog': { en: 'Blog', es: 'Blog' },
  '/privacy-policy': { en: 'Privacy Policy', es: 'Aviso de privacidad' },
  '/terms': { en: 'Terms of Service', es: 'Términos del servicio' },
  '/refund': { en: 'Refund Policy', es: 'Política de reembolso' },
};

/**
 * Verified public profiles per author, emitted as Person.sameAs on blog posts.
 *
 * Only add a URL that actually resolves to that person. An unverifiable or
 * wrong sameAs is worse than none: it asks Google to reconcile the author with
 * an entity that is not them.
 */
export const AUTHOR_PROFILES: Record<string, string[]> = {
  // TODO(samy): add personal LinkedIn / X once confirmed, e.g.
  // 'Samy Nakach': ['https://www.linkedin.com/in/<handle>'],
};
