export interface AppInfo {
  name: string;
  description: string;
}

export interface AppCategory {
  name: string;
  apps: AppInfo[];
}

export const APP_PRICE = 25;

export const appCategories: AppCategory[] = [
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
