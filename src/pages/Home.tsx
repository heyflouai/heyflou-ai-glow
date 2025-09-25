import { Bot, TrendingUp, Users, Zap, Shield, ChartBar } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { KpiStat } from '@/components/ui/kpi-stat';
import { keyMetrics, industryUseCases } from '@/data/metrics';
import { getFeaturedCases } from '@/data/cases';
import { Link } from 'react-router-dom';
import { useState } from 'react';
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
const beforeAfterComparisons = [{
  category: "Response Time",
  traditional: "Hours",
  withAI: "Seconds"
}, {
  category: "Data & Reporting",
  traditional: "40 hours",
  withAI: "5-10 hours"
}, {
  category: "Support Cost",
  traditional: "High",
  withAI: "~50% reduction"
}, {
  category: "Error Rate",
  traditional: "Frequent",
  withAI: "Near-zero"
}, {
  category: "Content Throughput",
  traditional: "4 pieces/week",
  withAI: "10+ pieces/week"
}, {
  category: "Lead Handling",
  traditional: "Manual process",
  withAI: "AI scoring"
}];
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
  answer: "No—AI augments your team with human-in-the-loop processes. Our approach focuses on automating repetitive tasks so your team can focus on higher-value work."
}, {
  question: "How do you handle data security?",
  answer: "We follow vendor best practices with least-privilege access and opt-out of training data usage to ensure your business data remains secure and private."
}, {
  question: "How fast can we see ROI?",
  answer: "Often within months, depending on the use case. Most clients see measurable improvements in efficiency and cost savings within 90 days of implementation."
}, {
  question: "Do I need clean data to get started?",
  answer: "Clean data helps, but it's not required. We include data readiness assessment and cleanup as part of our implementation process."
}, {
  question: "Can you integrate with our existing software stack?",
  answer: "Yes: We work with CRM systems, spreadsheets, ERPs, and other business tools via APIs to ensure seamless integration with your current workflow."
}, {
  question: "What does an AI agent actually do?",
  answer: "AI agents handle multi-step tasks with built-in guardrails—like following up on leads, monitoring operations, or processing customer requests—while keeping humans in control."
}];
export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const featuredCases = getFeaturedCases();
  const filteredUseCases = selectedIndustry ? industryUseCases.filter(uc => uc.industry === selectedIndustry) : industryUseCases;
  return <>
        <SEOHead title="HeyFlou | AI Consulting for SMB Workflow Automation" description="Automate workflows, train teams, and deploy AI agents. Proven ROI for SMBs." canonical="https://heyflou.com" jsonLd={[organizationJsonLd, faqJsonLd]} />
      
      <main className="pt-16"> {/* Back to normal header spacing */}
        {/* Hero Section */}
        <Section background="glow" padding="large">
          <div className="text-center max-w-4xl mx-auto relative">
            {/* Watermark logo behind text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <div className="w-96 h-96 hf-glow rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              
              <h1 className="text-4xl md:text-6xl font-bold font-display text-hf-ink mb-6 leading-tight">
                HeyFlou: AI Consulting that Automates Work — and Grows Your Business
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We design workflows, train teams, and deploy AI agents so SMBs operate faster, leaner, and smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <GradientButton variant="hero" size="xl" asChild>
                  <a href="https://calendly.com/heyflou/30min" target="_blank" rel="noopener noreferrer">
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
        </Section>


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

        {/* Before vs After Comparison */}
        <Section background="muted">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
              Before vs After AI Automation
            </h2>
            <p className="text-lg text-muted-foreground">
              See the transformation AI brings to business operations
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl hf-shadow overflow-hidden">
              <div className="grid grid-cols-3 bg-hf-navy text-white">
                <div className="p-4 font-semibold">Process</div>
                <div className="p-4 font-semibold border-x border-gray-600">Traditional</div>
                <div className="p-4 font-semibold">With AI Automation</div>
              </div>
              {beforeAfterComparisons.map((comparison, index) => <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-muted/50' : 'bg-card'}`}>
                  <div className="p-4 font-medium text-hf-ink">{comparison.category}</div>
                  <div className="p-4 text-muted-foreground border-x border-border">{comparison.traditional}</div>
                  <div className="p-4 text-hf-teal font-medium">{comparison.withAI}</div>
                </div>)}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              * Outcomes vary by company.
            </p>
          </div>
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

        {/* Industries We Help */}
        <Section background="muted">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
              Industries We Help
            </h2>
            <p className="text-lg text-muted-foreground">
              AI automation solutions tailored to your industry
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button onClick={() => setSelectedIndustry(null)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedIndustry === null ? 'hf-gradient text-white' : 'bg-white text-hf-ink hover:bg-muted'}`}>
              All Industries
            </button>
            {industryUseCases.map(useCase => <button key={useCase.industry} onClick={() => setSelectedIndustry(useCase.industry)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedIndustry === useCase.industry ? 'hf-gradient text-white' : 'bg-white text-hf-ink hover:bg-muted'}`}>
                {useCase.industry}
              </button>)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUseCases.map(useCase => <div key={useCase.industry} className="bg-card rounded-xl p-6 hf-shadow">
                <h3 className="text-lg font-bold font-display text-hf-ink mb-4">
                  {useCase.industry}
                </h3>
                <div className="space-y-3">
                  {useCase.automations.map((automation, index) => <div key={index} className="border-l-2 border-hf-teal/30 pl-4">
                      <h4 className="text-sm font-semibold text-hf-navy">
                        {automation.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        {automation.description}
                      </p>
                      <p className="text-xs text-hf-teal font-medium">
                        {automation.expectedOutcome}
                      </p>
                    </div>)}
                </div>
              </div>)}
          </div>
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