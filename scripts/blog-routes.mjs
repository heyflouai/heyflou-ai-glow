// Shared blog discovery: reads markdown frontmatter so pre-rendered routes and
// sitemap entries are generated from the files present, with no config edits.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const CONTENT_ROOT = path.resolve(process.cwd(), 'src/content/blog');

const parseFrontmatter = (raw) => {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw.replace(/^\uFEFF/, ''));
  if (!m) return {};
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const sep = line.indexOf(':');
    if (sep === -1 || !line.trim() || line.trimStart().startsWith('#')) continue;
    data[line.slice(0, sep).trim()] = line
      .slice(sep + 1)
      .trim()
      .replace(/^['"]|['"]$/g, '');
  }
  return data;
};

/** All markdown posts: { lang, slug, route, title, description, date, dateModified }. */
export function getBlogPosts() {
  const posts = [];
  for (const lang of ['en', 'es']) {
    const dir = path.join(CONTENT_ROOT, lang);
    if (!existsSync(dir)) continue;
    for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
      const fm = parseFrontmatter(readFileSync(path.join(dir, file), 'utf8'));
      const slug = fm.slug || file.replace(/\.md$/, '');
      posts.push({
        lang,
        slug,
        route: lang === 'es' ? `/es/blog/${slug}` : `/blog/${slug}`,
        title: fm.title || '',
        description: fm.description || '',
        date: fm.date || '',
        dateModified: fm.dateModified || fm.date || '',
      });
    }
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Blog routes to pre-render: both index pages plus every post. */
export function getBlogRoutes() {
  return ['/blog', '/es/blog', ...getBlogPosts().map((p) => p.route)];
}
