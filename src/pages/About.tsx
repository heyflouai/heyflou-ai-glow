import { SEOHead } from '@/components/ui/seo-head';
import { AboutHero } from '@/components/about/AboutHero';
import { MissionPillars } from '@/components/about/MissionPillars';
import { Timeline90Day } from '@/components/about/Timeline90Day';
import { HeyFlouPlaybook } from '@/components/about/HeyFlouPlaybook';
import { ImpactSnapshot } from '@/components/about/ImpactSnapshot';
import { IntegrationsWall } from '@/components/about/IntegrationsWall';
import { TeamSnapshot } from '@/components/about/TeamSnapshot';
import { ResponsibleAI } from '@/components/about/ResponsibleAI';
import { ResearchTeaser } from '@/components/about/ResearchTeaser';
import { CTAWithForm } from '@/components/about/CTAWithForm';

export default function About() {
  return (
    <>
      <SEOHead 
        title="HeyFlou | About" 
        description="Learn how HeyFlou helps SMBs automate with AI—human-in-the-loop, secure-by-design, measurable ROI." 
        canonical="https://heyflou.com/about" 
      />
      
      <main>
        <AboutHero />
        <MissionPillars />
        <Timeline90Day />
        <HeyFlouPlaybook />
        <ImpactSnapshot />
        <IntegrationsWall />
        <TeamSnapshot />
        <ResponsibleAI />
        <ResearchTeaser />
        <CTAWithForm />
      </main>
    </>
  );
}