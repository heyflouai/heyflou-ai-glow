-- Drop triggers first
DROP TRIGGER IF EXISTS on_subscriber_insert ON public.subscribers;
DROP TRIGGER IF EXISTS on_contact_insert ON public.contacts;
DROP TRIGGER IF EXISTS on_intake_insert ON public.intakes;

-- Drop the functions
DROP FUNCTION IF EXISTS public.notify_subscriber_insert();
DROP FUNCTION IF EXISTS public.notify_contact_insert();
DROP FUNCTION IF EXISTS public.notify_intake_insert();