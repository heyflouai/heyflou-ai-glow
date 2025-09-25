import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { Bot, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <SEOHead 
        title="AI Automation, Team Training & Agents | HeyFlou"
        description="Workflow automation, AI training, and intelligent agents for SMBs. Transform your business operations with proven AI solutions."
        canonical="https://heyflou.com/services"
      />
      
      <main className="pt-16">
        <Section background="glow" padding="large">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-hf-ink mb-6">
              AI Solutions That Transform Your Business
            </h1>
            <p className="text-xl text-muted-foreground">
              From workflow automation to intelligent agents, we help SMBs operate faster, leaner, and smarter.
            </p>
          </div>
        </Section>

        <Section id="automation">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-hf-ink mb-6">
                Workflow Automation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Remove manual busywork across operations, finance, and customer experience with intelligent automation.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 hf-shadow">
              <h3 className="font-bold text-hf-ink mb-4">What We Automate:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Email triage and intelligent routing</li>
                <li>• Invoice processing and approvals</li>
                <li>• Automated reporting and analytics</li>
                <li>• Data synchronization between systems</li>
                <li>• Customer onboarding workflows</li>
                <li>• Inventory management alerts</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section background="muted" id="training">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-card rounded-xl p-8 hf-shadow">
              <h3 className="font-bold text-hf-ink mb-4">Training Includes:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Role-based AI playbooks</li>
                <li>• Prompt engineering workshops</li>
                <li>• AI governance frameworks</li>
                <li>• Best practices documentation</li>
                <li>• Hands-on implementation</li>
                <li>• Ongoing support and updates</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-hf-ink mb-6">
                AI Training for Teams
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Upskill your staff to safely and effectively use AI tools daily with comprehensive training programs.
              </p>
            </div>
          </div>
        </Section>

        <Section id="agents">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6">
                <Bot className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-hf-ink mb-6">
                AI Agents for Your Business
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Deploy autonomous assistants that handle multi-step tasks with built-in oversight and guardrails.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 hf-shadow">
              <h3 className="font-bold text-hf-ink mb-4">Agent Capabilities:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Lead follow-up and nurturing</li>
                <li>• Operations monitoring and alerts</li>
                <li>• Intelligent appointment scheduling</li>
                <li>• Quality assurance checks</li>
                <li>• Customer support escalation</li>
                <li>• Performance reporting</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section background="glow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-hf-ink mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a strategy call to discuss your automation needs and build a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton variant="hero" size="xl" asChild>
                <a href="https://calendly.com/salo-zayat/new-meeting" target="_blank" rel="noopener noreferrer">
                  Book Strategy Call
                </a>
              </GradientButton>
              <GradientButton variant="secondary" size="xl" asChild>
                <Link to="/contact">Get Quote</Link>
              </GradientButton>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}