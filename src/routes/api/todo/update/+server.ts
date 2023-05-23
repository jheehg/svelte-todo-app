import { supabase } from '$lib/supabase/client.js';
import { json, error as svelteError } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: { request: Request }) {
	const { id, ...restData } = await request.json();
	const { error, status } = await supabase
		.from('todo')
		.update({ ...restData, updated_at: new Date().toISOString() })
		.eq('id', id);
	if (error) {
		throw svelteError(status, { message: error.message });
	}

	return json({ result: 'success' });
}
