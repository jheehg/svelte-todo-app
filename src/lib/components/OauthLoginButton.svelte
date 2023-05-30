<script>
	import { page } from '$app/stores';
	import Google from '$lib/components/icons/Google.svelte';
	let isLoading = false;

	const signInWithGoogle = async () => {
		isLoading = true;
		const supabase = $page.data.supabase;
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: 'http://localhost:5173/api/auth/callback'
			}
		});
	};
</script>

<button on:click={signInWithGoogle} class="btn btn-ghost font-seimbold" class:loading={isLoading}
	><Google style="h-4 w-4 mr-4" />Continue with Google</button
>
