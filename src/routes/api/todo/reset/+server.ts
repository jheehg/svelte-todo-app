import { supabase } from '$lib/supabase/client.js';
import { json, error as svelteError } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }: { request: Request }) {
	const { targetStatus } = await request.json();
	const { error, status } = await supabase.from('todo').delete().eq('status', targetStatus);

	if (error) {
		throw svelteError(status, { message: error.message });
	}

	return json({ result: 'success' });
}
