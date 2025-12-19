import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, 
  Dumbbell, 
  Plane, 
  MessageCircle, 
  Database, 
  Calendar, 
  Link2, 
  Mail,
  Plus,
  X,
  Check
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

interface WorkflowDetails {
  features: string[];
  useCases: string[];
  timeline: string;
}

interface WorkflowCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  industries: Vertical[];
  tag: string;
  details: WorkflowDetails;
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
    details: {
      features: [
        '24/7 automated responses',
        'Lead qualification questions',
        'Instant appointment booking',
        'Integration with your calendar',
      ],
      useCases: [
        'Answer common questions about services and pricing',
        'Qualify new leads before they reach your team',
        'Book appointments directly from WhatsApp',
      ],
      timeline: '2-3 weeks to launch',
    },
  },
  {
    id: 'leads',
    icon: <Database className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Lead Management System',
    description: 'Track every contact and follow-up automatically. Never miss an opportunity.',
    industries: ['healthcare', 'fitness', 'travel'],
    tag: 'All Industries',
    details: {
      features: [
        'Automated contact tracking',
        'Follow-up reminders',
        'Lead scoring and prioritization',
        'Pipeline visualization',
      ],
      useCases: [
        'Never miss a follow-up with automated reminders',
        'See your entire pipeline at a glance',
        'Track lead source and conversion rates',
      ],
      timeline: '3-4 weeks to launch',
    },
  },
  {
    id: 'scheduling',
    icon: <Calendar className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Appointment Scheduling',
    description: 'Automated calendar booking with Google/Outlook sync and no-show reminders',
    industries: ['healthcare', 'fitness'],
    tag: 'Healthcare, Fitness',
    details: {
      features: [
        'Google/Outlook calendar sync',
        'Automated booking confirmations',
        'SMS/email reminders',
        'No-show reduction tools',
      ],
      useCases: [
        'Let clients book 24/7 without phone calls',
        'Reduce no-shows by 40% with automated reminders',
        'Sync across all your team calendars',
      ],
      timeline: '2-3 weeks to launch',
    },
  },
  {
    id: 'crm',
    icon: <Link2 className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'CRM Integration',
    description: 'Connect your existing tools and sync data automatically to one centralized system',
    industries: ['healthcare', 'fitness', 'travel'],
    tag: 'All Industries',
    details: {
      features: [
        'Connect existing tools (HubSpot, Salesforce, etc.)',
        'Automatic data sync',
        'Centralized client database',
        'Custom workflow automation',
      ],
      useCases: [
        'Stop manually entering data across systems',
        'Keep your entire team on the same page',
        'Trigger automated workflows based on client actions',
      ],
      timeline: '3-5 weeks to launch',
    },
  },
  {
    id: 'email-sms',
    icon: <Mail className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Email & SMS Automation',
    description: 'Personalized follow-up sequences, re-engagement campaigns, and booking confirmations',
    industries: ['healthcare', 'fitness', 'travel'],
    tag: 'All Industries',
    details: {
      features: [
        'Personalized message sequences',
        'Behavior-triggered campaigns',
        'Re-engagement automation',
        'Booking confirmation messages',
      ],
      useCases: [
        'Welcome new clients automatically',
        'Re-engage cold leads with targeted campaigns',
        'Send appointment reminders and confirmations',
      ],
      timeline: '2-3 weeks to launch',
    },
  },
];

interface ConnectionLine {
  id: string;
  path: string;
}

interface IndustriesWorkflowsProps {
  className?: string;
}

