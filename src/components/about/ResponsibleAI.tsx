export function ResponsibleAI() {
  const policies = [
    'Data stays in your systems whenever possible.',
    'Access is least-privilege and time-bound.',
    'All automations are logged; sensitive actions require approval.',
    'Models are configured to not train on your data unless explicitly authorized.'
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
            Responsible AI & Data Use
          </h2>
        </div>
        
        <div className="bg-card rounded-2xl p-8 hf-shadow">
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