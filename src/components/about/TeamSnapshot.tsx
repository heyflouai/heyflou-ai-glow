import { Linkedin } from 'lucide-react';
import { useTranslation } from '@/i18n';

export function TeamSnapshot() {
  const t = useTranslation();
  
  const team = [
    {
      name: 'Samuel Nakach',
      role: t.about.coFounder,
      linkedin: 'https://www.linkedin.com/in/samuel-nakach/'
    },
    {
      name: 'Salomon Zayat',
      role: t.about.coFounder, 
      linkedin: 'https://www.linkedin.com/in/salomon-zayat-32284b189'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-surface-secondary transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            {t.about.teamTitle}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-6 hf-shadow text-center border border-border/50
                hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-foreground">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground font-medium mb-4">
                {member.role}
              </p>
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener"
                aria-label={`LinkedIn ${member.name}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
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