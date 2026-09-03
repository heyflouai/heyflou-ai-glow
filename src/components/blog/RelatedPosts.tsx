import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { isSpanishPath } from '@/lib/i18n-routes';
import { getPost, getCounterpartPost, blogPostPath, type BlogLang, type BlogPost } from '@/lib/blog';

const COPY = {
  en: { heading: 'Related reading', cta: 'Read the post' },
  es: { heading: 'Para seguir leyendo', cta: 'Leer el artículo' },
} as const;

/**
 * Links from a service page into the matching blog posts.
 *
 * The service pages are the ones carrying real authority, and until now nothing
 * on the site linked down into the blog. Slugs are given in English and
 * resolved to the reader's language via each post's hreflang counterpart, so a
 * post with no Spanish version is simply dropped on /es rather than 404ing.
 */
export function RelatedPosts({ slugs }: { slugs: string[] }) {
  const { pathname } = useLocation();
  const lang: BlogLang = isSpanishPath(pathname) ? 'es' : 'en';
  const copy = COPY[lang];

  const posts = slugs
    .map((slug) => {
      const en = getPost('en', slug);
      if (!en) return undefined;
      return lang === 'es' ? getCounterpartPost(en) : en;
    })
    .filter((p): p is BlogPost => Boolean(p));

  if (posts.length === 0) return null;

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading mb-8">
          {copy.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-hf-teal/50 hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)]"
            >
              <Link to={blogPostPath(lang, post.slug)} className="flex h-full">
                {post.heroImage && (
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    loading="lazy"
                    className="hidden sm:block w-32 md:w-40 shrink-0 object-cover"
                  />
                )}
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground font-heading leading-snug group-hover:text-hf-teal transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-hf-teal">
                    {copy.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
