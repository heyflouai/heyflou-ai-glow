// Lazy accessor for the generated Supabase client.
//
// client.ts is auto-generated, so it is left untouched. Importing it directly
// from a component pulls @supabase/supabase-js (~170 KiB) into that route's
// critical path — on the homepage it was modulepreloaded on first paint for a
// below-the-fold lead form that most visitors never submit.
//
// Call getSupabase() inside the async submit handler instead: the chunk is
// fetched on first use, and the form itself still pre-renders normally.
import type { supabase } from './client';

type SupabaseClient = typeof supabase;

let clientPromise: Promise<SupabaseClient> | null = null;

export function getSupabase(): Promise<SupabaseClient> {
  clientPromise ??= import('./client').then((m) => m.supabase);
  return clientPromise;
}
