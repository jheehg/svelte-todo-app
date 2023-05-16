<script>
	import InputForm from '$lib/components/InputForm.svelte';
	import TodoList from '$lib/components/TodoList.svelte';
	import { list } from '$lib/stores';
</script>

<div class="container px-4 mx-auto">
	<InputForm />
	<TodoList data={$list} />

	<button on:click={() => list.resetList()} class="btn btn-sm mt-5">Clear</button>
</div>
