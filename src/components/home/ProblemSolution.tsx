import React from 'react';
import { ClipboardList, Mail, GitBranch, AlarmClock, BarChart, UsersRound, Bot, Workflow, Shield, Gauge } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';
import workflowDiagram from '@/assets/workflow-diagram.png';
const WorkflowDiagram: React.FC = () => {
  return <div className="relative w-full h-80 flex items-center justify-center">
      {/* Glow background */}
      <div className="absolute inset-0 hf-glow rounded-full opacity-10"></div>
      
      {/* Workflow diagram */}
      <img src={workflowDiagram} alt="Workflow automation diagram showing connected processes" className="relative z-10 max-w-full max-h-full object-contain" />
    </div>;
};
export const ProblemSolution: React.FC = () => {
  const symptoms = [{
    icon: ClipboardList,
    text: "Manually tracking clients in spreadsheets or notebooks"
  }, {
    icon: Mail,
    text: "Answering the same questions on WhatsApp over and over"
  }, {
    icon: GitBranch,
    text: "Double-booking appointments and missing follow-ups"
  }, {
    icon: AlarmClock,
    text: "Losing leads because you're too busy to respond fast"
  }, {
    icon: BarChart,
    text: "Spending more time on admin than actually serving clients"
  }, {
    icon: UsersRound,
    text: "Wanting to grow but drowning in manual work"
  }];
  const benefits = [{
    icon: Bot,
    text: "WhatsApp AI assistant answers client questions and books appointments 24/7"
  }, {
    icon: Workflow,
    text: "Automated lead management tracks every contact, follow-up, and reminder"
  }, {
    icon: Shield,
    text: "CRM integration syncs with your calendar and existing tools seamlessly"
  }, {
    icon: Gauge,
    text: "Save 10-20 hours per week with proven automation workflows"
  }];
  const stats = ["10-20 hours saved per week", "65% less admin workload", "40% faster response times"];
  return <div className="space-y-16">
      {/* Problem Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-medium text-hf-teal uppercase tracking-wide">
              The Problem We Solve
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink leading-tight">
              Small businesses waste hours on repetitive admin work instead of serving their clients.
            </h2>
            
          </div>

          <div className="space-y-4">
            {symptoms.map((symptom, index) => {
            const Icon = symptom.icon;
            return <div key={index} className="flex items-start gap-3 animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="w-5 h-5 mt-0.5 text-hf-teal flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <p className="text-muted-foreground">{symptom.text}</p>
                </div>;
          })}
          </div>
        </div>

        <div className="order-first md:order-last">
          <WorkflowDiagram />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-hf-ink/8"></div>

      {/* Solution Section */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-sm font-medium text-hf-teal uppercase tracking-wide">
            Our Solution
          </p>
          <h3 className="text-2xl md:text-3xl font-bold font-display text-hf-ink">
            AI automation that handles your busywork—so you can focus on your clients.
          </h3>
          <p className="text-lg text-muted-foreground">
            HeyFlou builds custom AI systems that work 24/7 for your business. From WhatsApp chatbots that answer common questions and book appointments automatically, to CRM integrations that track every lead and follow-up—we handle the repetitive work. You stay in control while AI takes care of the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return <div key={index} className="flex items-start gap-3 animate-fade-in" style={{
            animationDelay: `${(index + 6) * 0.1}s`
          }}>
                <div className="w-6 h-6 mt-0.5 text-hf-teal flex-shrink-0">
                  <Icon size={24} />
                </div>
                <p className="text-muted-foreground">{benefit.text}</p>
              </div>;
        })}
        </div>

        {/* Outcome Stats */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-3">
            {stats.map((stat, index) => <div key={index} className="px-4 py-2 bg-hf-teal/10 rounded-full text-sm font-medium text-hf-navy animate-fade-in" style={{
            animationDelay: `${(index + 10) * 0.1}s`
          }}>
                {stat}
              </div>)}
          </div>
          <p className="text-xs text-muted-foreground">
            Average results from real clients in healthcare, fitness, and service businesses—individual results may vary.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-hf-ink/8"></div>

      {/* What We Do Section */}
      
    </div>;
};