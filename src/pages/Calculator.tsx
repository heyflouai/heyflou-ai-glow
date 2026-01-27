import { useState } from 'react';
import { SEOHead } from '@/components/ui/seo-head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const BASE_PRICE = 500;
const APP_PRICE = 25;

interface AppInfo {
  name: string;
  description: string;
}

const appCategories: { name: string; apps: AppInfo[] }[] = [
  {
    name: "CRM",
    apps: [
      { name: "HubSpot", description: "Manage contacts, deals, and customer interactions in one centralized CRM." },
      { name: "Salesforce", description: "Enterprise-level CRM for sales pipelines, automation, and customer data." },
      { name: "Pipedrive", description: "Visual sales pipeline management for tracking deals and leads." },
      { name: "Zoho CRM", description: "All-in-one CRM to manage sales, leads, and customer relationships." }
    ]
  },
  {
    name: "Communication",
    apps: [
      { name: "WhatsApp", description: "Send and receive automated messages with customers through WhatsApp." },
      { name: "Slack", description: "Automate internal team notifications and workflow updates in Slack." },
      { name: "Telegram", description: "Create automated messaging and alerts through Telegram bots." },
      { name: "Microsoft Teams", description: "Connect workflows with Microsoft Teams channels and chats." },
      { name: "Discord", description: "Automate community messages and notifications in Discord servers." }
    ]
  },
  {
    name: "Email",
    apps: [
      { name: "Gmail", description: "Send, receive, and automate email workflows using Gmail." },
      { name: "Outlook", description: "Automate email communication using Microsoft Outlook." },
      { name: "Mailchimp", description: "Trigger and manage email marketing campaigns automatically." },
      { name: "SendGrid", description: "Send transactional and automated emails at scale." }
    ]
  },
  {
    name: "Productivity",
    apps: [
      { name: "Google Sheets", description: "Automatically read, write, and update data in Google Sheets." },
      { name: "Microsoft Excel", description: "Sync and process spreadsheet data in automated workflows." },
      { name: "Notion", description: "Create, update, and manage structured data inside Notion." },
      { name: "Airtable", description: "Combine spreadsheet simplicity with database functionality." },
      { name: "Trello", description: "Automate task creation and status updates on Trello boards." },
      { name: "Asana", description: "Trigger and track tasks across Asana projects." }
    ]
  },
  {
    name: "Scheduling",
    apps: [
      { name: "Calendly", description: "Automatically schedule meetings based on availability." },
      { name: "Google Calendar", description: "Create, update, and manage calendar events automatically." },
      { name: "Cal.com", description: "Open-source scheduling automation for meetings and bookings." }
    ]
  },
  {
    name: "Payment",
    apps: [
      { name: "Stripe", description: "Process and automate online payments and billing workflows." },
      { name: "PayPal", description: "Accept and manage payments through PayPal automations." },
      { name: "Square", description: "Automate point-of-sale and payment operations." }
    ]
  },
  {
    name: "E-commerce",
    apps: [
      { name: "Shopify", description: "Automate order processing and customer workflows for Shopify stores." },
      { name: "WooCommerce", description: "Manage and automate e-commerce workflows in WooCommerce." }
    ]
  },
  {
    name: "Social Media",
    apps: [
      { name: "Facebook", description: "Automate messages, leads, and post-related workflows on Facebook." },
      { name: "Instagram", description: "Automate DM responses and lead capture on Instagram." },
      { name: "LinkedIn", description: "Automate lead generation and outreach workflows on LinkedIn." }
    ]
  },
  {
    name: "Storage",
    apps: [
      { name: "Google Drive", description: "Store, organize, and automate file handling in Google Drive." },
      { name: "Dropbox", description: "Sync and manage files automatically using Dropbox." },
      { name: "OneDrive", description: "Automate file storage and access within Microsoft OneDrive." }
    ]
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
                      <div className="grid gap-3 sm:grid-cols-2">
                        {category.apps.map((app) => {
                          const isSelected = selectedApps.has(app.name);
                          return (
                            <button
                              key={app.name}
                              onClick={() => toggleApp(app.name)}
                              className={cn(
                                "flex flex-col items-start gap-1 p-3 rounded-lg border text-left transition-all duration-200",
                                isSelected
                                  ? "bg-primary text-primary-foreground border-primary"
                                  : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-accent"
                              )}
                            >
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-2">
                                  {isSelected && <Check className="h-4 w-4 shrink-0" />}
                                  <span className="font-medium text-sm">{app.name}</span>
                                </div>
                                <Badge 
                                  variant="secondary" 
                                  className={cn(
                                    "text-xs shrink-0",
                                    isSelected && "bg-primary-foreground/20 text-primary-foreground"
                                  )}
                                >
                                  +${APP_PRICE}
                                </Badge>
                              </div>
                              <p className={cn(
                                "text-xs leading-relaxed",
                                isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
                              )}>
                                {app.description}
                              </p>
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
