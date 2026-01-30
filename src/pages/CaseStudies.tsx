import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { useTranslation } from '@/i18n';
import { PAGE_SEO, getCanonicalUrl } from '@/lib/seo-config';

export default function CaseStudies() {
  const t = useTranslation();

  const caseStudies = [
    {
      id: "travel-agency-funnel",
      title: t.cases.travelAgencyBooking,
      industry: t.caseStudies.industryTravel,
      useCase: t.caseStudies.useCaseMarketingAutomation,
      challenge: t.cases.travelAgencyBookingChallenge,
      solution: t.cases.travelAgencyBookingSolution,
      outcome: t.cases.travelAgencyBookingOutcome,
      metrics: { primary: t.caseStudies.metrics62MoreBookings, secondary: t.caseStudies.metricsFullyAutomatedFunnel },
      tags: [t.caseStudies.tagMarketingFunnel, t.caseStudies.tagTravel, t.caseStudies.tagAutomation],
      featured: true
    },
    {
      id: "tour-operator-chatbot",
      title: t.cases.tourOperatorLead,
      industry: t.caseStudies.industryTravel,
      useCase: t.caseStudies.useCaseAiChatbot,
      challenge: t.cases.tourOperatorLeadChallenge,
      solution: t.cases.tourOperatorLeadSolution,
      outcome: t.cases.tourOperatorLeadOutcome,
      metrics: { primary: t.caseStudies.metrics3xMoreLeads, secondary: t.caseStudies.metricsAiWhatsappPromos },
      tags: [t.caseStudies.tagAiChatbot, t.caseStudies.tagWhatsApp, t.caseStudies.tagLeadGen],
      featured: true
    },
    {
      id: "physio-clinic-growth",
      title: t.cases.physioClinic,
      industry: t.caseStudies.industryHealthcare,
      useCase: t.caseStudies.useCasePatientAcquisition,
      challenge: t.cases.physioClinicChallenge,
      solution: t.cases.physioClinicSolution,
      outcome: t.cases.physioClinicOutcome,
      metrics: { primary: t.caseStudies.metrics95MoreClients, secondary: t.caseStudies.metricsConsistentGrowth },
      tags: [t.caseStudies.tagHealthcare, t.caseStudies.tagMarketing, t.caseStudies.tagAutomation],
      featured: true
    },
    {
      id: "luxury-travel-sales",
      title: t.cases.luxuryTravel,
      industry: t.caseStudies.industryTravel,
      useCase: t.caseStudies.useCaseHighTicketSales,
      challenge: t.cases.luxuryTravelChallenge,
      solution: t.cases.luxuryTravelSolution,
      outcome: t.cases.luxuryTravelOutcome,
      metrics: { primary: t.caseStudies.metrics53MoreHighTicketSales, secondary: t.caseStudies.metricsAutomatedNurturing },
      tags: [t.caseStudies.tagLuxuryTravel, t.caseStudies.tagSales, t.caseStudies.tagAutomation],
      featured: true
    },
    {
      id: "student-travel-marketing",
      title: t.cases.studentTravel,
      industry: t.caseStudies.industryTravel,
      useCase: t.caseStudies.useCaseCostReduction,
      challenge: t.cases.studentTravelChallenge,
      solution: t.cases.studentTravelSolution,
      outcome: t.cases.studentTravelOutcome,
      metrics: { primary: t.caseStudies.metrics37LowerCosts, secondary: t.caseStudies.metricsSameBookings },
      tags: [t.caseStudies.tagStudentTravel, t.caseStudies.tagAnalytics, t.caseStudies.tagOptimization],
      featured: false
    },
    {
      id: "cruise-agency-revival",
      title: t.cases.cruiseAgency,
      industry: t.caseStudies.industryTravel,
      useCase: t.caseStudies.useCaseLeadReengagement,
      challenge: t.cases.cruiseAgencyChallenge,
      solution: t.cases.cruiseAgencySolution,
      outcome: t.cases.cruiseAgencyOutcome,
      metrics: { primary: t.caseStudies.metrics31MoreSales, secondary: t.caseStudies.metricsColdLeadsRevived },
      tags: [t.caseStudies.tagCruise, t.caseStudies.tagReengagement, t.caseStudies.tagWhatsApp],
      featured: false
    },
    {
      id: "physio-marketing-roi",
      title: t.cases.physioMarketing,
      industry: t.caseStudies.industryHealthcare,
      useCase: t.caseStudies.useCaseMarketingRoi,
      challenge: t.cases.physioMarketingChallenge,
      solution: t.cases.physioMarketingSolution,
      outcome: t.cases.physioMarketingOutcome,
      metrics: { primary: t.caseStudies.metrics3xMarketingRoi, secondary: t.caseStudies.metricsClearAttribution },
      tags: [t.caseStudies.tagHealthcare, t.caseStudies.tagAnalytics, t.caseStudies.tagRoi],
      featured: false
    },
    {
      id: "therapist-content-funnel",
      title: t.cases.therapistContent,
      industry: t.caseStudies.industryHealthcare,
      useCase: t.caseStudies.useCaseContentMarketing,
      challenge: t.cases.therapistContentChallenge,
      solution: t.cases.therapistContentSolution,
      outcome: t.cases.therapistContentOutcome,
      metrics: { primary: t.caseStudies.metrics2xMoreInquiries, secondary: t.caseStudies.metricsContentChatbot },
      tags: [t.caseStudies.tagTherapist, t.caseStudies.tagContent, t.caseStudies.tagChatbot],
      featured: false
    }
  ];

  return (
    <>
      <SEOHead 
        title={PAGE_SEO.caseStudies.title}
        description={PAGE_SEO.caseStudies.description}
        canonical={getCanonicalUrl(PAGE_SEO.caseStudies.path)}
      />
      
      <main className="pt-16">
        <Section background="glow" padding="large">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
              {t.caseStudies.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.caseStudies.heroSubtitle}
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-card rounded-xl p-8 hf-shadow hover:hf-shadow-lg transition-all duration-300 border border-border/50">
                <div className="text-sm text-primary font-medium mb-2">
                  {caseStudy.industry} • {caseStudy.useCase}
                </div>
                <h2 className="text-xl font-bold font-display text-foreground mb-4">
                  {caseStudy.title}
                </h2>
                <div className="space-y-4 text-sm text-muted-foreground mb-6">
                  <div>
                    <strong className="text-foreground">{t.caseStudies.challenge}</strong> {caseStudy.challenge}
                  </div>
                  <div>
                    <strong className="text-foreground">{t.caseStudies.solution}</strong> {caseStudy.solution}
                  </div>
                  <div>
                    <strong className="text-foreground">{t.caseStudies.outcome}</strong> {caseStudy.outcome}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex space-x-4">
                    <div>
                      <div className="text-lg font-bold text-primary">
                        {caseStudy.metrics.primary}
                      </div>
                      {caseStudy.metrics.secondary && (
                        <div className="text-sm text-muted-foreground">
                          {caseStudy.metrics.secondary}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
