import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { Calendar, Mail } from 'lucide-react';
import { useTranslation } from '@/i18n';
import { PAGE_SEO, getCanonicalUrl } from '@/lib/seo-config';
import { CompactForm } from '@/components/forms/CompactForm';

export default function Contact() {
  const t = useTranslation();

  return (
    <>
      <SEOHead 
        title={PAGE_SEO.contact.title}
        description={PAGE_SEO.contact.description}
        canonical={getCanonicalUrl(PAGE_SEO.contact.path)}
      />
      
      <main className="pt-16">
        <Section background="glow" padding="large">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
              {t.contact.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.contact.heroSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left side - Contact Form */}
            <div>
              <CompactForm sourcePage="contact" hidePromoText />
            </div>

            {/* Right side - Contact Cards */}
            <div className="space-y-6">
              {/* Strategy Call Card */}
              <div className="bg-card rounded-xl p-8 hf-shadow border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-foreground">
                      {t.contact.freeStrategyCall}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t.contact.freeStrategyCallDesc}
                </p>
                <GradientButton variant="secondary" size="lg" className="w-full" asChild>
                  <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
                    {t.contact.scheduleCall}
                  </a>
                </GradientButton>
              </div>

              {/* Direct Email Card */}
              <div className="bg-card rounded-xl p-8 hf-shadow border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-foreground">
                      {t.contact.directEmail}
                    </h3>
                  </div>
                </div>
                <p className="text-foreground font-medium mb-1">
                  Hello@heyflou.com
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t.contact.emailResponse}
                </p>
                <GradientButton variant="outline" size="lg" className="w-full" asChild>
                  <a href="mailto:Hello@heyflou.com?subject=AI%20Automation%20Inquiry">
                    {t.contact.sendEmail}
                  </a>
                </GradientButton>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
