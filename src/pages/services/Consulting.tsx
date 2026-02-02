import { SEOHead } from '@/components/ui/seo-head';
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
        title="AI Strategy & Consulting | Expert Guidance for AI Transformation"
        description="Expert AI consulting services to navigate your business transformation. AI readiness assessments, strategy development, vendor selection, and implementation planning."
        canonical={getCanonicalUrl('/services/consulting')}
      />
      
      <main className="pt-16">
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
