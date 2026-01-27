import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Check, Loader2 } from 'lucide-react';
import { useAppsCatalog } from '@/hooks/usePricingData';

interface AppSelectorProps {
  selectedApps: Set<string>;
  onToggleApp: (appName: string) => void;
  appAddonPrice: number;
}

export const AppSelector = ({ selectedApps, onToggleApp, appAddonPrice }: AppSelectorProps) => {
  const { data: appCategories, isLoading, error } = useAppsCatalog();

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          <span className="ml-2 text-muted-foreground">Loading apps...</span>
        </CardContent>
      </Card>
    );
  }

  if (error || !appCategories) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-destructive">
          Failed to load app catalog. Please refresh the page.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">App Integrations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {appCategories.map((category) => (
          <div key={category.name}>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              {category.name}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {category.apps.map((app) => {
                const isSelected = selectedApps.has(app.name);
                return (
                  <button
                    key={app.id}
                    onClick={() => onToggleApp(app.name)}
                    className={cn(
                      "flex flex-col items-start gap-1 p-3 rounded-lg border text-left transition-all duration-200",
                      isSelected
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-accent"
                    )}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        {isSelected && <Check className="h-4 w-4 shrink-0" />}
                        <span className="font-medium text-sm">{app.name}</span>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={cn(
                          "text-xs shrink-0",
                          isSelected && "bg-primary-foreground/20 text-primary-foreground"
                        )}
                      >
                        +${appAddonPrice}
                      </Badge>
                    </div>
                    <p className={cn(
                      "text-xs leading-relaxed",
                      isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}>
                      {app.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
