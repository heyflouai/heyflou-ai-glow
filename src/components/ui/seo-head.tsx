import { useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { SITE_CONFIG, DEFAULT_SEO, ORGANIZATION_SCHEMA, getCanonicalUrl } from '@/lib/seo-config';
import { findRouteByPath, getAlternates, isSpanishPath } from '@/lib/i18n-routes';

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
 * Tags are rendered declaratively (not via useEffect) so they are serialized
 * into each statically pre-rendered HTML file at build time.
 *
 * Features:
 * - Title and meta description
 * - Open Graph tags (Facebook, LinkedIn)
 * - Twitter Card tags
 * - Canonical URL + hreflang alternates
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
  const { pathname } = useLocation();

  // Spanish routes get native es-MX metadata and their own canonical URL.
  const localized = findRouteByPath(pathname);
  const spanish = isSpanishPath(pathname);
  const resolvedTitle = spanish && localized ? localized.esTitle : title;
  const resolvedDescription = spanish && localized ? localized.esDescription : description;
  const resolvedCanonical = spanish && localized
    ? `${SITE_CONFIG.domain}${localized.es}`
    : canonical;

  const canonicalUrl = resolvedCanonical || getCanonicalUrl(pathname);
  const alternates = getAlternates(pathname);

  // Always include Organization schema, plus any page-specific schemas
  const schemas: object[] = [ORGANIZATION_SCHEMA];
  if (jsonLd) {
    if (Array.isArray(jsonLd)) {
      schemas.push(...jsonLd.filter((schema: any) => schema['@type'] !== 'Organization'));
    } else if ((jsonLd as any)['@type'] !== 'Organization') {
      schemas.push(jsonLd);
    }
  }

  const structuredData =
    schemas.length === 1
      ? schemas[0]
      : {
          "@context": "https://schema.org",
          "@graph": schemas.map((s) => {
            const { "@context": _ctx, ...rest } = s as any;
            return rest;
          }),
        };

  return (
    <Head>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="author" content={SITE_CONFIG.name} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content={spanish ? 'es_MX' : 'en_US'} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={canonicalUrl} />

      {(alternates ?? []).map(({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} data-i18n-alt="true" />
      ))}

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Head>
  );
};
