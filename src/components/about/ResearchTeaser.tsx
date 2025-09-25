import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';

export function ResearchTeaser() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-6">
          Research
        </h2>
        <h3 className="text-xl font-bold font-display text-hf-navy mb-4">
          Our SMB AI Analysis (2024–2025)
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
          We analyzed 200+ SMB automation projects to identify the patterns, pitfalls, and ROI drivers 
          that separate successful AI implementations from expensive experiments. Our research covers 
          deployment timelines, team adoption rates, and measurable business outcomes across industries.
        </p>
        <GradientButton variant="ghost" size="lg" asChild>
          <Link to="/case-studies?tag=research">
            See highlights
          </Link>
        </GradientButton>
      </div>
    </section>
  );
}