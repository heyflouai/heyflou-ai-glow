import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { AppSelector } from './AppSelector';
import { PricingSummary } from './PricingSummary';
import { WorkflowVisualization } from './WorkflowVisualization';
import { BasePackageSelector } from './BasePackageSelector';
import { useVerticalSettings, useOfferPackages } from '@/hooks/usePricingData';
import { useTranslation } from '@/i18n';

interface HealthAutomationProps {
  onBack: () => void;
}

export const HealthAutomation = ({ onBack }: HealthAutomationProps) => {
  const t = useTranslation();
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [selectedApps, setSelectedApps] = useState<Set<string>>(new Set());
  
  const { data: settings, isLoading: settingsLoading } = useVerticalSettings('health');
  const { data: packages, isLoading: packagesLoading, error } = useOfferPackages('health');

  const isLoading = settingsLoading || packagesLoading;
  const selectedPackage = packages?.find(p => p.id === selectedPackageId);

  const toggleApp = (appName: string) => {
    setSelectedApps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(appName)) {
        newSet.delete(appName);
      } else {
        newSet.add(appName);
      }
      return newSet;
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        <span className="ml-3 text-muted-foreground">{t.calculator.loadingPricing}</span>
      </div>
    );
  }

  if (error || !packages || !settings) {
    return (
      <div className="text-center py-16 text-destructive">
        <p>{t.calculator.failedToLoadData}</p>
        <Button variant="ghost" onClick={onBack} className="mt-4">
          {t.calculator.goBack}
        </Button>
      </div>
    );
  }

  const basePackages = packages.map(pkg => ({
    id: pkg.id,
    name: pkg.name,
    price: pkg.price,
    description: pkg.description,
  }));

  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={onBack} className="gap-2">
        <ArrowLeft className="h-4 w-4" />
        {t.calculator.backToSelection}
      </Button>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground">{t.calculator.health}</h2>
        <p className="text-muted-foreground mt-1">{t.calculator.automationSolutionsFor} {t.calculator.healthcareProviders}</p>
      </div>

      <BasePackageSelector
        title={t.calculator.step1ChooseBase}
        packages={basePackages}
        selectedPackageId={selectedPackageId}
        onSelectPackage={setSelectedPackageId}
      />

      {selectedPackageId && (
        <>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">{t.calculator.step2AddApps}</p>
          </div>
          <AppSelector 
            selectedApps={selectedApps} 
            onToggleApp={toggleApp}
            vertical="health"
          />
        </>
      )}

      {selectedPackage && (
        <>
          <PricingSummary
            offerType="health"
            basePackageName={selectedPackage.name}
            basePrice={selectedPackage.price}
            selectedApps={selectedApps}
          />
          <WorkflowVisualization selectedApps={selectedApps} />
        </>
      )}

      {!selectedPackageId && (
        <div className="text-center py-8 text-muted-foreground">
          <p>{t.calculator.selectPackagePrompt}</p>
        </div>
      )}
    </div>
  );
};
