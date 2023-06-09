import type { ITodoItem } from '$lib/types';
import { writable } from 'svelte/store';

const createList = () => {
	const { subscribe, set } = writable<ITodoItem[]>([]);

	return {
		set,
		subscribe
		// updateItem: (updatedItem: Partial<ITodoItem>) => {
		// 	update((prev) => {
		// 		return prev.map((item) => {
		// 			if (item.id !== updatedItem.id) {
		// 				return {
		// 					...item
		// 				};
		// 			} else {
		// 				return {
		// 					...item,
		// 					...updatedItem
		// 				};
		// 			}
		// 		});
		// 	});
		// },
		// createItem: (newItem: ITodoItem) => {
		// 	update((prev) => {
		// 		const newId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 0;
		// 		newItem.id = newId;
		// 		newItem.is_completed = false;
		// 		return [...prev, newItem];
		// 	});
		// },
		// deleteItem: (targetId: number) => update((prev) => prev.filter((item) => item.id !== targetId)),
		// resetList: (status: string) => {
		// 	update((prev) => {
		// 		return prev.filter((item) => item.status !== status);
		// 	});
		// }
	};
};

const createToast = () => {
	const initialToastInfo = {
		isOpen: false,
		message: ''
	};
	const { subscribe, set, update } = writable(initialToastInfo);

	return {
		subscribe,
		showToast: (message: string) => {
			update(() => ({ message, isOpen: true }));
		},
		closeToast: () => set(initialToastInfo)
	};
};

export const list = createList();
export const toast = createToast();
export const status = writable('');
export const isModalOpen = writable(false);
