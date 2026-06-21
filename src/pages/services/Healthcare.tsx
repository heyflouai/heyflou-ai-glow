import { SEOHead } from '@/components/ui/seo-head';
import { IndustrySwitcher } from '@/components/ui/industry-switcher';
import { HealthcareHero } from '@/components/healthcare/HealthcareHero';
import { HealthcareProblem } from '@/components/healthcare/HealthcareProblem';
import { HealthcareSolution } from '@/components/healthcare/HealthcareSolution';
import { HealthcareIntegrations } from '@/components/healthcare/HealthcareIntegrations';
import { HealthcareCTA } from '@/components/healthcare/HealthcareCTA';
import { HealthcareContactForm } from '@/components/healthcare/HealthcareContactForm';
import { getCanonicalUrl } from '@/lib/seo-config';
import { buildServiceSchema } from '@/lib/seo-config';

export default function Healthcare() {
  const serviceSchema = buildServiceSchema({
    name: 'HeyFlou for Healthcare',
    description:
      'AI automation solutions for therapists, psychologists, physical therapists and private clinics. Automate appointments, intake forms, reminders, and follow-ups.',
    path: '/services/healthcare',
    serviceType: 'AI Automation for Healthcare Practices',
    audienceType: 'Healthcare practices, therapists, psychologists, physical therapists, private clinics',
  });
  return (
    <>
      <SEOHead 
        title="HeyFlou for Healthcare | AI Automation for Medical Practices"
        description="AI automation solutions for therapists, psychologists, physical therapists & private clinics. Automate appointments, intake forms, follow-ups and more."
        canonical={getCanonicalUrl('/services/healthcare')}
        jsonLd={serviceSchema}
      />
      
      <main>
        <IndustrySwitcher />
        <HealthcareHero />
        <HealthcareProblem />
        <HealthcareSolution />
        <HealthcareIntegrations />
        <HealthcareCTA />
        <HealthcareContactForm />
      </main>
    </>
  );
}
