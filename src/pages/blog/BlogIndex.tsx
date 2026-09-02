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
      'Field notes on AI agents, automation and operations, written for the teams that have to run the business tomorrow morning.',
    seoTitle: 'Blog | Practical AI automation notes | HeyFlou',
    seoDescription:
      'Field notes on AI agents, automation, and operations for small and mid-sized businesses, written by the HeyFlou team.',
    empty: 'New posts are on the way.',
    read: 'Read the post',
    introHeading: 'What you will find here',
    introBody:
      'We build and run AI automation for small and mid-sized businesses, and this is where we write down what we learn doing it. Not predictions about where AI is going. What actually happened when we mapped twelve processes for a real-estate brokerage, rebuilt a trilingual nonprofit\u2019s operations, or shipped a patient CRM used by physical therapists in Mexico.',
    introBody2:
      'Everything here is organized the way we sell: by business function, not by industry. A bakery and a law firm have almost nothing in common as businesses, but their invoicing follow-up problem is close to identical. Function is the useful axis.',
    topicsHeading: 'The four functions we write about',
    topics: [
      { name: 'Finance', desc: 'Invoicing, payment follow-up, reconciliation support, recurring reporting.' },
      { name: 'Operations', desc: 'Scheduling, intake, data entry, internal handoffs, document processing.' },
      { name: 'Customer service', desc: 'First response, qualification, booking, reminders, follow-up.' },
      { name: 'Marketing', desc: 'Lead capture and routing, nurture sequences, campaign reporting.' },
    ],
    sourcingHeading: 'On the numbers',
    sourcingBody:
      'Any figure in these posts comes from work we did or a source we link to. We do not publish industry statistics we cannot trace, and we do not describe results we did not measure. Where an outcome depended on something specific to that client, we say so.',
    latestHeading: 'Latest posts',
  },
  es: {
    eyebrow: 'BLOG',
    title: 'Notas pr\u00e1cticas de IA para negocios en crecimiento',
    subtitle:
      'Apuntes reales sobre agentes de IA, automatizaci\u00f3n y operaci\u00f3n, escritos para los equipos que tienen que sacar el negocio ma\u00f1ana por la ma\u00f1ana.',
    seoTitle: 'Blog | Notas pr\u00e1cticas de automatizaci\u00f3n con IA | HeyFlou',
    seoDescription:
      'Apuntes sobre agentes de IA, automatizaci\u00f3n y operaci\u00f3n para empresas medianas y peque\u00f1as, escritos por el equipo de HeyFlou.',
    empty: 'Pronto publicamos nuevos art\u00edculos.',
    read: 'Leer el art\u00edculo',
    introHeading: 'Qu\u00e9 vas a encontrar aqu\u00ed',
    introBody:
      'Construimos y operamos automatizaci\u00f3n con IA para peque\u00f1as y medianas empresas, y aqu\u00ed escribimos lo que aprendemos haci\u00e9ndolo. No predicciones sobre el futuro de la IA. Lo que pas\u00f3 de verdad cuando mapeamos doce procesos de una inmobiliaria, reconstruimos la operaci\u00f3n de una organizaci\u00f3n en tres idiomas, o lanzamos un CRM de pacientes que usan fisioterapeutas en M\u00e9xico.',
    introBody2:
      'Todo est\u00e1 organizado como vendemos: por funci\u00f3n de negocio, no por industria. Una panader\u00eda y un despacho de abogados no se parecen en nada como negocios, pero su problema de cobranza es pr\u00e1cticamente el mismo. La funci\u00f3n es el eje \u00fatil.',
    topicsHeading: 'Las cuatro funciones sobre las que escribimos',
    topics: [
      { name: 'Finanzas', desc: 'Facturaci\u00f3n, seguimiento de cobranza, apoyo en conciliaci\u00f3n, reportes recurrentes.' },
      { name: 'Operaciones', desc: 'Agenda, captura de datos, altas de clientes, entregas internas, procesamiento de documentos.' },
      { name: 'Atenci\u00f3n a clientes', desc: 'Primera respuesta, calificaci\u00f3n, agendado, recordatorios, seguimiento.' },
      { name: 'Marketing', desc: 'Captura y ruteo de prospectos, secuencias de seguimiento, reportes de campa\u00f1a.' },
    ],
    sourcingHeading: 'Sobre las cifras',
    sourcingBody:
      'Cualquier n\u00famero en estos art\u00edculos sale de trabajo que hicimos o de una fuente que enlazamos. No publicamos estad\u00edsticas de industria que no podamos rastrear, ni describimos resultados que no medimos. Cuando un resultado depend\u00eda de algo particular de ese cliente, lo decimos.',
    latestHeading: '\u00daltimos art\u00edculos',
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

          <div className="mt-12 md:mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
              {copy.introHeading}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">{copy.introBody}</p>
            <p className="text-base text-muted-foreground leading-relaxed">{copy.introBody2}</p>
          </div>

          <div className="mt-12 md:mt-14">
            <h2 className="text-2xl font-bold text-foreground font-heading mb-6">
              {copy.topicsHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {copy.topics.map((topic) => (
                <div key={topic.name} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground mb-1.5">{topic.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{topic.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 md:mt-14 max-w-3xl border-l-2 border-hf-teal/40 pl-5">
            <h2 className="text-lg font-semibold text-foreground font-heading mb-2">
              {copy.sourcingHeading}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">{copy.sourcingBody}</p>
          </div>

          <h2 className="mt-14 md:mt-16 text-2xl font-bold text-foreground font-heading">
            {copy.latestHeading}
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
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
