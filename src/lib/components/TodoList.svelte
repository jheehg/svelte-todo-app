<script lang="ts">
	import TodoItem from '$lib/components/TodoItem.svelte';
	import type { ITodoList } from '$lib/types';

	export let data: ITodoList = [];
</script>

<ul>
	{#each data as item}
		<TodoItem {item} />
	{/each}
</ul>
