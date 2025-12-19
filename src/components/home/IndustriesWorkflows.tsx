import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, 
  Dumbbell, 
  Plane, 
  Grid3X3,
  MessageCircle, 
  Database, 
  Calendar, 
  Link2, 
  Mail, 
  CreditCard 
} from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { cn } from '@/lib/utils';

type Vertical = 'all' | 'healthcare' | 'fitness' | 'travel';

interface VerticalCard {
  id: Vertical;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WorkflowCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  industries: Vertical[];
  tag: string;
}

const verticals: VerticalCard[] = [
  {
    id: 'healthcare',
    icon: <Stethoscope className="w-10 h-10 md:w-12 md:h-12" />,
    title: 'Healthcare Practices',
    description: 'Medical practices, therapists, physical therapy clinics',
  },
  {
    id: 'fitness',
    icon: <Dumbbell className="w-10 h-10 md:w-12 md:h-12" />,
    title: 'Fitness & Education',
    description: 'Yoga studios, pilates, gyms, tutors, language schools',
  },
  {
    id: 'travel',
    icon: <Plane className="w-10 h-10 md:w-12 md:h-12" />,
    title: 'Travel Agencies',
    description: 'Travel agencies, tour operators, booking services',
  },
];

const workflows: WorkflowCard[] = [
  {
    id: 'whatsapp',
    icon: <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'WhatsApp AI Chatbot',
    description: 'Answer client questions 24/7, qualify leads, and book appointments instantly',
    industries: ['healthcare', 'fitness', 'travel'],
    tag: 'All Industries',
  },
  {
    id: 'leads',
    icon: <Database className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Lead Management System',
    description: 'Track every contact and follow-up automatically. Never miss an opportunity.',
    industries: ['healthcare', 'fitness', 'travel'],
    tag: 'All Industries',
  },
  {
    id: 'scheduling',
    icon: <Calendar className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Appointment Scheduling',
    description: 'Automated calendar booking with Google/Outlook sync and no-show reminders',
    industries: ['healthcare', 'fitness'],
    tag: 'Healthcare, Fitness',
  },
  {
    id: 'crm',
    icon: <Link2 className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'CRM Integration',
    description: 'Connect your existing tools and sync data automatically to one centralized system',
    industries: ['healthcare', 'fitness', 'travel'],
    tag: 'All Industries',
  },
  {
    id: 'email-sms',
    icon: <Mail className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Email & SMS Automation',
    description: 'Personalized follow-up sequences, re-engagement campaigns, and booking confirmations',
    industries: ['healthcare', 'fitness', 'travel'],
    tag: 'All Industries',
  },
  {
    id: 'payment',
    icon: <CreditCard className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Payment & Invoice Automation',
    description: 'Automated payment reminders, invoicing, and insurance processing',
    industries: ['healthcare', 'travel'],
    tag: 'Healthcare, Travel',
  },
];

interface IndustriesWorkflowsProps {
  className?: string;
}

export function IndustriesWorkflows({ className }: IndustriesWorkflowsProps) {
  const [selectedVertical, setSelectedVertical] = useState<Vertical>('all');

  const filteredWorkflows = selectedVertical === 'all'
    ? workflows
    : workflows.filter(w => w.industries.includes(selectedVertical));

  const handleVerticalClick = (vertical: Vertical) => {
    setSelectedVertical(prev => prev === vertical ? 'all' : vertical);
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
          Industries We Serve & What We Automate
        </h2>
        <p className="text-lg text-muted-foreground">
          Custom AI solutions for healthcare, fitness, and travel businesses. Choose your industry to see how we can help.
        </p>
      </div>

      {/* Vertical Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-16">
        {/* All Industries Card */}
        <button
          onClick={() => setSelectedVertical('all')}
          className={cn(
            'group relative bg-card rounded-xl p-6 md:p-8 border transition-all duration-300 cursor-pointer text-center',
            selectedVertical === 'all'
              ? 'border-hf-teal bg-hf-teal/5 shadow-lg ring-2 ring-hf-teal/20'
              : 'border-border/50 hover:border-hf-teal/50 hover:shadow-md hover:scale-[1.02]'
          )}
          data-vertical="all"
        >
          <div className={cn(
            'w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 flex items-center justify-center transition-colors',
            selectedVertical === 'all' ? 'text-hf-teal' : 'text-hf-sky group-hover:text-hf-teal'
          )}>
            <Grid3X3 className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <h3 className="text-lg md:text-xl font-bold font-display text-foreground mb-2">
            All Industries
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            View all automation workflows
          </p>
        </button>

        {/* Industry Vertical Cards */}
        {verticals.map((vertical) => (
          <button
            key={vertical.id}
            onClick={() => handleVerticalClick(vertical.id)}
            className={cn(
              'group relative bg-card rounded-xl p-6 md:p-8 border transition-all duration-300 cursor-pointer text-center',
              selectedVertical === vertical.id
                ? 'border-hf-teal bg-hf-teal/5 shadow-lg ring-2 ring-hf-teal/20'
                : 'border-border/50 hover:border-hf-teal/50 hover:shadow-md hover:scale-[1.02]'
            )}
            data-vertical={vertical.id}
          >
            <div className={cn(
              'w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 flex items-center justify-center transition-colors',
              selectedVertical === vertical.id ? 'text-hf-teal' : 'text-hf-sky group-hover:text-hf-teal'
            )}>
              {vertical.icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold font-display text-foreground mb-2">
              {vertical.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              {vertical.description}
            </p>
          </button>
        ))}
      </div>

      {/* Workflow Cards Section */}
      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground text-center mb-8">
          Our Core Automations
        </h3>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredWorkflows.map((workflow) => (
              <motion.div
                key={workflow.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                data-industries={workflow.industries.join(',')}
              >
                <div className="text-hf-sky mb-4">
                  {workflow.icon}
                </div>
                <h4 className="text-lg font-bold font-display text-foreground mb-2">
                  {workflow.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {workflow.description}
                </p>
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-hf-teal/10 text-hf-teal">
                  {workflow.tag}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="text-center pt-8">
        <p className="text-lg text-muted-foreground mb-4">
          Need a custom workflow? Let's talk.
        </p>
        <GradientButton variant="hero" size="lg" asChild>
          <Link to="/contact">Get Custom Solution</Link>
        </GradientButton>
      </div>
    </div>
  );
}
