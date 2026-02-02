import { SEOHead } from '@/components/ui/seo-head';
import { IndustrySwitcher } from '@/components/ui/industry-switcher';
import { HealthcareHero } from '@/components/healthcare/HealthcareHero';
import { HealthcareProblem } from '@/components/healthcare/HealthcareProblem';
import { HealthcareSolution } from '@/components/healthcare/HealthcareSolution';
import { HealthcareIntegrations } from '@/components/healthcare/HealthcareIntegrations';
import { HealthcareCTA } from '@/components/healthcare/HealthcareCTA';
import { HealthcareContactForm } from '@/components/healthcare/HealthcareContactForm';
import { getCanonicalUrl } from '@/lib/seo-config';

export default function Healthcare() {
  return (
    <>
      <SEOHead 
        title="HeyFlou for Healthcare | AI Automation for Medical Practices"
        description="AI automation solutions for therapists, psychologists, physical therapists & private clinics. Automate appointments, intake forms, follow-ups and more."
        canonical={getCanonicalUrl('/services/healthcare')}
      />
      
      <main className="pt-16">
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
