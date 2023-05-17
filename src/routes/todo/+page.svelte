<script>
	import InputForm from '$lib/components/InputForm.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import TodoList from '$lib/components/TodoList.svelte';
	import { isModalOpen, list } from '$lib/stores';

	$: upcomingList = $list.filter((item) => item.status === 'upcoming');
	$: progressList = $list.filter((item) => item.status === 'progress');
	$: doneList = $list.filter((item) => item.status === 'done');
</script>

<div class="container px-4 mx-auto mt-10">
	<div class="max-md:grid md:flex flex-row justify-center">
		<TodoList data={upcomingList} status="Upcoming" />
		<TodoList data={progressList} status="Progress" />
		<TodoList data={doneList} status="Done" />
	</div>
</div>

{#if $isModalOpen}
	<Modal>
		<InputForm />
	</Modal>
{/if}
