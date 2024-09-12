import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

// 9. create the form component for adding new todo

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState(""); // for the input field
  const { addTodo } = useTodoContext(); // 10. its a component So consume the context value lol

  // 11. form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todoMsg) return; // validation

    addTodo(todoMsg); // add the new todo to the context
    setTodoMsg(""); // reset the input field
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
// Now we can use the TodoForm component in the App.tsx file
// 12. import TodoForm in components/index & export it
