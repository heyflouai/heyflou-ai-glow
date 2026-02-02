import { SEOHead } from '@/components/ui/seo-head';
import { IndustrySwitcher } from '@/components/ui/industry-switcher';
import { CustomHero } from '@/components/custom-automation/CustomHero';
import { CustomApproach } from '@/components/custom-automation/CustomApproach';
import { CustomCapabilities } from '@/components/custom-automation/CustomCapabilities';
import { CustomIntegrations } from '@/components/custom-automation/CustomIntegrations';
import { CustomProcess } from '@/components/custom-automation/CustomProcess';
import { CustomCTA } from '@/components/custom-automation/CustomCTA';
import { CustomContactForm } from '@/components/custom-automation/CustomContactForm';
import { getCanonicalUrl } from '@/lib/seo-config';

export default function CustomAutomation() {
  return (
    <>
      <SEOHead 
        title="Custom AI Automations | Tailored Solutions for Any Business"
        description="Custom AI automation solutions for any business, any industry, any size. We build tailored workflows from scratch based on your unique needs."
        canonical={getCanonicalUrl('/services/custom')}
      />
      
      <main>
        <IndustrySwitcher />
        <CustomHero />
        <CustomApproach />
        <CustomCapabilities />
        <CustomIntegrations />
        <CustomProcess />
        <CustomCTA />
        <CustomContactForm />
      </main>
    </>
  );
}
