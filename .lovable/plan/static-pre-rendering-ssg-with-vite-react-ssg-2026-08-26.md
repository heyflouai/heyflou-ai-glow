# Static pre-rendering (SSG) with vite-react-ssg

Goal: every route ships real HTML — page text, its own `<title>`, `<link rel="canonical">`, meta/og/twitter tags and JSON-LD — in the initial response, with zero visual, copy, or logic changes.

## What changes

1. **Add `vite-react-ssg`** as a dependency.
2. **Routing becomes a route-object array** (`src/routes.tsx`) mirroring today's routes one-for-one: home, `/services` + 4 sub-pages, retired industry redirects, case studies, about, contact, pricing, calculator, privacy-policy, `/privacy` redirect, terms, refund, the blog guide, the `/es` Spanish routes and aliases, plus the `*` NotFound catch-all. Navbar, Footer, providers and `ScrollToTop` move into a root layout route so the shell stays identical. Route components keep lazy loading via the route-object `lazy` field.
3. **Entry file** swaps `createRoot(...).render(...)` for `ViteReactSSG(...)` with the route array.
4. **`package.json`**: `build` runs `vite-react-ssg build`; `dev` stays plain `vite`.
5. **`includedRoutes`** pre-renders: `/`, `/services`, `/services/custom`, `/services/consulting`, `/services/agents`, `/services/infrastructure`, `/pricing`, `/about`, `/case-studies`, `/contact`, `/privacy-policy`, `/terms`, `/refund`, `/blog/agentic-ai-implementation-guide`. The 4 Spanish pages (`/es`, `/es/servicios`, `/es/precios`, `/es/contacto`) are added too so their hreflang/canonical pair is real HTML — say the word if you'd rather leave them client-only. `/calculator` stays out of pre-rendering (hidden page) but still works at runtime.
6. **Head tags become render-time, not effect-time.** Today `SEOHead` writes title/meta/canonical/hreflang/JSON-LD through `document` inside `useEffect`, which never runs during a build. It gets rewritten to emit the exact same tags declaratively (same values, same logic for Spanish titles, canonical, alternates and the `@graph` JSON-LD merge) so they are serialized into each HTML file. No page needs to change how it calls `SEOHead`.
7. **JSON-LD** ships inside each pre-rendered file through the same declarative head output (Organization schema plus each page's Service/Article/FAQ/Breadcrumb schemas).

## Browser-only code

Pre-rendering runs the components in Node, so anything touching `window`, `document`, `localStorage`, `matchMedia` or `IntersectionObserver` during the first render must be guarded (language context, theme hook, mobile hook, and the animated 3D/canvas/map components). These get lazy/effect-only or SSR guards with identical client behaviour — the visuals are unchanged once hydrated. Any component that can't render server-side without visual change is wrapped so it renders only on the client, and I'll verify each pre-rendered page's text is present.

## Verification

- Build, then grep each generated `dist/**/index.html` for its real body copy, its own `<title>`, `<link rel="canonical">`, og/twitter tags and the `application/ld+json` block.
- Load the preview and confirm no hydration errors in the console and no visual diff on home, services sub-pages, case studies, pricing, contact and the blog post.

## Technical notes

- `dist` gains one folder per pre-rendered route; hosting still serves the SPA fallback for `/calculator` and unknown paths, so NotFound behaviour is unchanged.
- If `vite-react-ssg`'s own `Head` handles the tags cleanly, no extra library is needed; `react-helmet-async` is added only if it turns out to be required for the JSON-LD/alternates output.
- Existing manual vendor chunking in `vite.config.ts` is kept.
