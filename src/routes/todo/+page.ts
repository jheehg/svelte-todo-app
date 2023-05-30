import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/sign-in');
	}

	const { data } = await supabase.from('todo').select().order('created_at', { ascending: true });
	return {
		todo: data ?? []
	};
}
