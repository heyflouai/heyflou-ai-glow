import { SEOHead } from '@/components/ui/seo-head';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '@/i18n';

const PricingTier = ({ name, price, period, features, highlight = false }: {
  name: string; price: string; period?: string; features: string[]; highlight?: boolean;
}) => (
  <div className={`rounded-2xl border p-6 transition-all duration-200 ${highlight ? 'border-hf-teal bg-hf-teal/5 shadow-lg shadow-hf-teal/10' : 'border-border bg-card'}`}>
    <h4 className="text-lg font-semibold text-foreground mb-1">{name}</h4>
    <div className="flex items-baseline gap-1 mb-4">
      <span className="text-3xl font-bold text-foreground">{price}</span>
      {period && <span className="text-muted-foreground text-sm">{period}</span>}
    </div>
    <ul className="space-y-2">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <Check className="h-4 w-4 text-hf-teal mt-0.5 flex-shrink-0" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Native copy per language (Spanish written for a non-technical Mexican SMB owner).
const COPY = {
  en: {
    back: 'Back to Home',
    h1: 'Pricing',
    intro: 'We offer flexible plans for businesses of all sizes.',
    leadGen: 'Lead Generation',
    leadGenNote: 'Annual billing available (save 20%)',
    tiers: {
      starter: { name: 'Starter', features: ['100 leads/month', 'Basic filters'] },
      growth: { name: 'Growth', features: ['500 leads/month', 'Advanced filters', 'CRM export'] },
      pro: { name: 'Pro', features: ['Unlimited leads', 'API access', 'Priority support'] },
      basicBot: { name: 'Basic Bot', features: ['Single-channel chatbot', 'FAQ handling'] },
      advancedBot: { name: 'Advanced Bot', features: ['Multi-channel', 'Appointment booking', 'CRM integration'] },
      discovery: { name: 'Discovery Session', features: ['One-time strategic session'] },
      advisory: { name: 'Monthly Advisory', features: ['Ongoing AI strategy support'] },
    },
    perMonth: '/month',
    oneTime: ' one-time',
    ninetyMin: ' (90 min)',
    chatbot: 'AI Chatbot Setup',
    chatbotNote: 'Ongoing maintenance available from $99/month',
    workflow: 'Workflow Automation',
    workflowP1a: 'Custom pricing based on scope. Starting from ',
    workflowP1b: ' for simple automations.',
    workflowP2: 'Monthly retainer packages available for ongoing automation management.',
    consulting: 'AI Consulting',
    footerA: 'All prices in USD. Payments processed securely via Paddle. Contact ',
    footerB: ' for custom quotes.',
  },
  es: {
    back: 'Volver al inicio',
    h1: 'Precios',
    intro: 'Tenemos planes para negocios de cualquier tamaño. Tú eliges por dónde empezar.',
    leadGen: 'Captación de clientes',
    leadGenNote: 'Si pagas al año, ahorras 20%',
    tiers: {
      starter: { name: 'Inicial', features: ['100 prospectos al mes', 'Filtros básicos'] },
      growth: { name: 'Crecimiento', features: ['500 prospectos al mes', 'Filtros avanzados', 'Exporta a tu CRM'] },
      pro: { name: 'Pro', features: ['Prospectos sin límite', 'Conexión con tus sistemas', 'Soporte prioritario'] },
      basicBot: { name: 'Bot básico', features: ['Chatbot en un solo canal', 'Responde preguntas frecuentes'] },
      advancedBot: { name: 'Bot avanzado', features: ['Varios canales', 'Agenda citas', 'Se conecta a tu CRM'] },
      discovery: { name: 'Sesión de diagnóstico', features: ['Una sesión para definir el plan'] },
      advisory: { name: 'Asesoría mensual', features: ['Acompañamiento continuo en tu estrategia de IA'] },
    },
    perMonth: '/mes',
    oneTime: ' pago único',
    ninetyMin: ' (90 min)',
    chatbot: 'Chatbot con IA',
    chatbotNote: 'Mantenimiento desde $99 al mes',
    workflow: 'Automatización de procesos',
    workflowP1a: 'El precio depende de lo que necesites. Desde ',
    workflowP1b: ' para automatizaciones sencillas.',
    workflowP2: 'También manejamos paquetes mensuales para darle mantenimiento a tus automatizaciones.',
    consulting: 'Asesoría en IA',
    footerA: 'Todos los precios están en dólares. Los pagos se procesan de forma segura con Paddle. Escríbenos a ',
    footerB: ' si quieres una cotización a tu medida.',
  },
} as const;

const Pricing = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { language } = useLanguage();
  const c = COPY[language] ?? COPY.en;
  const homeLink = language === 'es' ? '/es' : '/';

  return (
    <>
      <SEOHead
        title="Pricing | HeyFlou"
        description="Flexible pricing plans for AI-powered lead generation, chatbots, workflow automation, and consulting services."
      />
      <section className="bg-background py-16 md:py-24 lg:py-32 min-h-screen">
        <div className="mx-auto max-w-[900px] px-5 md:px-6">
          <Link to={homeLink} className="inline-flex items-center gap-2 text-muted-foreground hover:text-hf-teal transition-colors mb-10 text-sm group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            {c.back}
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">{c.h1}</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">{c.intro}</p>

          {/* Lead Generation */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-2 font-heading">{c.leadGen}</h2>
            <p className="text-sm text-muted-foreground mb-6">{c.leadGenNote}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <PricingTier name={c.tiers.starter.name} price="$29" period={c.perMonth} features={[...c.tiers.starter.features]} />
              <PricingTier name={c.tiers.growth.name} price="$79" period={c.perMonth} features={[...c.tiers.growth.features]} highlight />
              <PricingTier name={c.tiers.pro.name} price="$199" period={c.perMonth} features={[...c.tiers.pro.features]} />
            </div>
          </div>

          {/* AI Chatbot Setup */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-2 font-heading">{c.chatbot}</h2>
            <p className="text-sm text-muted-foreground mb-6">{c.chatbotNote}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <PricingTier name={c.tiers.basicBot.name} price="$499" period={c.oneTime} features={[...c.tiers.basicBot.features]} />
              <PricingTier name={c.tiers.advancedBot.name} price="$999" period={c.oneTime} features={[...c.tiers.advancedBot.features]} highlight />
            </div>
          </div>

          {/* Workflow Automation */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">{c.workflow}</h2>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-muted-foreground mb-2">{c.workflowP1a}<span className="text-foreground font-semibold">$299</span>{c.workflowP1b}</p>
              <p className="text-muted-foreground">{c.workflowP2}</p>
            </div>
          </div>

          {/* AI Consulting */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">{c.consulting}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <PricingTier name={c.tiers.discovery.name} price="$149" period={c.ninetyMin} features={[...c.tiers.discovery.features]} />
              <PricingTier name={c.tiers.advisory.name} price="$499" period={c.perMonth} features={[...c.tiers.advisory.features]} />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <p className="text-muted-foreground text-sm">
              {c.footerA}
              <a href="mailto:support@heyflou.com" className="text-hf-teal hover:underline">support@heyflou.com</a>
              {c.footerB}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
