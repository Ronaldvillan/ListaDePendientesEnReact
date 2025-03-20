// import React from "react"

// export function TodoItem({ todo, toggleTodo }) {
//     const { id, task, completed } = todo;

//     const handleTodoClick = () => {
//         toggleTodo(id);
//     }
//     return<li class="card">
//         <input type="checkbox" checked={completed} onChange={handleTodoClick} />
//         {task}
//     </li>

// }
import React from "react";

export function TodoItem({ todo, toggleTodo, index }) {
    const { id, task, completed } = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    };

    return (
        // <li className="card">
        //     <input type="checkbox" checked={completed} onChange={handleTodoClick} />
        //     <span className="todo-index">{index + 1}- {task}</span> {/* Muestra el índice + 1 después del checkbox */}
        // </li>
        <li className="card">
    <input type="checkbox" checked={completed} onChange={handleTodoClick} />
    <span className="todo-index">{index + 1 }- </span> {/* Índice */}
    <span>{task}</span> {/* Tarea */}
</li>
    );
}

