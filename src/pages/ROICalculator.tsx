import { useState } from 'react';
import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { Input } from '@/components/ui/input';
import { Calculator } from 'lucide-react';

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    teamSize: 10,
    hourlyRate: 25,
    hoursSaved: 20,
    revenueLift: 3
  });

  const monthlySavings = inputs.teamSize * inputs.hourlyRate * inputs.hoursSaved;
  const annualSavings = monthlySavings * 12;
  const revenueIncrease = (annualSavings * 4) * (inputs.revenueLift / 100); // Assuming 4x annual savings as baseline revenue
  const totalBenefit = annualSavings + revenueIncrease;
  const paybackMonths = 15000 / monthlySavings; // Assuming $15k implementation cost

  return (
    <>
      <SEOHead 
        title="Time & Cost Savings Calculator | HeyFlou"
        description="Calculate how much time and money AI automation could save your therapy practice or service business."
        canonical="https://heyflou.com/roi"
      />
      
      <main className="pt-16">
        <Section background="glow" padding="large">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center mx-auto mb-6">
              <Calculator className="text-white" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-hf-ink mb-6">
              Calculate Your Time & Cost Savings
            </h1>
            <p className="text-xl text-muted-foreground">
              See how much time and money AI automation could save your practice.
            </p>
          </div>
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calculator Inputs */}
              <div className="bg-card rounded-xl p-8 hf-shadow">
                <h2 className="text-2xl font-bold font-display text-hf-ink mb-6">
                  Your Business Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-hf-ink mb-2">
                      Team Size (employees)
                    </label>
                    <Input
                      type="number"
                      value={inputs.teamSize}
                      onChange={(e) => setInputs({...inputs, teamSize: Number(e.target.value)})}
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hf-ink mb-2">
                      Average Hourly Cost ($)
                    </label>
                    <Input
                      type="number"
                      value={inputs.hourlyRate}
                      onChange={(e) => setInputs({...inputs, hourlyRate: Number(e.target.value)})}
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hf-ink mb-2">
                      Hours Saved per Employee per Month
                    </label>
                    <Input
                      type="number"
                      value={inputs.hoursSaved}
                      onChange={(e) => setInputs({...inputs, hoursSaved: Number(e.target.value)})}
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hf-ink mb-2">
                      Expected Revenue Lift (%)
                    </label>
                    <Input
                      type="number"
                      value={inputs.revenueLift}
                      onChange={(e) => setInputs({...inputs, revenueLift: Number(e.target.value)})}
                      min="0"
                      step="0.1"
                    />
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-card rounded-xl p-8 hf-shadow">
                <h2 className="text-2xl font-bold font-display text-hf-ink mb-6">
                  Your ROI Projection
                </h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-hf-teal/10 to-hf-purple/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-hf-teal">
                      ${monthlySavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Monthly Savings</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-hf-teal/10 to-hf-purple/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-hf-teal">
                      ${annualSavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Annual Cost Savings</div>
                  </div>

                  <div className="bg-gradient-to-r from-hf-teal/10 to-hf-purple/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-hf-teal">
                      ${Math.round(revenueIncrease).toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Annual Revenue Increase</div>
                  </div>

                  <div className="bg-gradient-to-r from-hf-purple/20 to-hf-teal/20 rounded-lg p-4 border-2 border-hf-teal/20">
                    <div className="text-3xl font-bold text-hf-ink">
                      {Math.round(paybackMonths)} months
                    </div>
                    <div className="text-sm text-muted-foreground">Payback Period</div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="text-lg font-semibold text-hf-ink">
                      Total Annual Benefit: ${Math.round(totalBenefit).toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      *Estimates based on industry averages. Actual results may vary.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold font-display text-hf-ink mb-4">
                Ready to Start Saving Time?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Book a free strategy call to see exactly how we can help your practice.
              </p>
              <GradientButton variant="primary" size="lg" asChild>
                <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
                  Book Strategy Call
                </a>
              </GradientButton>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}