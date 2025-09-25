export function IntegrationsWall() {
  const integrations = {
    'AI Tools': ['ChatGPT', 'Gemini', 'Claude'],
    'CRM': ['HubSpot', 'Salesforce', 'Pipedrive', 'Zoho'],
    'Support': ['Zendesk', 'Intercom'],
    'Finance': ['QuickBooks', 'Xero', 'NetSuite'],
    'Productivity': ['Google Workspace', 'Microsoft 365'],
    'Data/BI': ['Sheets', 'BigQuery', 'Looker']
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
            Tools & Integrations We Work With
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(integrations).map(([category, tools]) => (
            <div key={category} className="text-center">
              <h3 className="text-sm font-bold font-display text-hf-navy mb-3">
                {category}
              </h3>
              <div className="space-y-2">
                {tools.map((tool) => (
                  <div 
                    key={tool}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded text-xs"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <span className="px-6 py-2 bg-hf-teal/10 text-hf-teal rounded-full text-sm font-medium">
            Much More
          </span>
        </div>
      </div>
    </section>
  );
}