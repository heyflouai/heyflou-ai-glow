/**
 * Markdown-backed blog.
 *
 * Posts live in `src/content/blog/en` and `src/content/blog/es` and are read
 * with `import.meta.glob(..., { eager: true })`, so every post is bundled and
 * fully resolved during static pre-rendering (the HTML that ships already
 * contains the post body, nothing is fetched in the browser).
 */

import { marked } from 'marked';
import { SITE_CONFIG } from './seo-config';

export type BlogLang = 'en' | 'es';

export interface BlogPost {
  lang: BlogLang;
  slug: string;
  title: string;
  description: string;
  date: string;
  dateModified: string;
  author: string;
  authorBio: string;
  heroImage: string;
  /** Absolute canonical URL for this post */
  canonical: string;
  /** Slug of the counterpart post in the other language, if any */
  hreflangCounterpart?: string;
  tags: string[];
  /** Raw markdown body (frontmatter stripped) */
  markdown: string;
  /** Rendered HTML body */
  html: string;
}

/** Minimal YAML-subset frontmatter parser (string values + inline arrays). */
const parseFrontmatter = (raw: string): { data: Record<string, string | string[]>; body: string } => {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw.replace(/^\uFEFF/, ''));
  if (!match) return { data: {}, body: raw };

  const data: Record<string, string | string[]> = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue;
    const sep = line.indexOf(':');
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim();
    let value = line.slice(sep + 1).trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map((v) => v.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
      continue;
    }
    value = value.replace(/^['"]|['"]$/g, '');
    data[key] = value;
  }
  return { data, body: match[2] ?? '' };
};

const str = (v: string | string[] | undefined, fallback = ''): string =>
  typeof v === 'string' ? v : fallback;

/** Never let post content emit an H1. The frontmatter title owns the H1. */
const demoteContentH1 = (md: string) => md.replace(/^#\s+(?!#)/gm, '## ');

const modules = import.meta.glob('/src/content/blog/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

marked.setOptions({ gfm: true, breaks: false });

export const blogBasePath = (lang: BlogLang) => (lang === 'es' ? '/es/blog' : '/blog');

export const blogPostPath = (lang: BlogLang, slug: string) => `${blogBasePath(lang)}/${slug}`;

const buildPost = (path: string, raw: string): BlogPost => {
  const lang: BlogLang = path.includes('/blog/es/') ? 'es' : 'en';
  const { data, body } = parseFrontmatter(raw);
  const fileSlug = path.split('/').pop()!.replace(/\.md$/, '');
  const slug = str(data.slug, fileSlug);
  const markdown = demoteContentH1(body.trim());

  return {
    lang,
    slug,
    title: str(data.title, slug),
    description: str(data.description),
    date: str(data.date),
    dateModified: str(data.dateModified, str(data.date)),
    author: str(data.author),
    authorBio: str(data.authorBio),
    heroImage: str(data.heroImage),
    canonical: str(data.canonical, `${SITE_CONFIG.domain}${blogPostPath(lang, slug)}`),
    hreflangCounterpart: str(data.hreflangCounterpart) || undefined,
    tags: Array.isArray(data.tags) ? data.tags : [],
    markdown,
    html: marked.parse(markdown) as string,
  };
};

const allPosts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => buildPost(path, raw))
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

/** Posts for a language, newest first. */
export const getPosts = (lang: BlogLang) => allPosts.filter((p) => p.lang === lang);

export const getPost = (lang: BlogLang, slug: string) =>
  allPosts.find((p) => p.lang === lang && p.slug === slug);

/** Absolute URL of the counterpart post in the other language, if one exists. */
export const getCounterpartPost = (post: BlogPost) => {
  const other: BlogLang = post.lang === 'es' ? 'en' : 'es';
  if (post.hreflangCounterpart) {
    const byExplicitSlug = getPost(other, post.hreflangCounterpart);
    if (byExplicitSlug) return byExplicitSlug;
  }
  return getPost(other, post.slug);
};

/** Absolute image URL for og:image (post hero, falling back to the site image). */
export const absoluteUrl = (src: string) =>
  !src ? SITE_CONFIG.ogImage : /^https?:\/\//.test(src) ? src : `${SITE_CONFIG.domain}${src}`;

export const formatPostDate = (iso: string, lang: BlogLang) => {
  if (!iso) return '';
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
};
