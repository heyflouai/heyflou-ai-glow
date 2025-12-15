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
            <h1 className="text-4xl md:text-5xl font-bold font-display text-hf-ink mb-6">
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
              <div className="bg-card rounded-xl p-8 hf-shadow flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center shrink-0">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-hf-ink mb-2">
                      Free Strategy Call
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      30-minute consultation to explore your automation opportunities and see how AI can help your business.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <GradientButton variant="secondary" size="lg" className="w-full" asChild>
                    <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
                      Schedule Call
                    </a>
                  </GradientButton>
                </div>
              </div>

              <div className="bg-card rounded-xl p-8 hf-shadow flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-hf-ink mb-2">
                      Direct Email
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      heyflou.ai@gmail.com
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-auto leading-relaxed">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
