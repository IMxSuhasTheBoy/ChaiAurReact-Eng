import { createContext, useContext } from "react";
import { ITodoContext } from "../types";
// approach: Separating the context definition from its implementation

// 1. put the data & methods in Object that are needed to be accessed from the context
export const TodoContext = createContext<ITodoContext>({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleIsCompleted: () => {},
});

// 2. Custom hook that simplifies context consumption in components
export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }

  return context;
};

// 3. A provider component for wrapping the parent component that will provide the actual context value to all the children components
export const TodoProvider = TodoContext.Provider;

// Child components can then use the useTodoContext hook to access global todo data and functions.

// 4. everything should be imported in & exported from the contexts/index.ts file

/*
interface ITodoContext {
  todos: { id: string; todoMsg: string; isCompleted: boolean }[];
  addTodo: (newTodoMsg: string) => void;
  updateTodo: (id: string, updatingTodoMsg: string) => void;
  deleteTodo: (id: string) => void;
  toggleIsCompleted: (id: string) => void;
} */
