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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form - spans 2 columns */}
            <div className="lg:col-span-2">
              <CompactForm sourcePage="contact_page" />
            </div>

            {/* Contact Options */}
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-8 hf-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-hf-ink">
                      Free Strategy Call
                    </h3>
                    <p className="text-muted-foreground">
                      30-minute consultation to explore your automation opportunities
                    </p>
                  </div>
                </div>
                <GradientButton variant="secondary" size="lg" className="w-full" asChild>
                  <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Call
                  </a>
                </GradientButton>
              </div>

              <div className="bg-card rounded-xl p-8 hf-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-hf-ink">
                      Direct Email
                    </h3>
                    <p className="text-muted-foreground">
                      heyflou.ai@gmail.com
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
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
