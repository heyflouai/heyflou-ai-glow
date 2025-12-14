-- Create contacts table for compact form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  website TEXT,
  industry TEXT NOT NULL,
  team_size TEXT NOT NULL,
  message TEXT,
  source_page TEXT NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  referrer TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

-- Prevent public read access (privacy)
CREATE POLICY "No public read access for contacts" 
ON public.contacts 
FOR SELECT 
USING (false);

-- Create index on email
CREATE INDEX idx_contacts_email ON public.contacts(email);
CREATE INDEX idx_contacts_created_at ON public.contacts(created_at DESC);

-- Create intakes table for questionnaire form submissions
CREATE TABLE public.intakes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT NOT NULL,
  website TEXT,
  country TEXT,
  industry TEXT NOT NULL,
  team_size TEXT NOT NULL,
  role TEXT,
  source_page TEXT NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  referrer TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  current_ai_usage TEXT,
  tools_in_use TEXT[],
  areas_of_interest TEXT[],
  goals TEXT[],
  biggest_pain TEXT,
  budget_range TEXT,
  timeline TEXT,
  preferred_contact TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.intakes ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public intake form)
CREATE POLICY "Anyone can submit intake form" 
ON public.intakes 
FOR INSERT 
WITH CHECK (true);

-- Prevent public read access (privacy)
CREATE POLICY "No public read access for intakes" 
ON public.intakes 
FOR SELECT 
USING (false);

-- Create indexes
CREATE INDEX idx_intakes_email ON public.intakes(email);
CREATE INDEX idx_intakes_created_at ON public.intakes(created_at DESC);