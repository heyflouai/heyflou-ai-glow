import { CompactForm } from '@/components/forms/CompactForm';
import { useTranslation } from '@/i18n';

export function CTAWithForm() {
  const t = useTranslation();
  
  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-secondary transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
            {t.about.ctaTitle}
          </h2>
        </div>
        
        <CompactForm sourcePage="about" />
      </div>
    </section>
  );
}