import { useState } from 'react';
import { MessageCircle, GitBranch, Mail, ChevronRight } from 'lucide-react';
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

  const cards = [
    {
      id: 'whatsapp',
      icon: MessageCircle,
      tag: t.industrySystems.card1Tag,
      title: t.industrySystems.card1Title,
      description: t.industrySystems.card1Desc,
      bullet1: t.industrySystems.card1Bullet1,
      bullet2: {
        medical: t.industrySystems.card1Bullet2Medical,
        travel: t.industrySystems.card1Bullet2Travel,
        education: t.industrySystems.card1Bullet2Education,
      },
      bullet3: t.industrySystems.card1Bullet3,
      examples: {
        medical: t.industrySystems.card1ExMedical,
        travel: t.industrySystems.card1ExTravel,
        education: t.industrySystems.card1ExEducation,
      },
      automations: [
        t.industrySystems.card1Auto1,
        t.industrySystems.card1Auto2,
        t.industrySystems.card1Auto3,
        t.industrySystems.card1Auto4,
        t.industrySystems.card1Auto5,
        t.industrySystems.card1Auto6,
        t.industrySystems.card1Auto7,
      ],
    },
    {
      id: 'pipeline',
      icon: GitBranch,
      tag: t.industrySystems.card2Tag,
      title: t.industrySystems.card2Title,
      description: t.industrySystems.card2Desc,
      bullet1: t.industrySystems.card2Bullet1,
      bullet2: {
        medical: t.industrySystems.card2Bullet2Medical,
        travel: t.industrySystems.card2Bullet2Travel,
        education: t.industrySystems.card2Bullet2Education,
      },
      bullet3: t.industrySystems.card2Bullet3,
      examples: {
        medical: t.industrySystems.card2ExMedical,
        travel: t.industrySystems.card2ExTravel,
        education: t.industrySystems.card2ExEducation,
      },
      automations: [
        t.industrySystems.card2Auto1,
        t.industrySystems.card2Auto2,
        t.industrySystems.card2Auto3,
        t.industrySystems.card2Auto4,
        t.industrySystems.card2Auto5,
        t.industrySystems.card2Auto6,
        t.industrySystems.card2Auto7,
      ],
    },
    {
      id: 'crm',
      icon: Mail,
      tag: t.industrySystems.card3Tag,
      title: t.industrySystems.card3Title,
      description: t.industrySystems.card3Desc,
      bullet1: t.industrySystems.card3Bullet1,
      bullet2: {
        medical: t.industrySystems.card3Bullet2Medical,
        travel: t.industrySystems.card3Bullet2Travel,
        education: t.industrySystems.card3Bullet2Education,
      },
      bullet3: t.industrySystems.card3Bullet3,
      examples: {
        medical: t.industrySystems.card3ExMedical,
        travel: t.industrySystems.card3ExTravel,
        education: t.industrySystems.card3ExEducation,
      },
      automations: [
        t.industrySystems.card3Auto1,
        t.industrySystems.card3Auto2,
        t.industrySystems.card3Auto3,
        t.industrySystems.card3Auto4,
        t.industrySystems.card3Auto5,
        t.industrySystems.card3Auto6,
        t.industrySystems.card3Auto7,
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

        {/* Industry Tabs - Glass pill container */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="inline-flex p-1.5 bg-background/60 dark:bg-background/40 rounded-full border border-border/40 backdrop-blur-xl shadow-lg">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={cn(
                  "relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                  selectedIndustry === industry.id
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {selectedIndustry === industry.id && (
                  <motion.div
                    layoutId="industryTab"
                    className="absolute inset-0 hf-gradient rounded-full shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                    transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10">{industry.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Soft Connector Line */}
        <div className="hidden lg:flex justify-center items-center mb-8 px-8">
          <div className="flex items-center w-full max-w-5xl">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1 flex items-center">
                {i > 0 && <div className="flex-1 h-px bg-gradient-to-r from-border/60 to-border/30" />}
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-hf-teal/60 to-hf-teal/30 border-2 border-hf-teal/40 shadow-sm" />
                {i < 2 && <div className="flex-1 h-px bg-gradient-to-r from-border/30 to-border/60" />}
              </div>
            ))}
          </div>
        </div>

        {/* 3 Automation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group relative bg-gradient-to-b from-card to-card/80 rounded-2xl border border-border/30 p-7 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-hf-teal/5 hover:border-border/50"
              >
                {/* Tag */}
                <div className="mb-5">
                  <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-hf-teal/10 text-hf-teal border border-hf-teal/20">
                    {card.tag}
                  </span>
                </div>

                {/* Icon + Title Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl hf-gradient flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-hf-teal/20">
                    <Icon className="text-white" size={22} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-foreground leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                  {card.description}
                </p>

                {/* Bullets with dynamic #2 */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <ChevronRight className="w-4 h-4 text-hf-teal shrink-0 mt-0.5" />
                    <span>{card.bullet1}</span>
                  </li>
                  <AnimatePresence mode="wait">
                    <motion.li
                      key={selectedIndustry + '-bullet2'}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <ChevronRight className="w-4 h-4 text-hf-teal shrink-0 mt-0.5" />
                      <span>{card.bullet2[selectedIndustry]}</span>
                    </motion.li>
                  </AnimatePresence>
                  <li className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <ChevronRight className="w-4 h-4 text-hf-teal shrink-0 mt-0.5" />
                    <span>{card.bullet3}</span>
                  </li>
                </ul>

                {/* Industry Example Callout */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedIndustry}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="mb-6 p-4 bg-hf-teal/5 dark:bg-hf-teal/10 rounded-lg border-l-2 border-hf-teal/60"
                  >
                    <p className="text-xs font-medium text-hf-teal uppercase tracking-wide mb-1.5">
                      {t.industrySystems.exampleFor} {industries.find(i => i.id === selectedIndustry)?.label}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {card.examples[selectedIndustry]}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Accordion */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="automations" className="border-none">
                    <AccordionTrigger className="py-3 px-4 bg-muted/20 dark:bg-muted/10 rounded-lg hover:bg-muted/30 dark:hover:bg-muted/20 transition-colors hover:no-underline [&>svg]:text-hf-teal text-left">
                      <span className="text-sm font-medium text-foreground">
                        {t.industrySystems.coreAutomations}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3 pb-0">
                      <ul className="space-y-2 pl-1">
                        {card.automations.map((auto, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-hf-teal/50 shrink-0" />
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
        <div className="text-center mt-14 md:mt-20">
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
