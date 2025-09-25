import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Target, Users, Shield, Search, Zap, TestTube, TrendingUp } from 'lucide-react';
import logoSvg from '@/assets/heyflou-logo.svg';
export default function About() {
  return <>
      <SEOHead title="About HeyFlou | AI Automation for SMBs" description="HeyFlou helps SMBs achieve ROI with business-first, human-in-the-loop AI automations—secure, measurable, and fast to deploy." canonical="https://heyflou.com/about" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Section background="glow" padding="large">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:gap-12">
              {/* Logo - Small on mobile, left side on desktop */}
              <div className="flex justify-center md:justify-start mb-6 md:mb-0">
                
              </div>
              
              {/* Text content */}
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-hf-ink mb-4">
                  About HeyFlou
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  We help SMBs unlock ROI with business-first, human-in-the-loop AI automations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <GradientButton variant="primary" size="lg" asChild>
                    <Link to="/#book">Book a Strategy Call</Link>
                  </GradientButton>
                  <GradientButton variant="secondary" size="lg" asChild>
                    <Link to="/roi">See Use Cases</Link>
                  </GradientButton>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Three Pillars */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hf-shadow rounded-xl">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 rounded-full bg-hf-teal/10">
                      <Target className="h-8 w-8 text-hf-teal" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-display text-hf-ink mb-4">
                    Business-First
                  </h3>
                  <p className="text-muted-foreground">
                    We design for outcomes, not hype. Every build ties to revenue, cost, or time saved.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hf-shadow rounded-xl">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 rounded-full bg-hf-purple/10">
                      <Users className="h-8 w-8 text-hf-purple" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-display text-hf-ink mb-4">
                    Human-in-the-Loop
                  </h3>
                  <p className="text-muted-foreground">
                    AI handles repetitive work; your team keeps oversight and decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hf-shadow rounded-xl">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 rounded-full bg-hf-sky/10">
                      <Shield className="h-8 w-8 text-hf-sky" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-display text-hf-ink mb-4">
                    Secure-by-Design
                  </h3>
                  <p className="text-muted-foreground">
                    Encryption, access controls, and best practices from day one.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Trust Metrics */}
        <Section background="muted" padding="small">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg font-medium text-hf-ink">
              ROI in 90 days • 50–70% fewer L1 tickets • 5–10 hrs/week saved per team member
            </p>
          </div>
        </Section>

        {/* Our Story */}
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HeyFlou was born from helping small and medium businesses remove manual bottlenecks. 
              We focus on fast wins, measurable ROI, and systems that your team can actually use.
            </p>
          </div>
        </Section>

        {/* How We Work */}
        <Section background="muted">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
                How We Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-white hf-shadow">
                    <Search className="h-8 w-8 text-hf-teal" />
                  </div>
                </div>
                <div className="bg-white rounded-lg px-1 py-0.5 text-xs font-medium text-hf-teal mb-4 inline-block">
                  1. Audit
                </div>
                <h3 className="text-lg font-bold font-display text-hf-ink mb-3">
                  Map the Bottlenecks
                </h3>
                <p className="text-muted-foreground text-sm">
                  Map the biggest time drains and data gaps.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-white hf-shadow">
                    <Zap className="h-8 w-8 text-hf-purple" />
                  </div>
                </div>
                <div className="bg-white rounded-lg px-1 py-0.5 text-xs font-medium text-hf-purple mb-4 inline-block">
                  2. Prototype
                </div>
                <h3 className="text-lg font-bold font-display text-hf-ink mb-3">
                  Fast Build
                </h3>
                <p className="text-muted-foreground text-sm">
                  A small, testable automation in days.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-white hf-shadow">
                    <TestTube className="h-8 w-8 text-hf-sky" />
                  </div>
                </div>
                <div className="bg-white rounded-lg px-1 py-0.5 text-xs font-medium text-hf-sky mb-4 inline-block">
                  3. Pilot
                </div>
                <h3 className="text-lg font-bold font-display text-hf-ink mb-3">
                  Real Testing
                </h3>
                <p className="text-muted-foreground text-sm">
                  Real users, real data, measured impact.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-white hf-shadow">
                    <TrendingUp className="h-8 w-8 text-hf-navy" />
                  </div>
                </div>
                <div className="bg-white rounded-lg px-1 py-0.5 text-xs font-medium text-hf-navy mb-4 inline-block">
                  4. Scale
                </div>
                <h3 className="text-lg font-bold font-display text-hf-ink mb-3">
                  Full Deployment
                </h3>
                <p className="text-muted-foreground text-sm">
                  Hardening, training, and hand-off.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Integrations */}
        <Section>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-8">
              Works with your stack
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">CRM</span>
                </div>
                <span className="text-sm text-muted-foreground">CRM Systems</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">EMAIL</span>
                </div>
                <span className="text-sm text-muted-foreground">Email Platforms</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">HELP</span>
                </div>
                <span className="text-sm text-muted-foreground">Helpdesk Tools</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">SHEETS</span>
                </div>
                <span className="text-sm text-muted-foreground">Spreadsheets</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Closing CTA */}
        <Section background="glow" padding="large">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-6">
              Ready to map your first automation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free audit and a 90-day ROI plan.
            </p>
            <GradientButton variant="primary" size="xl" asChild>
              <Link to="/#book">Book a Strategy Call</Link>
            </GradientButton>
          </div>
        </Section>
      </main>
    </>;
}