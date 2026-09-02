# Blog hero image prompts

Five images. Each one serves **both** the English and Spanish post of a pair, so
nothing in the artwork may be language-specific.

| Image | Used by |
|---|---|
| `what-to-automate-first` | `/blog/what-to-automate-first` + `/es/blog/que-automatizar-primero` |
| `ai-customer-service` | `/blog/ai-customer-service-smb` + `/es/blog/ia-atencion-clientes-pymes` |
| `scheduling-intake` | `/blog/automate-scheduling-intake` + `/es/blog/automatizar-agenda-y-alta-de-clientes` |
| `invoicing-followup` | `/blog/automate-invoicing-followup` + `/es/blog/automatizar-facturacion-y-cobranza` |
| `lead-capture` | `/blog/lead-capture-automation` + `/es/blog/automatizar-captura-de-prospectos` |

---

## Size and safe zone

**Export 1200 × 630 px, PNG or JPG, sRGB.**

That size is not arbitrary — `heroImage` is also the `og:image` for the post, so
the same file is the LinkedIn / X / WhatsApp preview card. 1200×630 is the
social-card standard.

It renders in three places at different crops:

| Surface | Display size | Effect |
|---|---|---|
| Post page | 732 px wide, full aspect | whole image visible |
| Blog index card | 472 × 192, `object-cover` | **crops ~11% off top and bottom** |
| Social preview | 1200 × 630 | whole image visible |

**Keep everything meaningful inside the central horizontal band** — the middle
~490 px of the 630 px height. Treat the top 70 px and bottom 70 px as
bleed that will be cut on the index page.

---

## Brand block — paste into every prompt

> **Brand:** HeyFlou — AI automation for small and medium businesses.
> Premium, minimal, technical, restrained. Swiss-poster discipline, not
> startup-marketing gloss.
>
> **Palette (use these hex values exactly):**
> - `#1FA6C1` HF Teal — **the primary accent**, carries the eye
> - `#A855F7` HF Purple — gradient partner to teal only, never dominant
> - `#2C364E` HF Ink — structural lines, shapes, dark elements
> - `#F8F9FB` page wash — background
> - `#E4E7EB` — hairline borders and dividers
>
> **Signature gradient:** `linear-gradient(135deg, #1FA6C1 → #A855F7)`. Use on
> at most one element per image.
>
> **Background:** flat `#F8F9FB` or a very soft radial wash from near-white to
> `#F8F9FB`. Light mode only. Never dark, never a photograph.
>
> **Geometry:** rounded rectangles at 12–16 px radius. 1 px `#E4E7EB` strokes.
> Generous whitespace — at least 40% of the canvas empty. Flat vector, subtle
> depth at most (`0 12px 32px rgba(15,23,42,.10)`). Slight top-down or gentle
> isometric angle is fine; no heavy 3D.

---

## Rules that apply to all five

### MUST

- **1200 × 630 px**, subject inside the central 490 px band.
- **Teal is the primary accent.** Purple appears only as the far end of a
  gradient. Getting this backwards makes the image read off-brand even when every
  colour is technically correct.
- At most **three brand colours in any single element**.
- Flat vector / diagrammatic. Clean edges.
- At least **40% empty space**. Whitespace is the brand.
- Consistent across all five — they sit in a two-column grid together and must
  look like one set. Same background, same stroke weight, same visual density.

### MUST NOT

- **No text. No letters, numbers, labels, captions or UI copy of any kind.**
  Each image serves an English and a Spanish post, so any text breaks one of
  them. It also avoids the garbled-lettering artifacts image models produce.
  If a mockup element needs a label, use a grey placeholder bar.
- **Never draw the HeyFlou logo.** Not an approximation, not "something like it",
  not a gradient swoosh that resembles it. Brand rule: the real PNG only,
  composited afterwards if you want it. An AI-drawn mark is a brand violation.
- **No people.** No faces, hands, silhouettes, or "team at a laptop" stock
  imagery.
- No photorealism, no 3D renders, no glassmorphism, no neon glow, no dark mode.
- No generic AI-industry clichés: glowing brains, circuit boards, humanoid
  robots, floating holograms, binary rain, blue "digital tunnel" backgrounds.
- No literal industry cues — no stethoscopes, dumbbells, aeroplanes, storefronts.
  HeyFlou is industry-agnostic and sells by business function.
- No gradient meshes or rainbow palettes. Two accent colours maximum.
- No busy dashboards packed with fake charts. One clear idea per image.

---

## 1. `what-to-automate-first` — the hub

**Concept:** scoring candidates and picking the winner.

> [BRAND BLOCK]
>
> A flat vector editorial illustration, 1200×630, on a `#F8F9FB` background.
>
> Centred composition: a vertical stack of six rounded rectangle cards
> (16 px radius, white fill, 1 px `#E4E7EB` border), evenly spaced, seen
> slightly from above. Each card carries four small square score markers along
> its right edge — filled squares in `#1FA6C1`, empty squares as `#E4E7EB`
> outlines. The cards are ordered so the number of filled teal squares descends
> from top to bottom.
>
> The topmost card is visually promoted: it sits slightly forward and larger,
> has a soft shadow, all four of its markers filled teal, and a 3 px accent bar
> down its left edge using the teal-to-purple gradient. The remaining cards are
> plain and quiet.
>
> Wide empty margins left and right. No text anywhere — the cards contain only
> light grey placeholder bars suggesting where text would be.

