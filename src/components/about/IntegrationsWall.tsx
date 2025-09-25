export function IntegrationsWall() {
  const integrations = {
    'CRM': ['HubSpot', 'Salesforce'],
    'Support': ['Zendesk', 'Intercom'],
    'Finance': ['QuickBooks', 'Xero', 'NetSuite'],
    'Productivity': ['Google Workspace', 'Microsoft 365'],
    'Ops': ['Asana', 'Notion', 'Odoo'],
    'Data/BI': ['Sheets', 'BigQuery', 'Looker', 'Power BI']
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
            Tools & Integrations We Work With
          </h2>
        </div>
        
        <div className="space-y-8">
          {Object.entries(integrations).map(([category, tools]) => (
            <div key={category} className="text-center">
              <h3 className="text-lg font-bold font-display text-hf-navy mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool) => (
                  <span 
                    key={tool}
                    className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}