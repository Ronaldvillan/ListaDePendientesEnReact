// import React from 'react';
// import { TodoItem } from "./TodoItem";

// export function TodoList({ todos, toggleTodo }) {
//     const pendingTodos = todos.filter((todo) => !todo.completed); // Filtra las tareas pendientes

//     return (
//         <div className="card">
//             {pendingTodos.length === 0 && (
//                 <p className="no-tasks">No hay tareas pendientes</p> // Mostrar mensaje si no hay tareas pendientes
//             )}
//             <ul>
//                 {todos.map((todo, index) => (
//                     <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} index={index} />
//                 ))}
//             </ul>
//         </div>
//     );
// }


import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo }) {
    return (
        <div className="card">
            <ul>
                {todos.length > 0 ? (
                    todos.map((todo, index) => (
                        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} index={index} />
                    ))
                ) : (
                    <li className="no-tasks-message">¡Todo listo! No hay tareas pendientes.</li>  // El mensaje solo aparece cuando la lista está vacía
                )}
            </ul>
        </div>
    );
}



