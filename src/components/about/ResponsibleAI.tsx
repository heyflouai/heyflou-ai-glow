export function ResponsibleAI() {
  const policies = [
    'All client data is encrypted and HIPAA-compliant.',
    'Access is strictly controlled with secure authentication.',
    'All automation actions are logged for your records.',
    'Your data is never used to train AI models without explicit permission.'
  ];

  return (
    <section className="py-20 md:py-28 bg-background transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Security & Compliance You Can Trust
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