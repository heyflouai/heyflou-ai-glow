# HeyFlou blog strategy

Written 2026-09-02. Owner: Samy. Revisit after the first 90 days of GSC data.

## Why this exists

90 days of Search Console (2026-06-04 → 09-02) for `sc-domain:heyflou.com`:

| Metric | Value |
|---|---|
| Clicks | 14 |
| Impressions | 268 |
| Queries recorded | 19 — **all brand or brand misspellings** |
| Pages with any impression | 7 of 24 |
| `/es/*` impressions | 0 |

There is no commercial-intent content on the site, so there are no
commercial-intent impressions to lose. This is an inventory problem, not a
rankings problem.

One data point sets the direction: a long conversational query — *"what are the
most popular ai strategy consulting alternatives for small it and software
service firms in israel?"* — ranks **position 1**. Long, specific,
decision-stage questions are winnable today. Head terms like "AI automation"
are not.

## Positioning constraint

Per `00-MASTER/agent-core.md` (2026-07-28), HeyFlou is **industry-agnostic** and
sells on the department/function axis: finance, operations, customer service,
marketing. No post may reintroduce industry verticals as the targeting axis.
TheraFlou is the single exception — it genuinely is a healthcare-native
product and may be described as such.

## Architecture: hub and spoke

The cluster mirrors the site's own structure, so internal linking is obvious
and the blog reinforces the service pages instead of competing with them.

```
HUB   /blog/what-to-automate-first
       │
       ├── /blog/ai-customer-service-smb        → /services/agents
       ├── /blog/automate-scheduling-intake     → /services/infrastructure
       ├── /blog/automate-invoicing-followup    → /services/custom
       └── /blog/lead-capture-automation        → /services/custom
       
supporting pillar (already live)
      /blog/agentic-ai-implementation-guide     → /services/agents
```

Every spoke links up to the hub and across to one sibling. The hub links down
to all four. Each spoke links to exactly one service page — the one it maps to.

## Sourcing rule

**No invented statistics. Ever.** `agent-core.md` MUST NOT #1 and the blog
skill's quality gate agree on this.

Preferred evidence, in order:

1. **HeyFlou's own engagements.** First-hand operator detail is the strongest
   E-E-A-T signal available and no competitor can copy it:
   - Real-estate brokerage: AI consulting engagement, 12 processes mapped and
     scored, roadmap delivered in 3 weeks
   - Multilingual nonprofit: operations rebuilt into a 3-pillar architecture
     across Spanish/English/Portuguese, 3-week delivery, zero custom code
   - B2B lead generation: Google Maps prospecting + scoring, 300+ qualified
     leads/month, 15 hours/week saved
   - TheraFlou: patient CRM for physical therapists in Mexico, NOM-004
     compliant, replaces 4 disconnected tools
2. **Tier 1–3 external sources**, attributed inline with a link.
3. Nothing else. If a number cannot be sourced, the sentence gets rewritten
   without it.

## Spanish is not a translation

`/es/*` produced zero impressions in 90 days while Mexico — the primary market
— delivered 2 clicks. The Spanish posts are localized for Mexican SMB readers:
MXN where money appears, WhatsApp as the default channel (not email), Mexican
regulatory context where relevant. Same argument, native expression.

Each pair is linked with `hreflangCounterpart` in the frontmatter so the
existing hreflang wiring emits reciprocal tags.

## Publishing cadence

Ship all 10 (5 EN + 5 ES) as the founding set, then one pair per fortnight.
Post-publish: request indexing in GSC for `/blog`, `/es/blog` and each new URL
— but only after the content is live, since Google already rejected the thin
versions ("Discovered — currently not indexed" on `/blog`, "URL is unknown to
Google" on `/es/blog`).

## How we know it worked

Leading indicators, in the order they should move:

1. `/blog` and `/es/blog` leave "Discovered — currently not indexed" (weeks)
2. First **non-brand** query appears in GSC (this is the real milestone)
3. `/es/*` records its first impression
4. Impressions on function keywords — "automatizar facturación",
   "AI customer service small business" — regardless of position

If after 90 days every query is still brand-only, the topics are wrong, not
the execution. Revisit this file.
