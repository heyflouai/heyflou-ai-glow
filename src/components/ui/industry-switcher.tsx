import { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  Stethoscope, 
  Dumbbell, 
  Plane, 
  Cog, 
  Sparkles 
} from 'lucide-react';

const industries = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    href: '/services/healthcare',
    icon: Stethoscope,
  },
  {
    id: 'fitness-education',
    label: 'Fitness & Education',
    href: '/services/fitness-education',
    icon: Dumbbell,
  },
  {
    id: 'travel-agencies',
    label: 'Travel Agencies',
    href: '/services/travel-agencies',
    icon: Plane,
    badge: 'Soon',
  },
  {
    id: 'custom',
    label: 'Custom Solutions',
    href: '/services/custom',
    icon: Cog,
  },
  {
    id: 'consulting',
    label: 'AI Consulting',
    href: '/services/consulting',
    icon: Sparkles,
  },
];

export function IndustrySwitcher() {
  const location = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Determine active industry based on current path
  useEffect(() => {
    const currentIndex = industries.findIndex(
      (industry) => location.pathname === industry.href
    );
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname]);

  // Scroll active item into view on mobile
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.children[activeIndex] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="sticky top-16 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-2 py-3 md:py-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:justify-center -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {industries.map((industry, index) => {
            const isActive = location.pathname === industry.href;
            const Icon = industry.icon;

            return (
              <Link
                key={industry.id}
                to={industry.href}
                className="snap-center flex-shrink-0"
              >
                <motion.div
                  className={cn(
                    'relative flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200',
                    'border border-transparent min-h-[44px] md:min-h-0',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground hover:border-border/50'
                  )}
                  whileHover={{ scale: isActive ? 1 : 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="h-4 w-4" />
                  <span className="whitespace-nowrap">{industry.label}</span>
                  
                  {industry.badge && (
                    <span className="ml-1 px-1.5 py-0.5 text-[10px] font-semibold rounded-full bg-hf-purple/20 text-hf-purple animate-pulse">
                      {industry.badge}
                    </span>
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
