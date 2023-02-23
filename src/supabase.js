import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zkqyynhmfbxojekxiuch.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprcXl5bmhtZmJ4b2pla3hpdWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY3OTE3MzAsImV4cCI6MTk5MjM2NzczMH0.mOidCJrp6YCVQN0m7zY2DUtjxPgDvE3-TpasHyy_yOI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
