import { useState } from 'react';
import { MessageSquare, BarChart3, Repeat, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/i18n';
import { cn } from '@/lib/utils';

type Industry = 'medical' | 'travel' | 'education';

export function IndustrySystems({ className }: { className?: string }) {
  const t = useTranslation();
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('medical');

  const industries: { id: Industry; label: string }[] = [
    { id: 'medical', label: t.industrySystems.medical },
    { id: 'travel', label: t.industrySystems.travel },
    { id: 'education', label: t.industrySystems.education },
  ];

  const pillars = [
    {
      id: 'capture',
      icon: MessageSquare,
      title: t.industrySystems.pillar1Title,
      description: t.industrySystems.pillar1Desc,
      bullets: [
        t.industrySystems.pillar1Bullet1,
        t.industrySystems.pillar1Bullet2,
        t.industrySystems.pillar1Bullet3,
      ],
      examples: {
        medical: t.industrySystems.pillar1ExMedical,
        travel: t.industrySystems.pillar1ExTravel,
        education: t.industrySystems.pillar1ExEducation,
      },
      automations: [
        t.industrySystems.pillar1Auto1,
        t.industrySystems.pillar1Auto2,
        t.industrySystems.pillar1Auto3,
        t.industrySystems.pillar1Auto4,
        t.industrySystems.pillar1Auto5,
        t.industrySystems.pillar1Auto6,
        t.industrySystems.pillar1Auto7,
      ],
    },
    {
      id: 'qualify',
      icon: BarChart3,
      title: t.industrySystems.pillar2Title,
      description: t.industrySystems.pillar2Desc,
      bullets: [
        t.industrySystems.pillar2Bullet1,
        t.industrySystems.pillar2Bullet2,
        t.industrySystems.pillar2Bullet3,
      ],
      examples: {
        medical: t.industrySystems.pillar2ExMedical,
        travel: t.industrySystems.pillar2ExTravel,
        education: t.industrySystems.pillar2ExEducation,
      },
      automations: [
        t.industrySystems.pillar2Auto1,
        t.industrySystems.pillar2Auto2,
        t.industrySystems.pillar2Auto3,
        t.industrySystems.pillar2Auto4,
        t.industrySystems.pillar2Auto5,
        t.industrySystems.pillar2Auto6,
        t.industrySystems.pillar2Auto7,
      ],
    },
    {
      id: 'convert',
      icon: Repeat,
      title: t.industrySystems.pillar3Title,
      description: t.industrySystems.pillar3Desc,
      bullets: [
        t.industrySystems.pillar3Bullet1,
        t.industrySystems.pillar3Bullet2,
        t.industrySystems.pillar3Bullet3,
      ],
      examples: {
        medical: t.industrySystems.pillar3ExMedical,
        travel: t.industrySystems.pillar3ExTravel,
        education: t.industrySystems.pillar3ExEducation,
      },
      automations: [
        t.industrySystems.pillar3Auto1,
        t.industrySystems.pillar3Auto2,
        t.industrySystems.pillar3Auto3,
        t.industrySystems.pillar3Auto4,
        t.industrySystems.pillar3Auto5,
        t.industrySystems.pillar3Auto6,
        t.industrySystems.pillar3Auto7,
      ],
    },
  ];

  return (
    <section className={cn("py-20 md:py-28", className)}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            {t.industrySystems.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.industrySystems.subtitle}
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="inline-flex p-1 bg-muted/50 dark:bg-muted/30 rounded-full border border-border/50 backdrop-blur-sm">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={cn(
                  "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                  selectedIndustry === industry.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {selectedIndustry === industry.id && (
                  <motion.div
                    layoutId="industryTab"
                    className="absolute inset-0 hf-gradient rounded-full"
                    transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10">{industry.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group relative bg-card rounded-2xl border border-border/50 p-6 md:p-8 hf-shadow hover:hf-shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl hf-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold font-display text-foreground mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6">
                  {pillar.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <ChevronRight className="w-4 h-4 text-hf-teal shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Industry Example */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedIndustry}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="mb-6 p-4 bg-muted/50 dark:bg-muted/30 rounded-lg border border-border/30"
                  >
                    <p className="text-xs font-medium text-hf-teal uppercase tracking-wide mb-1">
                      {t.industrySystems.exampleFor} {industries.find(i => i.id === selectedIndustry)?.label}
                    </p>
                    <p className="text-sm text-foreground/80">
                      {pillar.examples[selectedIndustry]}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Accordion */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="automations" className="border-none">
                    <AccordionTrigger className="py-3 px-4 bg-muted/30 dark:bg-muted/20 rounded-lg hover:bg-muted/50 dark:hover:bg-muted/30 transition-colors hover:no-underline [&>svg]:text-hf-teal">
                      <span className="text-sm font-medium text-foreground">
                        {t.industrySystems.coreAutomations}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3 pb-0">
                      <ul className="space-y-2">
                        {pillar.automations.map((auto, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-hf-teal/60 shrink-0" />
                            {auto}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GradientButton variant="hero" size="lg" asChild>
              <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
                {t.industrySystems.bookCall}
              </a>
            </GradientButton>
            <GradientButton variant="ghost" size="lg" asChild>
              <Link to="/case-studies">
                {t.industrySystems.seeCases}
              </Link>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
