export interface ITodo {
  id: string;
  todoMsg: string;
  isCompleted: boolean;
}

export interface ITodoContext {
  todos: ITodo[];
  addTodo: (newTodoMsg: string) => void;
  updateTodo: (id: string, updatingTodoMsg: string) => void;
  deleteTodo: (id: string) => void;
  toggleIsCompleted: (id: string) => void;
}
