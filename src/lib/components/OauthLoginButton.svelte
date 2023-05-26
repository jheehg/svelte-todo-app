<script>
	import { page } from '$app/stores';

	const signInWithGoogle = async () => {
		const supabase = $page.data.supabase;
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google'
		});
	};
</script>

<button on:click={signInWithGoogle} class="font-seimbold">Continue with Google</button>
