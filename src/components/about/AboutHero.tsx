import logoSvg from '@/assets/logo_heyflou.png';

export function AboutHero() {
  return (
    <section className="pt-16 pb-20 md:py-28">
      <div className="hf-glow absolute inset-0 -z-10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="mb-6">
          <img 
            src={logoSvg} 
            alt="HeyFlou logo" 
            className="h-16 mx-auto opacity-60"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-display text-hf-ink mb-6">
          About HeyFlou
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We help SMBs automate work with AI—safely, measurably, and fast.
        </p>
      </div>
    </section>
  );
}