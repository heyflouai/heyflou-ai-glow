import { SEOHead } from '@/components/ui/seo-head';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Terms of Service | HeyFlou"
        description="HeyFlou's Terms of Service — the rules governing your use of our AI-powered products and services."
        noIndex={false}
      />

      <section className="bg-background py-16 md:py-24 lg:py-32 min-h-screen">
        <div className="mx-auto max-w-[780px] px-5 md:px-6">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-hf-teal transition-colors mb-10 text-sm group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>

          {/* Title */}
          <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm mb-12">
            Last updated: March 17, 2026
          </p>

          {/* Content */}
          <div className="space-y-10 text-foreground/90 leading-relaxed text-[15px] md:text-base">
            <p>
              Welcome to HeyFlou. These Terms of Service ("Terms") govern your access to and use of the products, services, and websites provided by HeyFlou ("we," "us," or "our"). By accessing or using our Services, you agree to be bound by these Terms.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                1. Services Overview
              </h2>
              <p>
                HeyFlou provides AI-powered SaaS products, consulting, and automation solutions for businesses, including lead generation tools, AI chatbots, workflow automation, and tax compliance platforms. Services are offered through subscriptions or one-time engagements.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                2. Eligibility
              </h2>
              <p>
                You must be at least 18 years old and have legal capacity to enter into a binding agreement.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                3. Account Registration
              </h2>
              <p>
                You agree to provide accurate information, keep credentials secure, and notify us of unauthorized use.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                4. Subscriptions and Payments
              </h2>
              <p>
                Fees are billed in advance (monthly or annually). Payments are processed via Paddle. We may adjust pricing with 30 days' notice. All fees are exclusive of taxes.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                5. Refund Policy
              </h2>
              <p>
                Refunds may be requested within 14 days of purchase or renewal by emailing{' '}
                <a href="mailto:support@heyflou.com" className="text-hf-teal hover:underline">support@heyflou.com</a>.
                Custom consulting and delivered one-time services are non-refundable.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                6. Acceptable Use
              </h2>
              <p>
                Do not violate laws, infringe IP, transmit malicious code, or resell access without consent.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                7. Intellectual Property
              </h2>
              <p>
                All content and features are property of HeyFlou. You retain ownership of your uploaded data.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                8. Data and Privacy
              </h2>
              <p>
                Use is governed by our{' '}
                <Link to="/privacy-policy" className="text-hf-teal hover:underline">Privacy Policy</Link>.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                9. Service Availability
              </h2>
              <p>
                We do not guarantee uninterrupted operation and may modify or discontinue services with reasonable notice.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                10. Limitation of Liability
              </h2>
              <p>
                HeyFlou is not liable for indirect or consequential damages. Total liability is capped at 12 months of fees paid.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                11. Disclaimer of Warranties
              </h2>
              <p>
                Services are provided "as is" without warranties.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                12. Termination
              </h2>
              <p>
                You may cancel anytime. We may suspend access for violations.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                13. Governing Law
              </h2>
              <p>
                Governed by laws of the State of Israel, disputes resolved in Tel Aviv courts.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                14. Changes
              </h2>
              <p>
                We may update these Terms and will revise the "Last updated" date.
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                15. Contact
              </h2>
              <p>
                <a href="mailto:support@heyflou.com" className="text-hf-teal hover:underline">support@heyflou.com</a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
