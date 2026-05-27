## Add Compact Anonymous Case Cards Section to Case Studies Page

### Overview
Add a new "MORE WORK" section below the two featured case studies (TheraFlou + Directed Empresas) and above the existing Case Studies card grid. Two compact, anonymous case cards in a problem → solution → impact format. No company names, no logos, no hover animations.

### Files Changed
- `src/pages/CaseStudies.tsx`
- `src/i18n/translations/en.ts`
- `src/i18n/translations/es.ts`

### Implementation Details

**1. New i18n keys (`caseStudies` namespace)**
Add to both `en.ts` and `es.ts`:
- `compactSection.eyebrow`: "MORE WORK" / "MÁS TRABAJO"
- `compactSection.headline`: "Other engagements." / "Otros proyectos."
- `compactSection.subheadline`: "Some clients prefer to stay private. The results don't." / "Algunos clientes prefieren mantenerse privados. Los resultados no."
- `compactCard1.typeBadge`: "AI CONSULTING" / "CONSULTORÍA IA"
- `compactCard1.anonymousBadge`: "Anonymous" / "Anónimo"
- `compactCard1.industry`: "REAL ESTATE · PROPERTY MANAGEMENT" / "INMOBILIARIA · GESTIÓN DE PROPIEDADES"
- `compactCard1.headline`: "Managing hundreds of listings across markets with a team that was drowning in coordination." / "Gestionando cientos de listados en varios mercados con un equipo ahogado en coordinación."
- `compactCard1.problemLabel`: "THE PROBLEM" / "EL PROBLEMA"
- `compactCard1.problemText`: "A high-volume real estate operation was running property acquisition, listing management, and client follow-ups manually. Each deal required coordination across multiple teams with no centralized system — creating delays, missed follow-ups, and lost deals." / ...
- `compactCard1.solutionLabel`: "THE SOLUTION" / "LA SOLUCIÓN"
- `compactCard1.solutionText`: "We ran a structured AI Consulting engagement — mapping every workflow, scoring each process for automation potential, and delivering a prioritized roadmap. The client left with a clear implementation brief and vendor recommendations tailored to their existing stack." / ...
- `compactCard1.impactLabel`: "IMPACT" / "IMPACTO"
- `compactCard1.impactPill1`: "Roadmap delivered in 3 weeks" / "Hoja de ruta entregada en 3 semanas"
- `compactCard1.impactPill2`: "12 processes mapped & scored" / "12 procesos mapeados y puntuados"
- `compactCard2.typeBadge`: "AI CONSULTING" / "CONSULTORÍA IA"
- `compactCard2.anonymousBadge`: "Anonymous" / "Anónimo"
- `compactCard2.industry`: "NONPROFIT · OPERATIONS MANAGEMENT" / "SIN FINES DE LUCRO · GESTIÓN OPERATIVA"
- `compactCard2.headline`: "A multilingual nonprofit managing complex family processes across 3 languages — entirely in spreadsheets." / "..."
- `compactCard2.problemLabel`, `problemText`, `solutionLabel`, `solutionText`, `impactLabel`, `impactPill1`, `impactPill2`, `impactPill3`: all translated

**2. Section placement in `CaseStudies.tsx`**
Insert the new section after the closing `</div>` of the "CLIENT RESULTS" featured cases section (`max-w-[1200px]`) and before the `<Section background="muted">` that contains the existing Case Studies grid.

**3. Section structure**
- Wrapper: `<section className="bg-[#F8FAFC] py-20 md:py-[80px]">`
- Container: `max-w-[1200px] mx-auto px-6`
- Centered eyebrow, headline, subheadline
- Cards grid: `grid grid-cols-1 md:grid-cols-2 gap-6` (gap 24px)
- Each card: white bg, `border border-[#E2E8F0] rounded-[16px] p-[32px_28px]`

**4. Card internal structure (per spec)**
- Top row (flex, space-between): Type badge + Anonymous badge
- Industry line (Inter 600, #2B3650, 13px, uppercase, letter-spacing 1px, mt-5)
- Headline (Jakarta 700, #0F1729, 20px, mt-2)
- Problem block (mt-4): teal label + text
- Solution block (mt-4): purple label + text
- Impact block (mt-5, pt-5, border-t border-[#E2E8F0]): label + flex-wrap metric pills

**5. Badge styles**
- Teal type badge: bg `rgba(31,166,193,0.08)`, border `rgba(31,166,193,0.2)`, text #1FA6C1
- Purple type badge (card 2): bg `rgba(161,91,241,0.08)`, border `rgba(161,91,241,0.2)`, text #A15BF1
- Anonymous badge: bg #F1F5F9, text #2B3650
- Metric pills: bg #F8FAFC, border #E2E8F0, border-radius 100px

### Design Constraints
- Fonts: Plus Jakarta Sans + Inter only
- Colors: #1FA6C1, #A15BF1, #0F1729, #2B3650, #B8C5D6, #FFFFFF, #F8FAFC, #E2E8F0, #F1F5F9
- No stock photography
- No hover animation
- Mobile-first (single column on mobile)
