import React from "react";

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <li
      className="flex items-center mb-2 bg-gray-100 p-2 rounded shadow-sm"
    >
      <span
        onClick={toggleTodo}
        className={`flex-1 cursor-pointer select-none ${todo.completed ? 'line-through text-gray-400' : ''}`}
      >
        {todo.text}
      </span>
      <button onClick={removeTodo} className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem; 