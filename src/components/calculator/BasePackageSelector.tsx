import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface BasePackage {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface BasePackageSelectorProps {
  title: string;
  packages: BasePackage[];
  selectedPackageId: string | null;
  onSelectPackage: (packageId: string) => void;
}

export const BasePackageSelector = ({
  title,
  packages,
  selectedPackageId,
  onSelectPackage,
}: BasePackageSelectorProps) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {packages.map((pkg) => {
          const isSelected = selectedPackageId === pkg.id;
          return (
            <button
              key={pkg.id}
              onClick={() => onSelectPackage(pkg.id)}
              className={cn(
                "w-full flex flex-col items-start gap-2 p-4 rounded-lg border text-left transition-all duration-200",
                isSelected
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-accent"
              )}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  {isSelected && <Check className="h-5 w-5 shrink-0" />}
                  <span className="font-semibold">{pkg.name}</span>
                </div>
                <span className={cn(
                  "text-xl font-bold",
                  isSelected ? "text-primary-foreground" : "text-primary"
                )}>
                  ${pkg.price}
                </span>
              </div>
              <p className={cn(
                "text-sm leading-relaxed",
                isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
                {pkg.description}
              </p>
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
};
