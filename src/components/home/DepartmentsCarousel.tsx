import { useCallback } from 'react';
import { ChevronLeft, ChevronRight, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import { departments, type Dept } from '@/data/departments';
import { GradientButton } from '@/components/ui/gradient-button';
import { cn } from '@/lib/utils';
import { useInfiniteCarousel } from './useInfiniteCarousel';

interface DepartmentsCarouselProps {
  className?: string;
}

export function DepartmentsCarousel({ className }: DepartmentsCarouselProps) {
  const { tripled, index, baseIndex, goNext, goPrev, anim, trackRef, BASE, setIndex } =
    useInfiniteCarousel(departments);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goNext();
    }
  }, [goPrev, goNext]);

  const goToSlide = (slideIndex: number) => {
    // Move index to the corresponding slide within the middle block
    const middleStart = BASE; // start of middle block
    const target = middleStart + slideIndex;
    setIndex(target);
  };

  const handleCTAClick = (deptId: string, action: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ 
        event: "cta_click", 
        cta: action === 'primary' ? "dept_get_help" : "dept_see_automations", 
        deptId 
      });
    }
  };

  return (
    <div className={cn("relative", className)} onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Track wrapper */}
      <div className="overflow-hidden px-4 md:px-6">
        <div
          ref={trackRef}
          className={cn(
            "flex items-stretch gap-6 md:gap-8 will-change-transform",
            anim ? "transition-transform duration-500 ease-out" : "transition-none"
          )}
          style={{
            // Center the active card: translate by card width + gap times index
            transform: `translateX(calc(50% - (clamp(320px,85vw,720px) + 1.5rem) / 2 - ${index} * (clamp(320px,85vw,720px) + 1.5rem)))`,
          }}
        >
          {tripled.map((dept, i) => (
            <article
              key={`${dept.id}-${i}`}
              data-active={i === index}
              className={cn(
                "rounded-2xl hf-shadow bg-card border border-border",
                "basis-[clamp(320px,85vw,720px)] shrink-0 grow-0",
                "p-8",
                "transition-all duration-300",
                i === index 
                  ? "scale-100 opacity-100 hover:hf-shadow-lg hover:border-hf-teal/20" 
                  : "scale-[0.97] opacity-75"
              )}
              aria-label={`Slide ${((i % BASE) + BASE) % BASE + 1} of ${BASE}: ${dept.name}`}
              role="group"
            >
              {/* Department Name */}
              <div className="mb-4">
                <span className="text-sm font-medium text-hf-teal uppercase tracking-wide">
                  {dept.name}
                </span>
              </div>

              {/* Problem */}
              <div className="mb-6">
                <div className="flex items-start gap-2 mb-2">
                  <AlertTriangle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm font-semibold text-hf-navy">Problem</span>
                </div>
                <p className="text-hf-ink leading-relaxed">
                  {dept.problem}
                </p>
              </div>

              {/* Solutions */}
              <div className="mb-6">
                <div className="flex items-start gap-2 mb-3">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm font-semibold text-hf-navy">Solution</span>
                </div>
                <ul className="space-y-2">
                  {dept.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-hf-ink">
                      <span className="w-1 h-1 bg-hf-teal rounded-full mt-2 flex-shrink-0"></span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* KPIs */}
              <div className="mb-6">
                <div className="flex items-start gap-2 mb-3">
                  <TrendingUp size={16} className="text-hf-teal mt-1 flex-shrink-0" />
                  <span className="text-sm font-semibold text-hf-navy">KPIs</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {dept.kpis.map((kpi, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-hf-teal/10 to-hf-purple/10 text-hf-teal rounded-full border border-hf-teal/20"
                    >
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              {dept.integrations && dept.integrations.length > 0 && (
                <div className="mb-8">
                  <div className="text-xs text-muted-foreground mb-2">Integrations:</div>
                  <div className="flex flex-wrap gap-2">
                    {dept.integrations.map((integration, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded border"
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <GradientButton
                  variant="primary"
                  size="default"
                  asChild
                  className="flex-1"
                >
                  <a 
                    href="#questionnaire" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleCTAClick(dept.id, 'primary');
                      const questionnaire = document.getElementById('questionnaire') || document.getElementById('get-started');
                      questionnaire?.scrollIntoView({ behavior: 'smooth' });
                      // Set department in form if possible
                      setTimeout(() => {
                        const deptSelect = document.querySelector(`[name="department"]`) as HTMLSelectElement;
                        if (deptSelect) {
                          deptSelect.value = dept.id;
                          deptSelect.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                      }, 500);
                    }}
                  >
                    Get help for {dept.name}
                  </a>
                </GradientButton>
                <GradientButton
                  variant="ghost"
                  size="default"
                  asChild
                >
                  <a 
                    href={`/case-studies?dept=${dept.id}`}
                    onClick={() => handleCTAClick(dept.id, 'secondary')}
                  >
                    See automations
                  </a>
                </GradientButton>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-2 flex items-center">
        <button
          aria-label="Previous department"
          onClick={goPrev}
          className={cn(
            "h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm border border-border shadow-lg transition-all",
            "flex items-center justify-center hover:bg-white",
            "focus:outline-none focus:ring-2 focus:ring-hf-teal focus:ring-offset-2"
          )}
        >
          <ChevronLeft size={20} className="text-hf-ink" />
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-2 flex items-center">
        <button
          aria-label="Next department"
          onClick={goNext}
          className={cn(
            "h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm border border-border shadow-lg transition-all",
            "flex items-center justify-center hover:bg-white",
            "focus:outline-none focus:ring-2 focus:ring-hf-teal focus:ring-offset-2"
          )}
        >
          <ChevronRight size={20} className="text-hf-ink" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-2" aria-label="Slide navigation">
        {departments.map((_, d) => (
          <button
            key={d}
            aria-label={`Go to slide ${d + 1}`}
            aria-pressed={d === baseIndex}
            onClick={() => {
              goToSlide(d);
              (document.activeElement as HTMLElement)?.blur?.();
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-hf-teal focus:ring-offset-2",
              d === baseIndex 
                ? "bg-hf-teal w-8" 
                : "bg-border hover:bg-hf-teal/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}