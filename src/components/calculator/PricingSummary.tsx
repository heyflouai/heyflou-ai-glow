import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';
import { useAppsMaster, useAppPriceOverrides, useVerticalSettings, computeAppPrice, VerticalType } from '@/hooks/usePricingData';

interface PricingSummaryProps {
  offerType: VerticalType;
  basePackageName?: string;
  basePrice: number;
  selectedApps: Set<string>;
}

const offerLabels: Record<VerticalType, string> = {
  custom: 'Custom Automation',
  travel: 'Travel Agency',
  health: 'Health',
};

export const PricingSummary = ({ 
  offerType, 
  basePackageName, 
  basePrice, 
  selectedApps,
}: PricingSummaryProps) => {
  const { data: appCategories, isLoading: appsLoading } = useAppsMaster();
  const { data: verticalSettings, isLoading: settingsLoading } = useVerticalSettings(offerType);
  const { data: overrideMap, isLoading: overridesLoading } = useAppPriceOverrides(offerType);

  const isLoading = appsLoading || settingsLoading || overridesLoading;

  if (isLoading || !appCategories || !verticalSettings || !overrideMap) {
    return (
      <Card className="border-primary/20 bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Pricing Summary</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-4">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          <span className="ml-2 text-muted-foreground">Loading...</span>
        </CardContent>
      </Card>
    );
  }

  const defaultAppPrice = verticalSettings.default_app_price;
  const currency = verticalSettings.currency;

  // Build a flat map of app name -> { id, price }
  const appNameToData = new Map<string, { id: string; price: number }>();
  appCategories.forEach(category => {
    category.apps.forEach(app => {
      const price = computeAppPrice(app.id, defaultAppPrice, overrideMap);
      appNameToData.set(app.name, { id: app.id, price });
    });
  });

  // Calculate prices for selected apps
  const selectedAppsList = Array.from(selectedApps);
  const appPrices = selectedAppsList.map(name => ({
    name,
    price: appNameToData.get(name)?.price ?? defaultAppPrice,
  }));
  const appsTotal = appPrices.reduce((sum, app) => sum + app.price, 0);
  const finalTotal = basePrice + appsTotal;

  return (
    <Card className="border-primary/20 bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Pricing Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Offer type</span>
            <span className="font-medium">{offerLabels[offerType]}</span>
          </div>
          {basePackageName && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Base package</span>
              <span className="font-medium">{basePackageName}</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Base price</span>
            <span className="font-medium">${basePrice}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Apps subtotal ({selectedApps.size})
            </span>
            <span className="font-medium">
              {appsTotal > 0 ? `+$${appsTotal}` : '$0'}
            </span>
          </div>
          <div className="border-t border-border pt-3 mt-3">
            <div className="flex justify-between items-center">
              <span className="text-foreground font-semibold">Total</span>
              <span className="text-3xl font-bold text-primary">
                ${finalTotal.toLocaleString()} {currency}
              </span>
            </div>
          </div>
        </div>

        {selectedAppsList.length > 0 && (
          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Selected integrations:</p>
            <div className="flex flex-wrap gap-1">
              {appPrices.map(app => (
                <Badge key={app.name} variant="outline" className="text-xs">
                  {app.name} (${app.price})
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
