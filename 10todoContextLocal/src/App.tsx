import "./App.css";
import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/index";
import { TodoForm, TodoItem } from "./components/index";
import { ITodo } from "./types";

function App() {
  // 6. State & method definations to manage the state, those will be mapped to the context value object
  const [todos, setTodos] = useState<ITodo[]>([
    { id: "1", todoMsg: "Todo 1 hardcoded data", isCompleted: false }, // dumy data
  ]);

  const addTodo = (newTodoMsg: string) => {
    /* flow:-
    / accept newTodoMsg as arg
    / to create new todo obj - use the setter with cb fn
    / access the previous todos array in cb fn
    / spread the previous todos
    / add the new todo obj to the top of the array
    */

    if (!newTodoMsg.trim()) return; // validations: if the new todo msg is empty, do nothing

    setTodos((prevTodos) => [
      { id: Date.now().toString(), todoMsg: newTodoMsg, isCompleted: false },
      ...prevTodos,
    ]);
  };

  const updateTodo = (id: string, updatingTodoMsg: string) =>
    // a: Map through the array of previous todos and grab the todo with the id that matches the id passed in.

    // b: Case:- matches:- spread that todo Obj & replace message with provided one

    // c: Case:- doesnt match:- previous one is kept as it is

    setTodos(
      (prevTodos) =>
        prevTodos.map((prevTodo) =>
          prevTodo.id === id
            ? { ...prevTodo, todoMsg: updatingTodoMsg }
            : prevTodo
        )
      // In essence, for non-matching todo (ternary else case), it's equivalent to saying "keep this todo as it was". This is a common pattern in React for updating specific items in an array state while leaving others untouched.
    );

  // In the new array by filter - only those todos will be included that matches the condition
  const deleteTodo = (id: string) =>
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
  // (obviously the requested one will not match the condition)

  const toggleTodoIsCompleted = (id: string) => {
    // a: Map through the array of previous todos and grab the todo with the id that matches the id passed in.

    // b: Case:- matches:- spread that todo Obj & toggle boolean isCompleted with the opposite of what it is

    // c: Case:- doesnt match:- previous boolean value is kept as it is

    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
    // In essence, for non-matching todo (ternary else case), it's equivalent to saying "keep this todo as it was". This is a common pattern in React for updating specific items in an array state while leaving others untouched.
  };

  // 7. local storage: as comp laod - query the local storage for the todos array - set the state with the value
  // purpose: persist the data only on first render, so no dependencies
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");

    if (todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // 8. As the state changes occur - update the local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 5. wrap the outermost parent component with the provider & pass the context value to all child components
  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleIsCompleted: toggleTodoIsCompleted,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form component */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* 14. Loop and Add TodoItem pass the todo item as a prop to the TodoItem component */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
