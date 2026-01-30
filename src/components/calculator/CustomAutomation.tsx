import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { AppSelector } from './AppSelector';
import { PricingSummary } from './PricingSummary';
import { WorkflowVisualization } from './WorkflowVisualization';
import { useVerticalSettings } from '@/hooks/usePricingData';
import { useTranslation } from '@/i18n';

interface CustomAutomationProps {
  onBack: () => void;
}

export const CustomAutomation = ({ onBack }: CustomAutomationProps) => {
  const t = useTranslation();
  const [selectedApps, setSelectedApps] = useState<Set<string>>(new Set());
  const { data: settings, isLoading, error } = useVerticalSettings('custom');

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

  if (error || !settings) {
    return (
      <div className="text-center py-16 text-destructive">
        <p>{t.calculator.failedToLoadPricing}</p>
        <Button variant="ghost" onClick={onBack} className="mt-4">
          {t.calculator.goBack}
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={onBack} className="gap-2">
        <ArrowLeft className="h-4 w-4" />
        {t.calculator.backToSelection}
      </Button>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground">{t.calculator.customAutomation}</h2>
        <p className="text-muted-foreground mt-1">{t.calculator.buildCustomSolution}</p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">{t.calculator.baseAutomationBuild}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground text-sm">
              {t.calculator.baseSetupDesc}
            </p>
            <span className="text-2xl font-bold text-foreground">
              ${settings.base_price}
            </span>
          </div>
        </CardContent>
      </Card>

      <AppSelector 
        selectedApps={selectedApps} 
        onToggleApp={toggleApp}
        vertical="custom"
      />

      <PricingSummary
        offerType="custom"
        basePrice={settings.base_price}
        selectedApps={selectedApps}
      />

      <WorkflowVisualization selectedApps={selectedApps} />
    </div>
  );
};
