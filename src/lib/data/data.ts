import type { ITodoItem } from '$lib/types';

export const data: ITodoItem[] = [
	{
		id: 1,
		title: 'first to-do',
		content: 'first content',
		is_completed: false,
		status: 'progress'
	},
	{
		id: 2,
		title: 'second to-do',
		content: 'second content',
		is_completed: false,
		status: 'progress'
	},
	{
		id: 3,
		title: 'third to-do',
		content: 'third content',
		is_completed: false,
		status: 'progress'
	},
	{
		id: 4,
		title: 'fourth to-do',
		content: 'fourth content',
		is_completed: false,
		status: 'upcoming'
	},
	{
		id: 5,
		title: 'fifth to-do',
		content: 'fifth content',
		is_completed: false,
		status: 'upcoming'
	},
	{
		id: 6,
		title: 'sixth to-do',
		content: 'sixth content',
		is_completed: true,
		status: 'done'
	}
];
