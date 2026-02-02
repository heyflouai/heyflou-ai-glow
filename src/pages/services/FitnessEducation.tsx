import { SEOHead } from '@/components/ui/seo-head';
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
        title="HeyFlou for Fitness & Education | AI Automation for Gyms, Studios & Schools"
        description="AI automation solutions for gyms, studios, personal trainers, tutors & private schools. Automate class bookings, memberships, onboarding and more."
        canonical={getCanonicalUrl('/services/fitness-education')}
      />
      
      <main className="pt-16">
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
