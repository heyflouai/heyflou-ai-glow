## Build `/services/agents` page

Create a new route that matches Card 1 ("AI Agents") on the /services hub, using the exact copy, colors, and typography from your spec.

### Files

- **Create** `src/pages/services/Agents.tsx` — single self-contained page with 6 sections rendered inline.
- **Edit** `src/App.tsx` — register `/services/agents` route.
- **Edit** `src/i18n/translations/en.ts` and `src/i18n/translations/es.ts` — add `servicesAgents` keys for every headline, body, agent card, step, stat, and CTA (per project i18n Core rule).

### Page structure

```text
<main>
  Hero            (white bg, centered, max-w 620px sub)
  Problem         (#0F1729 bg, white text, 57% gradient stat)
  Agent Grid      (white bg, 6 cards, 3/2/1 cols)
  How We Work     (#F8FAFC bg, 4 numbered steps + callout)
  Results         (white bg, 3 stat cards)
  CTA             (teal→purple gradient bg, white button)
</main>
```

### Design implementation

- Inline hex values (`#0F1729`, `#2B3650`, `#1FA6C1`, `#A15BF1`, `#B8C5D6`, `#F8FAFC`) and inline `fontFamily` for Plus Jakarta Sans (headlines) / Inter (body), matching the pattern already used in the rebuilt `/services` page.
- Section wrapper: `py-20` (80px) on all sections, `max-w-[1200px] mx-auto px-6` container.
- Agent card icons: 40px circle with `linear-gradient(135deg,#1FA6C1,#A15BF1)`, white Lucide icon inside. Icon mapping: Reply→MessageSquare, Scheduling→Calendar, Follow-Up→Send, Billing→Receipt, Data→Database, Reporting→BarChart3.
- Process step connector: pseudo-line between numbered circles on `md+` (absolute positioned `h-px bg-[#E2E8F0]`).
- Gradient stat numbers: `bg-clip-text text-transparent` with the teal→purple gradient.
- CTA button links to `/contact`. "Check availability" link inside callout also points to `/contact`.

### SEO

- `SEOHead` with title `"AI Agents for Your Business | HeyFlou"`, canonical via `getCanonicalUrl('/services/agents')`.

### Out of scope

- No changes to the existing `/services` hub or other sector pages.
- No new shared components — page is self-contained to keep the spec exact and avoid coupling.
- No backend, no form (CTA links to existing `/contact`).
