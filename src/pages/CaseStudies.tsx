import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { caseStudies } from '@/data/cases';

export default function CaseStudies() {
  return (
    <>
      <SEOHead 
        title="Success Stories - Therapists & Service Professionals | HeyFlou"
        description="Real results from therapy practices and service businesses using AI automation to save time and get more clients."
        canonical="https://heyflou.com/case-studies"
      />
      
      <main className="pt-16">
        <Section background="glow" padding="large">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-hf-ink mb-6">
              Real Results from Real Practices
            </h1>
            <p className="text-xl text-muted-foreground">
              See how therapists and service professionals are saving time and growing with AI automation.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-card rounded-xl p-8 hf-shadow hover:hf-shadow-lg transition-all duration-300">
                <div className="text-sm text-hf-teal font-medium mb-2">
                  {caseStudy.industry} • {caseStudy.useCase}
                </div>
                <h2 className="text-xl font-bold font-display text-hf-ink mb-4">
                  {caseStudy.title}
                </h2>
                <div className="space-y-4 text-sm text-muted-foreground mb-6">
                  <div>
                    <strong className="text-hf-ink">Challenge:</strong> {caseStudy.challenge}
                  </div>
                  <div>
                    <strong className="text-hf-ink">Solution:</strong> {caseStudy.solution}
                  </div>
                  <div>
                    <strong className="text-hf-ink">Outcome:</strong> {caseStudy.outcome}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex space-x-4">
                    <div>
                      <div className="text-lg font-bold text-hf-teal">
                        {caseStudy.metrics.primary}
                      </div>
                      {caseStudy.metrics.secondary && (
                        <div className="text-sm text-muted-foreground">
                          {caseStudy.metrics.secondary}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-muted rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}