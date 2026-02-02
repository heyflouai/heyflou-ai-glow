import { Section } from '@/components/ui/section';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { useTranslation } from '@/i18n';

export function HealthcareProblem() {
  const t = useTranslation();
  const hcT = t.healthcare as Record<string, string>;

  const problemText = hcT.problemText || 
    "Healthcare practices lose hours every week to appointment no-shows, manual intake forms, endless client follow-ups, and scheduling chaos. Your time should be spent healing patients, not chasing paperwork and phone calls.";

  return (
    <Section background="muted" padding="small" className="overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          {hcT.problemTitle}
        </h2>
      </div>
      <TextRevealByWord text={problemText} />
    </Section>
  );
}
