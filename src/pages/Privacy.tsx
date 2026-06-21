import { SEOHead } from '@/components/ui/seo-head';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const sections = [
  {
    title: 'Information We Collect',
    items: [
      'Account information: name, email address, company name, phone number.',
      'Billing information: payment details processed securely by Paddle (we do not store credit card numbers).',
      'Usage data: pages visited, features used, device and browser information, IP address.',
      'Communications: messages, support requests, and feedback you send us.',
    ],
  },
  {
    title: 'How We Use Your Information',
    items: [
      'To provide and improve our services.',
      'To process payments and send billing-related communications.',
      'To respond to support requests and communicate with you.',
      'To send product updates and marketing communications (you can opt out at any time).',
      'To comply with legal obligations.',
    ],
  },
  {
    title: 'Data Sharing',
    body: 'We do not sell your personal information. We share data only with trusted service providers necessary to operate our services (payment processing via Paddle, hosting, analytics) and when required by law.',
  },
  {
    title: 'Data Security',
    body: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.',
  },
  {
    title: 'Data Retention',
    body: 'We retain your personal data for as long as your account is active or as needed to provide services, comply with legal obligations, and resolve disputes.',
  },
  {
    title: 'Your Rights',
    body: 'You may request access to, correction of, or deletion of your personal data by contacting us at support@heyflou.com. We will respond within 30 days.',
  },
  {
    title: 'Cookies',
    body: 'Our website uses cookies for functionality and analytics. You can manage cookie preferences through your browser settings.',
  },
  {
    title: 'Children',
    body: 'Our services are not intended for individuals under 18 years of age.',
  },
  {
    title: 'Changes',
    body: 'We may update this policy from time to time. Changes will be posted on this page with an updated date.',
  },
  {
    title: 'Contact',
    body: 'support@heyflou.com',
    isEmail: true,
  },
];

const Privacy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEOHead
        title="Privacy Policy | HeyFlou"
        description="HeyFlou's Privacy Policy — how we collect, use, and protect your personal information."
        canonical="https://heyflou.com/privacy"
      />
      <section className="bg-background py-16 md:py-24 lg:py-32 min-h-screen">
        <div className="mx-auto max-w-[780px] px-5 md:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-hf-teal transition-colors mb-10 text-sm group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 font-heading">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 17, 2026</p>

          <p className="text-muted-foreground leading-relaxed mb-10">
            HeyFlou ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
          </p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-semibold text-foreground mb-3 font-heading">{s.title}</h2>
                {'items' in s && s.items ? (
                  <ul className="space-y-2">
                    {s.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-hf-teal/30">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : s.isEmail ? (
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

export default Privacy;
