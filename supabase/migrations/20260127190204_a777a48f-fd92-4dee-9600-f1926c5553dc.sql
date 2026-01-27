-- Add app_price column to apps_catalog
ALTER TABLE public.apps_catalog 
ADD COLUMN app_price integer NOT NULL DEFAULT 25;

-- Update all existing apps to have app_price = 25 (matching current pricing)
UPDATE public.apps_catalog SET app_price = 25;