## Rebuild `/services` Page

Replace the current `/services` page entirely with a focused 3-card layout presenting the three engagement models: AI Agents, AI Infrastructure, AI Consulting.

### Scope

- Remove old sections (industry cards, process steps, "Not sure" CTA, Spotlight hero) from `src/pages/Services.tsx`.
- Build a new minimal page: Hero → 3 Service Cards → Trust Strip.
- Add EN + ES translations under a new `servicesPageV2` namespace (keep old keys untouched for now in case other pages use them).
- No backend, no routing changes beyond linking to existing `/services/agents`, `/services/infrastructure`, `/services/consulting` (note: only `/services/consulting` and `/services/custom` exist today — see Open Questions).

### New page structure

```
<main>
  Hero
    H1: "Three ways we integrate AI into your business."
    Sub: "Whether you need a team of AI agents..."
  
  ServiceCards (3-col desktop, 1-col mobile, gap 24px)
    Card 1 — AI Agents       → /services/agents
    Card 2 — AI Infrastructure → /services/infrastructure
    Card 3 — AI Consulting    → /services/consulting
  
  TrustStrip (full-width #F8FAFC band)
</main>
```

### Card anatomy

- White bg, 1px border `#E2E8F0`, radius 16px, subtle shadow, padding 40px.
- Hover: border → `#1FA6C1`, `translateY(-4px)`, shadow lift, transition 200ms.
- Gradient eyebrow pill (`linear-gradient(135deg,#1FA6C1,#A15BF1)`).
- Headline (Plus Jakarta 700, 24px) → Description (Inter 16px) → "WHO IT'S FOR" label + text → full-width gradient CTA button.

### Files

- **Edit** `src/pages/Services.tsx` — strip current sections, render new Hero + Cards + TrustStrip inline (or split into small subcomponents in the same file).
- **Edit** `src/i18n/translations/en.ts` and `es.ts` — add new keys for hero, 3 cards (eyebrow, headline, desc, whoLabel, whoText, cta), trust strip.
- **Keep** existing `src/components/services/*` files untouched (still used elsewhere or harmless dead code — flag for cleanup if desired).

### Design tokens

- Fonts already loaded (Plus Jakarta Sans + Inter via existing `font-display` / default).
- Hardcoded hex values per spec (`#0F1729`, `#2B3650`, `#1FA6C1`, `#A15BF1`, `#F8FAFC`, `#E2E8F0`) — used inline for this page only since the request specifies exact colors. Will use Tailwind arbitrary values (e.g. `text-[#0F1729]`).
- Section vertical padding: `py-20 lg:py-[100px]`. Page container `max-w-[1200px]`.

### Open Questions

1. **Card CTAs link to `/services/agents` and `/services/infrastructure`** — these routes don't exist today (only `/services/consulting`, `/services/custom`, `/services/healthcare`, etc.). Should I:
   - (a) link them anyway (will 404), 
   - (b) point Card 1 → `/services/custom` and Card 2 → a new placeholder, or
   - (c) leave them as `#` until those pages exist?
2. Keep the page i18n-driven (EN/ES) per project Core rule — confirmed yes unless you say otherwise.
