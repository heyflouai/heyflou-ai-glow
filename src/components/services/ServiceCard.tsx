import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GradientButton } from '@/components/ui/gradient-button';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/i18n';
import type { ServiceData } from '@/data/servicesData';

interface ServiceCardProps {
  service: ServiceData;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const t = useTranslation();
  const servicesT = t.servicesPage as Record<string, string>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className={cn(
        'h-full border border-border/50 bg-card',
        'hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
        'group'
      )}>
        <CardHeader className="pb-4">
          <div className="flex items-start gap-4">
            <span className="text-4xl" role="img" aria-hidden="true">
              {service.icon}
            </span>
            <CardTitle className="text-xl font-bold font-display text-foreground leading-tight">
              {servicesT[service.titleKey] || service.titleKey}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {servicesT[service.descriptionKey] || service.descriptionKey}
          </p>
          
          <ul className="space-y-2">
            {service.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  {servicesT[benefit.key] || benefit.key}
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <GradientButton variant="secondary" size="sm" className="w-full" asChild>
              <a href="https://calendly.com/salo-zayat/new-meeting" target="_blank" rel="noopener noreferrer">
                {servicesT.learnMore || 'Learn More'}
              </a>
            </GradientButton>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
