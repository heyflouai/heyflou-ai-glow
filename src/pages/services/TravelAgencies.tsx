import { SEOHead } from '@/components/ui/seo-head';
import { IndustrySwitcher } from '@/components/ui/industry-switcher';
import { TravelHero } from '@/components/travel-agencies/TravelHero';
import { TravelComingSoon } from '@/components/travel-agencies/TravelComingSoon';
import { TravelEarlyAccess } from '@/components/travel-agencies/TravelEarlyAccess';
import { TravelCTA } from '@/components/travel-agencies/TravelCTA';
import { getCanonicalUrl, buildServiceSchema } from '@/lib/seo-config';

export default function TravelAgencies() {
  const serviceSchema = buildServiceSchema({
    name: 'HeyFlou for Travel Agencies',
    description:
      'AI automation for travel agencies, tour operators, and travel professionals — quote automation, itinerary follow-up, and lead management.',
    path: '/services/travel-agencies',
    serviceType: 'AI Automation for Travel Agencies',
    audienceType: 'Travel agencies, tour operators, travel professionals',
  });
  return (
    <>
      <SEOHead 
        title="HeyFlou for Travel Agencies | AI Automation - Coming Soon"
        description="AI automation solutions for travel agencies, tour operators, and travel professionals. Coming soon - join the waitlist for early access."
        canonical={getCanonicalUrl('/services/travel-agencies')}
        jsonLd={serviceSchema}
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
