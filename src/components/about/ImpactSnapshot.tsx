import { useTranslation } from '@/i18n';

export function ImpactSnapshot() {
  const t = useTranslation();
  
  const metrics = [
    t.about.impact1,
    t.about.impact2,
    t.about.impact3
  ];

  return (
    <section className="py-20 md:py-28 bg-surface-secondary transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-8">
          {t.about.impactTitle}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="inline-block px-6 py-3 bg-card rounded-full hf-shadow text-foreground font-medium border border-border/50 transition-colors duration-300"
            >
              {metric}
            </div>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground italic">
          {t.about.impactDisclaimer}
        </p>
      </div>
    </section>
  );
}