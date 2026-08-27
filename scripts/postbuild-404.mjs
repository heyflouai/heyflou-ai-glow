// Postbuild steps:
// 1. Static hosts serve /404.html for unknown paths; vite-react-ssg emits 404/index.html.
// 2. Sync blog URLs into sitemap.xml (public + dist) from the markdown files present.
import { copyFile, readFile, writeFile } from 'node:fs/promises';
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
  xml = xml.includes(START)
    ? xml.replace(new RegExp(`${START}[\\s\\S]*?${END}`), block)
    : xml.replace('</urlset>', `${block}\n</urlset>`);
  await writeFile(file, xml);
  console.log(`postbuild: synced ${posts.length} blog posts into ${file}`);
}
