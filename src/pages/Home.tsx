import { Bot, TrendingUp, Users, Zap, Shield, ChartBar } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { KpiStat } from '@/components/ui/kpi-stat';
import { keyMetrics, industryUseCases } from '@/data/metrics';
import { getFeaturedCases } from '@/data/cases';
import { Link } from 'react-router-dom';
import { CompactForm } from '@/components/forms/CompactForm';
import { ProblemSolution } from '@/components/home/ProblemSolution';
import { DepartmentsCarousel } from '@/components/home/DepartmentsCarousel';
import { IntegrationBeams } from '@/components/home/IntegrationBeams';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HeyFlou",
  "description": "AI Automation for Therapists and Service Professionals",
  "url": "https://heyflou.com",
  "logo": "https://heyflou.com/logo.png",
  "sameAs": ["https://linkedin.com/company/heyflou", "https://twitter.com/heyflou"]
};
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Will AI replace me or my staff?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. AI handles repetitive admin work like scheduling and follow-ups so you can focus on your clients and growing your practice."
    }
  }, {
    "@type": "Question",
    "name": "How do you keep client data secure?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We use enterprise-grade encryption and follow strict HIPAA-compliant security practices to protect all client information."
    }
  }, {
    "@type": "Question",
    "name": "How quickly will I see results?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Most clients save 10-20 hours per week within the first month and see increased bookings within 60 days."
    }
  }]
};
const processSteps = [{
  step: "01",
  title: "Discovery Call",
  description: "We learn about your practice, current challenges, and automation goals"
}, {
  step: "02",
  title: "Custom Design",
  description: "Build your AI chatbot, CRM workflows, and lead capture systems"
}, {
  step: "03",
  title: "Integration & Setup",
  description: "Connect with your calendar, CRM, and existing tools seamlessly"
}, {
  step: "04",
  title: "Launch & Support",
  description: "Go live with full training and ongoing optimization support"
}];
const faqItems = [{
  question: "Will AI replace me or my staff?",
  answer: "No. AI handles repetitive admin work like scheduling and follow-ups so you can focus on your clients and growing your practice."
}, {
  question: "How do you keep client data secure?",
  answer: "We use enterprise-grade encryption and follow strict HIPAA-compliant security practices to protect all client information."
}, {
  question: "How quickly will I see results?",
  answer: "Most clients save 10-20 hours per week within the first month and see increased bookings within 60 days."
}, {
  question: "Do I need tech skills to use it?",
  answer: "Not at all. We handle the entire setup, integration, and training. You just use it like any other tool in your practice."
}, {
  question: "Is it expensive?",
  answer: "Our systems typically pay for themselves within 2-3 months through time savings and increased client bookings."
}, {
  question: "Will I need to change my current systems?",
  answer: "No. We integrate with your existing calendar, CRM, and communication tools without disrupting your workflow."
}, {
  question: "Does it work with my calendar and CRM?",
  answer: "Yes. We integrate with popular platforms like Google Calendar, Outlook, SimplePractice, TherapyNotes, and most major CRMs."
}];
export default function Home() {
  const featuredCases = getFeaturedCases();
  return <>
        <SEOHead title="AI Automation for Therapists & Service Professionals | HeyFlou" description="Save time and get more clients with AI chatbots, automated scheduling, and CRM management. Built for therapists and service professionals." canonical="https://heyflou.com" jsonLd={[organizationJsonLd, faqJsonLd]} />
      
      <main className="pt-16"> {/* Back to normal header spacing */}
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 text-center overflow-visible">
          {/* SOFT AURA BACKGROUND - Light Mode */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-visible dark:hidden">
            {/* main glow */}
            <div className="
                absolute left-1/2 -top-28 md:-top-36 -translate-x-1/2
                w-[120vw] md:w-[90vw] h-[60vh] md:h-[66vh]
                rounded-[9999px]
              " style={{
            background: "radial-gradient(70% 55% at 50% 0%, hsl(var(--hf-teal)/0.16) 0%, hsl(var(--hf-sky)/0.12) 35%, hsl(var(--hf-purple)/0.16) 55%, transparent 80%)",
            filter: "blur(72px) saturate(110%)",
            opacity: 0.18
          }} />
            {/* feather & vignette so there's never a hard line */}
            <div className="absolute inset-0" style={{
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,.85) 40%, rgba(0,0,0,0) 85%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,.85) 40%, rgba(0,0,0,0) 85%)",
            background: "radial-gradient(100% 60% at 50% -10%, hsl(var(--hf-ink)/0.06) 0%, transparent 70%)"
          }} />
            {/* microscopic noise to prevent gradient banding */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{
            backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')"
          }} />
          </div>
          
          {/* PREMIUM HERO GLOW - Dark Mode Only */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-visible hidden dark:block">
            {/* Primary AI glow - centered behind headline */}
            <div 
              className="absolute left-1/2 -top-20 md:-top-32 -translate-x-1/2 w-[140vw] md:w-[100vw] h-[70vh] md:h-[80vh] rounded-[9999px]"
              style={{
                background: "radial-gradient(50% 45% at 50% 20%, hsl(206 83% 60% / 0.15) 0%, hsl(268 84% 65% / 0.12) 40%, transparent 70%)",
                filter: "blur(80px)",
              }}
            />
            {/* Secondary subtle purple accent */}
            <div 
              className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[50vh] rounded-[9999px]"
              style={{
                background: "radial-gradient(60% 50% at 50% 0%, hsl(268 84% 65% / 0.08) 0%, transparent 60%)",
                filter: "blur(60px)",
              }}
            />
            {/* Subtle teal accent on left */}
            <div 
              className="absolute left-[20%] top-[10%] w-[30vw] h-[40vh] rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(190 72% 44% / 0.06) 0%, transparent 70%)",
                filter: "blur(50px)",
              }}
            />
            {/* Noise overlay for premium texture */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{
              backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')"
            }} />
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative">
            <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
              HeyFlou: AI Consulting
            </h1>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-foreground/80">
              Automate Your Work — Grow Your Business
            </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 mt-8">
                <GradientButton variant="hero" size="xl" asChild>
                  <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
                    Book a Strategy Call
                  </a>
                </GradientButton>
                <GradientButton variant="secondary" size="xl" asChild>
                  <Link to="/contact">Get an AI Audit</Link>
                </GradientButton>
              </div>
              
              {/* Hero badges */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center px-3 py-1 bg-background/40 dark:bg-card/50 rounded-full backdrop-blur-sm border border-border/50">
                  <span className="text-foreground font-medium">Human-in-the-loop</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-background/40 dark:bg-card/50 rounded-full backdrop-blur-sm border border-border/50">
                  <span className="text-foreground font-medium">Secure-by-design</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-background/40 dark:bg-card/50 rounded-full backdrop-blur-sm border border-border/50">
                  <span className="text-foreground font-medium">From audit to ROI in 90 days</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Why AI Now - Stats Grid */}
        <Section>
          <div className="text-center mb-12">
            
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Why Service Professionals Choose AI Automation
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from therapists and service-based businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyMetrics.map((metric, index) => <KpiStat key={metric.id} value={metric.value} label={metric.label} description={metric.description} icon={index === 0 ? <TrendingUp size={24} /> : index === 1 ? <ChartBar size={24} /> : index === 2 ? <Users size={24} /> : index === 3 ? <Bot size={24} /> : index === 4 ? <Zap size={24} /> : <Shield size={24} />} />)}
          </div>
          
        </Section>

        {/* Problem → Solution → What We Do */}
        <Section id="problem-solution" background="muted">
          <ProblemSolution />
        </Section>

        {/* What We Do - Services */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              How HeyFlou Helps You Grow
            </h2>
            <p className="text-lg text-muted-foreground">
              Three proven systems to save time and get more clients
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 hf-shadow hover:hf-shadow-lg transition-all duration-300 group border border-border/50">
              <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-4">
                AI Chatbot for Appointments
              </h3>
              <p className="text-muted-foreground mb-6">
                Talk to new clients 24/7, answer questions, and book appointments automatically.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• 24/7 client communication</li>
                <li>• Automatic booking & rescheduling</li>
                <li>• Client screening and qualification</li>
                <li>• Calendar and CRM sync</li>
              </ul>
              <GradientButton variant="ghost" size="sm" asChild>
                <Link to="/services">Learn More</Link>
              </GradientButton>
            </div>

            <div className="bg-card rounded-xl p-8 hf-shadow hover:hf-shadow-lg transition-all duration-300 group border border-border/50">
              <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-4">
                CRM Management & Automation
              </h3>
              <p className="text-muted-foreground mb-6">
                Organize all your leads, follow-ups, and client journeys in one automated system.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Lead and opportunity tracking</li>
                <li>• Automated follow-up reminders</li>
                <li>• Sales pipeline visualization</li>
                <li>• Real-time business insights</li>
              </ul>
              <GradientButton variant="ghost" size="sm" asChild>
                <Link to="/services">Learn More</Link>
              </GradientButton>
            </div>

            <div className="bg-card rounded-xl p-8 hf-shadow hover:hf-shadow-lg transition-all duration-300 group border border-border/50">
              <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-4">
                Lead Generation & Nurturing
              </h3>
              <p className="text-muted-foreground mb-6">
                Turn website visitors into paying clients with smart capture and automated follow-ups.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Automated lead capture</li>
                <li>• Smart qualification & scoring</li>
                <li>• Personalized follow-up sequences</li>
                <li>• Conversion tracking</li>
              </ul>
              <GradientButton variant="ghost" size="sm" asChild>
                <Link to="/services">Learn More</Link>
              </GradientButton>
            </div>
          </div>
        </Section>

        {/* We Help Every Department */}
        <Section id="departments" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">We Help Every Department</h2>
            <p className="mt-3 text-muted-foreground">AI marketing and automation solutions for travel agencies and healthcare practices.</p>
          </div>
          <DepartmentsCarousel className="mt-10 md:mt-12" />
        </Section>

        {/* Integration Beams - Above How It Works */}
        <IntegrationBeams />

        {/* Process */}
        <Section background="muted">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              From first call to fully automated system in 90 days
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full hf-gradient flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">
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
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions from small business owners in healthcare, fitness, and service industries
            </p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-card rounded-lg hf-shadow border-none"
              >
                <AccordionTrigger className="px-6 py-6 hover:bg-muted/50 transition-colors hover:no-underline [&>svg]:text-hf-teal">
                  <span className="font-semibold text-foreground text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>

        {/* Compact Form */}
        <Section id="get-started">
          <CompactForm sourcePage="home" />
        </Section>

        {/* Final CTA */}
        <Section background="glow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Ready to Save Time and Get More Clients?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free strategy call to see how AI automation can transform your practice in 90 days.
            </p>
            <GradientButton variant="hero" size="xl" asChild>
              <Link to="/contact">Get Started Today</Link>
            </GradientButton>
          </div>
        </Section>
      </main>
    </>;
}