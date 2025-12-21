import { SEOHead } from '@/components/ui/seo-head';
import { AboutHero } from '@/components/about/AboutHero';
import { MissionPillars } from '@/components/about/MissionPillars';
import { Timeline90Day } from '@/components/about/Timeline90Day';
import { ImpactSnapshot } from '@/components/about/ImpactSnapshot';
import { IntegrationsWall } from '@/components/about/IntegrationsWall';
import { TeamSnapshot } from '@/components/about/TeamSnapshot';
import { ResponsibleAI } from '@/components/about/ResponsibleAI';
import { CTAWithForm } from '@/components/about/CTAWithForm';

export default function About() {
  return (
    <>
      <SEOHead 
        title="About HeyFlou | AI Consulting for SMB Workflow Automation" 
        description="Learn how HeyFlou helps small and medium businesses save time and get more clients with proven AI workflow automation." 
        canonical="https://heyflou.com/about" 
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