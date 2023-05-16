<script>
	import Toast from '$lib/components/Toast.svelte';

	import '../app.css';
	import '../app.postcss';
</script>

<div class="container mx-auto px-4">
	<slot />
</div>
<Toast />
