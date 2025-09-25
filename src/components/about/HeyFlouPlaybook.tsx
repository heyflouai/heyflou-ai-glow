export function HeyFlouPlaybook() {
  const playbookItems = [
    'SOP → Agent Scripting',
    'Guardrails & Escalations',
    'Evaluations & Test Sets',
    'Observability & Logs',
    'Change Management & Training'
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
            The HeyFlou Playbook
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          {playbookItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg hf-shadow">
              <div className="w-2 h-2 rounded-full hf-gradient flex-shrink-0"></div>
              <span className="text-hf-ink font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}