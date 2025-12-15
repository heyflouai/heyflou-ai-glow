import { Search, Zap, TestTube, TrendingUp } from 'lucide-react';
export function Timeline90Day() {
  const steps = [{
    icon: Search,
    title: 'Discovery',
    subtitle: 'Week 1',
    description: 'Understand your practice, client flow, and automation goals.',
    color: 'text-hf-teal'
  }, {
    icon: Zap,
    title: 'Design',
    subtitle: 'Weeks 2-4',
    description: 'Build your AI chatbot, CRM workflows, and lead systems.',
    color: 'text-hf-purple'
  }, {
    icon: TestTube,
    title: 'Integration',
    subtitle: 'Weeks 5-8',
    description: 'Connect with your calendar, CRM, and communication tools.',
    color: 'text-hf-sky'
  }, {
    icon: TrendingUp,
    title: 'Launch & Optimize',
    subtitle: 'Weeks 9-12',
    description: 'Go live with training, support, and continuous improvements.',
    color: 'text-hf-navy'
  }];
  return <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink dark:text-white mb-4">
            Your 90-Day Transformation
          </h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border dark:bg-gradient-to-r dark:from-hf-purple/30 dark:via-hf-sky/40 dark:to-hf-purple/30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
            const Icon = step.icon;
            return <div key={index} className="text-center relative group">
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full z-10
                    dark:bg-[hsl(222,40%,12%)] dark:border-hf-sky"></div>
                  
                  <div className="bg-white rounded-2xl p-6 hf-shadow px-[2px]
                    dark:bg-gradient-to-br dark:from-[hsl(222,40%,12%)] dark:to-[hsl(222,35%,10%)]
                    dark:border dark:border-hf-purple/15
                    dark:shadow-[0_8px_32px_hsl(var(--hf-purple)/0.12),0_0_0_1px_hsl(var(--hf-purple)/0.05)]
                    dark:group-hover:shadow-[0_12px_40px_hsl(var(--hf-purple)/0.2),0_0_0_1px_hsl(var(--hf-sky)/0.2)]
                    dark:group-hover:-translate-y-1
                    transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 rounded-full bg-muted ${step.color}
                        dark:bg-gradient-to-br dark:from-hf-sky/20 dark:to-hf-purple/20
                        dark:text-white dark:shadow-[0_0_20px_hsl(var(--hf-purple)/0.3)]
                        relative`}>
                        <div className="absolute inset-0 rounded-full dark:bg-gradient-to-br dark:from-hf-sky dark:to-hf-purple dark:opacity-20 dark:blur-sm"></div>
                        <Icon className="h-6 w-6 relative z-10 dark:text-white dark:drop-shadow-[0_0_6px_hsl(var(--hf-sky)/0.5)]" />
                      </div>
                    </div>
                    <div className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-muted mb-3 ${step.color}
                      dark:bg-gradient-to-r dark:from-hf-purple/30 dark:to-hf-sky/30
                      dark:text-white dark:border dark:border-hf-purple/30`}>
                      {step.subtitle}
                    </div>
                    <h3 className="text-xl font-bold font-display text-hf-ink mb-3
                      dark:text-[hsl(220,20%,97%)] dark:font-extrabold">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-[hsl(220,20%,65%)]">
                      {step.description}
                    </p>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
}