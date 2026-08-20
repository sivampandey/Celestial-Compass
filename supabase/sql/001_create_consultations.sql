-- Supabase SQL Migration: Create consultations table
-- Execute this SQL in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/twulimuwpfmujhyleays/sql/new

CREATE TABLE IF NOT EXISTS public.consultations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(100),
  category VARCHAR(100),
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'Pending',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;

-- Create policy allowing server-side / service_role full access
CREATE POLICY "Allow full access for service_role" 
ON public.consultations 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);
