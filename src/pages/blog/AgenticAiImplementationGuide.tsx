import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { getCanonicalUrl } from '@/lib/seo-config';

const PUBLISHED = '2026-06-20';

export default function AgenticAiImplementationGuide() {
  const title = 'How to Implement Agentic AI for Business Growth | HeyFlou';
  const description =
    'A practical guide to implementing agentic AI for business growth: ROI vs. chatbots, where autonomous agents fit, and how to scale operations without adding headcount.';
  const canonical = getCanonicalUrl('/blog/agentic-ai-implementation-guide');

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'How to Implement Agentic AI for Business Growth',
      description,
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      inLanguage: 'en',
      mainEntityOfPage: canonical,
      author: { '@type': 'Organization', name: 'HeyFlou', url: 'https://heyflou.com' },
      publisher: {
        '@type': 'Organization',
        name: 'HeyFlou',
        logo: { '@type': 'ImageObject', url: 'https://heyflou.com/logo.png' },
      },
      about: [
        { '@type': 'Thing', name: 'Agentic AI' },
        { '@type': 'Thing', name: 'AI agents' },
        { '@type': 'Thing', name: 'Business automation' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://heyflou.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://heyflou.com/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'How to Implement Agentic AI for Business Growth',
          item: canonical,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is agentic AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Agentic AI refers to autonomous AI systems that can plan multi-step actions, call tools, and complete real business tasks end-to-end — instead of only replying to a single message like a chatbot.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is agentic AI different from a chatbot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A chatbot answers questions. An AI agent decides what to do next, executes it in your tools (CRM, calendar, WhatsApp, payments), and hands a finished outcome back to your team.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the ROI of agentic AI for SMBs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most SMBs see ROI from reclaimed staff hours, faster lead response, fewer no-shows, and higher conversion — typically scaling output without proportional headcount growth.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to implement agentic AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A focused first agent — for example lead qualification or appointment booking — can usually go live in 2 to 6 weeks. Broader, multi-agent infrastructure takes one to two quarters.',
          },
        },
      ],
    },
  ];

  return (
    <>
      <SEOHead title={title} description={description} canonical={canonical} type="article" jsonLd={jsonLd} />

      <article className="bg-background text-foreground">
        {/* Hero */}
        <header className="border-b border-border/40 px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="hover:text-foreground">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground">Guide</li>
              </ol>
            </nav>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">Agentic AI · Guide</p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              How to Implement Agentic AI for Business Growth
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              The practical SMB playbook for moving from simple chatbots to autonomous agents — so you can scale operations,
              response time, and revenue without scaling headcount.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Published {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · 10 min read
            </p>
          </div>
        </header>

        {/* Body */}
        <div className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl space-y-12 text-base md:text-lg leading-relaxed text-foreground/90">

            <section aria-labelledby="tldr">
              <h2 id="tldr" className="text-2xl md:text-3xl font-semibold text-foreground">TL;DR</h2>
              <p className="mt-4">
                Agentic AI is the shift from <em>AI that answers</em> to <em>AI that acts</em>. Instead of a chatbot
                that replies to one message, an agent plans, uses your tools, and finishes the job — qualifying a lead,
                booking the appointment, updating the CRM, sending the follow-up. For SMBs, the ROI shows up as faster
                response time, fewer no-shows, more booked revenue per employee, and the ability to grow output without
                growing headcount.
              </p>
            </section>

            <section aria-labelledby="what-is">
              <h2 id="what-is" className="text-2xl md:text-3xl font-semibold text-foreground">What is agentic AI?</h2>
              <p className="mt-4">
                Agentic AI describes autonomous systems built on large language models that can make decisions, call
                external tools, and chain multiple steps together to complete a goal. A chatbot finishes its job when
                it sends a reply. An agent finishes its job when the <strong>outcome</strong> is done — the meeting is
                on the calendar, the invoice is sent, the lead is in the pipeline with notes attached.
              </p>
              <p className="mt-4">
                In practice, an agent has three things a chatbot doesn't: a goal, a set of tools (CRM, WhatsApp,
                calendar, payments, internal databases), and the ability to plan the next action based on what just
                happened.
              </p>
            </section>

            <section aria-labelledby="why-now">
              <h2 id="why-now" className="text-2xl md:text-3xl font-semibold text-foreground">Why agentic AI matters for business growth</h2>
              <p className="mt-4">
                Most SMBs hit the same wall: more leads, more clients, more messages — but the same team. Hiring is
                slow and expensive, and the bottleneck is rarely the work itself. It's the coordination around the
                work: replying to inquiries within minutes, qualifying leads before they go cold, confirming
                appointments, chasing no-shows, keeping the CRM clean.
              </p>
              <p className="mt-4">
                Agentic AI compresses that coordination layer. One well-scoped agent can absorb the work of a part-time
                coordinator, run 24/7, never forget a follow-up, and stay perfectly consistent. The growth lever isn't
                "AI does everything" — it's "your team spends 100% of their time on the work that actually requires
                them."
              </p>
            </section>

            <section aria-labelledby="chatbot-vs-agent">
              <h2 id="chatbot-vs-agent" className="text-2xl md:text-3xl font-semibold text-foreground">Chatbot vs. agent: where the ROI actually comes from</h2>
              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-left text-sm md:text-base">
                  <thead className="bg-muted/40">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Dimension</th>
                      <th className="px-4 py-3 font-semibold">Traditional chatbot</th>
                      <th className="px-4 py-3 font-semibold">AI agent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr><td className="px-4 py-3">Output</td><td className="px-4 py-3">A reply</td><td className="px-4 py-3">A completed task</td></tr>
                    <tr><td className="px-4 py-3">Memory</td><td className="px-4 py-3">Single turn</td><td className="px-4 py-3">Contextual across the journey</td></tr>
                    <tr><td className="px-4 py-3">Tools</td><td className="px-4 py-3">None or one</td><td className="px-4 py-3">CRM, calendar, WhatsApp, payments</td></tr>
                    <tr><td className="px-4 py-3">Failure mode</td><td className="px-4 py-3">"I didn't understand that"</td><td className="px-4 py-3">Escalates to a human with full context</td></tr>
                    <tr><td className="px-4 py-3">Business impact</td><td className="px-4 py-3">Deflects FAQs</td><td className="px-4 py-3">Books revenue, reclaims hours</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section aria-labelledby="roadmap">
              <h2 id="roadmap" className="text-2xl md:text-3xl font-semibold text-foreground">A 6-step roadmap to implement agentic AI</h2>

              <h3 className="mt-8 text-xl font-semibold text-foreground">1. Pick one painful, repetitive workflow</h3>
              <p className="mt-3">
                Don't start with "AI for everything." Start with the one workflow that's leaking the most money this
                month — usually lead response, appointment booking, or post-sale follow-up. The narrower the scope,
                the faster the agent gets to production and the cleaner the ROI story.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-foreground">2. Map the human version first</h3>
              <p className="mt-3">
                Before writing a prompt, write the standard operating procedure a new hire would follow. What
                information is needed at each step? What systems do they open? When do they escalate? Agents inherit
                the structure you give them; vague processes produce vague agents.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-foreground">3. Connect the tools, not just the model</h3>
              <p className="mt-3">
                The model is the easy part. The leverage is in the integrations: WhatsApp, your CRM, your calendar,
                your payment processor, your internal database. An agent without tools is a chatbot. An agent with
                three well-chosen tools can run an entire intake-to-booking funnel.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-foreground">4. Define guardrails and escalation paths</h3>
              <p className="mt-3">
                Decide explicitly what the agent <em>cannot</em> do without a human — refunds, schedule changes outside
                business hours, clinical advice, contract terms. Every agent should know when to stop and hand off
                with a full summary of the conversation so far.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-foreground">5. Ship narrow, then expand</h3>
              <p className="mt-3">
                Launch the first agent against a slice of traffic — one channel, one client segment, one shift. Watch
                real conversations for two weeks. Patch the gaps. Then expand scope. Trying to launch an "all-purpose"
                agent is the single most common reason these projects fail.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-foreground">6. Measure outcomes, not interactions</h3>
              <p className="mt-3">
                Track booked appointments, qualified leads, resolution rate, response time, no-show rate, and hours
                returned to the team. "Messages handled" is a vanity metric. Booked revenue per employee is the one
                that matters.
              </p>
            </section>

            <section aria-labelledby="metrics">
              <h2 id="metrics" className="text-2xl md:text-3xl font-semibold text-foreground">How to measure ROI</h2>
              <ul className="mt-4 space-y-3">
                {[
                  'Time to first response (target: under 2 minutes, 24/7)',
                  'Lead-to-booking conversion rate before and after launch',
                  'No-show rate after automated reminders and rescheduling',
                  'Hours per week reclaimed from coordination tasks',
                  'Revenue per employee, tracked monthly',
                  'Cost per qualified lead vs. paid acquisition',
                ].map((m) => (
                  <li key={m} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="mistakes">
              <h2 id="mistakes" className="text-2xl md:text-3xl font-semibold text-foreground">Common mistakes to avoid</h2>
              <ul className="mt-4 space-y-3 list-disc pl-6">
                <li>Treating the agent as a chatbot upgrade instead of a workflow rebuild.</li>
                <li>Skipping the SOP step and prompting from memory.</li>
                <li>Launching against 100% of traffic on day one.</li>
                <li>No escalation path, so edge cases become customer-experience disasters.</li>
                <li>Measuring "messages handled" instead of business outcomes.</li>
              </ul>
            </section>

            <section aria-labelledby="faq">
              <h2 id="faq" className="text-2xl md:text-3xl font-semibold text-foreground">FAQ</h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">What is agentic AI in simple terms?</h3>
                  <p className="mt-2">Software that can plan, use your tools, and finish a real task — not just reply.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Is agentic AI safe for customer-facing work?</h3>
                  <p className="mt-2">Yes, when you scope the agent narrowly, give it explicit guardrails, and define a clear escalation path to a human.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">How long does the first agent take to ship?</h3>
                  <p className="mt-2">A focused agent (lead qualification, booking, follow-up) typically goes live in 2–6 weeks.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Do I need a big tech team?</h3>
                  <p className="mt-2">No. Most SMBs deploy their first agent with an external partner handling the build and integrations.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section
              aria-labelledby="cta"
              className="rounded-2xl border border-border bg-muted/30 p-8 md:p-10"
            >
              <h2 id="cta" className="text-2xl md:text-3xl font-semibold text-foreground">
                Ready to ship your first AI agent?
              </h2>
              <p className="mt-3 text-muted-foreground">
                HeyFlou helps SMBs design, build, and operate agentic AI systems — from the first scoped workflow to
                the infrastructure that runs your operations.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/services/agents"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Explore AI agents <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
                >
                  Book a strategy call
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}