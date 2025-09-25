-- Create contacts table for compact forms
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
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
  consent BOOLEAN NOT NULL DEFAULT false
);

-- Create intakes table for detailed questionnaire
CREATE TABLE public.intakes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
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
  role TEXT,
  country TEXT,
  current_ai_usage TEXT,
  tools_in_use TEXT[],
  areas_of_interest TEXT[],
  goals TEXT[],
  biggest_pain TEXT,
  budget_range TEXT,
  timeline TEXT,
  preferred_contact TEXT
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.intakes ENABLE ROW LEVEL SECURITY;

-- Create policies for public insert (anyone can submit forms)
CREATE POLICY "Anyone can insert contacts" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can insert intakes" 
ON public.intakes 
FOR INSERT 
WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX idx_contacts_created_at ON public.contacts(created_at);
CREATE INDEX idx_contacts_source_page ON public.contacts(source_page);
CREATE INDEX idx_intakes_created_at ON public.intakes(created_at);
CREATE INDEX idx_intakes_source_page ON public.intakes(source_page);