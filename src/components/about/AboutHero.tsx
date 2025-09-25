import logoSvg from "@/assets/heyflou-logo.png";

export function AboutHero() {
  return (
    <section className="relative py-20 md:py-28 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--hf-glow)" }} />
      <h1 className="text-4xl md:text-5xl font-bold font-display text-hf-ink">About</h1>

      <img
        src={logoSvg}
        alt="HeyFlou AI Consulting logo"
        className="mx-auto mt-6 h-[112px] md:h-[144px] lg:h-[176px] w-auto drop-shadow-sm"
        loading="eager"
        decoding="async"
      />
    </section>
  );
}