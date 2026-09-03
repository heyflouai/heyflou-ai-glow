import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { SITE_CONFIG, ORGANIZATION_SCHEMA , AUTHOR_PROFILES } from '@/lib/seo-config';
import { isSpanishPath } from '@/lib/i18n-routes';
import {
  getPost,
  getCounterpartPost,
  blogBasePath,
  blogPostPath,
  absoluteUrl,
  formatPostDate,
  type BlogLang,
} from '@/lib/blog';
import NotFound from '@/pages/NotFound';

const COPY = {
  en: { back: 'All posts', by: 'By', updated: 'Updated', about: 'About the author' },
  es: { back: 'Todos los artículos', by: 'Por', updated: 'Actualizado', about: 'Sobre el autor' },
} as const;

export default function BlogPost() {
  const { pathname } = useLocation();
  const { slug = '' } = useParams();
  const lang: BlogLang = isSpanishPath(pathname) ? 'es' : 'en';
  const post = getPost(lang, slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <NotFound />;

  const copy = COPY[lang];
  const counterpart = getCounterpartPost(post);
  const heroUrl = absoluteUrl(post.heroImage);
  const enUrl = counterpart && lang === 'es' ? counterpart.canonical : lang === 'en' ? post.canonical : undefined;
  const esUrl = counterpart && lang === 'en' ? counterpart.canonical : lang === 'es' ? post.canonical : undefined;

  const alternates = [
    ...(enUrl ? [{ hreflang: 'en', href: enUrl }] : []),
    ...(esUrl ? [{ hreflang: 'es-MX', href: esUrl }] : []),
    ...(enUrl ? [{ hreflang: 'x-default', href: enUrl }] : []),
  ];

  // A resolvable author entity is an E-E-A-T signal. `url` points at the team
  // page; `sameAs` carries only profiles we can actually verify — see
  // AUTHOR_PROFILES in seo-config.ts.
  const profiles = AUTHOR_PROFILES[post.author] ?? [];
  const author = {
    '@type': 'Person',
    name: post.author,
    description: post.authorBio,
    url: `${SITE_CONFIG.domain}/about`,
    ...(profiles.length ? { sameAs: profiles } : {}),
    worksFor: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.domain },
  };

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: heroUrl,
      datePublished: post.date,
      dateModified: post.dateModified,
      inLanguage: lang === 'es' ? 'es-MX' : 'en',
      keywords: post.tags.join(', '),
      mainEntityOfPage: { '@type': 'WebPage', '@id': post.canonical },
      author,
      publisher: ORGANIZATION_SCHEMA,
    },
    { '@context': 'https://schema.org', ...author },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'HeyFlou',
          item: `${SITE_CONFIG.domain}${lang === 'es' ? '/es' : '/'}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${SITE_CONFIG.domain}${blogBasePath(lang)}`,
        },
        { '@type': 'ListItem', position: 3, name: post.title, item: post.canonical },
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title={`${post.title} | HeyFlou`}
        description={post.description}
        canonical={post.canonical}
        image={heroUrl}
        type="article"
        alternates={alternates}
        jsonLd={jsonLd}
      />

      <article className="bg-background py-16 md:py-24 min-h-screen">
        <div className="mx-auto max-w-[780px] px-5 md:px-6">
          <Link
            to={blogBasePath(lang)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-hf-teal transition-colors mb-10 text-sm group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            {copy.back}
          </Link>

          {post.tags.length > 0 && (
            <p className="text-xs font-semibold uppercase tracking-[2px] text-hf-teal mb-3">
              {post.tags[0]}
            </p>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-heading leading-[1.15] mb-4">
            {post.title}
          </h1>

          <p className="text-sm text-muted-foreground mb-8">
            {post.author && (
              <>
                {copy.by} {post.author} ·{' '}
              </>
            )}
            <time dateTime={post.date}>{formatPostDate(post.date, lang)}</time>
            {post.dateModified && post.dateModified !== post.date && (
              <> · {copy.updated} {formatPostDate(post.dateModified, lang)}</>
            )}
          </p>

          {post.heroImage && (
            <img
              src={post.heroImage}
              alt={`${post.title} (HeyFlou)`}
              className="w-full rounded-2xl border border-border mb-10 object-cover"
            />
          )}

          <div
            className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-hf-teal"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {post.authorBio && (
            <div className="mt-14 pt-8 border-t border-border">
              <h2 className="text-base font-semibold text-foreground font-heading mb-2">
                {copy.about}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">{post.author}</span>: {post.authorBio}
              </p>
            </div>
          )}

          {counterpart && (
            <p className="mt-8 text-sm">
              <Link
                to={blogPostPath(counterpart.lang, counterpart.slug)}
                className="text-hf-teal hover:underline"
              >
                {counterpart.lang === 'es' ? 'Leer en español →' : 'Read in English →'}
              </Link>
            </p>
          )}
        </div>
      </article>
    </>
  );
}
