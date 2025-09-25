import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <SEOHead 
        title="About HeyFlou - AI Consulting Mission & Values"
        description="Learn about HeyFlou's mission to help SMBs thrive with AI automation. Business-first, human-in-the-loop, secure-by-design approach."
        canonical="https://heyflou.com/about"
      />
      
      <main className="pt-16">
        <Section background="glow" padding="large">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-hf-ink mb-6">
              About HeyFlou
            </h1>
            <p className="text-xl text-muted-foreground">
              We help SMBs thrive in the AI era with business-first, human-in-the-loop automation solutions.
            </p>
          </div>
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <h3 className="text-xl font-bold font-display text-hf-ink mb-4">
                  Business-First
                </h3>
                <p className="text-muted-foreground">
                  We prioritize ROI and practical outcomes over flashy technology, ensuring every AI implementation drives real business value.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold font-display text-hf-ink mb-4">
                  Human-in-the-Loop
                </h3>
                <p className="text-muted-foreground">
                  AI augments your team, never replaces them. We design systems with appropriate oversight and human decision points.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold font-display text-hf-ink mb-4">
                  Secure-by-Design
                </h3>
                <p className="text-muted-foreground">
                  Data security and privacy are built into every solution, following best practices and compliance requirements.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold font-display text-hf-ink mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how AI can help your business operate more efficiently and profitably.
              </p>
              <GradientButton variant="primary" size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </GradientButton>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}