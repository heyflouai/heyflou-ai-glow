-- Fix search_path for notify_subscriber_insert
CREATE OR REPLACE FUNCTION notify_subscriber_insert()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT;
BEGIN
  webhook_url := 'https://syflufvohjamjngttugh.supabase.co/functions/v1/webhook-subscriber';
  
  PERFORM extensions.http_post(
    webhook_url,
    jsonb_build_object('record', to_jsonb(NEW))::text,
    'application/json'::text
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, extensions;

-- Fix search_path for notify_contact_insert
CREATE OR REPLACE FUNCTION notify_contact_insert()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT;
BEGIN
  webhook_url := 'https://syflufvohjamjngttugh.supabase.co/functions/v1/webhook-contact';
  
  PERFORM extensions.http_post(
    webhook_url,
    jsonb_build_object('record', to_jsonb(NEW))::text,
    'application/json'::text
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, extensions;

-- Fix search_path for notify_intake_insert
CREATE OR REPLACE FUNCTION notify_intake_insert()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT;
BEGIN
  webhook_url := 'https://syflufvohjamjngttugh.supabase.co/functions/v1/webhook-intake';
  
  PERFORM extensions.http_post(
    webhook_url,
    jsonb_build_object('record', to_jsonb(NEW))::text,
    'application/json'::text
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, extensions;