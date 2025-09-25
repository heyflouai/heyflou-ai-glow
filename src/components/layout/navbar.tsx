import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUp } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { BrandLockup } from '@/components/BrandLockup';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'ROI Calculator', href: '/roi' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' }
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

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

  return (
    <>
      {/* Preheader */}
      <div className="fixed top-0 left-0 right-0 z-50 h-9 bg-transparent border-b border-hf-ink/8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-xs font-medium text-hf-ink text-center md:text-left w-full md:w-auto">
            HeyFlou | AI Consulting
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={cn(
        "fixed top-9 left-0 right-0 z-50 transition-all duration-300",
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
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-hf-teal",
                    location.pathname === item.href 
                      ? "text-hf-teal" 
                      : "text-hf-ink"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <GradientButton 
                variant="primary" 
                size="sm" 
                asChild
              >
                <a href="https://calendly.com/heyflou/30min" target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call
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
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block text-base font-medium transition-colors hover:text-hf-teal",
                    location.pathname === item.href 
                      ? "text-hf-teal" 
                      : "text-hf-ink"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <GradientButton 
                  variant="primary" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href="https://calendly.com/heyflou/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book a Strategy Call
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