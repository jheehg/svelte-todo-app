export type ITodoList = {
	list: ITodoItem[];
	statusType: Status;
};
export type Status = 'upcoming' | 'progress' | 'done';

export interface ITodoItem {
	id: number;
	title: string;
	content: string;
	is_completed?: boolean;
	status: Status;
}