**Idea to land:** many candidates, scored on the same axes, one clear winner.

---

## 2. `ai-customer-service` — sorting the inbox

**Concept:** one stream of messages sorted into four buckets, one routed to a human.

> [BRAND BLOCK]
>
> A flat vector diagram, 1200×630, on a `#F8F9FB` background.
>
> On the left, a single vertical column of small identical rounded squares
> (8 px radius) in `#E4E7EB` — an undifferentiated queue. From the middle of
> that column, four thin routing lines fan out to the right and terminate in
> four rounded rectangle containers (12 px radius, white fill, 1 px border)
> stacked vertically.
>
> The top three containers and their connecting lines are `#1FA6C1` teal —
> handled automatically. The fourth, lowest container is outlined in `#2C364E`
> ink with a thicker 2 px stroke and its connecting line uses the teal-to-purple
> gradient — this is the one that goes to a person. Give the fourth container
> visible breathing room below it to mark it as different.
>
> Clean orthogonal or gently curved connectors, consistent 1.5 px weight.
> No text, no icons of people, no faces.

**Idea to land:** most volume automates; a distinct minority is deliberately routed out.

---

## 3. `scheduling-intake` — one capture, many systems

**Concept:** information captured once, propagated everywhere, without retyping.

> [BRAND BLOCK]
>
> A flat vector diagram, 1200×630, on a `#F8F9FB` background.
>
> Left third: a single rounded rectangle card (16 px radius, white, 1 px
> `#E4E7EB` border) containing five stacked light-grey placeholder bars of
> varying width, suggesting a filled form. A small teal check mark sits at the
> right of three of the bars.
>
> From the right edge of that card, four smooth curved connector lines in
> `#1FA6C1` sweep outward to four small rounded rectangles arranged in a loose
> arc on the right third of the canvas — each a plain white card with a single
> grey placeholder bar. One connector uses the teal-to-purple gradient.
>
> The centre of the canvas stays deliberately empty. Balanced, calm, lots of
> negative space. No text, no logos, no arrows with heads — plain tapered lines.

**Idea to land:** captured once, written everywhere, nobody retypes.

---

## 4. `invoicing-followup` — the escalation ladder

**Concept:** an automated sequence that deliberately stops and hands over.

> [BRAND BLOCK]
>
> A flat vector diagram, 1200×630, on a `#F8F9FB` background.
>
> A horizontal sequence of five circular nodes connected by a straight
> horizontal line, running across the middle of the canvas with wide margins at
> both ends.
>
> Nodes one through three are solid `#1FA6C1` teal, connected by a solid teal
> 2 px line, each with a small rounded rectangle floating above it (white, 1 px
> border, a single grey placeholder bar inside) — automated messages.
>
> Node four is larger, hollow, with a thick 3 px `#2C364E` ink ring and a white
> centre — a deliberate stop. The line entering it is teal; the line leaving it
> changes to the teal-to-purple gradient and becomes dashed.
>
> Node five is a plain `#2C364E` ink circle with nothing above it.
>
> The visual weight should make node four read as the moment the sequence
> pauses. No text, no currency symbols, no invoice documents, no people.

**Idea to land:** three automated steps, then a designed handoff — not endless chasing.

---

## 5. `lead-capture` — the leak is in follow-up

**Concept:** the funnel loses volume at the follow-up stage, not at the top.

> [BRAND BLOCK]
>
> A flat vector diagram, 1200×630, on a `#F8F9FB` background.
>
> Four horizontal bars of decreasing width, stacked vertically and centre-aligned
> — a funnel drawn as bars rather than a cone. Rounded ends, 16 px radius.
>
> The top two bars are solid `#1FA6C1` teal and nearly equal in width. The third
> bar is dramatically narrower — the drop happens here — and is drawn as a
> `#E4E7EB` outline with only its left portion filled teal, so the unfilled
> remainder reads as loss. The fourth bar is narrow and solid `#2C364E` ink.
>
> Between the second and third bar, three short thin lines angle away downward
> and to the right in `#E4E7EB`, escaping the funnel — the leads lost to missing
> follow-up. Keep them subtle.
>
> A single small teal-to-purple gradient dot marks the left edge of the third bar.
> No text, no percentages, no arrows with heads, no people.

**Idea to land:** the loss is at follow-up, in the middle, not at acquisition.

---

## After generating

1. Save as `public/blog-images/<name>.png` (the folder already exists).
2. Update one line of frontmatter in **both** posts of the pair:

   ```yaml
   heroImage: /blog-images/what-to-automate-first.png
   ```

3. Keep files under ~200 KB. These load on the index page and count toward
   Core Web Vitals; the homepage LCP work is not worth undoing here.
4. Check the index page after — that is where the top/bottom crop shows up.

If you want the logo on them, composite the real PNG
(`03-Templates/assets/heyflou-logo.png`) in afterwards. Never let the image
model draw it.
