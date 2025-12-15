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
          <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink dark:text-white mb-4">
            <span className="dark:tracking-wide">Team Snapshot</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 hf-shadow text-center
                dark:bg-gradient-to-br dark:from-[hsl(222,40%,12%)] dark:to-[hsl(222,35%,10%)]
                dark:border dark:border-hf-purple/10
                dark:shadow-[0_8px_32px_hsl(var(--hf-purple)/0.15),0_0_0_1px_hsl(var(--hf-purple)/0.05)]
                dark:hover:shadow-[0_12px_40px_hsl(var(--hf-purple)/0.25),0_0_0_1px_hsl(var(--hf-sky)/0.15)]
                dark:hover:-translate-y-1
                transition-all duration-300"
            >
              <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center
                dark:bg-[hsl(222,35%,14%)]
                dark:ring-2 dark:ring-offset-2 dark:ring-offset-[hsl(222,40%,12%)]
                dark:ring-gradient dark:bg-gradient-to-br dark:from-hf-sky/20 dark:to-hf-purple/20
                relative
                before:dark:absolute before:dark:inset-[-3px] before:dark:rounded-full 
                before:dark:bg-gradient-to-br before:dark:from-hf-sky before:dark:to-hf-purple 
                before:dark:opacity-60 before:dark:-z-10 before:dark:blur-[1px]"
              >
                <span className="text-2xl font-bold text-hf-navy dark:text-[hsl(220,20%,92%)] relative z-10">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-lg font-bold font-display text-hf-ink dark:text-[hsl(220,20%,97%)] mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-hf-navy font-medium mb-4 dark:text-[hsl(220,20%,65%)]">
                {member.role}
              </p>
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener"
                aria-label={`Open ${member.name.split(' ')[0]}'s LinkedIn`}
                className="inline-flex items-center gap-2 text-hf-teal hover:text-hf-navy transition-colors
                  dark:text-hf-sky dark:hover:text-white
                  dark:hover:drop-shadow-[0_0_8px_hsl(var(--hf-sky)/0.6)]"
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