import { integrationGroups, integrationsLead, integrationsDirectoryUrl } from '@/data/integrations';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
export function IntegrationsWall() {
  return <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
            Tools & Integrations We Work With
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            {integrationsLead}
          </p>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {integrationGroups.map(group => <div key={group.title}>
              <h3 className="text-sm font-bold font-display text-hf-navy mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => <span key={item} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                    {item}
                  </span>)}
              </div>
            </div>)}
        </div>
        
        <div className="text-center mb-8">
          <Button variant="ghost" size="sm" asChild>
            
          </Button>
        </div>
        
        
      </div>
    </section>;
}