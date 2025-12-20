import { LogoLoop } from '@/components/ui/logo-loop';
import { useTranslation } from '@/i18n';
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
  Smartphone
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
  const t = useTranslation();
  
  return (
    <section className="py-20 md:py-28 bg-background transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            {t.integrationsWall.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t.integrationsWall.subtitle}
          </p>
        </div>
        
        {/* Logo Loop Animation */}
        <div className="pb-4">
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
      </div>
    </section>
  );
}