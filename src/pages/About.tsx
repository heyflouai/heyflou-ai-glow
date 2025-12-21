import { SEOHead } from '@/components/ui/seo-head';
import { AboutHero } from '@/components/about/AboutHero';
import { MissionPillars } from '@/components/about/MissionPillars';
import { Timeline90Day } from '@/components/about/Timeline90Day';
import { ImpactSnapshot } from '@/components/about/ImpactSnapshot';
import { IntegrationsWall } from '@/components/about/IntegrationsWall';
import { TeamSnapshot } from '@/components/about/TeamSnapshot';
import { ResponsibleAI } from '@/components/about/ResponsibleAI';
import { CTAWithForm } from '@/components/about/CTAWithForm';
import { PAGE_SEO, getCanonicalUrl } from '@/lib/seo-config';

export default function About() {
  return (
    <>
      <SEOHead 
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        canonical={getCanonicalUrl(PAGE_SEO.about.path)}
      />
      
      <main>
        <AboutHero />
        <MissionPillars />
        <Timeline90Day />
        <ImpactSnapshot />
        <IntegrationsWall />
        <TeamSnapshot />
        <ResponsibleAI />
        <CTAWithForm />
      </main>
    </>
  );
}