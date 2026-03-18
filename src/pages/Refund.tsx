import { SEOHead } from '@/components/ui/seo-head';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const sections = [
  {
    title: 'Subscription Services',
    body: 'Subscription services (lead generation, monthly retainers): You may request a full refund within 14 days of your initial purchase or any renewal. Refund requests must be sent to support@heyflou.com. After 14 days, no refunds will be issued for the current billing period, but you may cancel to prevent future charges.',
  },
  {
    title: 'One-Time Services',
    body: 'One-time services (chatbot setup, workflow automation, consulting sessions): One-time services that have already been delivered or where work has substantially begun are non-refundable. If work has not yet started, you may request a full refund within 7 days of payment.',
  },
  {
    title: 'How to Request a Refund',
    body: 'Email support@heyflou.com with your name, the service purchased, date of purchase, and reason for the refund request. We will respond within 3 business days.',
  },
  {
    title: 'Refund Method',
    body: 'Approved refunds will be processed through the original payment method via Paddle. Please allow 5–10 business days for the refund to appear on your statement.',
  },
];

const Refund = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEOHead
        title="Refund Policy | HeyFlou"
        description="HeyFlou's Refund Policy — learn about our refund terms for subscriptions and one-time services."
      />
      <section className="bg-background py-16 md:py-24 lg:py-32 min-h-screen">
        <div className="mx-auto max-w-[780px] px-5 md:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-hf-teal transition-colors mb-10 text-sm group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 font-heading">Refund Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 17, 2026</p>

          <p className="text-muted-foreground leading-relaxed mb-10">
            At HeyFlou, we want you to be fully satisfied with your purchase. If you are not happy with our services, the following refund terms apply:
          </p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-semibold text-foreground mb-3 font-heading">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              Contact us at{' '}
              <a href="mailto:support@heyflou.com" className="text-hf-teal hover:underline">support@heyflou.com</a>{' '}
              with any questions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Refund;
