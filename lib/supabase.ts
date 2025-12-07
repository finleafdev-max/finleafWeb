import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pxzjqauqxprmjzkcnwye.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4empxYXVxeHBybWp6a2Nud3llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NTg2NTcsImV4cCI6MjA4MDIzNDY1N30.I-t-nrqxbhSTHguudMNRQeOd73xa0kAvvq1lb54KHo0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definition for blog posts
export interface Blog {
  id: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  date: string | null;
  read_time: string | null;
  image: string | null;
  author: string | null;
  created_at: string;
  updated_at: string;
}
