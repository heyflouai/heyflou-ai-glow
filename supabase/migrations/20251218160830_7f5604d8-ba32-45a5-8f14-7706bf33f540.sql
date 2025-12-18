-- Enable the http extension if not already enabled
CREATE EXTENSION IF NOT EXISTS http WITH SCHEMA extensions;

-- Trigger function for subscribers
CREATE OR REPLACE FUNCTION notify_subscriber_insert()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT;
BEGIN
  -- Get the edge function URL
  webhook_url := 'https://syflufvohjamjngttugh.supabase.co/functions/v1/webhook-subscriber';
  
  -- Call the edge function
  PERFORM extensions.http_post(
    webhook_url,
    jsonb_build_object('record', to_jsonb(NEW))::text,
    'application/json'::text
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for subscribers
DROP TRIGGER IF EXISTS on_subscriber_insert ON public.subscribers;
CREATE TRIGGER on_subscriber_insert
  AFTER INSERT ON public.subscribers
  FOR EACH ROW
  EXECUTE FUNCTION notify_subscriber_insert();

-- Trigger function for contacts
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
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for contacts
DROP TRIGGER IF EXISTS on_contact_insert ON public.contacts;
CREATE TRIGGER on_contact_insert
  AFTER INSERT ON public.contacts
  FOR EACH ROW
  EXECUTE FUNCTION notify_contact_insert();

-- Trigger function for intakes
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
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for intakes
DROP TRIGGER IF EXISTS on_intake_insert ON public.intakes;
CREATE TRIGGER on_intake_insert
  AFTER INSERT ON public.intakes
  FOR EACH ROW
  EXECUTE FUNCTION notify_intake_insert();