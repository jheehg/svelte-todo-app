import { supabase } from '$lib/supabase/client';

export async function load() {
	const { data } = await supabase.from('todo').select().order('created_at', { ascending: true });
	return {
		todo: data ?? []
	};
}
