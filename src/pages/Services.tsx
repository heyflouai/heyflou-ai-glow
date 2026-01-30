import { SEOHead } from '@/components/ui/seo-head';
import { 
  HeroSection, 
  IndustrySection, 
  CustomAutomationSection, 
  ConsultingSection, 
  FinalCTASection 
} from '@/components/services';
import { industrySections } from '@/data/servicesData';
import { PAGE_SEO, SERVICE_SCHEMA, getCanonicalUrl } from '@/lib/seo-config';

export default function Services() {
  return (
    <>
      <SEOHead 
        title={PAGE_SEO.services.title}
        description={PAGE_SEO.services.description}
        canonical={getCanonicalUrl(PAGE_SEO.services.path)}
        jsonLd={SERVICE_SCHEMA}
      />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Industry Sections */}
        {industrySections.map((section, index) => (
          <IndustrySection 
            key={section.id} 
            section={section} 
            background={index % 2 === 0 ? 'default' : 'muted'} 
          />
        ))}

        {/* Custom Automation Section */}
        <CustomAutomationSection />

        {/* AI Consulting Section */}
        <ConsultingSection />

        {/* Final CTA */}
        <FinalCTASection />
      </main>
    </>
  );
}
