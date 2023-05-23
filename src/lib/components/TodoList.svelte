<script lang="ts">
	import TodoItem from '$lib/components/TodoItem.svelte';
	import TrashCan from '$lib/components/icons/TrashCan.svelte';
	import { isModalOpen, status as statusStore, toast } from '$lib/stores';
	import type { ITodoList } from '$lib/types';
	import { fetchTodo } from '$lib/utils/api';
	import { createEventDispatcher } from 'svelte';

	export let data: ITodoList;
	export let status: string;
	$: ({ list, statusType } = data);

	const dispatch = createEventDispatcher();

	const resetList = async (targetStatus: string) => {
		if (confirm('Are you sure you want to delete this list?')) {
			await fetch('/api/todo/reset', {
				method: 'DELETE',
				body: JSON.stringify({ targetStatus }),
				headers: {
					'content-type': 'application/json'
				}
			})
				.then((response) => response.json())
				.then(({ result }) => {
					if (result !== 'success') {
						toast.showToast('fail');
						return;
					}
					dispatch('fetchTodo');
				});
		}
	};

	const setCurrentStatus = () => {
		isModalOpen.set(true);
		statusStore.set(statusType);
	};
</script>

<div class="relative mb-10 md:mr-5 w-96">
	<div class="badge badge-natural badge-outline mb-1">{status}</div>
	<h3 class="font-bold text-zinc-400">Total: {list.length}</h3>

	{#if list.length > 0}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={() => resetList(statusType)} class="absolute top-6 right-3 cursor-pointer">
			<TrashCan style="h-5 w-5" />
		</div>
	{/if}

	{#each list as item (item.id)}
		<TodoItem {item} on:fetchTodo={fetchTodo} />
	{/each}

	<div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<label for="modal" class="btn btn-sm mt-1 ml-2" on:click={setCurrentStatus}>NEW ITEM 🔥</label>
	</div>
</div>
