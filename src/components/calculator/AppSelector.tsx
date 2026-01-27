import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { appCategories, APP_PRICE } from '@/data/calculatorApps';

interface AppSelectorProps {
  selectedApps: Set<string>;
  onToggleApp: (appName: string) => void;
}

export const AppSelector = ({ selectedApps, onToggleApp }: AppSelectorProps) => {
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
                    key={app.name}
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
                        +${APP_PRICE}
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
