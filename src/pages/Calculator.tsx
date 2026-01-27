import { useState } from 'react';
import { SEOHead } from '@/components/ui/seo-head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const BASE_PRICE = 500;
const APP_PRICE = 25;

const appCategories = [
  {
    name: "CRM",
    apps: ["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM"]
  },
  {
    name: "Communication",
    apps: ["WhatsApp", "Slack", "Telegram", "Microsoft Teams", "Discord"]
  },
  {
    name: "Email",
    apps: ["Gmail", "Outlook", "Mailchimp", "SendGrid"]
  },
  {
    name: "Productivity",
    apps: ["Google Sheets", "Microsoft Excel", "Notion", "Airtable", "Trello", "Asana"]
  },
  {
    name: "Scheduling",
    apps: ["Calendly", "Google Calendar", "Cal.com"]
  },
  {
    name: "Payment",
    apps: ["Stripe", "PayPal", "Square"]
  },
  {
    name: "E-commerce",
    apps: ["Shopify", "WooCommerce"]
  },
  {
    name: "Social Media",
    apps: ["Facebook", "Instagram", "LinkedIn"]
  },
  {
    name: "Storage",
    apps: ["Google Drive", "Dropbox", "OneDrive"]
  }
];

const Calculator = () => {
  const [selectedApps, setSelectedApps] = useState<Set<string>>(new Set());

  const toggleApp = (app: string) => {
    setSelectedApps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(app)) {
        newSet.delete(app);
      } else {
        newSet.add(app);
      }
      return newSet;
    });
  };

  const appsTotal = selectedApps.size * APP_PRICE;
  const finalTotal = BASE_PRICE + appsTotal;

  return (
    <>
      <SEOHead 
        title="HeyFlou Calculator"
        description="Internal pricing calculator for custom automation builds."
        noIndex={true}
      />
      
      <div className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Internal Pricing Calculator
              </h1>
              <p className="text-muted-foreground">
                Calculate custom automation pricing based on app integrations
              </p>
            </div>

            <div className="grid gap-6">
              {/* Section 1: Base Price */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Base Automation Build</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground text-sm">
                      Base setup, workflow design and configuration
                    </p>
                    <span className="text-2xl font-bold text-foreground">
                      ${BASE_PRICE}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: App Selection */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">App Integrations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {appCategories.map((category) => (
                    <div key={category.name}>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                        {category.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.apps.map((app) => {
                          const isSelected = selectedApps.has(app);
                          return (
                            <button
                              key={app}
                              onClick={() => toggleApp(app)}
                              className={cn(
                                "inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200",
                                isSelected
                                  ? "bg-primary text-primary-foreground border-primary"
                                  : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-accent"
                              )}
                            >
                              {isSelected && <Check className="h-4 w-4" />}
                              <span>{app}</span>
                              <Badge 
                                variant="secondary" 
                                className={cn(
                                  "text-xs",
                                  isSelected && "bg-primary-foreground/20 text-primary-foreground"
                                )}
                              >
                                +${APP_PRICE}
                              </Badge>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Section 3: Pricing Summary */}
              <Card className="border-primary/20 bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Pricing Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Base automation build</span>
                      <span className="font-medium">${BASE_PRICE}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Selected apps ({selectedApps.size})
                      </span>
                      <span className="font-medium">
                        {selectedApps.size > 0 ? `+$${appsTotal}` : '$0'}
                      </span>
                    </div>
                    <div className="border-t border-border pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-semibold">Total</span>
                        <span className="text-3xl font-bold text-primary">
                          ${finalTotal.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Selected Apps List */}
                  {selectedApps.size > 0 && (
                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-2">Selected integrations:</p>
                      <div className="flex flex-wrap gap-1">
                        {Array.from(selectedApps).map(app => (
                          <Badge key={app} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
