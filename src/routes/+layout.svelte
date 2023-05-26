<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	import '../app.css';
	import '../app.postcss';

	export let data: LayoutData;

	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

{#if session?.user}
	<NavBar />
{/if}
<slot />
<Toast />
