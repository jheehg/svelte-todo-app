import type { ITodoList } from '$lib/types';

export const data: ITodoList = [
	{
		id: 1,
		title: 'first to-do',
		content: 'first content',
		isCompleted: false,
		status: 'progress'
	},
	{
		id: 2,
		title: 'second to-do',
		content: 'second content',
		isCompleted: false,
		status: 'progress'
	},
	{
		id: 3,
		title: 'third to-do',
		content: 'third content',
		isCompleted: false,
		status: 'progress'
	},
	{
		id: 4,
		title: 'fourth to-do',
		content: 'fourth content',
		isCompleted: false,
		status: 'upcoming'
	},
	{
		id: 5,
		title: 'fifth to-do',
		content: 'fifth content',
		isCompleted: false,
		status: 'upcoming'
	},
	{
		id: 6,
		title: 'sixth to-do',
		content: 'sixth content',
		isCompleted: true,
		status: 'done'
	}
];
