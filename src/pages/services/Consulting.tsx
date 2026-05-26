import { SEOHead } from '@/components/ui/seo-head';
import { IndustrySwitcher } from '@/components/ui/industry-switcher';
import { ConsultingHero } from '@/components/consulting/ConsultingHero';
import { ConsultingChallenge } from '@/components/consulting/ConsultingChallenge';
import { ConsultingServices } from '@/components/consulting/ConsultingServices';
import { ConsultingTechnologies } from '@/components/consulting/ConsultingTechnologies';
import { ConsultingAudience } from '@/components/consulting/ConsultingAudience';
import { ConsultingCTA } from '@/components/consulting/ConsultingCTA';
import { ConsultingContactForm } from '@/components/consulting/ConsultingContactForm';
import { getCanonicalUrl } from '@/lib/seo-config';

export default function Consulting() {
  return (
    <>
      <SEOHead 
        title="AI Strategy & Consulting | HeyFlou"
        description="Expert AI consulting to navigate your transformation: readiness assessments, strategy, vendor selection, and implementation planning for SMBs."
        canonical={getCanonicalUrl('/services/consulting')}
      />
      
      <main>
        <IndustrySwitcher />
        <ConsultingHero />
        <ConsultingChallenge />
        <ConsultingServices />
        <ConsultingTechnologies />
        <ConsultingAudience />
        <ConsultingCTA />
        <ConsultingContactForm />
      </main>
    </>
  );
}
