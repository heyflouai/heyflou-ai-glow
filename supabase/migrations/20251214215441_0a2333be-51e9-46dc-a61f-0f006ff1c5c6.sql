-- Create subscribers table for newsletter signups
CREATE TABLE public.subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public subscription)
CREATE POLICY "Anyone can subscribe" 
ON public.subscribers 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent reading subscriber emails (privacy)
CREATE POLICY "No public read access" 
ON public.subscribers 
FOR SELECT 
USING (false);

-- Create index on email for faster duplicate checks
CREATE INDEX idx_subscribers_email ON public.subscribers(email);

-- Create index on created_at for analytics
CREATE INDEX idx_subscribers_created_at ON public.subscribers(created_at DESC);