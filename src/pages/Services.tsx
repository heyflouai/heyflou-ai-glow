import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { Rocket, Bot, MessageSquare, BarChart3, FileText, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/i18n';

export default function Services() {
  const t = useTranslation();

  return (
    <>
      <SEOHead 
        title="Services | AI Consulting for SMB Workflow Automation"
        description="WhatsApp AI bots, lead management pipelines, CRM integration, and email automation for small and medium businesses."
        canonical="https://heyflou.com/services"
      />
      
      <main className="pt-16">
        <Section background="glow" padding="large">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
              {t.services.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.services.heroSubtitle}
            </p>
          </div>
        </Section>

        <Section id="marketing-engine">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6">
                <Rocket className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-foreground mb-6">
                {t.services.marketingEngineTitle}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t.services.marketingEngineDesc}
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 hf-shadow border border-border/50">
              <h3 className="font-bold text-foreground mb-4">{t.services.keyFeatures}</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• {t.services.marketingFeature1}</li>
                <li>• {t.services.marketingFeature2}</li>
                <li>• {t.services.marketingFeature3}</li>
                <li>• {t.services.marketingFeature4}</li>
                <li>• {t.services.marketingFeature5}</li>
                <li>• {t.services.marketingFeature6}</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section background="muted" id="ai-chatbot">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-card rounded-xl p-8 hf-shadow border border-border/50">
              <h3 className="font-bold text-foreground mb-4">{t.services.coreFeatures}</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• {t.services.chatbotFeature1}</li>
                <li>• {t.services.chatbotFeature2}</li>
                <li>• {t.services.chatbotFeature3}</li>
                <li>• {t.services.chatbotFeature4}</li>
                <li>• {t.services.chatbotFeature5}</li>
                <li>• {t.services.chatbotFeature6}</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6">
                <Bot className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-foreground mb-6">
                {t.services.chatbotTitle}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t.services.chatbotDesc}
              </p>
            </div>
          </div>
        </Section>

        <Section id="whatsapp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6">
                <MessageSquare className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-foreground mb-6">
                {t.services.whatsappTitle}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t.services.whatsappDesc}
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 hf-shadow border border-border/50">
              <h3 className="font-bold text-foreground mb-4">{t.services.whatsIncluded}</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• {t.services.whatsappFeature1}</li>
                <li>• {t.services.whatsappFeature2}</li>
                <li>• {t.services.whatsappFeature3}</li>
                <li>• {t.services.whatsappFeature4}</li>
                <li>• {t.services.whatsappFeature5}</li>
                <li>• {t.services.whatsappFeature6}</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section background="muted" id="crm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-card rounded-xl p-8 hf-shadow border border-border/50">
              <h3 className="font-bold text-foreground mb-4">{t.services.coreFeatures}</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• {t.services.crmFeature1}</li>
                <li>• {t.services.crmFeature2}</li>
                <li>• {t.services.crmFeature3}</li>
                <li>• {t.services.crmFeature4}</li>
                <li>• {t.services.crmFeature5}</li>
                <li>• {t.services.crmFeature6}</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6">
                <BarChart3 className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-foreground mb-6">
                {t.services.crmTitle}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t.services.crmDesc}
              </p>
            </div>
          </div>
        </Section>

        <Section id="landing-pages">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6">
                <FileText className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-foreground mb-6">
                {t.services.landingTitle}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t.services.landingDesc}
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 hf-shadow border border-border/50">
              <h3 className="font-bold text-foreground mb-4">{t.services.whatsIncluded}</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• {t.services.landingFeature1}</li>
                <li>• {t.services.landingFeature2}</li>
                <li>• {t.services.landingFeature3}</li>
                <li>• {t.services.landingFeature4}</li>
                <li>• {t.services.landingFeature5}</li>
                <li>• {t.services.landingFeature6}</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Secondary Vertical - Therapists */}
        <Section background="muted" id="therapists">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mb-6 mx-auto">
                <Stethoscope className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                {t.services.therapistsTitle}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.services.therapistsSubtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 hf-shadow border border-border/50">
                <h3 className="font-bold text-foreground mb-2">{t.services.intakeChatbot}</h3>
                <p className="text-sm text-muted-foreground">{t.services.intakeChatbotDesc}</p>
              </div>
              <div className="bg-card rounded-xl p-6 hf-shadow border border-border/50">
                <h3 className="font-bold text-foreground mb-2">{t.services.appointmentAutomation}</h3>
                <p className="text-sm text-muted-foreground">{t.services.appointmentAutomationDesc}</p>
              </div>
              <div className="bg-card rounded-xl p-6 hf-shadow border border-border/50">
                <h3 className="font-bold text-foreground mb-2">{t.services.noShowReduction}</h3>
                <p className="text-sm text-muted-foreground">{t.services.noShowReductionDesc}</p>
              </div>
              <div className="bg-card rounded-xl p-6 hf-shadow border border-border/50">
                <h3 className="font-bold text-foreground mb-2">{t.services.patientCrm}</h3>
                <p className="text-sm text-muted-foreground">{t.services.patientCrmDesc}</p>
              </div>
              <div className="bg-card rounded-xl p-6 hf-shadow border border-border/50">
                <h3 className="font-bold text-foreground mb-2">{t.services.whatsappReminders}</h3>
                <p className="text-sm text-muted-foreground">{t.services.whatsappRemindersDesc}</p>
              </div>
              <div className="bg-card rounded-xl p-6 hf-shadow border border-border/50">
                <h3 className="font-bold text-foreground mb-2">{t.services.emailAutomation}</h3>
                <p className="text-sm text-muted-foreground">{t.services.emailAutomationDesc}</p>
              </div>
            </div>
          </div>
        </Section>

        <Section background="glow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-foreground mb-6">
              {t.services.ctaTitle}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.services.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton variant="hero" size="xl" asChild>
                <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
                  {t.services.bookFreeStrategyCall}
                </a>
              </GradientButton>
              <GradientButton variant="secondary" size="xl" asChild>
                <Link to="/contact">{t.services.getQuote}</Link>
              </GradientButton>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
