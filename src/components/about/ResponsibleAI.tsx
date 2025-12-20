import { useTranslation } from '@/i18n';

export function ResponsibleAI() {
  const t = useTranslation();
  
  const policies = [
    t.about.security1,
    t.about.security2,
    t.about.security3,
    t.about.security4
  ];

  return (
    <section className="py-20 md:py-28 bg-background transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            {t.about.securityTitle}
          </h2>
        </div>
        
        <div className="bg-card rounded-2xl p-8 hf-shadow border border-border/50 transition-colors duration-300">
          <div className="space-y-4">
            {policies.map((policy, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full hf-gradient flex-shrink-0 mt-2"></div>
                <p className="text-muted-foreground leading-relaxed">{policy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}