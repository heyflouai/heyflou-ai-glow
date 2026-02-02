import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { 
  OrbitingCircles, 
  CenterLogo, 
  IntegrationsBackground,
  AnimatedUnderline 
} from '@/components/ui/orbiting-circles';
import { useTranslation } from '@/i18n';
import heyFlouLogo from '@/assets/heyflou-logo-new.png';

// Tool icons with hover effects
const ToolIcon = ({ name }: { name: string }) => (
  <motion.div 
    className="group/tool relative flex items-center justify-center rounded-full bg-background p-2 border border-border cursor-pointer shadow-md hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
    whileHover={{ scale: 1.2, rotate: 5 }}
    transition={{ duration: 0.2 }}
  >
    <span className="text-xs font-medium text-foreground whitespace-nowrap">{name}</span>
    
    {/* Tooltip */}
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/tool:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
      <div className="bg-popover text-popover-foreground text-xs font-medium px-2 py-1 rounded-md shadow-lg whitespace-nowrap border border-border">
        {name}
      </div>
    </div>
  </motion.div>
);

export function ConsultingTechnologies() {
  const t = useTranslation();
  const consulting = t.consulting as Record<string, string>;

  const innerTools = ['OpenAI', 'Claude', 'n8n', 'Make'];
  const outerTools = ['HubSpot', 'Notion', 'Custom APIs', 'Zapier'];

  return (
    <Section background="default" id="technologies" padding="large">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            <AnimatedUnderline>{consulting.technologiesTitle}</AnimatedUnderline>
          </h2>
          <p className="text-lg text-muted-foreground">
            {consulting.technologiesSubtitle}
          </p>
        </motion.div>

        <IntegrationsBackground>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden"
          >
            {/* Center Logo with Glow */}
            <CenterLogo logo={heyFlouLogo} alt="HeyFlou" />

            {/* Inner orbit */}
            {innerTools.map((tool, i) => (
              <OrbitingCircles
                key={tool}
                className="size-12 border-none bg-transparent"
                duration={25}
                delay={i * 6}
                radius={90}
                dashedPath={i === 0}
                glowPath={i === 0}
                path={i === 0}
              >
                <ToolIcon name={tool} />
              </OrbitingCircles>
            ))}

            {/* Outer orbit */}
            {outerTools.map((tool, i) => (
              <OrbitingCircles
                key={tool}
                className="size-14 border-none bg-transparent"
                duration={35}
                delay={i * 8}
                radius={160}
                reverse
                dashedPath={i === 0}
                glowPath={i === 0}
                path={i === 0}
                hideOnMobile={i > 1}
              >
                <ToolIcon name={tool} />
              </OrbitingCircles>
            ))}
          </motion.div>
        </IntegrationsBackground>
      </div>
    </Section>
  );
}
