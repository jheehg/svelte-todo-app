<script lang="ts">
	import type { ITodoItem } from '$lib/types';
	import { list } from '$lib/stores';
	import { toast } from '$lib/stores';

	export let item: ITodoItem;

	$: ({ id, title, content, isCompleted = false, status } = item);
	$: currentItem = { id, title, content, isCompleted, status };

	let isEditable = false;

	const toggleMode = () => (isEditable = !isEditable);

	const updateTodo = () => {
		const updatedData = {
			id: currentItem.id,
			title: currentItem.title,
			content: currentItem.content,
			status: currentItem.status
		};

		list.updateItem(updatedData);
		toast.showToast('Item has been saved!');
		isEditable = false;
	};

	const deleteTodo = () => {
		list.deleteItem(currentItem.id);
		toast.showToast('Item has been deleted!');
		if (isEditable) {
			isEditable = false;
		}
	};

	const toggleCompleted = (item: ITodoItem) => {
		const updatedData = {
			id,
			isCompleted: !item?.isCompleted
		};
		list.updateItem(updatedData);
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
				<p class={item?.isCompleted ? 'line-through truncate' : 'truncate'}>
					{#if !item.isCompleted}
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
