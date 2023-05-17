<script lang="ts">
	import { isModalOpen, list, status } from '$lib/stores';
	import type { Status } from '$lib/types';

	const id = -1;
	let title: string = '';
	let content: string = '';

	const createTodo = () => {
		const newTodoData = {
			id,
			title,
			content,
			status: $status as Status
		};
		list.createItem(newTodoData);

		title = '';
		content = '';
		isModalOpen.set(false);
	};
</script>

<div class="w-full max-w-md">
	<h1 class="font-bold my-2">New Item</h1>
	<form on:submit|preventDefault={createTodo}>
		<div class="form-control">
			<label class="label" for="title">
				<span class="label-text">Title</span>
			</label>
			<input
				name="title"
				id="title"
				bind:value={title}
				placeholder="Title here"
				class="input input-bordered input-sm w-full"
			/>
			<label class="label" for="content">
				<span class="label-text">Content</span>
			</label>
			<input
				name="content"
				id="content"
				bind:value={content}
				placeholder="Content here"
				class="input input-bordered input-sm w-full"
			/>
			<button type="submit" class="btn btn-sm my-4">add</button>
		</div>
	</form>
</div>
