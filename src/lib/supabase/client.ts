import { createClient } from '@supabase/supabase-js';
import { SUPABASE_APP, SUPABASE_ANON_KEY } from '$env/static/private';

export const supabase = createClient(SUPABASE_APP, SUPABASE_ANON_KEY);
