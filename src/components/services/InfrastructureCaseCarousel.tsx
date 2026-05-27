import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/i18n';

const JAKARTA = '"Plus Jakarta Sans", sans-serif';
const INTER = 'Inter, sans-serif';
const DIRECTED_LOGO =
  'https://cloud-1de12d.becdn.net/media/original/0475dc58613950ec680c4b6dfacf516a/directed-empresas-negro-1-1.png';

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

function CardShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col h-full"
      style={{
        background: '#1A2540',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20,
        padding: '40px 36px',
        minHeight: 420,
      }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="uppercase"
      style={{ fontFamily: INTER, fontWeight: 600, color: '#1FA6C1', fontSize: 12, letterSpacing: '1.5px' }}
    >
      {children}
    </div>
  );
}

function Headline({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mt-3 text-white"
      style={{ fontFamily: JAKARTA, fontWeight: 700, fontSize: 26, lineHeight: 1.2 }}
    >
      {children}
    </h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mt-4"
      style={{ fontFamily: INTER, fontWeight: 400, color: '#B8C5D6', fontSize: 15, lineHeight: 1.6 }}
    >
      {children}
    </p>
  );
}

export default function InfrastructureCaseCarousel() {
  const t = useTranslation();
  const c = (t.servicesInfrastructure as any).caseCarousel;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    duration: 40,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [emblaApi, isPaused]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (i: number) => emblaApi?.scrollTo(i);

  const cards = [
    // THERAFLOU
    <CardShell key="theraflou">
      <div className="flex items-center gap-2">
        <span className="inline-block rounded-full" style={{ width: 8, height: 8, background: '#1FA6C1' }} />
        <span className="text-white" style={{ fontFamily: JAKARTA, fontWeight: 700, fontSize: 16 }}>
          TheraFlou
        </span>
      </div>
      <div className="mt-6">
        <Eyebrow>{c.cards.theraflou.eyebrow}</Eyebrow>
        <Headline>{c.cards.theraflou.title}</Headline>
        <Body>{c.cards.theraflou.body}</Body>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <Pill>{c.cards.theraflou.pill1}</Pill>
        <Pill>{c.cards.theraflou.pill2}</Pill>
        <Pill>{c.cards.theraflou.pill3}</Pill>
      </div>
      <div className="mt-auto pt-6">
        <Link
          to="/#theraflou"
          className="inline-flex items-center transition-opacity hover:opacity-80"
          style={{ fontFamily: INTER, fontWeight: 600, color: '#1FA6C1', fontSize: 14 }}
        >
          {c.cards.theraflou.link}
        </Link>
      </div>
    </CardShell>,
    // DIRECTED EMPRESAS
    <CardShell key="directed">
      <div className="flex items-center">
        <img
          src={DIRECTED_LOGO}
          alt="Directed Empresas"
          style={{ width: 130, height: 'auto', filter: 'brightness(0) invert(1)' }}
        />
      </div>
      <div className="mt-6">
        <Eyebrow>{c.cards.directed.eyebrow}</Eyebrow>
        <Headline>{c.cards.directed.title}</Headline>
        <Body>{c.cards.directed.body}</Body>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <Pill>{c.cards.directed.pill1}</Pill>
        <Pill>{c.cards.directed.pill2}</Pill>
        <Pill>{c.cards.directed.pill3}</Pill>
      </div>
      <div className="mt-auto pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 20 }}>
        <p
          className="italic"
          style={{ fontFamily: INTER, fontWeight: 400, color: '#B8C5D6', fontSize: 14, paddingTop: 20 }}
        >
          "{c.cards.directed.quote}"
        </p>
        <p className="mt-2 text-white" style={{ fontFamily: INTER, fontWeight: 600, fontSize: 13 }}>
          {c.cards.directed.attribution}
        </p>
      </div>
    </CardShell>,
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="pl-4 md:pl-6 shrink-0"
              style={{ flex: '0 0 100%' }}
            >
              <div className="md:max-w-[66%]">{card}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous"
        onClick={scrollPrev}
        className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-2 flex items-center justify-center rounded-full transition-colors hover:bg-white/15"
        style={{
          width: 44,
          height: 44,
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={scrollNext}
        className="absolute top-1/2 -translate-y-1/2 right-2 md:right-[34%] flex items-center justify-center rounded-full transition-colors hover:bg-white/15"
        style={{
          width: 44,
          height: 44,
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {cards.map((_, i) => {
          const active = i === selectedIndex;
          return (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className="transition-all rounded-full"
              style={{
                width: active ? 8 : 6,
                height: active ? 8 : 6,
                background: active
                  ? 'linear-gradient(135deg, #1FA6C1, #A15BF1)'
                  : 'rgba(255,255,255,0.2)',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}