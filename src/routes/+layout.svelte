<script>
	import Alert from '$lib/components/Alert.svelte';
	import '../app.css';
	import '../app.postcss';
</script>

<div class="container mx-auto px-4">
	<slot />
	<Alert />
</div>
