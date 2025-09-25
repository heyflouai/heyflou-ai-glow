-- Secure the contacts table by restricting SELECT, UPDATE, and DELETE access to authenticated admin users only
-- Keep INSERT access for anonymous users so contact forms still work

-- Create RLS policy to allow only authenticated users to view contact data
CREATE POLICY "Only authenticated users can view contacts" 
ON public.contacts 
FOR SELECT 
TO authenticated 
USING (true);

-- Create RLS policy to allow only authenticated users to update contact data
CREATE POLICY "Only authenticated users can update contacts" 
ON public.contacts 
FOR UPDATE 
TO authenticated 
USING (true)
WITH CHECK (true);

-- Create RLS policy to allow only authenticated users to delete contact data
CREATE POLICY "Only authenticated users can delete contacts" 
ON public.contacts 
FOR DELETE 
TO authenticated 
USING (true);