import { SEOHead } from '@/components/ui/seo-head';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const sections = [
  { title: 'Services Overview', body: 'HeyFlou provides AI-powered SaaS products, consulting, and automation solutions for businesses, including lead generation, AI chatbots, workflow automation, and tax compliance platforms. Services are offered through subscriptions or one-time engagements.' },
  { title: 'Eligibility', body: 'You must be at least 18 years old and have legal capacity to enter into a binding agreement. If using on behalf of a business, you represent authority to bind that entity.' },
  { title: 'Account Registration', body: 'You agree to provide accurate information, keep credentials secure, and notify us of unauthorized use.' },
  { title: 'Subscriptions and Payments', body: 'Fees are billed in advance (monthly or annually). Payments are processed via Paddle. We may adjust pricing with 30 days\' notice. All fees are exclusive of taxes.' },
  { title: 'Refund Policy', body: 'Refunds may be requested within 14 days of purchase or renewal by emailing support@heyflou.com. Custom consulting and delivered one-time services are non-refundable.' },
  { title: 'Acceptable Use', body: 'Do not violate laws, infringe IP, transmit malicious code, attempt unauthorized access, or resell access without consent.' },
  { title: 'Intellectual Property', body: 'All content and features are property of HeyFlou. You retain ownership of your uploaded data.' },
  { title: 'Data and Privacy', body: 'Use is governed by our Privacy Policy.' },
  { title: 'Service Availability', body: 'We do not guarantee uninterrupted operation and may modify or discontinue services with reasonable notice.' },
  { title: 'Limitation of Liability', body: 'HeyFlou is not liable for indirect or consequential damages. Total liability is capped at 12 months of fees paid.' },
  { title: 'Disclaimer of Warranties', body: 'Services are provided "as is" without warranties of any kind.' },
  { title: 'Termination', body: 'You may cancel anytime. We may suspend access for violations.' },
  { title: 'Governing Law', body: 'Governed by laws of the State of Israel, disputes resolved in Tel Aviv courts.' },
  { title: 'Changes', body: 'We may update these Terms and will revise the "Last updated" date.' },
  { title: 'Contact', body: 'support@heyflou.com', isEmail: true },
];

const Terms = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEOHead
        title="Terms of Service | HeyFlou"
        description="HeyFlou's Terms of Service — the rules governing your use of our AI-powered products and services."
      />
      <section className="bg-background py-16 md:py-24 lg:py-32 min-h-screen">
        <div className="mx-auto max-w-[780px] px-5 md:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-hf-teal transition-colors mb-10 text-sm group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 font-heading">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 17, 2026</p>

          <p className="text-muted-foreground leading-relaxed mb-10">
            Welcome to HeyFlou. These Terms of Service ("Terms") govern your access to and use of the products, services, and websites provided by HeyFlou ("we," "us," or "our"). By accessing or using our Services, you agree to be bound by these Terms.
          </p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-semibold text-foreground mb-3 font-heading">{s.title}</h2>
                {s.isEmail ? (
                  <a href="mailto:support@heyflou.com" className="text-hf-teal hover:underline">{s.body}</a>
                ) : (
                  <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
