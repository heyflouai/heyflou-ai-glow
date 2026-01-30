import { useState } from 'react';
import { SEOHead } from '@/components/ui/seo-head';
import { OfferSelector, OfferOption } from '@/components/calculator/OfferSelector';
import { CustomAutomation } from '@/components/calculator/CustomAutomation';
import { TravelAgency } from '@/components/calculator/TravelAgency';
import { HealthAutomation } from '@/components/calculator/HealthAutomation';
import { useTranslation } from '@/i18n';

const Calculator = () => {
  const t = useTranslation();
  const [selectedOffer, setSelectedOffer] = useState<OfferOption | null>(null);

  const handleBack = () => {
    setSelectedOffer(null);
  };

  return (
    <>
      <SEOHead 
        title={t.calculator.pageTitle}
        description={t.calculator.pageSubtitle}
        noIndex={true}
      />
      
      <div className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {t.calculator.pageTitle}
              </h1>
              <p className="text-muted-foreground">
                {t.calculator.pageSubtitle}
              </p>
            </div>

            {/* Content */}
            {!selectedOffer && (
              <OfferSelector onSelectOffer={setSelectedOffer} />
            )}

            {selectedOffer === 'custom' && (
              <CustomAutomation onBack={handleBack} />
            )}

            {selectedOffer === 'travel' && (
              <TravelAgency onBack={handleBack} />
            )}

            {selectedOffer === 'health' && (
              <HealthAutomation onBack={handleBack} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
