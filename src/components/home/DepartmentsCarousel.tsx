import { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import { departments, type Dept } from '@/data/departments';
import { GradientButton } from '@/components/ui/gradient-button';
import { cn } from '@/lib/utils';

interface DepartmentsCarouselProps {
  className?: string;
}

export function DepartmentsCarousel({ className }: DepartmentsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    
    const slideWidth = scrollContainerRef.current.scrollWidth / departments.length;
    const targetScroll = index * slideWidth;
    
    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    setCurrentSlide(index);
  }, []);

  const scrollLeft = useCallback(() => {
    const newIndex = Math.max(0, currentSlide - 1);
    scrollToSlide(newIndex);
  }, [currentSlide, scrollToSlide]);

  const scrollRight = useCallback(() => {
    const newIndex = Math.min(departments.length - 1, currentSlide + 1);
    scrollToSlide(newIndex);
  }, [currentSlide, scrollToSlide]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollLeft();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollRight();
    }
  }, [scrollLeft, scrollRight]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      updateScrollButtons();
      
      // Update active slide based on scroll position
      const slideWidth = container.scrollWidth / departments.length;
      const index = Math.round(container.scrollLeft / slideWidth);
      setCurrentSlide(index);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [updateScrollButtons]);

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
    <div className={cn("relative", className)}>
      {/* Navigation Buttons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={cn(
            "w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-border shadow-lg transition-all",
            "flex items-center justify-center hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed",
            "focus:outline-none focus:ring-2 focus:ring-hf-teal focus:ring-offset-2"
          )}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="text-hf-ink" />
        </button>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={cn(
            "w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-border shadow-lg transition-all",
            "flex items-center justify-center hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed",
            "focus:outline-none focus:ring-2 focus:ring-hf-teal focus:ring-offset-2"
          )}
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="text-hf-ink" />
        </button>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className={cn(
          "overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4",
          "relative"
        )}
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
        }}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Department automation solutions"
      >
        <div className="flex gap-6 px-6">
          {departments.map((dept, index) => (
            <div
              key={dept.id}
              className={cn(
                "min-w-[88%] md:min-w-[560px] lg:min-w-[640px] snap-start",
                "bg-card rounded-2xl p-8 hf-shadow hover:hf-shadow-lg transition-all duration-300",
                "border border-border hover:border-hf-teal/20"
              )}
              aria-label={`Slide ${index + 1} of ${departments.length}: ${dept.name}`}
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
                  onClick={() => handleCTAClick(dept.id, 'primary')}
                >
                  <a href="#questionnaire" onClick={(e) => {
                    e.preventDefault();
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
                  }}>
                    Get help for {dept.name}
                  </a>
                </GradientButton>
                <GradientButton
                  variant="ghost"
                  size="default"
                  asChild
                  onClick={() => handleCTAClick(dept.id, 'secondary')}
                >
                  <a href={`/case-studies?dept=${dept.id}`}>
                    See automations
                  </a>
                </GradientButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {departments.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-hf-teal focus:ring-offset-2",
              index === currentSlide 
                ? "bg-hf-teal w-8" 
                : "bg-border hover:bg-hf-teal/50"
            )}
            aria-pressed={index === currentSlide}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}