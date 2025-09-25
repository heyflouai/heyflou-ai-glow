import { useState } from 'react';
import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Calendar } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    industry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Client-side validation
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // TODO: Implement Supabase integration here
      console.log('Form data:', formData);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        employees: '',
        industry: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead 
        title="Contact HeyFlou - AI Consulting & Automation"
        description="Get in touch with HeyFlou for AI consulting, workflow automation, and team training. Book a strategy call or send us a message."
        canonical="https://heyflou.com/contact"
      />
      
      <main className="pt-16">
        <Section background="glow" padding="large">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-hf-ink mb-6">
              Let's Discuss Your AI Strategy
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to automate workflows and grow your business? Get in touch to start your 90-day AI transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 hf-shadow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-hf-ink mb-2">
                      Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hf-ink mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-hf-ink mb-2">
                      Company *
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Company name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hf-ink mb-2">
                      Team Size
                    </label>
                    <Select value={formData.employees} onValueChange={(value) => setFormData({...formData, employees: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="200+">200+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-hf-ink mb-2">
                    Industry
                  </label>
                  <Select value={formData.industry} onValueChange={(value) => setFormData({...formData, industry: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="services">Professional Services</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="logistics">Logistics</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-hf-ink mb-2">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your automation needs, current challenges, or questions..."
                    rows={4}
                    required
                  />
                </div>

                <GradientButton 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </GradientButton>
              </form>
            </div>

            {/* Contact Options */}
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-8 hf-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-hf-ink">
                      Book a Strategy Call
                    </h3>
                    <p className="text-muted-foreground">
                      30-minute consultation to discuss your needs
                    </p>
                  </div>
                </div>
                <GradientButton variant="secondary" size="lg" className="w-full" asChild>
                  <a href="https://calendly.com/heyflou/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Call
                  </a>
                </GradientButton>
              </div>

              <div className="bg-card rounded-xl p-8 hf-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-hf-ink">
                      Direct Email
                    </h3>
                    <p className="text-muted-foreground">
                      hello@heyflou.com
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}