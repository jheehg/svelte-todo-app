<script lang="ts">
	import { toast } from '$lib/stores';
	let timeoutId: NodeJS.Timeout | undefined;

	$: if ($toast.isOpen) {
		if (!timeoutId) {
			timeoutId = setTimeout(toast.closeToast, 4000);
		}
	} else {
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = undefined;
		}
	}
</script>

{#if $toast.isOpen}
	<div class="toast toast-top toast-start">
		<div class="alert alert-success shadow-lg">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<p>{$toast.message}</p>
			</div>
			<div class="flex-none">
				<button on:click={() => toast.closeToast()} class="btn btn-sm">Close</button>
			</div>
		</div>
	</div>
{/if}
