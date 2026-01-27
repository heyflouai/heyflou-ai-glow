import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { AppSelector } from './AppSelector';
import { PricingSummary } from './PricingSummary';
import { BasePackageSelector, BasePackage } from './BasePackageSelector';

const travelPackages: BasePackage[] = [
  {
    id: 'basic',
    name: 'Basic Travel Automation',
    price: 300,
    description: 'Automates lead intake, basic customer communication, and simple workflows for travel agencies.',
  },
  {
    id: 'standard',
    name: 'Standard Travel Automation',
    price: 500,
    description: 'Includes CRM syncing, automated follow-ups, booking coordination, and internal notifications.',
  },
  {
    id: 'advanced',
    name: 'Advanced Travel Automation',
    price: 700,
    description: 'Full travel automation including advanced workflows, integrations, and multi-step customer journeys.',
  },
];

interface TravelAgencyProps {
  onBack: () => void;
}

export const TravelAgency = ({ onBack }: TravelAgencyProps) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [selectedApps, setSelectedApps] = useState<Set<string>>(new Set());

  const selectedPackage = travelPackages.find(p => p.id === selectedPackageId);

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
        packages={travelPackages}
        selectedPackageId={selectedPackageId}
        onSelectPackage={setSelectedPackageId}
      />

      {selectedPackageId && (
        <>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Step 2: Add optional app integrations</p>
          </div>
          <AppSelector selectedApps={selectedApps} onToggleApp={toggleApp} />
        </>
      )}

      {selectedPackage && (
        <PricingSummary
          offerType="travel"
          basePackageName={selectedPackage.name}
          basePrice={selectedPackage.price}
          selectedApps={selectedApps}
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
