import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';

export default function Resources() {
  return (
    <>
      <SEOHead 
        title="AI Insights & Resources | HeyFlou"
        description="Latest insights, guides, and resources on AI automation for small and medium businesses."
        canonical="https://heyflou.com/resources"
      />
      
      <main className="pt-16">
        <Section background="glow" padding="large">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-hf-ink mb-6">
              AI Insights & Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Coming soon: guides, case studies, and insights on AI automation for SMBs.
            </p>
          </div>
        </Section>
      </main>
    </>
  );
}