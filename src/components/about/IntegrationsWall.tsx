import { integrationGroups, integrationsLead, integrationsDirectoryUrl } from '@/data/integrations';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function IntegrationsWall() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
            Tools & Integrations We Work With
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            {integrationsLead}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full">
            <span className="text-xs font-medium text-muted-foreground">Powered by n8n</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {integrationGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold font-display text-hf-navy mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            size="sm"
            asChild
          >
            <a 
              href={integrationsDirectoryUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2"
            >
              See all 1,200+ integrations
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center">
          Logos and names are trademarks of their owners. We integrate through secure APIs and n8n workflows.
        </p>
      </div>
    </section>
  );
}