export function IndustriesWorkflows({ className }: IndustriesWorkflowsProps) {
  const [selectedVertical, setSelectedVertical] = useState<Vertical>('all');
  const [expandedWorkflow, setExpandedWorkflow] = useState<string | null>(null);
  const [connectionLines, setConnectionLines] = useState<ConnectionLine[]>([]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const verticalRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const workflowRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const filteredWorkflows = selectedVertical === 'all'
    ? workflows
    : workflows.filter(w => w.industries.includes(selectedVertical));

  const calculateConnectionLines = useCallback(() => {
    if (selectedVertical === 'all' || !containerRef.current) {
      setConnectionLines([]);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const verticalEl = verticalRefs.current.get(selectedVertical);
    
    if (!verticalEl) {
      setConnectionLines([]);
      return;
    }

    const verticalRect = verticalEl.getBoundingClientRect();
    const startX = verticalRect.left + verticalRect.width / 2 - containerRect.left;
    const startY = verticalRect.bottom - containerRect.top;

    const newLines: ConnectionLine[] = [];

    filteredWorkflows.forEach((workflow) => {
      const workflowEl = workflowRefs.current.get(workflow.id);
      if (!workflowEl) return;

      const workflowRect = workflowEl.getBoundingClientRect();
      const endX = workflowRect.left + workflowRect.width / 2 - containerRect.left;
      const endY = workflowRect.top - containerRect.top;

      // Create bezier curve path
      const midY = startY + (endY - startY) / 2;
      const path = `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
      
      newLines.push({ id: workflow.id, path });
    });

    setConnectionLines(newLines);
  }, [selectedVertical, filteredWorkflows]);

  useEffect(() => {
    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      calculateConnectionLines();
    }, 50);

    window.addEventListener('resize', calculateConnectionLines);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateConnectionLines);
    };
  }, [calculateConnectionLines, selectedVertical]);

  const handleVerticalClick = (vertical: Vertical) => {
    setExpandedWorkflow(null); // Collapse any expanded card
    setSelectedVertical(prev => prev === vertical ? 'all' : vertical);
  };

  const handleWorkflowClick = (workflowId: string) => {
    setExpandedWorkflow(prev => prev === workflowId ? null : workflowId);
  };

  // Collapse expanded workflow when filter changes
  useEffect(() => {
    setExpandedWorkflow(null);
  }, [selectedVertical]);

  return (
    <div ref={containerRef} className={cn('w-full relative', className)}>
      {/* SVG Connection Lines Layer */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--hf-teal))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--hf-purple))" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <AnimatePresence>
          {connectionLines.map((line, index) => (
            <motion.path
              key={line.id}
              d={line.path}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ pathLength: 0, opacity: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: "easeOut"
              }}
            />
          ))}
        </AnimatePresence>
      </svg>

      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
          Industries We Serve & What We Automate
        </h2>
        <p className="text-lg text-muted-foreground">
          Custom AI solutions for healthcare, fitness, and travel businesses. Choose your industry to see how we can help.
        </p>
      </div>

      {/* Vertical Cards - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 relative z-10">
        {verticals.map((vertical) => (
          <button
            key={vertical.id}
            ref={(el) => {
              if (el) verticalRefs.current.set(vertical.id, el);
            }}
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
      <div className="mb-12 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground text-center mb-8">
          Our Core Automations
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredWorkflows.map((workflow) => {
              const isExpanded = expandedWorkflow === workflow.id;
              
              return (
                <motion.div
                  key={workflow.id}
                  ref={(el) => {
                    if (el) workflowRefs.current.set(workflow.id, el);
                  }}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleWorkflowClick(workflow.id)}
                  className={cn(
                    'bg-card rounded-xl border cursor-pointer transition-all duration-300',
                    isExpanded 
                      ? 'border-hf-teal shadow-xl ring-2 ring-hf-teal/20 lg:col-span-1' 
                      : 'border-border/50 hover:shadow-lg hover:-translate-y-1'
                  )}
                  data-industries={workflow.industries.join(',')}
                >
                  <div className="p-6">
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-hf-sky">
                        {workflow.icon}
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-muted-foreground"
                      >
                        {isExpanded ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </motion.div>
                    </div>
                    
                    <h4 className="text-lg font-bold font-display text-foreground mb-2">
                      {workflow.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {workflow.description}
                    </p>
                    
                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="pt-4 border-t border-border/50 space-y-4">
                            {/* Key Features */}
                            <div>
                              <h5 className="text-sm font-semibold text-foreground mb-2">Key Features</h5>
                              <ul className="space-y-1.5">
                                {workflow.details.features.map((feature, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <Check className="w-4 h-4 text-hf-teal shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Use Cases */}
                            <div>
                              <h5 className="text-sm font-semibold text-foreground mb-2">Use Cases</h5>
                              <ul className="space-y-1.5">
                                {workflow.details.useCases.map((useCase, i) => (
                                  <li key={i} className="text-sm text-muted-foreground pl-4 border-l-2 border-hf-sky/30">
                                    "{useCase}"
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Timeline Badge */}
                            <div className="flex items-center gap-2">
                              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-hf-purple/10 text-hf-purple">
                                {workflow.details.timeline}
                              </span>
                            </div>
                            
                            {/* CTA Button */}
                            <GradientButton 
                              variant="hero" 
                              size="sm" 
                              className="w-full mt-2"
                              asChild
                            >
                              <Link to={`/contact?workflow=${workflow.id}`}>
                                Get This Automation
                              </Link>
                            </GradientButton>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Industry Tag - Only show when collapsed */}
                    {!isExpanded && (
                      <div className="flex items-center justify-between">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-hf-teal/10 text-hf-teal">
                          {workflow.tag}
                        </span>
                        <span className="text-xs text-muted-foreground">Learn more</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center pt-8 relative z-10">
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
