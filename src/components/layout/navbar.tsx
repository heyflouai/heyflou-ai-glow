import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
  { name: 'ROI Calculator', href: '/roi' }
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-display font-bold text-xl text-hf-ink">
            <div className="w-8 h-8 rounded-lg hf-gradient flex items-center justify-center text-white text-sm">
              HF
            </div>
            <span>HeyFlou</span>
          </Link>

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
              variant="secondary" 
              size="sm" 
              asChild
            >
              <Link to="/contact">Get Started</Link>
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
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </GradientButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};