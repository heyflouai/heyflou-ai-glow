import { Search, Zap, TestTube, TrendingUp } from 'lucide-react';
import { useTranslation } from '@/i18n';

export function Timeline90Day() {
  const t = useTranslation();
  
  const steps = [{
    icon: Search,
    title: t.about.timeline1Title,
    subtitle: t.about.timeline1Subtitle,
    description: t.about.timeline1Desc,
    color: 'text-hf-teal'
  }, {
    icon: Zap,
    title: t.about.timeline2Title,
    subtitle: t.about.timeline2Subtitle,
    description: t.about.timeline2Desc,
    color: 'text-hf-purple'
  }, {
    icon: TestTube,
    title: t.about.timeline3Title,
    subtitle: t.about.timeline3Subtitle,
    description: t.about.timeline3Desc,
    color: 'text-hf-sky'
  }, {
    icon: TrendingUp,
    title: t.about.timeline4Title,
    subtitle: t.about.timeline4Subtitle,
    description: t.about.timeline4Desc,
    color: 'text-primary'
  }];

  return (
    <section className="py-20 md:py-28 bg-surface-secondary transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            {t.about.timelineTitle}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="h-full flex flex-col bg-card rounded-2xl p-6 hf-shadow border border-border/50
                  group-hover:-translate-y-1 group-hover:shadow-lg
                  transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-full bg-muted ${step.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-muted mb-3 ${step.color}`}>
                    {step.subtitle}
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}