import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { SITE_CONFIG } from '@/lib/seo-config';
import { isSpanishPath } from '@/lib/i18n-routes';
import { getPosts, blogPostPath, formatPostDate, type BlogLang, type BlogPost } from '@/lib/blog';
import heyflouLogo from '@/assets/heyflou-logo-new.png';

const COPY = {
  en: {
    eyebrow: 'BLOG',
    title: 'Practical AI notes for growing businesses',
    subtitle:
      'What we learn building and running AI automation for small and mid-sized businesses — organized by business function, not by industry.',
    seoTitle: 'Blog | Practical AI automation notes | HeyFlou',
    seoDescription:
      'Field notes on AI agents, automation, and operations for small and mid-sized businesses, written by the HeyFlou team.',
    empty: 'New posts are on the way.',
    readMore: 'Read more',
    more: 'More stories',
    byline: 'HeyFlou Team',
    topicsHeading: 'What we write about',
    topics: [
      { name: 'Finance', desc: 'Invoicing, payment follow-up, recurring reporting.' },
      { name: 'Operations', desc: 'Scheduling, intake, data entry, internal handoffs.' },
      { name: 'Customer service', desc: 'First response, qualification, booking, follow-up.' },
      { name: 'Marketing', desc: 'Lead capture and routing, nurture, campaign reporting.' },
    ],
  },
  es: {
    eyebrow: 'BLOG',
    title: 'Notas prácticas de IA para negocios en crecimiento',
    subtitle:
      'Lo que aprendemos construyendo y operando automatización con IA para pequeñas y medianas empresas — organizado por función de negocio, no por industria.',
    seoTitle: 'Blog | Notas prácticas de automatización con IA | HeyFlou',
    seoDescription:
      'Apuntes sobre agentes de IA, automatización y operación para empresas medianas y pequeñas, escritos por el equipo de HeyFlou.',
    empty: 'Pronto publicamos nuevos artículos.',
    readMore: 'Leer más',
    more: 'Más artículos',
    byline: 'Equipo HeyFlou',
    topicsHeading: 'Sobre qué escribimos',
    topics: [
      { name: 'Finanzas', desc: 'Facturación, seguimiento de cobranza, reportes recurrentes.' },
      { name: 'Operaciones', desc: 'Agenda, alta de clientes, captura de datos, entregas internas.' },
      { name: 'Atención a clientes', desc: 'Primera respuesta, calificación, agendado, seguimiento.' },
      { name: 'Marketing', desc: 'Captura y ruteo de prospectos, seguimiento, reportes.' },
    ],
  },
} as const;

/** Image panel with the team badge overlaid. Shared by the featured card and the grid. */
const CardMedia = ({ post, byline, tall }: { post: BlogPost; byline: string; tall?: boolean }) => (
  <div className={`relative w-full ${tall ? 'h-56 md:h-64' : 'h-44'} overflow-hidden bg-muted`}>
    {post.heroImage && (
      <img
        src={post.heroImage}
        alt={post.title}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    )}
    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-border px-2.5 py-1 text-[11px] font-medium text-hf-ink shadow-sm">
      <img src={heyflouLogo} alt="" aria-hidden className="w-3.5 h-3.5 object-contain" />
      {byline}
    </span>
  </div>
);

const PostCard = ({ post, lang, byline }: { post: BlogPost; lang: BlogLang; byline: string }) => (
  <article className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-hf-teal/50 hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)]">
    <Link to={blogPostPath(lang, post.slug)} className="block h-full">
      <CardMedia post={post} byline={byline} />
      <div className="p-5">
        <time dateTime={post.date} className="text-xs text-muted-foreground">
          {formatPostDate(post.date, lang)}
        </time>
        <h3 className="mt-2 text-lg font-semibold text-foreground font-heading leading-snug group-hover:text-hf-teal transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {post.description}
        </p>
      </div>
    </Link>
  </article>
);

export default function BlogIndex() {
  const { pathname } = useLocation();
  const lang: BlogLang = isSpanishPath(pathname) ? 'es' : 'en';
  const copy = COPY[lang];
  const posts = getPosts(lang);
  const [featured, ...rest] = posts;

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

      <section className="bg-background py-16 md:py-20 lg:py-24 min-h-screen">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[2px] text-hf-teal mb-3">
            {copy.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4 max-w-3xl">
            {copy.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{copy.subtitle}</p>

          {!featured && <p className="mt-12 text-muted-foreground">{copy.empty}</p>}

          {/* FEATURED — headline and summary on the left, the card itself on the right */}
          {featured && (
            <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <time dateTime={featured.date} className="text-sm text-muted-foreground">
                  {formatPostDate(featured.date, lang)}
                </time>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground font-heading leading-tight">
                  {featured.title}
                </h2>
                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                  {featured.description}
                </p>
                <Link
                  to={blogPostPath(lang, featured.slug)}
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-[0_12px_32px_rgba(15,23,42,0.10)] transition-all duration-200 hover:border-hf-teal/50 hover:text-hf-teal hover:scale-[1.02]"
                >
                  {copy.readMore}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <article className="rounded-2xl border border-border bg-card overflow-hidden group">
                <Link to={blogPostPath(lang, featured.slug)} className="block">
                  <CardMedia post={featured} byline={copy.byline} tall />
                  <div className="p-6">
                    <time dateTime={featured.date} className="text-xs text-muted-foreground">
                      {formatPostDate(featured.date, lang)}
                    </time>
                    <h3 className="mt-2 text-xl font-semibold text-foreground font-heading leading-snug group-hover:text-hf-teal transition-colors">
                      {featured.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {featured.description}
                    </p>
                  </div>
                </Link>
              </article>
            </div>
          )}

          {/* MORE STORIES */}
          {rest.length > 0 && (
            <>
              <h2 className="mt-20 md:mt-24 text-xl font-bold text-hf-teal font-heading">
                {copy.more}
              </h2>
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {rest.map((post) => (
                  <PostCard key={post.slug} post={post} lang={lang} byline={copy.byline} />
                ))}
              </div>
            </>
          )}

          {/* Topic strip sits AFTER the posts so nothing blocks the reader getting into an article */}
          <div className="mt-20 md:mt-24 border-t border-border pt-10">
            <h2 className="text-lg font-semibold text-foreground font-heading mb-5">
              {copy.topicsHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {copy.topics.map((topic) => (
                <div key={topic.name}>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{topic.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{topic.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
