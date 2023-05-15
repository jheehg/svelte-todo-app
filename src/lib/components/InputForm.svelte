<script lang="ts">
	import { list } from '$lib/stores';

	const id = -1;
	let title: string = '';
	let content: string = '';

	const createTodo = () => {
		const newTodoData = {
			id,
			title,
			content
		};
		list.createItem(newTodoData);
	};
</script>

<form on:submit|preventDefault={createTodo} class="mb-7">
	<div class="form-control w-full max-w-xs">
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
		<button type="submit" class="btn btn-sm mt-2">add</button>
	</div>
</form>
