<script>
	import { isModalOpen } from '$lib/stores';
</script>

<input type="checkbox" id="modal" class="modal-toggle" />
<div class="modal">
	<div class="modal-box relative">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<label
			for="modal"
			class="btn btn-sm btn-circle absolute right-3 top-3"
			on:click={() => isModalOpen.set(false)}>✕</label
		>
		<slot />
	</div>
</div>
