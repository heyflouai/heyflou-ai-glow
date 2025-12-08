import { integrationGroups, integrationsLead } from '@/data/integrations';
import { LogoLoop } from '@/components/ui/logo-loop';
import { 
  Bot, 
  MessageSquare, 
  Briefcase, 
  Mail, 
  Calendar, 
  CreditCard, 
  FileSpreadsheet, 
  BookOpen, 
  Video,
  Zap,
  Cloud,
  Building2,
  Smartphone,
  BarChart3
} from 'lucide-react';

const loopLogos = [
  { name: 'ChatGPT', icon: <Bot className="w-4 h-4" /> },
  { name: 'Gemini', icon: <Bot className="w-4 h-4" /> },
  { name: 'Claude', icon: <Bot className="w-4 h-4" /> },
  { name: 'HubSpot', icon: <Briefcase className="w-4 h-4" /> },
  { name: 'Salesforce', icon: <Cloud className="w-4 h-4" /> },
  { name: 'WhatsApp', icon: <MessageSquare className="w-4 h-4" /> },
  { name: 'Google Workspace', icon: <Mail className="w-4 h-4" /> },
  { name: 'Slack', icon: <Smartphone className="w-4 h-4" /> },
  { name: 'Stripe', icon: <CreditCard className="w-4 h-4" /> },
  { name: 'Google Sheets', icon: <FileSpreadsheet className="w-4 h-4" /> },
  { name: 'Notion', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Zoom', icon: <Video className="w-4 h-4" /> },
  { name: 'Calendly', icon: <Calendar className="w-4 h-4" /> },
  { name: 'Zapier', icon: <Zap className="w-4 h-4" /> },
];

export function IntegrationsWall() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
            Tools & Integrations We Work With
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {integrationsLead}
          </p>
        </div>
        
        {/* Logo Loop Animation */}
        <div className="mb-12">
          <LogoLoop 
            logos={loopLogos}
            speed={80}
            hoverSpeed={0}
            logoHeight={44}
            gap={24}
            scaleOnHover={true}
            fadeOut={true}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}