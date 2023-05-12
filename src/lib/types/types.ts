export interface ITodoItem {
    id: number;
    title: string;
    content: string;
    isCompleted?: boolean;
}

export type ITodoList = ITodoItem[];