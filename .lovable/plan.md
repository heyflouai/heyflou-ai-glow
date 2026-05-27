## Rebuild `/services/consulting` service page

Replace the existing consulting page with a new self-contained component following the same inline-token pattern as Agents.tsx and Infrastructure.tsx.

### Files to change

1. **Replace** `src/pages/services/Consulting.tsx`
   - Self-contained page with inline `JAKARTA` (`"Plus Jakarta Sans", sans-serif`), `INTER` (`Inter, sans-serif`), `GRADIENT` (`linear-gradient(135deg, #1FA6C1, #A15BF1)`) constants
   - Uses `useTranslation()` with `t.servicesConsulting` namespace
   - Sections in exact order from prompt:
     1. **Hero** — white bg, centered H1 + subheadline (max-w 660px)
     2. **Who This Is For** — bg `#F8FAFC`, left-aligned headline (max-w 720px) + two body paragraphs
     3. **What You Get** — white bg, 5 deliverable cards in a `3-top + 2-centered-bottom` grid on desktop (single column mobile). Each card: 40px gradient-circle icon, title, description. Border 1px `#E2E8F0`, border-radius 12px, padding 28px.
        - AI Readiness Assessment
        - Process Map
        - AI Roadmap
        - Tool & Vendor Recommendations
        - Implementation Brief
     4. **Format** — bg `#0F1729`, centered headline, 3 horizontal steps (gradient numbered circles, `56px`, white text) + descriptions (`#B8C5D6`). Callout box below (border 1px `#1FA6C1` at 40% opacity, max-w 480px centered).
     5. **What Happens Next** — white bg, centered headline + body, 3 path cards in a row (stacked mobile)
     6. **CTA** — gradient bg, headline + subtext + white button to `/contact`
   - `SEOHead` with title/description and canonical `/services/consulting`

2. **Edit** `src/i18n/translations/en.ts`
   - Add `servicesConsulting` namespace after `servicesInfrastructure` (~line 608) with all required keys

3. **Edit** `src/i18n/translations/es.ts`
   - Add `servicesConsulting` namespace after `servicesInfrastructure` (~line 610) with Spanish translations for all keys

### No changes needed
- `src/App.tsx` — route `/services/consulting` already maps to `Consulting`

### Design tokens
- Fonts: Plus Jakarta Sans (headlines) + Inter (body)
- Colors: `#1FA6C1`, `#A15BF1`, `#0F1729`, `#2B3650`, `#B8C5D6`, `#FFFFFF`, `#F8FAFC`
- Mobile-first, 80px section spacing (`py-20`), `max-w-[1200px] mx-auto px-6`
- No stock photography