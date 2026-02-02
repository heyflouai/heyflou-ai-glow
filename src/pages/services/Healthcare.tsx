import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { 
  Calendar, 
  FileText, 
  Bell, 
  MessageSquare, 
  XCircle, 
  Clock,
  ChevronRight,
  Heart,
  Stethoscope
} from 'lucide-react';
import { useTranslation } from '@/i18n';
import { HealthcareHero } from '@/components/healthcare/HealthcareHero';
import { HealthcareProblem } from '@/components/healthcare/HealthcareProblem';
import { HealthcareSolution } from '@/components/healthcare/HealthcareSolution';
import { HealthcareIntegrations } from '@/components/healthcare/HealthcareIntegrations';
import { HealthcareCTA } from '@/components/healthcare/HealthcareCTA';
import { HealthcareContactForm } from '@/components/healthcare/HealthcareContactForm';
import { PAGE_SEO, getCanonicalUrl } from '@/lib/seo-config';

export default function Healthcare() {
  const t = useTranslation();

  return (
    <>
      <SEOHead 
        title="HeyFlou for Healthcare | AI Automation for Medical Practices"
        description="AI automation solutions for therapists, psychologists, physical therapists & private clinics. Automate appointments, intake forms, follow-ups and more."
        canonical={getCanonicalUrl('/services/healthcare')}
      />
      
      <main className="pt-16">
        <HealthcareHero />
        <HealthcareProblem />
        <HealthcareSolution />
        <HealthcareIntegrations />
        <HealthcareCTA />
        <HealthcareContactForm />
      </main>
    </>
  );
}
