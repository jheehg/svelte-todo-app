import { json, error as svelteError } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals: { supabase, getSession } }) {
	const session = await getSession();
	if (!session) {
		throw svelteError(401, { message: 'Unauthorized' });
	}

	const { id, ...restData } = await request.json();
	const { error, status } = await supabase.from('todo').insert(restData);

	if (error) {
		throw svelteError(status, { message: error.message });
	}

	return json({ result: 'success' });
}
