import { SEOHead } from '@/components/ui/seo-head';
import { IndustrySwitcher } from '@/components/ui/industry-switcher';
import { FitnessHero } from '@/components/fitness-education/FitnessHero';
import { FitnessProblem } from '@/components/fitness-education/FitnessProblem';
import { FitnessSolution } from '@/components/fitness-education/FitnessSolution';
import { FitnessIntegrations } from '@/components/fitness-education/FitnessIntegrations';
import { FitnessCTA } from '@/components/fitness-education/FitnessCTA';
import { FitnessContactForm } from '@/components/fitness-education/FitnessContactForm';
import { getCanonicalUrl } from '@/lib/seo-config';

export default function FitnessEducation() {
  return (
    <>
      <SEOHead 
        title="AI Automation for Fitness & Education | HeyFlou"
        description="AI automation for gyms, studios, personal trainers, tutors and private schools. Automate class bookings, memberships, onboarding and more."
        canonical={getCanonicalUrl('/services/fitness-education')}
      />
      
      <main>
        <IndustrySwitcher />
        <FitnessHero />
        <FitnessProblem />
        <FitnessSolution />
        <FitnessIntegrations />
        <FitnessCTA />
        <FitnessContactForm />
      </main>
    </>
  );
}
