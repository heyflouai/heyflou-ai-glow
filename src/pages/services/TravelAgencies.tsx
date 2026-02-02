import { SEOHead } from '@/components/ui/seo-head';
import { IndustrySwitcher } from '@/components/ui/industry-switcher';
import { TravelHero } from '@/components/travel-agencies/TravelHero';
import { TravelComingSoon } from '@/components/travel-agencies/TravelComingSoon';
import { TravelEarlyAccess } from '@/components/travel-agencies/TravelEarlyAccess';
import { TravelCTA } from '@/components/travel-agencies/TravelCTA';
import { getCanonicalUrl } from '@/lib/seo-config';

export default function TravelAgencies() {
  return (
    <>
      <SEOHead 
        title="HeyFlou for Travel Agencies | AI Automation - Coming Soon"
        description="AI automation solutions for travel agencies, tour operators, and travel professionals. Coming soon - join the waitlist for early access."
        canonical={getCanonicalUrl('/services/travel-agencies')}
      />
      
      <main>
        <IndustrySwitcher />
        <TravelHero />
        <TravelComingSoon />
        <TravelEarlyAccess />
        <TravelCTA />
      </main>
    </>
  );
}
