import { Section } from '@/components/ui/section';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { useTranslation } from '@/i18n';

export function FitnessProblem() {
  const t = useTranslation();
  const feT = t.fitnessEducation as Record<string, string>;

  const problemText = feT.problemText || 
    "Fitness studios and educational institutions struggle with class booking chaos, membership renewals falling through the cracks, trial class follow-ups that never happen, complex student onboarding, and constant schedule changes. Your focus should be on training and teaching, not drowning in admin work.";

  return (
    <Section background="muted" padding="small" className="overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          {feT.problemTitle}
        </h2>
      </div>
      <TextRevealByWord text={problemText} className="h-[150vh] md:h-[200vh]" />
    </Section>
  );
}
