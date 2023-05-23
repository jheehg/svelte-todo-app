import { supabase } from '$lib/supabase/client';
import { json, error as svelteError } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const { data, error, status } = await supabase
		.from('todo')
		.select()
		.order('created_at', { ascending: true });
	if (error) {
		throw svelteError(status, { message: error.message });
	}

	return json({ result: 'success', todo: data });
}
