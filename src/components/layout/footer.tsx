import { Link } from 'react-router-dom';
import { BrandLockup } from '@/components/BrandLockup';
import { GradientButton } from '@/components/ui/gradient-button';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'ROI Calculator', href: '/roi' }
];

export const Footer = () => {
  return (
    <footer className="bg-hf-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section with Lockup */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <BrandLockup className="text-white [&_span]:text-white" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              AI Consulting for SMB workflow automation.
            </p>
            
            
            {/* Email Capture */}
            <div className="max-w-sm">
              <p className="text-sm font-medium mb-2">Get AI insights</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-hf-teal"
                />
                <GradientButton variant="primary" size="sm">
                  Subscribe
                </GradientButton>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://calendly.com/salo-zayat/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Book Strategy Call
                </a>
              </li>
              <li>
                <Link 
                  to="/roi"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  ROI Calculator
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 HeyFlou. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            From audit to ROI in 90 days.
          </p>
        </div>
      </div>
    </footer>
  );
};