import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { useTranslation } from '@/i18n';

export default function CaseStudies() {
  const t = useTranslation();

  const caseStudies = [
    {
      id: "travel-agency-funnel",
      title: t.cases.travelAgencyBooking,
      industry: "Travel",
      useCase: "Marketing Automation",
      challenge: t.cases.travelAgencyBookingChallenge,
      solution: t.cases.travelAgencyBookingSolution,
      outcome: t.cases.travelAgencyBookingOutcome,
      metrics: { primary: "62% more bookings", secondary: "Fully automated funnel" },
      tags: ["Marketing Funnel", "Travel", "Automation"],
      featured: true
    },
    {
      id: "tour-operator-chatbot",
      title: t.cases.tourOperatorLead,
      industry: "Travel",
      useCase: "AI Chatbot",
      challenge: t.cases.tourOperatorLeadChallenge,
      solution: t.cases.tourOperatorLeadSolution,
      outcome: t.cases.tourOperatorLeadOutcome,
      metrics: { primary: "3× more leads", secondary: "AI + WhatsApp promos" },
      tags: ["AI Chatbot", "WhatsApp", "Lead Gen"],
      featured: true
    },
    {
      id: "physio-clinic-growth",
      title: t.cases.physioClinic,
      industry: "Healthcare",
      useCase: "Patient Acquisition",
      challenge: t.cases.physioClinicChallenge,
      solution: t.cases.physioClinicSolution,
      outcome: t.cases.physioClinicOutcome,
      metrics: { primary: "95% more clients", secondary: "Consistent growth" },
      tags: ["Healthcare", "Marketing", "Automation"],
      featured: true
    },
    {
      id: "luxury-travel-sales",
      title: t.cases.luxuryTravel,
      industry: "Travel",
      useCase: "High-Ticket Sales",
      challenge: t.cases.luxuryTravelChallenge,
      solution: t.cases.luxuryTravelSolution,
      outcome: t.cases.luxuryTravelOutcome,
      metrics: { primary: "53% more high-ticket sales", secondary: "Automated nurturing" },
      tags: ["Luxury Travel", "Sales", "Automation"],
      featured: true
    },
    {
      id: "student-travel-marketing",
      title: t.cases.studentTravel,
      industry: "Travel",
      useCase: "Cost Reduction",
      challenge: t.cases.studentTravelChallenge,
      solution: t.cases.studentTravelSolution,
      outcome: t.cases.studentTravelOutcome,
      metrics: { primary: "37% lower costs", secondary: "Same bookings" },
      tags: ["Student Travel", "Analytics", "Optimization"],
      featured: false
    },
    {
      id: "cruise-agency-revival",
      title: t.cases.cruiseAgency,
      industry: "Travel",
      useCase: "Lead Re-engagement",
      challenge: t.cases.cruiseAgencyChallenge,
      solution: t.cases.cruiseAgencySolution,
      outcome: t.cases.cruiseAgencyOutcome,
      metrics: { primary: "31% more sales", secondary: "Cold leads revived" },
      tags: ["Cruise", "Re-engagement", "WhatsApp"],
      featured: false
    },
    {
      id: "physio-marketing-roi",
      title: t.cases.physioMarketing,
      industry: "Healthcare",
      useCase: "Marketing ROI",
      challenge: t.cases.physioMarketingChallenge,
      solution: t.cases.physioMarketingSolution,
      outcome: t.cases.physioMarketingOutcome,
      metrics: { primary: "3× marketing ROI", secondary: "Clear attribution" },
      tags: ["Healthcare", "Analytics", "ROI"],
      featured: false
    },
    {
      id: "therapist-content-funnel",
      title: t.cases.therapistContent,
      industry: "Healthcare",
      useCase: "Content Marketing",
      challenge: t.cases.therapistContentChallenge,
      solution: t.cases.therapistContentSolution,
      outcome: t.cases.therapistContentOutcome,
      metrics: { primary: "2× more inquiries", secondary: "Content + chatbot" },
      tags: ["Therapist", "Content", "Chatbot"],
      featured: false
    }
  ];

  return (
    <>
      <SEOHead 
        title="Success Stories - Travel Agencies & Healthcare | HeyFlou"
        description="Real results from travel agencies and healthcare practices using AI marketing automation to grow bookings and clients."
        canonical="https://heyflou.com/case-studies"
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
                    {caseStudy.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
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
