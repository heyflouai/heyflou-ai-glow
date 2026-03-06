import { SEOHead } from '@/components/ui/seo-head';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Privacy Policy | HeyFlou"
        description="HeyFlou's Privacy Policy — how we collect, use, store, and protect your personal information."
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm mb-12">
            Last updated: March 6, 2026
          </p>

          {/* Content */}
          <div className="space-y-10 text-foreground/90 leading-relaxed text-[15px] md:text-base">
            <p>
              HeyFlou ("we", "our", or "us") is committed to protecting the privacy of our clients, website visitors, and users of our automation services. This Privacy Policy explains how we collect, use, store, and protect your personal information.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                1. Who We Are
              </h2>
              <p className="mb-3">
                HeyFlou is an AI automation and consulting firm that helps small and medium-sized businesses (SMBs) streamline operations through intelligent automation. Our services include business process automation, AI-powered communication tools, CRM integrations, scheduling systems, and custom AI solutions.
              </p>
              <p className="mb-3">
                We operate primarily in Mexico and serve clients across healthcare, fitness, education, and other service-based industries.
              </p>
              <p>
                <strong className="text-foreground">Contact:</strong>{' '}
                <a href="mailto:hello@heyflou.com" className="text-hf-teal hover:underline">hello@heyflou.com</a>
                {' | '}
                <a href="https://heyflou.com" className="text-hf-teal hover:underline" target="_blank" rel="noopener noreferrer">https://heyflou.com</a>
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Contact Information:</strong> Name, email address, phone number, and business name provided via contact forms, email, or WhatsApp.</li>
                <li><strong className="text-foreground">Business Information:</strong> Industry, size, and operational details shared during discovery calls or onboarding.</li>
                <li><strong className="text-foreground">Client Data:</strong> Information you provide to configure your automations (e.g., appointment details, customer lists, scheduling preferences).</li>
                <li><strong className="text-foreground">Usage Data:</strong> Analytics on how visitors interact with our website (pages visited, time on site, referring pages).</li>
                <li><strong className="text-foreground">Communications:</strong> Messages exchanged via email, WhatsApp, or Telegram for support and project delivery.</li>
                <li><strong className="text-foreground">Social Media Data:</strong> Public metrics and engagement data from social media platforms (Instagram, LinkedIn, X/Twitter) when authorized by you.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Deliver and maintain our automation services and AI solutions</li>
                <li>Communicate with you about your project, proposals, and support requests</li>
                <li>Manage client relationships and project workflows</li>
                <li>Send relevant updates about our services (with your consent)</li>
                <li>Improve our website, products, and service quality</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Analyze social media performance metrics on behalf of clients who authorize access</li>
                <li>Publish content on social media platforms on behalf of clients who explicitly authorize each action</li>
              </ul>
              <blockquote className="border-l-2 border-hf-teal pl-4 py-2 text-muted-foreground italic">
                <strong className="text-foreground not-italic">Social Media Posting:</strong> HeyFlou will never post, comment, or take action on any social media account without explicit prior approval from the account owner. All content is reviewed and authorized before publication.
              </blockquote>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                4. Third-Party Services
              </h2>
              <p className="mb-3">To deliver our services, we use the following third-party platforms. Each has its own privacy policy:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong className="text-foreground">Supabase</strong> — Database and backend infrastructure</li>
                <li><strong className="text-foreground">n8n</strong> — Workflow automation platform</li>
                <li><strong className="text-foreground">Meta (Instagram / Facebook)</strong> — Social media analytics and content management</li>
                <li><strong className="text-foreground">LinkedIn</strong> — Professional network analytics and content publishing</li>
                <li><strong className="text-foreground">X / Twitter</strong> — Social media content publishing and analytics</li>
                <li><strong className="text-foreground">WhatsApp Business API</strong> — Client communication automation</li>
                <li><strong className="text-foreground">Resend</strong> — Transactional email delivery</li>
                <li><strong className="text-foreground">Cloudflare</strong> — Website hosting and security</li>
                <li><strong className="text-foreground">Vercel</strong> — Application hosting</li>
                <li><strong className="text-foreground">HubSpot</strong> — Customer relationship management</li>
              </ul>
              <p>We only share your data with third parties as necessary to deliver the services you have contracted. We do not sell your personal information to anyone.</p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                5. Data Retention
              </h2>
              <p className="mb-3">
                We retain your personal information for as long as necessary to provide our services and fulfill our contractual obligations, or as required by law. When a client relationship ends, we delete or anonymize personal data within 90 days unless legal requirements mandate longer retention.
              </p>
              <p>Social media access tokens are stored securely and revoked immediately upon client request or end of service.</p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                6. Data Security
              </h2>
              <p className="mb-3">We implement appropriate technical and organizational security measures including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encrypted storage for all credentials and API tokens</li>
                <li>Role-based access controls — only authorized personnel access client data</li>
                <li>Secure HTTPS connections for all data transmission</li>
                <li>Regular security audits of our internal systems</li>
                <li>No hardcoded credentials in source code or public repositories</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                7. Your Rights (ARCO Rights — Mexican Law)
              </h2>
              <p className="mb-3">
                In accordance with Mexico's <em>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</em> (LFPDPPP), you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong className="text-foreground">Access (Acceso):</strong> Request a copy of the personal data we hold about you</li>
                <li><strong className="text-foreground">Rectification (Rectificación):</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong className="text-foreground">Cancellation (Cancelación):</strong> Request deletion of your personal data</li>
                <li><strong className="text-foreground">Opposition (Oposición):</strong> Object to the processing of your personal data</li>
              </ul>
              <p>
                To exercise these rights, email us at{' '}
                <a href="mailto:hello@heyflou.com" className="text-hf-teal hover:underline font-semibold">hello@heyflou.com</a>
                {' '}with the subject "ARCO Request". We will respond within 20 business days.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                8. Cookies and Tracking
              </h2>
              <p className="mb-3">
                Our website uses minimal cookies for essential functionality (e.g., session management) and analytics (page views, traffic sources). We use privacy-respecting analytics and do not track users across third-party websites.
              </p>
              <p>You can disable cookies through your browser settings. Disabling essential cookies may affect website functionality.</p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                9. International Data Transfers
              </h2>
              <p>
                As we use cloud-based infrastructure, your data may be processed on servers located outside Mexico, including the United States and the European Union. Where we transfer data internationally, we ensure appropriate safeguards are in place consistent with applicable privacy laws.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                10. Children's Privacy
              </h2>
              <p>
                Our services are intended for businesses and adults (18+). We do not knowingly collect personal information from individuals under 18 years of age.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                11. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify clients of material changes via email or by posting a notice on our website. The "Last Updated" date at the top of this page indicates when the policy was last revised. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="font-plus-jakarta text-xl md:text-2xl font-semibold text-foreground mb-4">
                12. Contact Us
              </h2>
              <p className="mb-3">For any privacy-related questions, data requests, or concerns, please contact us:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong className="text-foreground">Email:</strong>{' '}<a href="mailto:hello@heyflou.com" className="text-hf-teal hover:underline">hello@heyflou.com</a></li>
                <li><strong className="text-foreground">Website:</strong>{' '}<a href="https://heyflou.com" className="text-hf-teal hover:underline" target="_blank" rel="noopener noreferrer">https://heyflou.com</a></li>
                <li><strong className="text-foreground">WhatsApp:</strong> Available via our website contact form</li>
              </ul>
              <p className="text-muted-foreground italic text-sm mt-8">
                HeyFlou · AI Automation & Consulting · Mexico
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
