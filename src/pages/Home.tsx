import { Bot, TrendingUp, Users, Zap, Shield, ChartBar } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { KpiStat } from '@/components/ui/kpi-stat';
import { keyMetrics, industryUseCases } from '@/data/metrics';
import { getFeaturedCases } from '@/data/cases';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CompactForm } from '@/components/forms/CompactForm';
import { ProblemSolution } from '@/components/home/ProblemSolution';
import { DepartmentsCarousel } from '@/components/home/DepartmentsCarousel';
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HeyFlou",
  "description": "AI Consulting for SMB Workflow Automation",
  "url": "https://heyflou.com",
  "logo": "https://heyflou.com/logo.png",
  "sameAs": ["https://linkedin.com/company/heyflou", "https://twitter.com/heyflou"]
};
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Will AI replace my team?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No—AI augments your team with human-in-the-loop processes. Our approach focuses on automating repetitive tasks so your team can focus on higher-value work."
    }
  }, {
    "@type": "Question",
    "name": "How do you handle data security?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We follow vendor best practices with least-privilege access and opt-out of training data usage to ensure your business data remains secure and private."
    }
  }, {
    "@type": "Question",
    "name": "How fast can we see ROI?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Often within months, depending on the use case. Most clients see measurable improvements in efficiency and cost savings within 90 days of implementation."
    }
  }]
};
const processSteps = [{
  step: "01",
  title: "Discover",
  description: "Audit your current workflows and identify automation opportunities"
}, {
  step: "02",
  title: "Design",
  description: "Create custom AI solutions tailored to your business processes"
}, {
  step: "03",
  title: "Deploy",
  description: "Implement and integrate AI systems with your existing tools"
}, {
  step: "04",
  title: "Train & Improve",
  description: "Upskill your team and continuously optimize performance"
}];
const faqItems = [{
  question: "Will AI replace my team?",
  answer: "No. AI automates repetitive tasks so your team can focus on strategy and growth."
}, {
  question: "How do you handle data security?",
  answer: "We use encryption and industry best practices to keep your data safe at all times."
}, {
  question: "How fast can we see ROI?",
  answer: "Most SMBs notice time savings and measurable ROI within 90 days."
}, {
  question: "Do I need technical skills to use it?",
  answer: "No. We handle setup, integration, and support so you can focus on your business."
}, {
  question: "Is it expensive?",
  answer: "Our plans are designed to save more money than they cost by reducing manual work."
}, {
  question: "Do I have to change my whole system?",
  answer: "No. We connect with your existing tools and add automations to make them more efficient."
}, {
  question: "Does it work with my existing tools?",
  answer: "Yes. We integrate with CRMs, email, and other apps you already use."
}];
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const featuredCases = getFeaturedCases();
  return <>
        <SEOHead title="HeyFlou — AI Consulting | Automate Your Work, Grow Your Business" description="Automate workflows, train teams, and deploy AI agents. Proven ROI for SMBs." canonical="https://heyflou.com" jsonLd={[organizationJsonLd, faqJsonLd]} />
      
      <main className="pt-16"> {/* Back to normal header spacing */}
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 text-center overflow-visible">
          {/* subtle purple -> white gradient */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute inset-x-0 top-0 h-[360px] md:h-[440px]"
              style={{ background: "var(--hf-hero-soft)" }}
            />
            {/* ultra-light noise to avoid banding */}
            <div
              className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')",
              }}
            />
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-hf-ink">
                HeyFlou: AI Consulting
              </h1>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-hf-navy/90">
                Automate Your Work — Grow Your Business
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 mt-8">
                <GradientButton variant="hero" size="xl" asChild>
                  <a href="https://calendly.com/salo-zayat/new-meeting" target="_blank" rel="noopener noreferrer">
                    Book a Strategy Call
                  </a>
                </GradientButton>
                <GradientButton variant="secondary" size="xl" asChild>
                  <Link to="/contact">Get an AI Audit</Link>
                </GradientButton>
              </div>
              
              {/* Hero badges */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                  <span className="text-hf-ink font-medium">Human-in-the-loop</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                  <span className="text-hf-ink font-medium">Secure-by-design</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                  <span className="text-hf-ink font-medium">From audit to ROI in 90 days</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Why AI Now - Stats Grid */}
        <Section>
          <div className="text-center mb-12">
            
            <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
              Why AI Now?
            </h2>
            <p className="text-lg text-muted-foreground">
              The data shows SMBs using AI are outperforming competitors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyMetrics.map((metric, index) => <KpiStat key={metric.id} value={metric.value} label={metric.label} description={metric.description} icon={index === 0 ? <TrendingUp size={24} /> : index === 1 ? <ChartBar size={24} /> : index === 2 ? <Users size={24} /> : index === 3 ? <Bot size={24} /> : index === 4 ? <Zap size={24} /> : <Shield size={24} />} />)}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-8">
            Benchmarks reflect aggregated SMB research; results vary.
          </p>
        </Section>

        {/* Problem → Solution → What We Do */}
        <Section id="problem-solution" background="muted">
          <ProblemSolution />
        </Section>

        {/* What We Do - Services */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground">
              Three core services to transform your business with AI
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 hf-shadow hover:hf-shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold font-display text-hf-ink mb-4">
                Workflow Automation
              </h3>
              <p className="text-muted-foreground mb-6">
                Remove manual busywork across operations, finance, and customer experience.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Email triage and routing</li>
                <li>• Invoice processing</li>
                <li>• Automated reporting</li>
                <li>• Data synchronization</li>
              </ul>
              <GradientButton variant="ghost" size="sm" asChild>
                <Link to="/services#automation">Learn More</Link>
              </GradientButton>
            </div>

            <div className="bg-card rounded-xl p-8 hf-shadow hover:hf-shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold font-display text-hf-ink mb-4">
                AI Training for Teams
              </h3>
              <p className="text-muted-foreground mb-6">
                Upskill staff to safely use AI daily with role-based playbooks and governance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Role-based AI playbooks</li>
                <li>• Prompt engineering training</li>
                <li>• Governance frameworks</li>
                <li>• Best practices workshops</li>
              </ul>
              <GradientButton variant="ghost" size="sm" asChild>
                <Link to="/services#training">Learn More</Link>
              </GradientButton>
            </div>

            <div className="bg-card rounded-xl p-8 hf-shadow hover:hf-shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold font-display text-hf-ink mb-4">
                AI Agents for Your Business
              </h3>
              <p className="text-muted-foreground mb-6">
                Autonomous assistants that execute multi-step tasks with oversight and guardrails.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Lead follow-up automation</li>
                <li>• Operations monitoring</li>
                <li>• Intelligent scheduling</li>
                <li>• Quality assurance checks</li>
              </ul>
              <GradientButton variant="ghost" size="sm" asChild>
                <Link to="/services#agents">Learn More</Link>
              </GradientButton>
            </div>
          </div>
        </Section>

        {/* We Help Every Department */}
        <Section id="departments" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--hf-ink))]">We Help Every Department</h2>
            <p className="mt-3 text-[hsl(var(--hf-navy)/0.9)]">Plug AI where it saves the most time and reduces errors.</p>
          </div>
          <DepartmentsCarousel className="mt-10 md:mt-12" />
        </Section>


        {/* Process */}
        <Section background="muted">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground">
              From discovery to deployment in 90 days
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full hf-gradient flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold font-display text-hf-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>)}
          </div>
        </Section>


        {/* FAQ */}
        <Section background="muted">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about AI automation for SMBs
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, index) => <div key={index} className="bg-card rounded-lg hf-shadow">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full text-left p-6 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <span className="font-semibold text-hf-ink">{faq.question}</span>
                  <span className="text-hf-teal text-xl">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>}
              </div>)}
          </div>
        </Section>

        {/* Compact Form */}
        <Section id="get-started">
          <CompactForm sourcePage="home" />
        </Section>

        {/* Final CTA */}
        <Section background="glow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
              Let's map your first 90 days with AI
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a strategy call to discover your automation opportunities and build a custom roadmap.
            </p>
            <GradientButton variant="hero" size="xl" asChild>
              <Link to="/contact">Get Started Today</Link>
            </GradientButton>
          </div>
        </Section>
      </main>
    </>;
}