<script lang="ts">
	import InputForm from '$lib/components/InputForm.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import TodoList from '$lib/components/TodoList.svelte';
	import { list } from '$lib/stores';
	import type { ITodoItem, Status } from '$lib/types';
	import { fetchTodo } from '$lib/utils/api';
	import { onMount } from 'svelte';

	export let data: { todo: ITodoItem[] };

	onMount(() => {
		list.set(data.todo);
	});

	let todoInfo: {
		list: ITodoItem[];
		statusType: Status;
		status: string;
	}[];

	$: {
		const upcomingList = $list.filter((item) => item.status === 'upcoming');
		const progressList = $list.filter((item) => item.status === 'progress');
		const doneList = $list.filter((item) => item.status === 'done');

		todoInfo = [
			{
				list: upcomingList,
				statusType: 'upcoming',
				status: 'Upcoming'
			},
			{
				list: progressList,
				statusType: 'progress',
				status: 'In Progress'
			},
			{
				list: doneList,
				statusType: 'done',
				status: 'Done'
			}
		];
	}
</script>

<div class="container px-4 mx-auto mt-10">
	<div class="max-md:grid md:flex flex-row justify-center">
		{#each todoInfo as info}
			<TodoList
				data={{ list: info.list, statusType: info.statusType }}
				status={info.status}
				on:fetchTodo={fetchTodo}
			/>
		{/each}
	</div>
</div>

<Modal>
	<InputForm on:fetchTodo={fetchTodo} />
</Modal>
