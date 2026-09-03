// Postbuild steps:
// 1. Static hosts serve /404.html for unknown paths; vite-react-ssg emits 404/index.html.
// 2. Sync blog URLs into sitemap.xml (public + dist) from the markdown files present.
// 3. Emit an RSS feed per language.
// 4. Drop modulepreload hints for chunks that are only reached via dynamic import().
import { copyFile, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { getBlogPosts } from './blog-routes.mjs';

await copyFile('dist/404/index.html', 'dist/404.html');
console.log('postbuild: wrote dist/404.html');

const DOMAIN = 'https://heyflou.com';
const START = '  <!-- BLOG:START (generated from src/content/blog, do not edit by hand) -->';
const END = '  <!-- BLOG:END -->';

const entry = (loc, lastmod, priority) =>
  [
    '  <url>',
    `    <loc>${loc}</loc>`,
    ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
    '    <changefreq>monthly</changefreq>',
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');

const posts = getBlogPosts();
const newest = (lang) => posts.filter((p) => p.lang === lang)[0]?.dateModified || '';

const block = [
  START,
  entry(`${DOMAIN}/blog`, newest('en'), '0.7'),
  entry(`${DOMAIN}/es/blog`, newest('es'), '0.7'),
  ...posts.map((p) => entry(`${DOMAIN}${p.route}`, p.dateModified, '0.6')),
  END,
].join('\n');

for (const file of ['public/sitemap.xml', 'dist/sitemap.xml']) {
  let xml;
  try {
    xml = await readFile(file, 'utf8');
  } catch {
    continue;
  }
  if (xml.includes(START) && xml.includes(END)) {
    const before = xml.slice(0, xml.indexOf(START));
    const after = xml.slice(xml.indexOf(END) + END.length);
    xml = `${before}${block}${after}`;
  } else {
    xml = xml.replace('</urlset>', `${block}\n</urlset>`);
  }
  await writeFile(file, xml);
  console.log(`postbuild: synced ${posts.length} blog posts into ${file}`);
}

// --- 3. RSS feeds ------------------------------------------------------------
//
// sitemap.xml tells crawlers a URL exists; a feed lets readers, aggregators and
// newsletter tools pull the posts. One per language, linked from each index.
const FEEDS = {
  en: {
    path: 'dist/rss.xml',
    url: `${DOMAIN}/rss.xml`,
    link: `${DOMAIN}/blog`,
    lang: 'en',
    title: 'HeyFlou Blog',
    desc: 'Practical AI automation notes for small and mid-sized businesses.',
  },
  es: {
    path: 'dist/es/rss.xml',
    url: `${DOMAIN}/es/rss.xml`,
    link: `${DOMAIN}/es/blog`,
    lang: 'es-MX',
    title: 'Blog de HeyFlou',
    desc: 'Notas prácticas de automatización con IA para pequeñas y medianas empresas.',
  },
};

const xmlEscape = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const rfc822 = (iso) => (iso ? new Date(`${iso}T00:00:00Z`).toUTCString() : '');

for (const [lang, feed] of Object.entries(FEEDS)) {
  const items = posts.filter((p) => p.lang === lang);
  if (!items.length) continue;
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${xmlEscape(feed.title)}</title>`,
    `    <link>${feed.link}</link>`,
    `    <description>${xmlEscape(feed.desc)}</description>`,
    `    <language>${feed.lang}</language>`,
    `    <lastBuildDate>${rfc822(items[0].dateModified || items[0].date)}</lastBuildDate>`,
    `    <atom:link href="${feed.url}" rel="self" type="application/rss+xml" />`,
    ...items.flatMap((p) => [
      '    <item>',
      `      <title>${xmlEscape(p.title)}</title>`,
      `      <link>${DOMAIN}${p.route}</link>`,
      `      <guid isPermaLink="true">${DOMAIN}${p.route}</guid>`,
      `      <description>${xmlEscape(p.description)}</description>`,
      `      <pubDate>${rfc822(p.date)}</pubDate>`,
      '    </item>',
    ]),
    '  </channel>',
    '</rss>',
  ].join('\n');
  await mkdir(dirname(feed.path), { recursive: true });
  await writeFile(feed.path, xml);
  console.log(`postbuild: wrote ${feed.path} (${items.length} items)`);
}

// --- 4. Strip modulepreload hints for async-only chunks -----------------------
//
// vite-react-ssg emits a <link rel="modulepreload"> for every chunk it walks,
// including ones only reachable through a dynamic import(). That put the
// 170 KiB supabase chunk on the critical path of every page carrying a lead
// form - the homepage included - for code that is not needed until submit.
// Vite's build.modulePreload.resolveDependencies does not help here: the SSG
// plugin injects these links itself, after Vite's own preload resolution.
const ASYNC_ONLY_CHUNKS = ['supabase'];

const htmlFiles = async (dir) => {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = `${dir}/${e.name}`;
    if (e.isDirectory()) out.push(...(await htmlFiles(full)));
    else if (e.name.endsWith('.html')) out.push(full);
  }
  return out;
};

const preloadRe = new RegExp(
  `<link rel="modulepreload"[^>]*href="/assets/(?:${ASYNC_ONLY_CHUNKS.join('|')})-[^"]*"[^>]*>`,
  'g',
);

let stripped = 0;
let touched = 0;
for (const file of await htmlFiles('dist')) {
  const html = await readFile(file, 'utf8');
  const next = html.replace(preloadRe, () => (stripped++, ''));
  if (next !== html) {
    await writeFile(file, next);
    touched++;
  }
}
console.log(
  `postbuild: stripped ${stripped} async-only modulepreload hint(s) across ${touched} page(s)`,
);
