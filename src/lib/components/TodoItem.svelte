<script lang="ts">
	import type { ITodoItem } from '$lib/types';
	import { list } from '$lib/stores';
	import { alert } from '$lib/stores';

	export let item: ITodoItem;

	$: id = item.id;
	$: title = item.title;
	$: content = item.content;
	$: isCompleted = item?.isCompleted;
	$: currentItem = { id, title, content, isCompleted };

	let isEditable = false;

	const toggleMode = () => (isEditable = !isEditable);

	const updateTodo = () => {
		const updatedData = {
			id: currentItem.id,
			title: currentItem.title,
			content: currentItem.content
		};

		list.updateItem(updatedData);
		alert.showAlert('Item has been saved!');
		isEditable = false;
	};

	const deleteTodo = () => {
		list.deleteItem(currentItem.id);
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

<div class="card w-1/3 bg-base-100 shadow-xl mb-3">
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
			<h3 class="card-title">{item.title}</h3>
			<p>
				{item.content}
				{#if !item.isCompleted}
					<button on:click={() => toggleCompleted(item)}>⬜️</button>
				{:else}
					<button on:click={() => toggleCompleted(item)}>✅</button>
				{/if}
			</p>
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
