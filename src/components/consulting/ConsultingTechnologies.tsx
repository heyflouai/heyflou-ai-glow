import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import OrbitingCircles from '@/components/ui/orbiting-circles';
import { useTranslation } from '@/i18n';
import heyFlouLogo from '@/assets/heyflou-logo-new.png';

export function ConsultingTechnologies() {
  const t = useTranslation();
  const consulting = t.consulting as Record<string, string>;

  const innerTools = ['OpenAI', 'Claude', 'n8n', 'Make'];
  const outerTools = ['HubSpot', 'Notion', 'Custom APIs', 'Zapier'];

  return (
    <Section background="default" id="technologies">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            {consulting.technologiesTitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {consulting.technologiesSubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden"
        >
          {/* Center Logo */}
          <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-background border border-border shadow-lg">
            <img src={heyFlouLogo} alt="HeyFlou" className="h-10 w-10 object-contain" />
          </div>

          {/* Inner orbit */}
          {innerTools.map((tool, i) => (
            <OrbitingCircles
              key={tool}
              className="size-12 border-none bg-card shadow-md"
              duration={25}
              delay={i * 6}
              radius={90}
            >
              <span className="text-xs font-medium text-foreground">{tool}</span>
            </OrbitingCircles>
          ))}

          {/* Outer orbit */}
          {outerTools.map((tool, i) => (
            <OrbitingCircles
              key={tool}
              className="size-14 border-none bg-card shadow-md"
              duration={35}
              delay={i * 8}
              radius={160}
              reverse
            >
              <span className="text-xs font-medium text-foreground">{tool}</span>
            </OrbitingCircles>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
