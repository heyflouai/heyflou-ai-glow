import { Section } from '@/components/ui/section';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { useTranslation } from '@/i18n';

export function ConsultingChallenge() {
  const t = useTranslation();
  const consulting = t.consulting as Record<string, string>;

  return (
    <Section background="default" padding="small" className="relative">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          {consulting.challengeTitle}
        </h2>
      </div>
      <TextRevealByWord text={consulting.challengeText} />
    </Section>
  );
}
