import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { Rocket, Bot, MessageSquare, BarChart3, FileText, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <SEOHead 
        title="AI Marketing & Automation for Travel Agencies | HeyFlou"
        description="Full marketing engine, AI chatbots, WhatsApp automation, and CRM for travel agencies. Also serving physiotherapists and therapists."
        canonical="https://heyflou.com/services"
      />
      
      <main className="pt-16">
        <Section background="glow" padding="large">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-hf-ink mb-6">
              AI Marketing & Automation for Travel Agencies
            </h1>
            <p className="text-xl text-muted-foreground">
              Generate more bookings with automated funnels, AI chatbots, and WhatsApp campaigns—all in one platform.
            </p>
          </div>
        </Section>

        <Section id="marketing-engine">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6">
                <Rocket className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-hf-ink mb-6">
                Full Marketing Engine for Travel Agencies
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                An all-in-one marketing system that generates more bookings through automated funnels, segmentation, and follow-up sequences. Includes landing pages, WhatsApp campaigns, and analytics.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 hf-shadow">
              <h3 className="font-bold text-hf-ink mb-4">Key Features:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Automated marketing funnels</li>
                <li>• Lead segmentation & targeting</li>
                <li>• WhatsApp campaign management</li>
                <li>• Email sequence automation</li>
                <li>• Performance analytics dashboard</li>
                <li>• Multi-channel campaign tracking</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section background="muted" id="ai-chatbot">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-card rounded-xl p-8 hf-shadow">
              <h3 className="font-bold text-hf-ink mb-4">Core Features:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 24/7 package promotion</li>
                <li>• Instant traveler Q&A</li>
                <li>• Lead qualification & scoring</li>
                <li>• Seamless CRM integration</li>
                <li>• Personalized trip recommendations</li>
                <li>• Booking intent detection</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6">
                <Bot className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-hf-ink mb-6">
                AI Travel Chatbot That Sells Your Packages
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your 24/7 marketing assistant. Promotes packages, answers traveler questions instantly, qualifies leads, and sends them into your CRM. Transforms inquiries into ready-to-book travelers.
              </p>
            </div>
          </div>
        </Section>

        <Section id="whatsapp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6">
                <MessageSquare className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-hf-ink mb-6">
                Automated WhatsApp Marketing & Follow-Ups
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Recover abandoned inquiries, promote seasonal deals, and keep leads engaged automatically. Maximize conversions without extra manual work.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 hf-shadow">
              <h3 className="font-bold text-hf-ink mb-4">What's Included:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Abandoned inquiry recovery</li>
                <li>• Seasonal deal promotions</li>
                <li>• Automated follow-up sequences</li>
                <li>• Broadcast campaigns</li>
                <li>• Lead re-engagement workflows</li>
                <li>• Response tracking & analytics</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section background="muted" id="crm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-card rounded-xl p-8 hf-shadow">
              <h3 className="font-bold text-hf-ink mb-4">Core Features:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Lead pipeline tracking</li>
                <li>• Campaign performance metrics</li>
                <li>• Booking attribution insights</li>
                <li>• Revenue forecasting</li>
                <li>• Custom reporting dashboards</li>
                <li>• ROI tracking by channel</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6">
                <BarChart3 className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-hf-ink mb-6">
                Travel Marketing CRM & Analytics Dashboard
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Track leads, measure campaign performance, and see exactly which marketing actions drive bookings. Simple insights → smarter decisions.
              </p>
            </div>
          </div>
        </Section>

        <Section id="landing-pages">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6">
                <FileText className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-hf-ink mb-6">
                High-Conversion Landing Pages for Trips
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Optimized pages designed specifically for travel packages, group tours, and premium experiences. Engineered to turn traffic into paying clients.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 hf-shadow">
              <h3 className="font-bold text-hf-ink mb-4">What's Included:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Mobile-optimized designs</li>
                <li>• A/B testing capabilities</li>
                <li>• Integrated booking forms</li>
                <li>• Package showcase layouts</li>
                <li>• Social proof elements</li>
                <li>• Fast-loading performance</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Secondary Vertical - Therapists */}
        <Section background="muted" id="therapists">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6 mx-auto">
                <Stethoscope className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-hf-ink mb-4">
                Also for Physiotherapists & Therapists
              </h2>
              <p className="text-lg text-muted-foreground">
                Streamline your practice with AI-powered patient management and automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 hf-shadow">
                <h3 className="font-bold text-hf-ink mb-2">AI Intake Chatbot</h3>
                <p className="text-sm text-muted-foreground">Collect patient information and screen inquiries automatically before appointments.</p>
              </div>
              <div className="bg-card rounded-xl p-6 hf-shadow">
                <h3 className="font-bold text-hf-ink mb-2">Appointment Automation</h3>
                <p className="text-sm text-muted-foreground">24/7 booking, rescheduling, and calendar sync with your practice management system.</p>
              </div>
              <div className="bg-card rounded-xl p-6 hf-shadow">
                <h3 className="font-bold text-hf-ink mb-2">No-Show Reduction</h3>
                <p className="text-sm text-muted-foreground">Smart reminder workflows that reduce missed appointments by up to 60%.</p>
              </div>
              <div className="bg-card rounded-xl p-6 hf-shadow">
                <h3 className="font-bold text-hf-ink mb-2">Patient Tracking CRM</h3>
                <p className="text-sm text-muted-foreground">Track patient journeys, treatment progress, and follow-up care in one place.</p>
              </div>
              <div className="bg-card rounded-xl p-6 hf-shadow">
                <h3 className="font-bold text-hf-ink mb-2">WhatsApp Reminders</h3>
                <p className="text-sm text-muted-foreground">Automated appointment confirmations and reminders via WhatsApp and email.</p>
              </div>
              <div className="bg-card rounded-xl p-6 hf-shadow">
                <h3 className="font-bold text-hf-ink mb-2">Email Automation</h3>
                <p className="text-sm text-muted-foreground">Post-treatment follow-ups, re-engagement campaigns, and patient nurturing.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section background="glow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-hf-ink mb-6">
              Ready to Grow Your Bookings?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free strategy call to see how AI marketing automation can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton variant="hero" size="xl" asChild>
                <a href="https://calendly.com/salo-zayat/new-meeting" target="_blank" rel="noopener noreferrer">
                  Book Free Strategy Call
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
