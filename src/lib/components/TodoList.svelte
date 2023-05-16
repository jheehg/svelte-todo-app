<script lang="ts">
	import TodoItem from '$lib/components/TodoItem.svelte';
	import type { ITodoList } from '$lib/types';

	export let data: ITodoList = [];
</script>

<div class="w-full max-w-md">
	<h2 class="font-bold text-zinc-400">Total: {data.length}</h2>
	{#each data as item}
		<TodoItem {item} />
	{/each}
</div>
