import { Users, Shield, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/i18n';

export function MissionPillars() {
  const t = useTranslation();
  
  const pillars = [{
    icon: Users,
    title: t.about.pillar1Title,
    description: t.about.pillar1Desc,
    color: 'text-hf-teal'
  }, {
    icon: Shield,
    title: t.about.pillar2Title,
    description: t.about.pillar2Desc,
    color: 'text-hf-purple'
  }, {
    icon: TrendingUp,
    title: t.about.pillar3Title,
    description: t.about.pillar3Desc,
    color: 'text-hf-sky'
  }, {
    icon: Zap,
    title: t.about.pillar4Title,
    description: t.about.pillar4Desc,
    color: 'text-primary'
  }];

  return (
    <section className="py-20 md:py-28 bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            {t.about.pillarsTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={index} 
                className="text-center p-6 hf-shadow rounded-2xl border border-border/50 bg-card transition-colors duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full bg-muted ${pillar.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-display text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}