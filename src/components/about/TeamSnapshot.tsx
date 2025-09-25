import { Linkedin } from 'lucide-react';

export function TeamSnapshot() {
  const team = [
    {
      name: 'Samuel Nakach',
      role: 'Co-Founder',
      linkedin: 'https://www.linkedin.com/in/samuel-nakach/'
    },
    {
      name: 'Salomon Zayat',
      role: 'Co-Founder', 
      linkedin: 'https://www.linkedin.com/in/salomon-zayat-32284b189'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
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
              <p className="text-sm text-hf-navy font-medium mb-4">
                {member.role}
              </p>
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener"
                aria-label={`Open ${member.name.split(' ')[0]}'s LinkedIn`}
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