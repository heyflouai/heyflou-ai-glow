import { supabase } from '@/integrations/supabase/client';

interface SendEmailParams {
  name: string;
  email: string;
  formSource: string;
  message?: string;
  fields?: Record<string, string>;
}

/**
 * Fire-and-forget: sends user confirmation + admin notification emails via edge function.
 * Failures are logged but never block the form submission flow.
 */
export function sendConfirmationEmail(params: SendEmailParams): void {
  supabase.functions
    .invoke('send-email', { body: params })
    .then(({ error }) => {
      if (error) console.error('send-email edge function error:', error);
    })
    .catch((err) => {
      console.error('Failed to invoke send-email:', err?.message);
    });
}
