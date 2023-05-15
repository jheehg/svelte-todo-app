import { data } from '$lib/data';
import type { ITodoItem } from '$lib/types';
import { writable } from 'svelte/store';

const createList = () => {
	const { subscribe, set, update } = writable(data);

	return {
		subscribe,
		updateItem: (updatedItem: Partial<ITodoItem>) => {
			update((prev) => {
				return prev.map((item) => {
					if (item.id !== updatedItem.id) {
						return {
							...item
						};
					} else {
						return {
							...item,
							...updatedItem
						};
					}
				});
			});
		},
		createItem: (newItem: ITodoItem) => {
			update((prev) => {
				const newId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 0;
				newItem.id = newId;
				newItem.isCompleted = false;
				return [...prev, newItem];
			});
		},
		deleteItem: (targetId: number) => update((prev) => prev.filter((item) => item.id !== targetId)),
		resetList: () => set([])
	};
};

const createAlert = () => {
	const initialAlertInfo = {
		isOpen: false,
		message: ''
	};
	const { subscribe, set, update } = writable(initialAlertInfo);

	return {
		subscribe,
		showAlert: (message: string) => {
			update(() => ({ message, isOpen: true }));
		},
		closeAlert: () => set(initialAlertInfo)
	};
};

export const list = createList();
export const alert = createAlert();
