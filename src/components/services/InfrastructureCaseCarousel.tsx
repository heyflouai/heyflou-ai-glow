import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PinContainer } from '@/components/ui/3d-pin';
import { useTranslation } from '@/i18n';
import theraflouMark from '@/assets/theraflou-mark.svg';

const JAKARTA = '"Plus Jakarta Sans", sans-serif';
const INTER = 'Inter, sans-serif';
const DIRECTED_LOGO =
  'https://cloud-1de12d.becdn.net/media/original/0475dc58613950ec680c4b6dfacf516a/directed-empresas-negro-1-1.png';

type Slide = {
  id: string;
  brand: string;
  pinTitle: string;
  eyebrow: string;
  title: string;
  body: string;
  pills: string[];
  logo: React.ReactNode;
  footer: React.ReactNode;
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full"
      style={{
        background: 'rgba(31,166,193,0.12)',
        border: '1px solid rgba(31,166,193,0.3)',
        padding: '6px 14px',
        fontFamily: INTER,
        fontWeight: 600,
        color: '#1FA6C1',
        fontSize: 13,
      }}
    >
      ✦ {children}
    </span>
  );
}

export default function InfrastructureCaseCarousel() {
  const t = useTranslation();
  const c = (t.servicesInfrastructure as any).caseCarousel;

  const slides: Slide[] = [
    {
      id: 'theraflou',
      brand: 'TheraFlou',
      pinTitle: 'TheraFlou — Case Study',
      eyebrow: c.cards.theraflou.eyebrow,
      title: c.cards.theraflou.title,
      body: c.cards.theraflou.body,
      pills: [c.cards.theraflou.pill1, c.cards.theraflou.pill2, c.cards.theraflou.pill3],
      logo: (
        <img
          src={theraflouMark}
          alt="TheraFlou"
          className="h-40 w-auto drop-shadow-[0_0_20px_rgba(161,91,241,0.35)]"
        />
      ),
      footer: (
        <Link
          to="/#theraflou"
          className="inline-flex items-center transition-opacity hover:opacity-80"
          style={{ fontFamily: INTER, fontWeight: 600, color: '#1FA6C1', fontSize: 15 }}
        >
          {c.cards.theraflou.link}
        </Link>
      ),
    },
    {
      id: 'directed',
      brand: 'Directed Empresas',
      pinTitle: 'Directed Empresas — Case Study',
      eyebrow: c.cards.directed.eyebrow,
      title: c.cards.directed.title,
      body: c.cards.directed.body,
      pills: [c.cards.directed.pill1, c.cards.directed.pill2, c.cards.directed.pill3],
      logo: (
        <img
          src={DIRECTED_LOGO}
          alt="Directed Empresas"
          className="w-44 h-auto drop-shadow-[0_0_20px_rgba(31,166,193,0.35)]"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      ),
      footer: (
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16 }}>
          <p
            className="italic"
            style={{ fontFamily: INTER, fontWeight: 400, color: '#B8C5D6', fontSize: 14, lineHeight: 1.6 }}
          >
            "{c.cards.directed.quote}"
          </p>
          <p className="mt-2 text-white" style={{ fontFamily: INTER, fontWeight: 600, fontSize: 13 }}>
            {c.cards.directed.attribution}
          </p>
        </div>
      ),
    },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="relative max-w-[1100px] mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-12 items-center min-h-[460px]">
        {/* LEFT: TEXT */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-block rounded-full"
                  style={{ width: 8, height: 8, background: '#1FA6C1' }}
                />
                <span
                  className="text-white"
                  style={{ fontFamily: JAKARTA, fontWeight: 700, fontSize: 15 }}
                >
                  {slide.brand}
                </span>
              </div>
              <div
                className="mt-4 uppercase"
                style={{
                  fontFamily: INTER,
                  fontWeight: 600,
                  color: '#1FA6C1',
                  fontSize: 12,
                  letterSpacing: '2px',
                }}
              >
                {slide.eyebrow}
              </div>
              <h2
                className="mt-4 text-[26px] md:text-[34px] leading-[1.2] text-white"
                style={{ fontFamily: JAKARTA, fontWeight: 700 }}
              >
                {slide.title}
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.65] text-[#B8C5D6] max-w-[520px]"
                style={{ fontFamily: INTER, fontWeight: 400 }}
              >
                {slide.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {slide.pills.map((p) => (
                  <Pill key={p}>{p}</Pill>
                ))}
              </div>
              <div className="mt-7">{slide.footer}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: 3D PIN */}
        <div className="hidden md:flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + '-pin'}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <PinContainer title={slide.pinTitle}>
                <div className="flex flex-col p-4 tracking-tight text-slate-100/90 w-[18rem] h-[18rem]">
                  <h3
                    className="max-w-xs !pb-2 !m-0 font-bold text-base text-white"
                    style={{ fontFamily: JAKARTA }}
                  >
                    {slide.brand}
                  </h3>
                  <div className="text-xs !m-0 !p-0 font-normal" style={{ fontFamily: INTER }}>
                    <span className="text-slate-300">{slide.eyebrow}</span>
                  </div>
                  <div className="flex flex-1 w-full items-center justify-center rounded-lg mt-4 bg-gradient-to-br from-[#0F1729] via-[#1a2440] to-[#0F1729]">
                    {slide.logo}
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => go(-1)}
          className="flex items-center justify-center rounded-full transition-colors hover:bg-white/15"
          style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.08)' }}
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>

        <div className="flex items-center gap-3">
          {slides.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className="transition-all rounded-full"
                style={{
                  width: active ? 10 : 6,
                  height: active ? 10 : 6,
                  background: active
                    ? 'linear-gradient(135deg, #1FA6C1, #A15BF1)'
                    : 'rgba(255,255,255,0.25)',
                }}
              />
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Next"
          onClick={() => go(1)}
          className="flex items-center justify-center rounded-full transition-colors hover:bg-white/15"
          style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.08)' }}
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
}