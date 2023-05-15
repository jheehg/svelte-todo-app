<script>
	import InputForm from '$lib/components/InputForm.svelte';
	import TodoList from '$lib/components/TodoList.svelte';
	import { list } from '$lib/stores';
</script>

<main>
	<div>
		<InputForm />
	</div>
	<div>
		<TodoList data={$list} />
	</div>
	<div>
		<button on:click={() => list.resetList()} class="btn btn-sm mt-5">Clear</button>
	</div>
</main>
