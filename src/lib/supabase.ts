import { createClient } from '@supabase/supabase-js';

// IMPORTANT: Replace these with your actual Supabase project details
// Get them from: Project Settings > API
const supabaseUrl = 'https://pilsfxmhgyliebcrmfgm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpbHNmeG1oZ3lsaWViY3JtZmdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0ODEzNjYsImV4cCI6MjA4NjA1NzM2Nn0.Tx2TvWuo2Eu-213SJEOKwGxw8iS1B6yd4gym33GCEFo';

export const supabase = createClient(supabaseUrl, supabaseKey);
