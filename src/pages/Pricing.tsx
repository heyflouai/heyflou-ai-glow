import { SEOHead } from '@/components/ui/seo-head';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PricingTier = ({ name, price, period, features, highlight = false }: {
  name: string; price: string; period?: string; features: string[]; highlight?: boolean;
}) => (
  <div className={`rounded-2xl border p-6 transition-all duration-200 ${highlight ? 'border-hf-teal bg-hf-teal/5 shadow-lg shadow-hf-teal/10' : 'border-border bg-card'}`}>
    <h4 className="text-lg font-semibold text-foreground mb-1">{name}</h4>
    <div className="flex items-baseline gap-1 mb-4">
      <span className="text-3xl font-bold text-foreground">{price}</span>
      {period && <span className="text-muted-foreground text-sm">{period}</span>}
    </div>
    <ul className="space-y-2">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <Check className="h-4 w-4 text-hf-teal mt-0.5 flex-shrink-0" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Pricing = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEOHead
        title="Pricing | HeyFlou"
        description="Flexible pricing plans for AI-powered lead generation, chatbots, workflow automation, and consulting services."
      />
      <section className="bg-background py-16 md:py-24 lg:py-32 min-h-screen">
        <div className="mx-auto max-w-[900px] px-5 md:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-hf-teal transition-colors mb-10 text-sm group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">Pricing</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            We offer flexible plans for businesses of all sizes.
          </p>

          {/* Lead Generation */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-2 font-heading">Lead Generation</h2>
            <p className="text-sm text-muted-foreground mb-6">Annual billing available (save 20%)</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <PricingTier name="Starter" price="$29" period="/month" features={["100 leads/month", "Basic filters"]} />
              <PricingTier name="Growth" price="$79" period="/month" features={["500 leads/month", "Advanced filters", "CRM export"]} highlight />
              <PricingTier name="Pro" price="$199" period="/month" features={["Unlimited leads", "API access", "Priority support"]} />
            </div>
          </div>

          {/* AI Chatbot Setup */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-2 font-heading">AI Chatbot Setup</h2>
            <p className="text-sm text-muted-foreground mb-6">Ongoing maintenance available from $99/month</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <PricingTier name="Basic Bot" price="$499" period=" one-time" features={["Single-channel chatbot", "FAQ handling"]} />
              <PricingTier name="Advanced Bot" price="$999" period=" one-time" features={["Multi-channel", "Appointment booking", "CRM integration"]} highlight />
            </div>
          </div>

          {/* Workflow Automation */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">Workflow Automation</h2>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-muted-foreground mb-2">Custom pricing based on scope. Starting from <span className="text-foreground font-semibold">$299</span> for simple automations.</p>
              <p className="text-muted-foreground">Monthly retainer packages available for ongoing automation management.</p>
            </div>
          </div>

          {/* AI Consulting */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">AI Consulting</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <PricingTier name="Discovery Session" price="$149" period=" (90 min)" features={["One-time strategic session"]} />
              <PricingTier name="Monthly Advisory" price="$499" period="/month" features={["Ongoing AI strategy support"]} />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <p className="text-muted-foreground text-sm">
              All prices in USD. Payments processed securely via Paddle. Contact{' '}
              <a href="mailto:support@heyflou.com" className="text-hf-teal hover:underline">support@heyflou.com</a> for custom quotes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
