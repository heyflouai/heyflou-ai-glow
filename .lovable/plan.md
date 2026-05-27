## Goal

Replace the single TheraFlou featured block (Section 3) on `/services/infrastructure` with a 2-card auto-rotating carousel featuring TheraFlou and Directed Empresas. Section background stays `#0F1729`.

## Scope

- File: `src/pages/services/Infrastructure.tsx` — replace the block starting at line 127 (`{/* THERAFLOU CASE */}` → end of that section, currently wrapped in `AuroraBackground` with `PinContainer`).
- New component: `src/components/services/InfrastructureCaseCarousel.tsx` — encapsulates the carousel, cards, controls, and auto-advance logic.
- i18n: add new keys to `src/i18n/translations/en.ts` and `src/i18n/translations/es.ts` for both card copy (eyebrow, headline, body, pills, quote, attribution, learn-more link) and the below-carousel text + CTA.

## Section structure (new)

```
<section style={{ background: '#0F1729', padding: '96px 0' }}>
  Eyebrow:  "BUILT BY US"           — Inter 600, #1FA6C1, 13px, ls 2px, uppercase
  Headline: "Infrastructure we've shipped."  — Plus Jakarta 700, white, 40/30px
  <InfrastructureCaseCarousel />
  Below (mt-10, centered):
    "Every infrastructure engagement starts with understanding your industry first."
    CTA: "See how infrastructure engagements work →"  (anchor to Section 4)
</section>
```

## Carousel behavior

- Apple Cards Carousel style, built on top of existing `src/components/ui/carousel.tsx` (embla) with custom styling — no new dependency.
- Desktop: `basis-[66%]` so the next card peeks (~1.5 visible). Mobile (<md): `basis-full`.
- Auto-advance every 6s using embla's `scrollNext()`; pause on hover/touch; reset on manual navigation.
- Controls:
  - Left/right circular arrows (44px, `bg-white/8`, white chevron), positioned at vertical center on card edges.
  - Dot indicators below, centered. Active: 8px, gradient `#1FA6C1 → #A15BF1`. Inactive: 6px, `rgba(255,255,255,0.2)`.
- Slide transition: 400ms ease-in-out (embla `duration: 40`).

## Card style (shared)

`bg-[#1A2540] border border-white/8 rounded-[20px] p-[40px_36px] min-h-[420px]` with internal flex column layout.

### Card 1 — TheraFlou
- Brand badge: teal `#1FA6C1` dot + "TheraFlou" (Plus Jakarta 700, white).
- Eyebrow: "HEALTHCARE · MEXICO"
- Headline (26px white): "A patient CRM for 13,000 physiotherapists."
- Body (15px, `#B8C5D6`).
- 3 pills (teal tinted): NOM-004 compliant · WhatsApp AI agents · Multi-clinic ready.
- Bottom link: "Learn more about TheraFlou →" → `/#theraflou` (preserves current target).

### Card 2 — Directed Empresas
- Logo: remote PNG (https://cloud-1de12d.becdn.net/.../directed-empresas-negro-1-1.png) at 130px width with `filter: brightness(0) invert(1)`.
- Eyebrow: "MULTI-LINE OPERATIONS · ENTERPRISE"
- Headline (26px white): "AgenticOS: one CEO, 5 companies, zero operational drag."
- Body (15px, `#B8C5D6`).
- 3 pills: 20+ hrs/week recovered · 5 companies unified · Scale without headcount.
- Quote block (border-top `rgba(255,255,255,0.1)`, pt-5, mt-5): italic body + "— Mateo, CEO" attribution (white 600, 13px).

## Below carousel

- Caption: "Every infrastructure engagement starts with understanding your industry first." (Inter 400, `#B8C5D6`, 15px).
- CTA button (text link): "See how infrastructure engagements work →" — `onClick` smooth-scrolls to Section 4 (the section directly after the carousel). Hover effect: gradient underline.

## i18n keys (added under `services.infrastructure`)

```
caseCarousel: {
  eyebrow, headline,
  cards: {
    theraflou: { brand, eyebrow, title, body, pill1, pill2, pill3, link },
    directed:  { eyebrow, title, body, pill1, pill2, pill3, quote, attribution },
  },
  belowText, belowCta,
}
```

Existing `s.caseEyebrow / caseTitle / caseBody / caseLink` keys remain (still used by Healthcare/other sections if referenced); we add new keys rather than mutate.

## Out of scope

- No changes to Sections 1, 2, 4+ of Infrastructure.
- No changes to `/case-studies` (already done previously).
- No new npm deps — reuse existing `embla-carousel-react` (already used by `carousel.tsx`).
