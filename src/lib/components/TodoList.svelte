<script lang="ts">
	import { onMount } from 'svelte';
	import TodoItem from '$lib/components/TodoItem.svelte';
	import TrashCan from '$lib/components/icons/TrashCan.svelte';
	import { isModalOpen, list, status as statusStore } from '$lib/stores';
	import type { ITodoList } from '$lib/types';

	export let data: ITodoList = [];
	export let status: string;

	const resetList = (status: string) => {
		if (confirm('Are you sure you want to delete this list?')) {
			list.resetList(status);
		}
	};

	const setCurrentStatus = () => {
		isModalOpen.set(true);
		statusStore.set(data?.[0].status);
	};
</script>

<div class="relative mb-10 md:mr-5 w-96">
	<div class="badge badge-natural badge-outline mb-1">{status}</div>
	<h3 class="font-bold text-zinc-400">Total: {data.length}</h3>

	{#if data?.length > 0}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={() => resetList(data?.[0].status)} class="absolute top-6 right-3 cursor-pointer">
			<TrashCan style="h-5 w-5" />
		</div>
	{/if}

	{#each data as item}
		<TodoItem {item} />
	{/each}

	<div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<label for="modal" class="btn btn-sm mt-1 ml-2" on:click={setCurrentStatus}>NEW ITEM 🔥</label>
	</div>
</div>
