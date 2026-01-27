import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { AppSelector } from './AppSelector';
import { PricingSummary } from './PricingSummary';
import { BasePackageSelector, BasePackage } from './BasePackageSelector';

const healthPackages: BasePackage[] = [
  {
    id: 'basic',
    name: 'Basic Health Automation',
    price: 400,
    description: 'Automates patient intake, basic communication, and appointment handling.',
  },
  {
    id: 'standard',
    name: 'Standard Health Automation',
    price: 600,
    description: 'Includes CRM syncing, appointment workflows, reminders, and internal coordination.',
  },
  {
    id: 'advanced',
    name: 'Advanced Health Automation',
    price: 800,
    description: 'End-to-end health automation including complex workflows, integrations, and advanced logic.',
  },
];

interface HealthAutomationProps {
  onBack: () => void;
}

export const HealthAutomation = ({ onBack }: HealthAutomationProps) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [selectedApps, setSelectedApps] = useState<Set<string>>(new Set());

  const selectedPackage = healthPackages.find(p => p.id === selectedPackageId);

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
        <h2 className="text-2xl font-bold text-foreground">Health</h2>
        <p className="text-muted-foreground mt-1">Automation solutions for healthcare providers</p>
      </div>

      <BasePackageSelector
        title="Step 1: Choose Base Automation"
        packages={healthPackages}
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
          offerType="health"
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
