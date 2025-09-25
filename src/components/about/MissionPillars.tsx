import { Users, Shield, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function MissionPillars() {
  const pillars = [
    {
      icon: Users,
      title: 'Human-in-the-loop',
      description: 'AI handles the busywork; people handle judgment.',
      color: 'text-hf-teal'
    },
    {
      icon: Shield,
      title: 'Secure-by-design',
      description: 'Least-privilege access, audit logs, and clear data boundaries.',
      color: 'text-hf-purple'
    },
    {
      icon: TrendingUp,
      title: 'Measurable ROI',
      description: 'Ship with KPIs, baselines, and weekly deltas.',
      color: 'text-hf-sky'
    },
    {
      icon: Zap,
      title: 'Vendor-neutral',
      description: 'We integrate with your stack; no lock-in.',
      color: 'text-hf-navy'
    }
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
            Mission & What Makes Us Different
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card key={index} className="text-center p-6 hf-shadow rounded-2xl border-0">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full bg-muted ${pillar.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-display text-hf-ink mb-3">
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