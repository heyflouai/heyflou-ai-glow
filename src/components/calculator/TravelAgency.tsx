import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { AppSelector } from './AppSelector';
import { PricingSummary } from './PricingSummary';
import { BasePackageSelector } from './BasePackageSelector';
import { usePricingSettings, useOfferPackages } from '@/hooks/usePricingData';

interface TravelAgencyProps {
  onBack: () => void;
}

export const TravelAgency = ({ onBack }: TravelAgencyProps) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [selectedApps, setSelectedApps] = useState<Set<string>>(new Set());
  
  const { data: settings, isLoading: settingsLoading } = usePricingSettings();
  const { data: packages, isLoading: packagesLoading, error } = useOfferPackages('travel');

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
        <span className="ml-3 text-muted-foreground">Loading pricing...</span>
      </div>
    );
  }

  if (error || !packages || !settings) {
    return (
      <div className="text-center py-16 text-destructive">
        <p>Failed to load pricing data. Please refresh the page.</p>
        <Button variant="ghost" onClick={onBack} className="mt-4">
          Go back
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
        Back to selection
      </Button>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground">Travel Agency</h2>
        <p className="text-muted-foreground mt-1">Automation solutions for travel agencies</p>
      </div>

      <BasePackageSelector
        title="Step 1: Choose Base Automation"
        packages={basePackages}
        selectedPackageId={selectedPackageId}
        onSelectPackage={setSelectedPackageId}
      />

      {selectedPackageId && (
        <>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Step 2: Add optional app integrations</p>
          </div>
          <AppSelector 
            selectedApps={selectedApps} 
            onToggleApp={toggleApp}
            appAddonPrice={settings.app_addon_price}
          />
        </>
      )}

      {selectedPackage && (
        <PricingSummary
          offerType="travel"
          basePackageName={selectedPackage.name}
          basePrice={selectedPackage.price}
          selectedApps={selectedApps}
          appAddonPrice={settings.app_addon_price}
          currency={settings.currency}
        />
      )}

      {!selectedPackageId && (
        <div className="text-center py-8 text-muted-foreground">
          <p>Select a base automation package to see the pricing summary</p>
        </div>
      )}
    </div>
  );
};
