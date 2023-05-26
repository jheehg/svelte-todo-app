import { supabase } from '$lib/supabase/client.js';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: { request: Request }) {
	const { email, password } = await request.json();

	const { data, error } = await supabase.auth.signUp({
		email,
		password
	});

	if (error) {
		return json({ result: 'fail', message: error.message });
	}

	if (!data.user) {
		return json({ result: 'fail', message: 'No User signed up' });
	}

	return json({ result: 'success', message: 'Please confirm your email to sign in' });
}
