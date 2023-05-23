import { supabase } from '$lib/supabase/client.js';
import { json, error as svelteError } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }: { request: Request }) {
	const { targetId } = await request.json();
	const { error, status } = await supabase.from('todo').delete().eq('id', targetId);

	if (error) {
		throw svelteError(status, { message: error.message });
	}

	return json({ result: 'success' });
}
