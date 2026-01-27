-- Create pricing_settings table
CREATE TABLE public.pricing_settings (
  id text PRIMARY KEY DEFAULT 'default',
  currency text NOT NULL DEFAULT 'USD',
  app_addon_price integer NOT NULL DEFAULT 25,
  custom_base_price integer NOT NULL DEFAULT 500,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create offer_packages table
CREATE TABLE public.offer_packages (
  id text PRIMARY KEY,
  vertical text NOT NULL CHECK (vertical IN ('travel', 'health')),
  name text NOT NULL,
  price integer NOT NULL,
  description text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create apps_catalog table
CREATE TABLE public.apps_catalog (
  id text PRIMARY KEY,
  name text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.pricing_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.offer_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.apps_catalog ENABLE ROW LEVEL SECURITY;

-- Create read-only policies (anyone can read, no one can write via client)
CREATE POLICY "Anyone can read pricing settings"
ON public.pricing_settings FOR SELECT
USING (true);

CREATE POLICY "Anyone can read offer packages"
ON public.offer_packages FOR SELECT
USING (true);

CREATE POLICY "Anyone can read apps catalog"
ON public.apps_catalog FOR SELECT
USING (true);

-- Insert default pricing settings
INSERT INTO public.pricing_settings (id, currency, app_addon_price, custom_base_price)
VALUES ('default', 'USD', 25, 500);

-- Insert Travel packages
INSERT INTO public.offer_packages (id, vertical, name, price, description, sort_order) VALUES
('travel_basic', 'travel', 'Basic Travel Automation', 300, 'Automates lead intake, basic customer communication, and simple workflows for travel agencies.', 1),
('travel_standard', 'travel', 'Standard Travel Automation', 500, 'Includes CRM syncing, automated follow-ups, booking coordination, and internal notifications.', 2),
('travel_advanced', 'travel', 'Advanced Travel Automation', 700, 'Full travel automation including advanced workflows, integrations, and multi-step customer journeys.', 3);

-- Insert Health packages
INSERT INTO public.offer_packages (id, vertical, name, price, description, sort_order) VALUES
('health_basic', 'health', 'Basic Health Automation', 400, 'Automates patient intake, basic communication, and appointment handling.', 1),
('health_standard', 'health', 'Standard Health Automation', 600, 'Includes CRM syncing, appointment workflows, reminders, and internal coordination.', 2),
('health_advanced', 'health', 'Advanced Health Automation', 800, 'End-to-end health automation including complex workflows, integrations, and advanced logic.', 3);

-- Insert Apps Catalog
INSERT INTO public.apps_catalog (id, name, category, description, sort_order) VALUES
-- CRM
('hubspot', 'HubSpot', 'CRM', 'Manage contacts, deals, and customer interactions in one centralized CRM.', 1),
('salesforce', 'Salesforce', 'CRM', 'Enterprise-level CRM for sales pipelines, automation, and customer data.', 2),
('pipedrive', 'Pipedrive', 'CRM', 'Visual sales pipeline management for tracking deals and leads.', 3),
('zoho_crm', 'Zoho CRM', 'CRM', 'All-in-one CRM to manage sales, leads, and customer relationships.', 4),
-- Communication
('whatsapp', 'WhatsApp', 'Communication', 'Send and receive automated messages with customers through WhatsApp.', 1),
('slack', 'Slack', 'Communication', 'Automate internal team notifications and workflow updates in Slack.', 2),
('telegram', 'Telegram', 'Communication', 'Create automated messaging and alerts through Telegram bots.', 3),
('microsoft_teams', 'Microsoft Teams', 'Communication', 'Connect workflows with Microsoft Teams channels and chats.', 4),
('discord', 'Discord', 'Communication', 'Automate community messages and notifications in Discord servers.', 5),
-- Email
('gmail', 'Gmail', 'Email', 'Send, receive, and automate email workflows using Gmail.', 1),
('outlook', 'Outlook', 'Email', 'Automate email communication using Microsoft Outlook.', 2),
('mailchimp', 'Mailchimp', 'Email', 'Trigger and manage email marketing campaigns automatically.', 3),
('sendgrid', 'SendGrid', 'Email', 'Send transactional and automated emails at scale.', 4),
-- Productivity
('google_sheets', 'Google Sheets', 'Productivity', 'Automatically read, write, and update data in Google Sheets.', 1),
('microsoft_excel', 'Microsoft Excel', 'Productivity', 'Sync and process spreadsheet data in automated workflows.', 2),
('notion', 'Notion', 'Productivity', 'Create, update, and manage structured data inside Notion.', 3),
('airtable', 'Airtable', 'Productivity', 'Combine spreadsheet simplicity with database functionality.', 4),
('trello', 'Trello', 'Productivity', 'Automate task creation and status updates on Trello boards.', 5),
('asana', 'Asana', 'Productivity', 'Trigger and track tasks across Asana projects.', 6),
-- Scheduling
('calendly', 'Calendly', 'Scheduling', 'Automatically schedule meetings based on availability.', 1),
('google_calendar', 'Google Calendar', 'Scheduling', 'Create, update, and manage calendar events automatically.', 2),
('cal_com', 'Cal.com', 'Scheduling', 'Open-source scheduling automation for meetings and bookings.', 3),
-- Payment
('stripe', 'Stripe', 'Payment', 'Process and automate online payments and billing workflows.', 1),
('paypal', 'PayPal', 'Payment', 'Accept and manage payments through PayPal automations.', 2),
('square', 'Square', 'Payment', 'Automate point-of-sale and payment operations.', 3),
-- E-commerce
('shopify', 'Shopify', 'E-commerce', 'Automate order processing and customer workflows for Shopify stores.', 1),
('woocommerce', 'WooCommerce', 'E-commerce', 'Manage and automate e-commerce workflows in WooCommerce.', 2),
-- Social Media
('facebook', 'Facebook', 'Social Media', 'Automate messages, leads, and post-related workflows on Facebook.', 1),
('instagram', 'Instagram', 'Social Media', 'Automate DM responses and lead capture on Instagram.', 2),
('linkedin', 'LinkedIn', 'Social Media', 'Automate lead generation and outreach workflows on LinkedIn.', 3),
-- Storage
('google_drive', 'Google Drive', 'Storage', 'Store, organize, and automate file handling in Google Drive.', 1),
('dropbox', 'Dropbox', 'Storage', 'Sync and manage files automatically using Dropbox.', 2),
('onedrive', 'OneDrive', 'Storage', 'Automate file storage and access within Microsoft OneDrive.', 3);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for all tables
CREATE TRIGGER update_pricing_settings_updated_at
BEFORE UPDATE ON public.pricing_settings
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_offer_packages_updated_at
BEFORE UPDATE ON public.offer_packages
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_apps_catalog_updated_at
BEFORE UPDATE ON public.apps_catalog
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();