import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { useTranslation } from '@/i18n';
import logo from '@/assets/heyflou-logo-new.png';

// Integration icons
const GoogleWorkspaceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
    <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
    <path fill="#2EB67D" d="M18.958 8.834a2.528 2.528 0 0 1 2.52-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.52V8.834zM17.687 8.834a2.528 2.528 0 0 1-2.521 2.521 2.527 2.527 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312z"/>
    <path fill="#ECB22E" d="M15.166 18.958a2.528 2.528 0 0 1 2.521 2.52A2.528 2.528 0 0 1 15.166 24a2.527 2.527 0 0 1-2.521-2.522v-2.52h2.521zM15.166 17.687a2.527 2.527 0 0 1-2.521-2.521 2.526 2.526 0 0 1 2.521-2.521h6.312A2.528 2.528 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.521h-6.312z"/>
  </svg>
);

const HubSpotIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF7A59">
    <path d="M18.164 7.93V5.085a2.198 2.198 0 001.267-1.978v-.067a2.2 2.2 0 00-2.197-2.197h-.067a2.2 2.2 0 00-2.197 2.197v.067c0 .87.507 1.617 1.24 1.974v2.85a6.015 6.015 0 00-2.89 1.392l-7.79-6.061a2.579 2.579 0 00.123-.778 2.608 2.608 0 10-2.608 2.608c.403 0 .782-.094 1.12-.258l7.634 5.941a6.01 6.01 0 00-.746 2.904c0 1.092.29 2.116.797 3.001l-2.444 2.444a1.792 1.792 0 00-.532-.086 1.82 1.82 0 101.82 1.82c0-.187-.036-.365-.09-.535l2.4-2.4a6.025 6.025 0 103.16-12.942z"/>
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

const ZapierIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF4A00">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.14 2.14 2.14 2.14a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06 0l-2.14-2.14-2.14 2.14a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 010-1.06l2.14-2.14-2.14-2.14a.75.75 0 010-1.06l1.06-1.06a.75.75 0 011.06 0l2.14 2.14 2.14-2.14a.75.75 0 011.06 0l1.06 1.06a.75.75 0 010 1.06z"/>
  </svg>
);

const N8nIcon = () => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
    <span className="text-white font-bold text-xs">n8n</span>
  </div>
);

const MakeIcon = () => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
    <span className="text-white font-bold text-xs">M</span>
  </div>
);

export function CustomIntegrations() {
  const t = useTranslation();
  const caT = t.customAutomation as Record<string, string>;

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
          {caT.integrationsTitle}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {caT.integrationsSubtitle}
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
            <SlackIcon />
          </div>
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={80}
        >
          <div className="flex items-center justify-center rounded-full bg-background p-2 shadow-md border border-border">
            <NotionIcon />
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
            <GoogleWorkspaceIcon />
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
            <HubSpotIcon />
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
            <StripeIcon />
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
            <ZapierIcon />
          </div>
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={30}
          delay={10}
          radius={200}
        >
          <div className="flex items-center justify-center rounded-full bg-background p-2 shadow-md border border-border">
            <N8nIcon />
          </div>
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={30}
          delay={20}
          radius={200}
        >
          <div className="flex items-center justify-center rounded-full bg-background p-2 shadow-md border border-border">
            <MakeIcon />
          </div>
        </OrbitingCircles>
      </div>

      {/* Subtext */}
      <motion.p
        className="text-center text-muted-foreground mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {caT.integrationsSubtext}
      </motion.p>
    </Section>
  );
}
