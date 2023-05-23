import { list } from '$lib/stores';

export const fetchTodo = async () => {
	const response = await fetch('/api/todo');
	const { result, todo } = await response.json();
	if (result === 'success') {
		list.set(todo);
	}
};
