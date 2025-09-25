import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const navigationItems = [
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
  { name: 'ROI Calculator', href: '/roi' }
];

export const Footer = () => {
  return (
    <footer className="bg-hf-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 font-display font-bold text-xl mb-4">
              <div className="w-8 h-8 rounded-lg hf-gradient flex items-center justify-center text-white text-sm">
                HF
              </div>
              <span>HeyFlou</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              AI Consulting that automates work and grows your business. We design workflows, train teams, and deploy AI agents for SMBs.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail size={16} />
                <span>hello@heyflou.com</span>
              </div>
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
                  href="https://calendly.com/heyflou/30min"
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