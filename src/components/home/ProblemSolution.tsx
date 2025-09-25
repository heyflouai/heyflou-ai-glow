import React from 'react';
import { ClipboardList, Mail, GitBranch, AlarmClock, BarChart, UsersRound, Bot, Workflow, Shield, Gauge } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';
const NeuralPathSvg: React.FC = () => {
  return <div className="relative w-full h-80 flex items-center justify-center">
      {/* Glow background */}
      <div className="absolute inset-0 hf-glow rounded-full opacity-10"></div>
      
      {/* Neural path SVG */}
      <svg width="300" height="200" viewBox="0 0 300 200" className="relative z-10" aria-label="Abstract neural path graphic">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--hf-teal))" />
            <stop offset="50%" stopColor="hsl(var(--hf-purple))" />
            <stop offset="100%" stopColor="hsl(var(--hf-blue))" />
          </linearGradient>
          <linearGradient id="neuralGradientAnimated" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--hf-teal))" stopOpacity="0.8">
              <animate attributeName="stopOpacity" values="0.2;0.8;0.2" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="hsl(var(--hf-purple))" stopOpacity="0.6">
              <animate attributeName="stopOpacity" values="0.1;0.6;0.1" dur="8s" repeatCount="indefinite" begin="2s" />
            </stop>
            <stop offset="100%" stopColor="hsl(var(--hf-blue))" stopOpacity="0.4">
              <animate attributeName="stopOpacity" values="0.1;0.4;0.1" dur="8s" repeatCount="indefinite" begin="4s" />
            </stop>
          </linearGradient>
        </defs>
        
        {/* Main neural path */}
        <path d="M50 100 Q100 50 150 100 T250 100" stroke="url(#neuralGradient)" strokeWidth="3" fill="none" className="opacity-60" />
        
        {/* Animated path overlay */}
        <path d="M50 100 Q100 50 150 100 T250 100" stroke="url(#neuralGradientAnimated)" strokeWidth="2" fill="none" strokeDasharray="10,5" className="opacity-80">
          <animate attributeName="stroke-dashoffset" values="0;-100" dur="8s" repeatCount="indefinite" />
        </path>
        
        {/* Neural nodes */}
        <circle cx="50" cy="100" r="4" fill="url(#neuralGradient)" className="opacity-80">
          <animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="100" r="4" fill="url(#neuralGradient)" className="opacity-80">
          <animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite" begin="2s" />
        </circle>
        <circle cx="250" cy="100" r="4" fill="url(#neuralGradient)" className="opacity-80">
          <animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite" begin="1s" />
        </circle>
        
        {/* Branch connections */}
        <path d="M100 80 L120 60" stroke="url(#neuralGradient)" strokeWidth="2" opacity="0.4" />
        <path d="M150 120 L170 140" stroke="url(#neuralGradient)" strokeWidth="2" opacity="0.4" />
        <path d="M200 80 L220 60" stroke="url(#neuralGradient)" strokeWidth="2" opacity="0.4" />
      </svg>
    </div>;
};
export const ProblemSolution: React.FC = () => {
  const symptoms = [{
    icon: ClipboardList,
    text: "Manual copy-paste between CRM, email, sheets, and ERP"
  }, {
    icon: Mail,
    text: "Repetitive customer questions clogging support channels"
  }, {
    icon: GitBranch,
    text: "Inconsistent SOPs and 'tribal knowledge'"
  }, {
    icon: AlarmClock,
    text: "Delayed reporting and slow decision-making"
  }, {
    icon: BarChart,
    text: "Leads go cold; follow-ups are inconsistent"
  }, {
    icon: UsersRound,
    text: "Scaling ops requires headcount instead of smarter systems"
  }];
  const benefits = [{
    icon: Bot,
    text: "Automate repetitive tasks across tools (email, CRM, tickets, docs)"
  }, {
    icon: Workflow,
    text: "Human-in-the-loop approvals for accuracy and control"
  }, {
    icon: Shield,
    text: "Measurable time savings and fewer errors"
  }, {
    icon: Gauge,
    text: "Works with your systems via APIs and secure access"
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
  const stats = ["20+ hrs saved / employee / month", "~40% average productivity lift", "Support costs down ~50% with AI deflection"];
  return <div className="space-y-16">
      {/* Problem Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-medium text-hf-teal uppercase tracking-wide">
              The Problem We Solve
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink leading-tight">
              SMBs are stuck in manual work, fragmented tools, and costly errors.
            </h2>
            <p className="text-lg text-muted-foreground">
              Teams spend hours every week copying data between apps, replying to repetitive messages, and building reports by hand. Work slows, mistakes creep in, and scaling means hiring—rather than improving.
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
          <NeuralPathSvg />
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
            AI-powered workflows and agents that do the busywork—safely, and with oversight.
          </h3>
          <p className="text-lg text-muted-foreground">
            HeyFlou designs automations and AI agents that read context, take actions in your systems, and escalate edge cases to humans. We train your team and govern it with clear guardrails.
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
            Benchmarks from the HeyFlou SMB AI Analysis ('24–'25)—results vary.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-hf-ink/8"></div>

      {/* What We Do Section */}
      
    </div>;
};