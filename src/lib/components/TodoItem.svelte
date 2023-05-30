<script lang="ts">
	import type { ITodoItem, Status } from '$lib/types';
	import { list } from '$lib/stores';
	import { toast } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';

	export let item: ITodoItem;

	$: ({ id, title, content, is_completed = false, status } = item);
	$: currentItem = { id, title, content, is_completed, status };

	let isEditable = false;

	const dispatch = createEventDispatcher();

	const toggleMode = () => (isEditable = !isEditable);

	const updateTodo = async () => {
		const updatedData = {
			id: currentItem.id,
			title: currentItem.title,
			content: currentItem.content,
			status: currentItem.status
		};
		await fetch('/api/todo/update', {
			method: 'POST',
			body: JSON.stringify(updatedData),
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then(({ result }) => {
				if (result === 'success') {
					toast.showToast('Updated');
					isEditable = false;
					dispatch('fetchTodo');
				} else {
					toast.showToast('Failed');
				}
			});
	};

	const deleteTodo = async () => {
		const data = await fetch('/api/todo/delete', {
			method: 'DELETE',
			body: JSON.stringify({ targetId: currentItem.id }),
			headers: {
				'content-type': 'application/json'
			}
		});
		const { result } = await data.json();
		if (result !== 'success') {
			toast.showToast('fail');
			return;
		}

		toast.showToast('Item has been deleted!');
		dispatch('fetchTodo');

		if (isEditable) {
			isEditable = false;
		}
	};

	const toggleCompleted = async (item: ITodoItem) => {
		const updateStatus = !item?.is_completed;
		const updatedData = {
			id,
			is_completed: updateStatus,
			status: (updateStatus ? 'done' : 'progress') as Status
		};
		console.log(updatedData);
		await fetch('/api/todo/update', {
			method: 'POST',
			body: JSON.stringify(updatedData),
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then(({ result }) => {
				if (result === 'success') {
					dispatch('fetchTodo');
				} else {
					toast.showToast('Failed');
				}
			});
	};
</script>

<div class="card bg-base-100 shadow-xl mb-3">
	<div class="card-body">
		{#if isEditable}
			<input
				name="title"
				id="title"
				bind:value={currentItem.title}
				class="input input-sm input-bordered"
			/>
			<input
				name="content"
				id="content"
				bind:value={currentItem.content}
				class="input input-sm input-bordered"
			/>
		{:else}
			<p class="card-title">{item.title}</p>
			{#if item.status === 'upcoming'}
				<p>{item.content}</p>
			{:else}
				<p class="truncate" class:line-through={item?.is_completed}>
					{#if !item.is_completed}
						<button class="mr-1" on:click={() => toggleCompleted(item)}>⬜️</button>
					{:else}
						<button class="mr-1" on:click={() => toggleCompleted(item)}>✅</button>
					{/if}
					{item.content}
				</p>
			{/if}
		{/if}
		<div>
			{#if isEditable}
				<button on:click={updateTodo} class="btn btn-xs">Save</button>
				<button on:click={toggleMode} class="btn btn-xs">Back</button>
			{:else}
				<button on:click={toggleMode} class="btn btn-xs">Edit</button>
			{/if}
			<button on:click={deleteTodo} class="btn btn-xs">Delete</button>
		</div>
	</div>
</div>
