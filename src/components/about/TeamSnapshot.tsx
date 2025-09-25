import { Linkedin } from 'lucide-react';

export function TeamSnapshot() {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'AI Strategy Lead',
      superpower: 'Turns business chaos into automation gold.',
      linkedin: '#'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Technical Architect',
      superpower: 'Builds systems that actually work.',
      linkedin: '#'
    },
    {
      name: 'Alex Kim',
      role: 'Implementation Manager',
      superpower: 'Makes complex tech feel simple.',
      linkedin: '#'
    },
    {
      name: 'Jordan Taylor',
      role: 'Success Partner',
      superpower: 'Ensures your team loves the automation.',
      linkedin: '#'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
            Team Snapshot
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 hf-shadow text-center">
              <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-hf-navy">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-lg font-bold font-display text-hf-ink mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-hf-navy font-medium mb-2">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {member.superpower}
              </p>
              <a 
                href={member.linkedin}
                className="inline-flex items-center gap-2 text-hf-teal hover:text-hf-navy transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}