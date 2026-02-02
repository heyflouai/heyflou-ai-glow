import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUp, ChevronDown } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { BrandLockup } from '@/components/BrandLockup';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { LanguageToggle } from '@/components/ui/language-toggle';
import { useTranslation } from '@/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const t = useTranslation();

  const servicesDropdownItems = [
    { name: t.nav.healthcare, href: '/services/healthcare' },
    { name: t.nav.fitnessEducation, href: '/services/fitness-education' },
    { name: t.nav.travelAgencies, href: '/services/travel-agencies', comingSoon: true },
    { name: t.nav.customAutomations, href: '/services/custom' },
    { name: t.nav.aiConsulting, href: '/services/consulting' },
  ];

  const navigationItems = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.caseStudies, href: '/case-studies' },
    { name: t.nav.about, href: '/about' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <>
      {/* Main Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border" 
          : "bg-transparent"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Lockup */}
            <BrandLockup />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Home Link */}
              <Link
                to="/"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-hf-teal",
                  location.pathname === '/' 
                    ? "text-hf-teal" 
                    : "text-foreground"
                )}
              >
                {t.nav.home}
              </Link>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors hover:text-hf-teal focus:outline-none",
                      isServicesActive 
                        ? "text-hf-teal" 
                        : "text-foreground"
                    )}
                  >
                    {t.nav.services}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  sideOffset={8}
                  className="w-56 bg-background border border-border shadow-lg z-50"
                >
                  {servicesDropdownItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center justify-between w-full cursor-pointer",
                          location.pathname === item.href && "text-hf-teal"
                        )}
                      >
                        <span>{item.name}</span>
                        {item.comingSoon && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                            {t.nav.comingSoon}
                          </span>
                        )}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Other Nav Items */}
              {navigationItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-hf-teal",
                    location.pathname === item.href 
                      ? "text-hf-teal" 
                      : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA + Theme Toggle + Language Toggle */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Language Toggle */}
              <LanguageToggle />
              
              {/* Animated Theme Toggle */}
              <AnimatedThemeToggler theme={theme} onToggle={toggleTheme} />
              
              <GradientButton 
                variant="primary" 
                size="sm" 
                asChild
              >
                <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
                  {t.nav.bookFreeCall}
                </a>
              </GradientButton>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-hf-ink hover:text-hf-teal transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-4 py-6 space-y-4">
              {/* Home */}
              <Link
                to="/"
                className={cn(
                  "block text-base font-medium transition-colors hover:text-hf-teal",
                  location.pathname === '/' 
                    ? "text-hf-teal" 
                    : "text-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.home}
              </Link>

              {/* Services Collapsible */}
              <Collapsible open={isServicesOpen} onOpenChange={setIsServicesOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-medium transition-colors hover:text-hf-teal">
                  <span className={cn(isServicesActive && "text-hf-teal")}>
                    {t.nav.services}
                  </span>
                  <ChevronDown 
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isServicesOpen && "rotate-180"
                    )} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 ml-4 space-y-2 animate-accordion-down">
                  {servicesDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "flex items-center justify-between py-2 text-sm transition-colors hover:text-hf-teal",
                        location.pathname === item.href 
                          ? "text-hf-teal" 
                          : "text-muted-foreground"
                      )}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                    >
                      <span>{item.name}</span>
                      {item.comingSoon && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          {t.nav.comingSoon}
                        </span>
                      )}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Other Nav Items */}
              {navigationItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "block text-base font-medium transition-colors hover:text-hf-teal",
                    location.pathname === item.href 
                      ? "text-hf-teal" 
                      : "text-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                {/* Mobile Language Toggle */}
                <div className="flex items-center justify-center">
                  <LanguageToggle />
                </div>
                
                {/* Mobile Theme Toggle */}
                <div className="flex items-center justify-center">
                  <AnimatedThemeToggler theme={theme} onToggle={toggleTheme} />
                </div>
                
                <GradientButton 
                  variant="primary" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href="https://calendly.com/heyflou-ai/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.bookFreeCall}
                  </a>
                </GradientButton>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full hf-gradient text-white shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};
