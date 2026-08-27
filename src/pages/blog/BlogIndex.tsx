import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SEOHead } from '@/components/ui/seo-head';
import { SITE_CONFIG } from '@/lib/seo-config';
import { isSpanishPath } from '@/lib/i18n-routes';
import { getPosts, blogPostPath, formatPostDate, type BlogLang } from '@/lib/blog';

const COPY = {
  en: {
    eyebrow: 'BLOG',
    title: 'Practical AI notes for growing businesses',
    subtitle:
      'Field notes on AI agents, automation and operations — written for the teams that have to run the business tomorrow morning.',
    seoTitle: 'Blog | Practical AI automation notes | HeyFlou',
    seoDescription:
      'Field notes on AI agents, automation, and operations for small and mid-sized businesses — written by the HeyFlou team.',
    empty: 'New posts are on the way.',
    read: 'Read the post',
  },
  es: {
    eyebrow: 'BLOG',
    title: 'Notas prácticas de IA para negocios en crecimiento',
    subtitle:
      'Apuntes reales sobre agentes de IA, automatización y operación — escritos para los equipos que tienen que sacar el negocio mañana por la mañana.',
    seoTitle: 'Blog | Notas prácticas de automatización con IA | HeyFlou',
    seoDescription:
      'Apuntes sobre agentes de IA, automatización y operación para empresas medianas y pequeñas, escritos por el equipo de HeyFlou.',
    empty: 'Pronto publicamos nuevos artículos.',
    read: 'Leer el artículo',
  },
} as const;

export default function BlogIndex() {
  const { pathname } = useLocation();
  const lang: BlogLang = isSpanishPath(pathname) ? 'es' : 'en';
  const copy = COPY[lang];
  const posts = getPosts(lang);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: copy.seoTitle,
    description: copy.seoDescription,
    inLanguage: lang === 'es' ? 'es-MX' : 'en',
    url: `${SITE_CONFIG.domain}${lang === 'es' ? '/es/blog' : '/blog'}`,
    publisher: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.domain },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: p.canonical,
      author: { '@type': 'Person', name: p.author },
    })),
  };

  return (
    <>
      <SEOHead title={copy.seoTitle} description={copy.seoDescription} jsonLd={blogSchema} />

      <section className="bg-background py-16 md:py-24 lg:py-28 min-h-screen">
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[2px] text-hf-teal mb-3">
            {copy.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
            {copy.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{copy.subtitle}</p>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.length === 0 && <p className="text-muted-foreground">{copy.empty}</p>}

            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-hf-teal/50 hover:shadow-[0_0_24px_rgba(6,182,212,0.12)]"
              >
                <Link to={blogPostPath(lang, post.slug)} className="block">
                  {post.heroImage && (
                    <img
                      src={post.heroImage}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-44 md:h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <p className="text-xs text-muted-foreground mb-3">
                      <time dateTime={post.date}>{formatPostDate(post.date, lang)}</time>
                      {post.author && <> · {post.author}</>}
                    </p>
                    <h2 className="text-xl font-semibold text-foreground font-heading leading-snug mb-2 group-hover:text-hf-teal transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-medium text-hf-teal">
                      {copy.read} →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
