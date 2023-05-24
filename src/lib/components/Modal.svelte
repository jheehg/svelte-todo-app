<script>
	import { isModalOpen } from '$lib/stores';
</script>

<input type="checkbox" id="modal" class="modal-toggle" bind:checked={$isModalOpen} />
<div class="modal">
	<div class="modal-box relative">
		<label for="modal" class="btn btn-sm btn-circle absolute right-3 top-3">✕</label>
		<slot />
	</div>
</div>
