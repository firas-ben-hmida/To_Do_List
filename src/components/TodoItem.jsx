import React from "react";

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <li
      className="flex items-center mb-2 bg-gray-100 p-2 rounded shadow-sm"
    >
      <button
        onClick={toggleTodo}
        className={`mr-2 p-2 rounded-full focus:outline-none transition-colors ${todo.completed ? 'bg-green-200 text-green-700' : 'bg-gray-200 text-gray-500 hover:bg-green-100'}`}
        title={todo.completed ? 'Marquer comme non terminé' : 'Marquer comme terminé'}
      >
        {todo.completed ? '✅' : '🔔'}
      </button>
      <span
        className={`flex-1 cursor-pointer select-none ${todo.completed ? 'text-gray-400' : ''}`}
      >
        {todo.text}
      </span>
      <span className={`ml-4 px-2 py-1 rounded text-xs font-semibold ${todo.completed ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
        {todo.completed ? 'Terminé' : 'Non terminé'}
      </span>
      <button onClick={removeTodo} className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem; 