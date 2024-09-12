import { useState } from "react";
import { useTodoContext } from "../contexts/index";
import { ITodo } from "../types";

// 13. created the TodoItem component for displaying the todo item,
// updating, deleting todo item or toggling the completion status of the todo item.

// 14. App.tsx -> pass the todo item as a prop to the TodoItem component
function TodoItem({ todo }: { todo: ITodo }) {
  // 15. UI states for the todo item
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todoMsg);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const { updateTodo, deleteTodo, toggleIsCompleted } = useTodoContext();

  // 16. handlers
  const handleEditTodoMsg = () => {
    updateTodo(todo.id, todoMsg);
    setIsTodoEditable(false);
  };

  const handleToggleIsTodoCompleted = () => {
    toggleIsCompleted(todo.id);
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    deleteTodo(todo.id);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.isCompleted}
        onChange={handleToggleIsTodoCompleted}
      />

      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg text- ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.isCompleted ? "line-through text-gray-00" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setIsTodoEditable((prev) => !prev);
            handleEditTodoMsg();
          }
        }}
      />

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.isCompleted) return;

          if (isTodoEditable) {
            handleEditTodoMsg();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.isCompleted}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button> */}

      {showDeleteConfirmation ? (
        <div className="flex gap-x-2">
          <button
            className="inline-flex px-2 rounded-lg text-sm border border-black/10 justify-center items-center bg-red-500 text-white hover:bg-red-600 shrink-0"
            onClick={handleConfirmDelete}
          >
            Confirm
          </button>
          <button
            className="inline-flex px-2 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-200 hover:bg-gray-300 shrink-0"
            onClick={handleCancelDelete}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={handleDeleteClick}
        >
          ❌
        </button>
      )}
    </div>
  );
}

export default TodoItem;
// 12. import TodoItem in components/index & export it

/*

1. Added a new state `showDeleteConfirmation` to control the visibility of the confirmation buttons.
2. Created three new handler functions:
   - `handleDeleteClick`: Shows the confirmation buttons.
   - `handleConfirmDelete`: Deletes the todo and hides the confirmation buttons.
   - `handleCancelDelete`: Hides the confirmation buttons without deleting.



   flow -
   - clicks delete button :  handleDeleteClick is called and showDeleteConfirmation is set to true
   - confirmation buttons are shown : cause showDeleteConfirmation is true
   - clicks on confirm button : handleConfirmDelete is called and todo is deleted and showDeleteConfirmation is set to false
   - confirmation buttons are hidden : cause showDeleteConfirmation is set to false
   - clicks on cancel button : handleCancelDelete is called and showDeleteConfirmation is set to false
   - confirmation buttons are hidden : cause showDeleteConfirmation is set to false
*/
