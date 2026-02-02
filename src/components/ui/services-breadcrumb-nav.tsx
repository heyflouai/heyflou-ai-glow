import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, Heart, Dumbbell, Plane, Cog, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/i18n';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServicesBreadcrumbNavProps {
  currentPage: string;
  className?: string;
  centered?: boolean;
}

const serviceLinks = [
  { key: 'healthcare', href: '/services/healthcare', icon: Heart },
  { key: 'fitnessEducation', href: '/services/fitness-education', icon: Dumbbell },
  { key: 'travelAgencies', href: '/services/travel-agencies', icon: Plane, badge: 'comingSoon' },
  { key: 'customAutomations', href: '/services/custom', icon: Cog },
  { key: 'aiConsulting', href: '/services/consulting', icon: Lightbulb },
];

export function ServicesBreadcrumbNav({ currentPage, className, centered = false }: ServicesBreadcrumbNavProps) {
  const t = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav 
      className={cn(
        "flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground",
        centered && "justify-center",
        className
      )}
      aria-label="Breadcrumb"
    >
      {/* Home */}
      <Link 
        to="/" 
        className="hover:text-primary transition-colors py-1 px-1.5 -ml-1.5 rounded-md hover:bg-accent/50"
      >
        {t.nav.home}
      </Link>
      
      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
      
      {/* Services with dropdown */}
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link 
          to="/services" 
          className="flex items-center gap-1 hover:text-primary transition-colors py-1 px-1.5 rounded-md hover:bg-accent/50"
        >
          {t.nav.services}
          <ChevronDown className={cn(
            "w-3 h-3 transition-transform duration-200",
            isHovered && "rotate-180"
          )} />
        </Link>
        
        {/* Dropdown */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 top-full pt-1 z-50"
            >
              <div className="bg-popover border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                {serviceLinks.map((service) => {
                  const Icon = service.icon;
                  const isCurrentPage = t.nav[service.key as keyof typeof t.nav] === currentPage;
                  
                  return (
                    <Link
                      key={service.href}
                      to={service.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                        isCurrentPage 
                          ? "bg-accent text-accent-foreground font-medium" 
                          : "text-foreground hover:bg-accent/50"
                      )}
                    >
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      <span className="flex-1">{t.nav[service.key as keyof typeof t.nav]}</span>
                      {service.badge && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent text-muted-foreground">
                          {t.nav[service.badge as keyof typeof t.nav]}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
      
      {/* Current Page */}
      <span className="text-foreground font-medium py-1 px-1.5 truncate max-w-[120px] sm:max-w-none">
        {currentPage}
      </span>
    </nav>
  );
}
