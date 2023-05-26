import { supabase } from '$lib/supabase/client.js';
import { json, error as svelteError } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request, locals: { supabase, getSession } }) {
	const session = await getSession();
	if (!session) {
		throw svelteError(401, { message: 'Unauthorized' });
	}

	const { targetStatus } = await request.json();
	const { error, status } = await supabase.from('todo').delete().eq('status', targetStatus);

	if (error) {
		throw svelteError(status, { message: error.message });
	}

	return json({ result: 'success' });
}
