export function ImpactSnapshot() {
  const metrics = [
    '20+ hrs saved / employee / month',
    '~40% productivity lift',
    'Support costs down ~50% with AI deflection'
  ];

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-8">
          Impact Snapshot
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="inline-block px-6 py-3 bg-white rounded-full hf-shadow text-hf-navy font-medium"
            >
              {metric}
            </div>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground italic">
          Benchmarks from our SMB AI Analysis ('24–'25)—results vary.
        </p>
      </div>
    </section>
  );
}