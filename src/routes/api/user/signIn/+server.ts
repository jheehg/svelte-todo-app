import { supabase } from '$lib/supabase/client.js';
import { json, error as svelteError } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: { request: Request }) {
	const { email, password } = await request.json();

	// { data: { user: null; session: null; }; error: AuthError; }
	const { data, error } = await supabase.auth.signUp({
		email,
		password
	});

	if (!data.user) {
		return json({ result: 'fail' });
	}

	return json({ result: 'success' });
}
