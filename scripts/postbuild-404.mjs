// Postbuild steps:
// 1. Static hosts serve /404.html for unknown paths; vite-react-ssg emits 404/index.html.
// 2. Sync blog URLs into sitemap.xml (public + dist) from the markdown files present.
// 3. Drop modulepreload hints for chunks that are only reached via dynamic import().
import { copyFile, readdir, readFile, writeFile } from 'node:fs/promises';
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

// --- 3. Strip modulepreload hints for async-only chunks -----------------------
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
