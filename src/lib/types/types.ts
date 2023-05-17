export type ITodoList = ITodoItem[];
export type Status = 'upcoming' | 'progress' | 'done';

export interface ITodoItem {
	id: number;
	title: string;
	content: string;
	isCompleted?: boolean;
	status: Status;
}
