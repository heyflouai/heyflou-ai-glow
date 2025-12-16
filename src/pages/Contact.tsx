import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { Mail, Calendar } from 'lucide-react';
import { CompactForm } from '@/components/forms/CompactForm';

export default function Contact() {
  return (
    <>
      <SEOHead 
        title="Contact HeyFlou - AI Automation for Small Businesses"
        description="Book a free strategy call to learn how AI automation can save you time and help you get more clients. No tech skills required."
        canonical="https://heyflou.com/contact"
      />
      
      <main className="pt-16">
        <Section background="glow" padding="large">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
              Let's Transform Your Business Together
            </h1>
            <p className="text-xl text-muted-foreground">
              Book a free strategy call to discover how AI automation can save you time and help you get more clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Contact Form - 60% width */}
            <div className="lg:col-span-3">
              <CompactForm sourcePage="contact_page" hidePromoText />
            </div>

            {/* Contact Options - 40% width */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-card rounded-xl p-5 hf-shadow border border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg hf-gradient flex items-center justify-center shrink-0">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-bold font-display text-foreground">
                    Free Strategy Call
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  30-minute consultation to explore your automation opportunities and see how AI can help your business.
                </p>
                <GradientButton variant="secondary" size="lg" className="w-full" asChild>
                  <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Call
                  </a>
                </GradientButton>
              </div>

              <div className="bg-card rounded-xl p-5 hf-shadow border border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg hf-gradient flex items-center justify-center shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-bold font-display text-foreground">
                    Direct Email
                  </h3>
                </div>
                <p className="text-foreground font-medium mb-1">
                  heyflou.ai@gmail.com
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  We typically respond within 24 hours during business days.
                </p>
                <GradientButton variant="outline" size="lg" className="w-full" asChild>
                  <a href="mailto:heyflou.ai@gmail.com?subject=AI%20Automation%20Inquiry">
                    Send Email
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