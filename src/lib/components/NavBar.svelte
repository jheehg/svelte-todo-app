<script>
	import { page } from '$app/stores';

	const signUpUser = async () => {
		const supabase = $page.data.supabase;
		const { error } = await supabase.auth.signOut();
	};
</script>

<div class="navbar bg-base-100 border-y">
	<div class="flex-1" />
	<div class="flex-none">
		<ul class="menu menu-horizontal px-5">
			<li><a href="#" on:click={signUpUser}>Sign Out</a></li>
		</ul>
	</div>
</div>
