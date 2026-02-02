import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { useTranslation } from '@/i18n';
import logo from '@/assets/heyflou-logo-new.png';

// Integration icons as simple components
const GoogleCalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#4285F4" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10z"/>
    <path fill="#fff" d="M12 6v6l4 2"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0088cc">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const NotionIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="currentColor" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.187 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.454-.233 4.763 7.278v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM2.83.56l13.028-.84c1.682-.14 2.102-.047 3.127.7l4.296 3.013c.7.513.934.653.934 1.213v16.38c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.127-4.06c-.56-.747-.793-1.306-.793-1.96V2.667C1.197 1.54 1.57.7 2.83.56z"/>
  </svg>
);

const StripeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#635BFF">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
  </svg>
);

const ZoomIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#2D8CFF">
    <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-5.2-1.9l-3.6 2.7V9.2c0-.6-.5-1.1-1.1-1.1H6.2c-.6 0-1.1.5-1.1 1.1v5.6c0 .6.5 1.1 1.1 1.1h7.9c.6 0 1.1-.5 1.1-1.1v-3.6l3.6 2.7c.2.1.5.1.6-.1.1-.1.1-.2.1-.3V10.4c0-.2-.1-.3-.2-.4-.1-.1-.3-.1-.5 0z"/>
  </svg>
);

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

export function HealthcareIntegrations() {
  const t = useTranslation();
  const hcT = t.healthcare as Record<string, string>;

  return (
    <Section background="muted" padding="large">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
          {hcT.integrationsTitle}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {hcT.integrationsSubtitle}
        </p>
      </motion.div>

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        {/* Center Logo */}
        <div className="z-10 flex h-20 w-20 items-center justify-center rounded-full border border-border bg-background shadow-lg">
          <img src={logo} alt="HeyFlou" className="h-12 w-auto" />
        </div>

        {/* Inner Orbit */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={20}
          delay={0}
          radius={80}
        >
          <div className="flex items-center justify-center rounded-full bg-background p-2 shadow-md border border-border">
            <WhatsAppIcon />
          </div>
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={80}
        >
          <div className="flex items-center justify-center rounded-full bg-background p-2 shadow-md border border-border">
            <TelegramIcon />
          </div>
        </OrbitingCircles>

        {/* Middle Orbit */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={25}
          delay={0}
          radius={140}
          reverse
        >
          <div className="flex items-center justify-center rounded-full bg-background p-2 shadow-md border border-border">
            <GoogleCalendarIcon />
          </div>
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={25}
          delay={8}
          radius={140}
          reverse
        >
          <div className="flex items-center justify-center rounded-full bg-background p-2 shadow-md border border-border">
            <ZoomIcon />
          </div>
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={25}
          delay={16}
          radius={140}
          reverse
        >
          <div className="flex items-center justify-center rounded-full bg-background p-2 shadow-md border border-border">
            <GmailIcon />
          </div>
        </OrbitingCircles>

        {/* Outer Orbit */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={30}
          delay={0}
          radius={200}
        >
          <div className="flex items-center justify-center rounded-full bg-background p-2 shadow-md border border-border">
            <NotionIcon />
          </div>
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={30}
          delay={15}
          radius={200}
        >
          <div className="flex items-center justify-center rounded-full bg-background p-2 shadow-md border border-border">
            <StripeIcon />
          </div>
        </OrbitingCircles>
      </div>
    </Section>
  );
}
