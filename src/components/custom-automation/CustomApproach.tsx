import { Section } from '@/components/ui/section';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { useTranslation } from '@/i18n';

export function CustomApproach() {
  const t = useTranslation();
  const caT = t.customAutomation as Record<string, string>;

  const approachText = caT.approachText || 
    "Every business is unique. That's why we don't offer cookie-cutter solutions. We start with deep discovery to understand your specific challenges, then design custom workflows that fit your exact needs. Our integrations are flexible, our approach is tailored, and your success is our measure.";

  return (
    <Section background="muted" padding="small" className="overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          {caT.approachTitle}
        </h2>
      </div>
      <TextRevealByWord text={approachText} />
    </Section>
  );
}
