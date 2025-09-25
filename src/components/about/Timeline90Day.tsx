import { Search, Zap, TestTube, TrendingUp } from 'lucide-react';

export function Timeline90Day() {
  const steps = [
    {
      icon: Search,
      title: 'Discover',
      subtitle: 'Weeks 1–2',
      description: 'Workshops, SOP capture, and opportunity map.',
      color: 'text-hf-teal'
    },
    {
      icon: Zap,
      title: 'Design',
      subtitle: 'Weeks 3–4',
      description: 'Automation specs, guardrails, and success metrics.',
      color: 'text-hf-purple'
    },
    {
      icon: TestTube,
      title: 'Deploy',
      subtitle: 'Weeks 5–8',
      description: 'Build agents & workflows; pilot with HITL approvals.',
      color: 'text-hf-sky'
    },
    {
      icon: TrendingUp,
      title: 'Train & Improve',
      subtitle: 'Weeks 9–12',
      description: 'Team training, dashboards, and iteration.',
      color: 'text-hf-navy'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
            Our 90-Day Plan
          </h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full z-10"></div>
                  
                  <div className="bg-white rounded-2xl p-6 hf-shadow">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 rounded-full bg-muted ${step.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-muted mb-3 ${step.color}`}>
                      {step.subtitle}
                    </div>
                    <h3 className="text-xl font-bold font-display text-hf-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}