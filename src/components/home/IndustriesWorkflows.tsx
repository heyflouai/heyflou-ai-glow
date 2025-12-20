import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Dumbbell, Plane, MessageCircle, Database, Calendar, Link2, Mail, Plus, X, Check } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/i18n';

type Vertical = 'all' | 'healthcare' | 'fitness' | 'travel';

interface ConnectionLine { id: string; path: string; }
interface IndustriesWorkflowsProps { className?: string; }

export function IndustriesWorkflows({ className }: IndustriesWorkflowsProps) {
  const t = useTranslation();
  const [selectedVertical, setSelectedVertical] = useState<Vertical>('all');
  const [expandedWorkflow, setExpandedWorkflow] = useState<string | null>(null);
  const [connectionLines, setConnectionLines] = useState<ConnectionLine[]>([]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const verticalRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const workflowRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const verticals = [
    { id: 'healthcare' as Vertical, icon: <Stethoscope className="w-10 h-10 md:w-12 md:h-12" />, title: t.industries.healthcareTitle, description: t.industries.healthcareDesc },
    { id: 'fitness' as Vertical, icon: <Dumbbell className="w-10 h-10 md:w-12 md:h-12" />, title: t.industries.fitnessTitle, description: t.industries.fitnessDesc },
    { id: 'travel' as Vertical, icon: <Plane className="w-10 h-10 md:w-12 md:h-12" />, title: t.industries.travelTitle, description: t.industries.travelDesc },
  ];

  const workflows = [
    { id: 'whatsapp', icon: <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />, title: t.industries.whatsappTitle, description: t.industries.whatsappDesc, industries: ['healthcare', 'fitness', 'travel'] as Vertical[], tag: t.industries.whatsappTag, details: { features: [t.industries.whatsappFeature1, t.industries.whatsappFeature2, t.industries.whatsappFeature3, t.industries.whatsappFeature4], useCases: [t.industries.whatsappUseCase1, t.industries.whatsappUseCase2, t.industries.whatsappUseCase3], timeline: t.industries.whatsappTimeline } },
    { id: 'leads', icon: <Database className="w-8 h-8 md:w-10 md:h-10" />, title: t.industries.leadsTitle, description: t.industries.leadsDesc, industries: ['healthcare', 'fitness', 'travel'] as Vertical[], tag: t.industries.leadsTag, details: { features: [t.industries.leadsFeature1, t.industries.leadsFeature2, t.industries.leadsFeature3, t.industries.leadsFeature4], useCases: [t.industries.leadsUseCase1, t.industries.leadsUseCase2, t.industries.leadsUseCase3], timeline: t.industries.leadsTimeline } },
    { id: 'scheduling', icon: <Calendar className="w-8 h-8 md:w-10 md:h-10" />, title: t.industries.schedulingTitle, description: t.industries.schedulingDesc, industries: ['healthcare', 'fitness'] as Vertical[], tag: t.industries.schedulingTag, details: { features: [t.industries.schedulingFeature1, t.industries.schedulingFeature2, t.industries.schedulingFeature3, t.industries.schedulingFeature4], useCases: [t.industries.schedulingUseCase1, t.industries.schedulingUseCase2, t.industries.schedulingUseCase3], timeline: t.industries.schedulingTimeline } },
    { id: 'crm', icon: <Link2 className="w-8 h-8 md:w-10 md:h-10" />, title: t.industries.crmTitle, description: t.industries.crmDesc, industries: ['healthcare', 'fitness', 'travel'] as Vertical[], tag: t.industries.crmTag, details: { features: [t.industries.crmFeature1, t.industries.crmFeature2, t.industries.crmFeature3, t.industries.crmFeature4], useCases: [t.industries.crmUseCase1, t.industries.crmUseCase2, t.industries.crmUseCase3], timeline: t.industries.crmTimeline } },
    { id: 'email-sms', icon: <Mail className="w-8 h-8 md:w-10 md:h-10" />, title: t.industries.emailSmsTitle, description: t.industries.emailSmsDesc, industries: ['healthcare', 'fitness', 'travel'] as Vertical[], tag: t.industries.emailSmsTag, details: { features: [t.industries.emailSmsFeature1, t.industries.emailSmsFeature2, t.industries.emailSmsFeature3, t.industries.emailSmsFeature4], useCases: [t.industries.emailSmsUseCase1, t.industries.emailSmsUseCase2, t.industries.emailSmsUseCase3], timeline: t.industries.emailSmsTimeline } },
  ];

  const filteredWorkflows = selectedVertical === 'all' ? workflows : workflows.filter(w => w.industries.includes(selectedVertical));

  const calculateConnectionLines = useCallback(() => {
    if (selectedVertical === 'all' || !containerRef.current) { setConnectionLines([]); return; }
    const containerRect = containerRef.current.getBoundingClientRect();
    const verticalEl = verticalRefs.current.get(selectedVertical);
    if (!verticalEl) { setConnectionLines([]); return; }
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
      const midY = startY + (endY - startY) / 2;
      const path = `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
      newLines.push({ id: workflow.id, path });
    });
    setConnectionLines(newLines);
  }, [selectedVertical, filteredWorkflows]);

  useEffect(() => { const timer = setTimeout(() => { calculateConnectionLines(); }, 50); window.addEventListener('resize', calculateConnectionLines); return () => { clearTimeout(timer); window.removeEventListener('resize', calculateConnectionLines); }; }, [calculateConnectionLines, selectedVertical]);
  useEffect(() => { setExpandedWorkflow(null); }, [selectedVertical]);

  return (
    <div ref={containerRef} className={cn('w-full relative', className)}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="hsl(var(--hf-teal))" stopOpacity="0.8" /><stop offset="100%" stopColor="hsl(var(--hf-purple))" stopOpacity="0.8" /></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <AnimatePresence>{connectionLines.map((line, index) => (<motion.path key={line.id} d={line.path} fill="none" stroke="url(#lineGradient)" strokeWidth="2" filter="url(#glow)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} exit={{ pathLength: 0, opacity: 0 }} transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }} />))}</AnimatePresence>
      </svg>
      <div className="text-center max-w-4xl mx-auto mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">{t.industries.title}</h2>
        <p className="text-lg text-muted-foreground">{t.industries.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 relative z-10">
        {verticals.map((vertical) => (
          <button key={vertical.id} ref={(el) => { if (el) verticalRefs.current.set(vertical.id, el); }} onClick={() => setSelectedVertical(prev => prev === vertical.id ? 'all' : vertical.id)} className={cn('group relative bg-card rounded-xl p-6 md:p-8 border transition-all duration-300 cursor-pointer text-center', selectedVertical === vertical.id ? 'border-hf-teal bg-hf-teal/5 shadow-lg ring-2 ring-hf-teal/20' : 'border-border/50 hover:border-hf-teal/50 hover:shadow-md hover:scale-[1.02]')}>
            <div className={cn('w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 flex items-center justify-center transition-colors', selectedVertical === vertical.id ? 'text-hf-teal' : 'text-hf-sky group-hover:text-hf-teal')}>{vertical.icon}</div>
            <h3 className="text-lg md:text-xl font-bold font-display text-foreground mb-2">{vertical.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground">{vertical.description}</p>
          </button>
        ))}
      </div>
      <div className="mb-12 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground text-center mb-8">{t.industries.workflowsTitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredWorkflows.map((workflow) => {
              const isExpanded = expandedWorkflow === workflow.id;
              return (
                <motion.div key={workflow.id} ref={(el) => { if (el) workflowRefs.current.set(workflow.id, el); }} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} onClick={() => setExpandedWorkflow(prev => prev === workflow.id ? null : workflow.id)} className={cn('bg-card rounded-xl border cursor-pointer transition-all duration-300', isExpanded ? 'border-hf-teal shadow-xl ring-2 ring-hf-teal/20 lg:col-span-1' : 'border-border/50 hover:shadow-lg hover:-translate-y-1')}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4"><div className="text-hf-sky">{workflow.icon}</div><motion.div animate={{ rotate: isExpanded ? 45 : 0 }} transition={{ duration: 0.2 }} className="text-muted-foreground">{isExpanded ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}</motion.div></div>
                    <h4 className="text-lg font-bold font-display text-foreground mb-2">{workflow.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{workflow.description}</p>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden" onClick={(e) => e.stopPropagation()}>
                          <div className="pt-4 border-t border-border/50 space-y-4">
                            <div><h5 className="text-sm font-semibold text-foreground mb-2">{t.industries.keyFeatures}</h5><ul className="space-y-1.5">{workflow.details.features.map((feature, i) => (<li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="w-4 h-4 text-hf-teal shrink-0 mt-0.5" /><span>{feature}</span></li>))}</ul></div>
                            <div><h5 className="text-sm font-semibold text-foreground mb-2">{t.industries.useCases}</h5><ul className="space-y-1.5">{workflow.details.useCases.map((useCase, i) => (<li key={i} className="text-sm text-muted-foreground pl-4 border-l-2 border-hf-sky/30">"{useCase}"</li>))}</ul></div>
                            <div className="flex items-center gap-2"><span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-hf-purple/10 text-hf-purple">{workflow.details.timeline}</span></div>
                            <GradientButton variant="hero" size="sm" className="w-full mt-2" asChild><Link to={`/contact?workflow=${workflow.id}`}>{t.industries.getThisAutomation}</Link></GradientButton>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {!isExpanded && (<div className="flex items-center justify-between"><span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-hf-teal/10 text-hf-teal">{workflow.tag}</span><span className="text-xs text-muted-foreground">{t.industries.learnMore}</span></div>)}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      <div className="text-center pt-8 relative z-10"><p className="text-lg text-muted-foreground mb-4">{t.industries.customWorkflowText}</p><GradientButton variant="hero" size="lg" asChild><Link to="/contact">{t.industries.getCustomSolution}</Link></GradientButton></div>
    </div>
  );
}
