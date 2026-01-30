import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Wrench, Plane, HeartPulse } from 'lucide-react';
import { useTranslation } from '@/i18n';

export type OfferOption = 'custom' | 'travel' | 'health';

interface OfferSelectorProps {
  onSelectOffer: (offer: OfferOption) => void;
}

export const OfferSelector = ({ onSelectOffer }: OfferSelectorProps) => {
  const t = useTranslation();

  const offers = [
    {
      id: 'custom' as OfferOption,
      title: t.calculator.customAutomation,
      description: t.calculator.customAutomationDesc,
      icon: Wrench,
    },
    {
      id: 'travel' as OfferOption,
      title: t.calculator.travelAgency,
      description: t.calculator.travelAgencyDesc,
      icon: Plane,
    },
    {
      id: 'health' as OfferOption,
      title: t.calculator.health,
      description: t.calculator.healthDesc,
      icon: HeartPulse,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">{t.calculator.selectOfferType}</h2>
        <p className="text-muted-foreground">{t.calculator.selectOfferTypeDesc}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {offers.map((offer) => {
          const Icon = offer.icon;
          return (
            <button
              key={offer.id}
              onClick={() => onSelectOffer(offer.id)}
              className="text-left"
            >
              <Card className={cn(
                "h-full transition-all duration-200 hover:border-primary/50 hover:bg-accent cursor-pointer",
                "hover:shadow-md hover:-translate-y-0.5"
              )}>
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{offer.title}</h3>
                    <p className="text-sm text-muted-foreground">{offer.description}</p>
                  </div>
                </CardContent>
              </Card>
            </button>
          );
        })}
      </div>
    </div>
  );
};
