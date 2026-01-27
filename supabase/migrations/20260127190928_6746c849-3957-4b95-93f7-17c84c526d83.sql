-- Create vertical_settings table
CREATE TABLE public.vertical_settings (
  id text PRIMARY KEY,
  currency text NOT NULL DEFAULT 'USD',
  base_price integer NOT NULL DEFAULT 0,
  default_app_price integer NOT NULL DEFAULT 25,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.vertical_settings ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Anyone can read vertical settings"
ON public.vertical_settings
FOR SELECT
USING (true);

-- Seed vertical_settings
INSERT INTO public.vertical_settings (id, currency, base_price, default_app_price) VALUES
  ('custom', 'USD', 500, 25),
  ('travel', 'USD', 0, 25),
  ('health', 'USD', 0, 25);

-- Create apps_master table (no pricing here)
CREATE TABLE public.apps_master (
  id text PRIMARY KEY,
  name text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.apps_master ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Anyone can read apps master"
ON public.apps_master
FOR SELECT
USING (true);

-- Migrate data from apps_catalog to apps_master (without app_price)
INSERT INTO public.apps_master (id, name, category, description, sort_order, created_at, updated_at)
SELECT id, name, category, description, sort_order, created_at, updated_at
FROM public.apps_catalog;

-- Create app_price_overrides table
CREATE TABLE public.app_price_overrides (
  id text PRIMARY KEY DEFAULT gen_random_uuid()::text,
  vertical text NOT NULL,
  app_id text NOT NULL REFERENCES public.apps_master(id) ON DELETE CASCADE,
  override_price integer NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE (vertical, app_id)
);

-- Enable RLS
ALTER TABLE public.app_price_overrides ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Anyone can read app price overrides"
ON public.app_price_overrides
FOR SELECT
USING (true);

-- Add trigger for updated_at on vertical_settings
CREATE TRIGGER update_vertical_settings_updated_at
BEFORE UPDATE ON public.vertical_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add trigger for updated_at on apps_master
CREATE TRIGGER update_apps_master_updated_at
BEFORE UPDATE ON public.apps_master
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add trigger for updated_at on app_price_overrides
CREATE TRIGGER update_app_price_overrides_updated_at
BEFORE UPDATE ON public.app_price_overrides
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();