# Build `/services/infrastructure`

Mirror the structure and conventions of `src/pages/services/Agents.tsx` for a new Infrastructure page with the exact copy and design tokens provided.

## Files

**Create** `src/pages/services/Infrastructure.tsx`
- Self-contained page, same imports/pattern as `Agents.tsx`
- Inline `fontFamily` constants (`JAKARTA`, `INTER`) and `GRADIENT` constant
- Reads from `t.servicesInfrastructure` namespace
- Sections in order:
  1. **Hero** — white bg, centered H1 + subheadline (max-w 660px)
  2. **The Problem** — bg `#F8FAFC`, left-aligned headline + body (max-w 720px), `py-20`
  3. **What We Build** — white bg, centered headline, 2×2 grid (1 col mobile), 48px gap, borderless blocks with 40px teal-outline Lucide icons (`Database`, `ShieldCheck`, `CalendarClock`, `BarChart3`), title + description
  4. **TheraFlou Case** — bg `#0F1729`, inner max-w 800px centered, eyebrow + headline + body + 3 bullets with `✦` in `#1FA6C1` + link to `/` (TheraFlou section anchor) or external — will link to `/#theraflou` (existing landing section); fallback `/`
  5. **How We Work** — bg `#F8FAFC`, 4 numbered steps identical layout to Agents process (teal `#1FA6C1` circles, connector line on `md+`)
  6. **CTA** — gradient bg, headline + subtext + white "Talk to Us →" button to `/contact`
- `SEOHead` with title "Custom AI Infrastructure for Your Industry | HeyFlou" and `getCanonicalUrl('/services/infrastructure')`

**Edit** `src/App.tsx`
- Import `Infrastructure` and add `<Route path="/services/infrastructure" element={<Infrastructure />} />` next to the Agents route

**Edit** `src/i18n/translations/en.ts` and `src/i18n/translations/es.ts`
- Add `servicesInfrastructure` namespace covering: heroTitle, heroSubtitle, problemTitle, problemBody, buildTitle, build1Title/Desc … build4Title/Desc, caseEyebrow, caseTitle, caseBody, caseBullet1/2/3, caseLink, processTitle, step1Title/Desc … step4Title/Desc, ctaTitle, ctaSubtext, ctaButton
- English copy = verbatim from prompt; Spanish = faithful translation matching existing tone

## Design tokens (inline hex per spec)

Colors: `#1FA6C1`, `#A15BF1`, `#0F1729`, `#2B3650`, `#B8C5D6`, `#FFFFFF`, `#F8FAFC`, with borders `#E2E8F0` for any subtle dividers.
Fonts: Plus Jakarta Sans (headlines, weights 700/800), Inter (body, 400/600).
Spacing: `py-20` on every section, `max-w-[1200px] mx-auto px-6` container.

## Out of scope

- No changes to the `/services` hub
- No new shared components — page is self-contained like `Agents.tsx`
- No backend / form work — CTA links to existing `/contact`
- "Learn more about TheraFlou" link points to `/#theraflou` (home page section anchor); no new route created
