import React from 'react';
import { ClipboardList, Mail, GitBranch, AlarmClock, BarChart, UsersRound, Bot, Workflow, Shield, Gauge } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';
import workflowDiagram from '@/assets/workflow-diagram.png';
const WorkflowDiagram: React.FC = () => {
  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      {/* Glow background */}
      <div className="absolute inset-0 hf-glow rounded-full opacity-10"></div>
      
      {/* Workflow diagram */}
      <img 
        src={workflowDiagram} 
        alt="Workflow automation diagram showing connected processes" 
        className="relative z-10 max-w-full max-h-full object-contain"
      />
    </div>
  );
};
export const ProblemSolution: React.FC = () => {
  const symptoms = [{
    icon: ClipboardList,
    text: "Manually scheduling and rescheduling appointments all day"
  }, {
    icon: Mail,
    text: "Answering the same client questions over and over"
  }, {
    icon: GitBranch,
    text: "Losing track of leads and follow-ups in spreadsheets"
  }, {
    icon: AlarmClock,
    text: "Missing new inquiries because you're too busy"
  }, {
    icon: BarChart,
    text: "Spending more time on admin than serving clients"
  }, {
    icon: UsersRound,
    text: "Wanting to grow but can't handle more manual work"
  }];
  const benefits = [{
    icon: Bot,
    text: "AI chatbot handles client communication and booking 24/7"
  }, {
    icon: Workflow,
    text: "Automated CRM tracks every lead, follow-up, and opportunity"
  }, {
    icon: Shield,
    text: "Save 10-20 hours per week with proven automation"
  }, {
    icon: Gauge,
    text: "Integrates seamlessly with your calendar and existing tools"
  }];
  const services = [{
    title: "Workflow Automation",
    description: "Email triage, invoice handling, reporting, routing.",
    outcome: "Cut busywork and cycle times."
  }, {
    title: "AI Training for Teams",
    description: "Role-based playbooks, prompt ops, governance.",
    outcome: "Confident, safe day-to-day AI use."
  }, {
    title: "AI Agents for Your Business",
    description: "Agents that follow SOPs, execute tasks, and log everything.",
    outcome: "Reliable execution without adding headcount."
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
              Therapists and service professionals waste hours on admin work instead of serving clients.
            </h2>
            <p className="text-lg text-muted-foreground">
              Every day you spend hours scheduling appointments, following up with clients, answering the same questions, and managing your CRM manually. Work piles up, opportunities are missed, and you're stuck doing tasks that don't grow your practice.
            </p>
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
            HeyFlou builds AI systems that talk to clients 24/7, schedule appointments automatically, manage your CRM, and nurture leads until they book. You stay in control while AI handles the repetitive work.
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
            Average results from real therapy practices and service businesses—individual results may vary.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-hf-ink/8"></div>

      {/* What We Do Section */}
      
    </div>;
};