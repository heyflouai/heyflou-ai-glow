import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { AppSelector } from './AppSelector';
import { PricingSummary } from './PricingSummary';

const BASE_PRICE = 500;

interface CustomAutomationProps {
  onBack: () => void;
}

export const CustomAutomation = ({ onBack }: CustomAutomationProps) => {
  const [selectedApps, setSelectedApps] = useState<Set<string>>(new Set());

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
        <h2 className="text-2xl font-bold text-foreground">Custom Automation</h2>
        <p className="text-muted-foreground mt-1">Build your custom automation solution</p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Base Automation Build</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground text-sm">
              Base setup, workflow design and configuration
            </p>
            <span className="text-2xl font-bold text-foreground">
              ${BASE_PRICE}
            </span>
          </div>
        </CardContent>
      </Card>

      <AppSelector selectedApps={selectedApps} onToggleApp={toggleApp} />

      <PricingSummary
        offerType="custom"
        basePrice={BASE_PRICE}
        selectedApps={selectedApps}
      />
    </div>
  );
};
