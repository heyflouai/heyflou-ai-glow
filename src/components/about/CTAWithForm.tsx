import { CompactForm } from '@/components/forms/CompactForm';

export function CTAWithForm() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-secondary transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
            Ready to Save Time and Grow Your Practice?
          </h2>
        </div>
        
        <CompactForm sourcePage="about" />
      </div>
    </section>
  );
}