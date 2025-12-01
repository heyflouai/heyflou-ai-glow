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
                AI Chatbot for Client Communication & Appointments
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                An intelligent virtual assistant that talks to your new clients 24/7, answers their first questions, qualifies them, and automatically books, reschedules, or cancels appointments. Built especially for therapists and service professionals who want to save time and never miss a client again. Fully connected to your calendar and CRM.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 hf-shadow">
              <h3 className="font-bold text-hf-ink mb-4">Key Features:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 24/7 client communication</li>
                <li>• Automatic appointment booking</li>
                <li>• Client qualification and screening</li>
                <li>• Calendar and CRM integration</li>
                <li>• Appointment reminders and confirmations</li>
                <li>• Seamless rescheduling and cancellations</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section background="muted" id="training">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-card rounded-xl p-8 hf-shadow">
              <h3 className="font-bold text-hf-ink mb-4">Core Features:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Lead and opportunity tracking</li>
                <li>• Automated task and reminder triggers</li>
                <li>• Sales pipeline visualization</li>
                <li>• Client journey mapping</li>
                <li>• Real-time business insights</li>
                <li>• Seamless tool integration</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-hf-ink mb-6">
                CRM Management & Automation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                A complete system to organize your leads, follow-ups, sales pipeline, and client journeys — all in one place. We automate your entire CRM so every opportunity is tracked, every task is triggered on time, and you always know exactly what's happening in your business.
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
                Lead Generation & Nurturing Automation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We turn your website visitors and ad traffic into real paying clients. Our automated lead systems capture, qualify, and nurture prospects with smart follow-ups until they are ready to book or buy — without manual work from your team.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 hf-shadow">
              <h3 className="font-bold text-hf-ink mb-4">What's Included:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Automated lead capture and qualification</li>
                <li>• Smart follow-up sequences</li>
                <li>• Lead scoring and prioritization</li>
                <li>• Personalized content delivery</li>
                <li>• Conversion tracking and analytics</li>
                <li>• Pipeline management automation</li>
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