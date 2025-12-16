import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLockup } from '@/components/BrandLockup';
import { GradientButton } from '@/components/ui/gradient-button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' }
];

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Step 1: Subscribe (insert to DB)
      const { data, error } = await supabase.functions.invoke('subscribe-newsletter', {
        body: { email: email.trim() }
      });

      if (error) {
        throw error;
      }

      if (data.code === 'ALREADY_SUBSCRIBED') {
        toast({
          title: "Already subscribed",
          description: data.message,
        });
      } else if (data.code === 'SUCCESS') {
        toast({
          title: "Subscribed!",
          description: data.message,
        });
        setEmail('');

        // Step 2: Send notification email (only for new subscribers)
        if (data.subscriber) {
          try {
            await supabase.functions.invoke('notify-new-subscriber', {
              body: {
                email: data.subscriber.email,
                created_at: data.subscriber.created_at
              }
            });
          } catch (notifyError) {
            // Log but don't show error to user - subscription was successful
            console.error('Failed to send notification:', notifyError);
          }
        }
      } else if (data.error) {
        throw new Error(data.error);
      }
    } catch (error: any) {
      console.error('Subscription error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              AI automation for therapists and service professionals. Save time, get more clients.
            </p>
            
            
            {/* Email Capture */}
            <div className="max-w-sm">
              <p className="text-sm font-medium mb-2">Get AI insights</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                  className="flex-1 px-3 py-2 text-sm bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-hf-teal disabled:opacity-50"
                />
                <GradientButton 
                  type="submit"
                  variant="primary" 
                  size="sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </GradientButton>
              </form>
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
                  href="https://calendly.com/heyflou-ai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Book Strategy Call
                </a>
              </li>
              <li className="pt-3">
                <a 
                  href="mailto:heyflou.ai@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-hf-teal transition-colors text-sm font-medium"
                  aria-label="Email us at heyflou.ai@gmail.com"
                >
                  <Mail className="h-4 w-4" />
                  <span>heyflou.ai@gmail.com</span>
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.linkedin.com/company/heyflou"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 text-gray-300 hover:bg-hf-teal hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="Visit our LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Heyflou_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 text-gray-300 hover:bg-hf-teal hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="Follow us on X"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 HeyFlou. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Transform your practice in 90 days.
          </p>
        </div>
      </div>
    </footer>
  );
};
