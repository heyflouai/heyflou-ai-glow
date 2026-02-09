import { Target, Clock, TrendingUp, Puzzle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/i18n';

export function MissionPillars() {
  const t = useTranslation();
  
  const pillars = [{
    icon: Target,
    title: t.about.pillar1Title,
    description: t.about.pillar1Desc,
    color: 'text-hf-teal'
  }, {
    icon: Clock,
    title: t.about.pillar2Title,
    description: t.about.pillar2Desc,
    color: 'text-hf-purple'
  }, {
    icon: TrendingUp,
    title: t.about.pillar3Title,
    description: t.about.pillar3Desc,
    color: 'text-hf-sky'
  }, {
    icon: Puzzle,
    title: t.about.pillar4Title,
    description: t.about.pillar4Desc,
    color: 'text-primary'
  }];

  return (
    <section className="py-20 md:py-[100px] bg-background transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-[60px]">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            {t.about.pillarsTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={index} 
                className="text-center hf-shadow rounded-2xl border border-border/50 bg-card transition-colors duration-300 min-h-[300px] lg:min-h-[340px] flex"
              >
                <CardContent className="pt-8 pb-8 px-7 flex flex-col items-center">
                  <div className="flex justify-center mb-6">
                    <div className={`p-3 rounded-full bg-muted ${pillar.color}`}>
                      <Icon className="h-8 w-8 lg:h-10 lg:w-10" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold font-display text-foreground mb-4 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed lg:leading-[1.6]">
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
