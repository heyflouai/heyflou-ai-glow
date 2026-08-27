# Blog cleanup follow-up: what is already done, and the one real gap

I checked the current state of the project against each of the six requests. Five are already in place from the previous round of work. Only the 404 status behaviour still needs a decision.

## Already verified as done (no work needed)

1. **Invented customer-service post removed.** `src/content/blog/en/` contains only `agentic-ai-implementation-guide.md`. No `ai-agents-for-customer-service` markdown file exists, and no sitemap entry for it.
2. **Agentic AI guide moved into the blog structure.** It now lives as markdown with frontmatter: author "Samy Nakach", a short bio, published date 2026-06-20, hero image `/og-image.jpg`, canonical URL, and tags. It is discovered automatically by the blog index, the prerender route list, and the sitemap generator.
3. **Dashes removed from blog copy.** Both taglines on the blog index now use a comma: "agentes de IA, automatización y operación, escritos para los equipos..." and the English equivalent. No em or en dashes remain in the blog index or post template in either language.
4. **Retired service pages.** `/services/healthcare`, `/services/fitness-education` and `/services/travel-agencies` have no page components; each route redirects to `/services` and none appear in `sitemap.xml`.
5. **Single privacy policy.** `/privacy-policy` is canonical, `/privacy` redirects to it, footer links point at `/privacy-policy`, and only `/privacy-policy` is in the sitemap.

One caveat on the redirects: this is a static single-page app, so the redirects are client-side (React Router `Navigate replace`), not HTTP 301 responses. A true 301 needs server-side routing, which the current hosting setup does not provide for arbitrary paths.

## The remaining gap: unknown paths

Unknown paths render the 404 page content correctly (a real `NotFound` page with `noindex`), but they are served with HTTP 200, because static SPA hosting falls back to `index.html` for any unmatched path. The build already emits `dist/404.html`, so a host that honours a 404 document would return the correct status; the current hosting layer does not.

Proposed work for this piece:

- Confirm the `NotFound` page emits `<meta name="robots" content="noindex, follow">` in the prerendered HTML for `/404`, so crawlers drop unknown paths regardless of status code. This is the part that actually protects indexing.
- Leave the client-side routing untouched otherwise.

Getting genuine HTTP 404 and 301 status codes requires server-side rendering. The app can get SSR by upgrading to Lovable's latest template: type "/" in the chat and choose "Migrate to TanStack Start", or just ask me to do the upgrade. See [what the upgrade gives you](https://lovable.dev/blog/building-apps-using-tanstack-start).

## Question before I proceed

If you want the noindex verification plus a written summary of the redirect limitation, approve this plan. If you want real 404 and 301 status codes, the SSR migration is the path, and that is a larger change I would plan separately.
