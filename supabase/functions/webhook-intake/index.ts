import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const payload = await req.json()
    const record = payload.record
    
    // Get n8n webhook URL from environment
    const webhookUrl = Deno.env.get('N8N_INTAKE_WEBHOOK_URL')
    
    if (!webhookUrl) {
      console.error('N8N_INTAKE_WEBHOOK_URL not configured')
      return new Response(JSON.stringify({ error: 'Webhook URL not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }
    
    console.log('New intake:', record.email)
    
    // Forward to n8n
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Source': 'lovable-cloud',
        'X-Webhook-Type': 'intake'
      },
      body: JSON.stringify({
        type: 'new_intake',
        record: record,
        timestamp: new Date().toISOString()
      })
    })
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('n8n webhook failed:', errorText)
      throw new Error(`Webhook failed: ${response.status}`)
    }
    
    console.log('Webhook sent successfully')
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error in intake webhook:', errorMessage)
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
