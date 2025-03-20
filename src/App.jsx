// import React, { Fragment, useState, useRef, useEffect } from "react";
// import { v4 as uuidv4 } from 'uuid';
// import { TodoList } from './componests/TodoList';
// import './componests/styles/card.css';
// import './componests/styles/center.css';
// import './componests/styles/noti.css';
// import './componests/styles/index.css';

// const KEY = "todoApp.todos";

// export function App() {
//     const [todos, setTodos] = useState([{ id: 1, task: 'Tarea 1', completed: false }]);
//     const todoTaskRef = useRef();
//     //Se Cambia el titulo
//     useEffect(() => {
//         document.title = "MiGestorDeTareas"; // Aquí cambias el nombre de la pestaña
//     }, []);


//     useEffect(() => {
//         const storedTodos = JSON.parse(localStorage.getItem(KEY));
//         if (storedTodos) {
//             setTodos(storedTodos);
//         }
//     }, []);

//     useEffect(() => {
//         localStorage.setItem(KEY, JSON.stringify(todos));
//     }, [todos]);

//     const toggleTodo = (id) => {
//         const newTodos = [...todos];
//         const todo = newTodos.find((todo) => todo.id === id);
//         todo.completed = !todo.completed;
//         setTodos(newTodos);
//     };

//     const handleTodoAdd = () => {
//         const task = todoTaskRef.current.value;
//         if (task === '') return;

//         setTodos((prevTodos) => {
//             return [...prevTodos, { id: uuidv4(), task, completed: false }];
//         });
//         todoTaskRef.current.value = null;
//     };

//     const handleClearAll = () => {
//         const newTodos = todos.filter((todo) => !todo.completed);
//         setTodos(newTodos);
//     };

//     return (
//         <Fragment>
//     <div className="center">
//         <h2>Agregar Tarea</h2> {/* Título agregado */}
//         <div className="input-container"> {/* Nuevo contenedor para el input y botones */}
//             <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea" />
//             <button onClick={handleTodoAdd}> ➕ </button>
//             <button onClick={handleClearAll}> 🗑</button>
//         </div>
//     </div>
//     <TodoList todos={todos} toggleTodo={toggleTodo} />
//     <div className="noti">Te quedan <p>{todos.filter((todo) => !todo.completed).length}</p> tareas por terminar</div>
// </Fragment>


//     );
// }
import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from './componests/TodoList';
import './componests/styles/card.css';
import './componests/styles/center.css';
import './componests/styles/noti.css';
import './componests/styles/index.css';

const KEY = "todoApp.todos";

export function App() {
    const [todos, setTodos] = useState([{ id: 1, task: 'Tarea 1', completed: false }]);
    const todoTaskRef = useRef();
    //Se Cambia el titulo
    useEffect(() => {
        document.title = "MiGestorDeTareas"; // Aquí cambias el nombre de la pestaña
    }, []);


    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return;

        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), task, completed: false }];
        });
        todoTaskRef.current.value = null;
    };

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    };

    // Función para manejar el evento Enter
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleTodoAdd();
        }
    };

    return (
        <Fragment>
            <div className="center">
                <h2>Agregar Tarea</h2> {/* Título agregado */}
                <div className="input-container"> {/* Nuevo contenedor para el input y botones */}
                    <input
                        ref={todoTaskRef}
                        type="text"
                        placeholder="Nueva Tarea"
                        onKeyPress={handleKeyPress} // Agregar el evento onKeyPress
                    />
                    <button onClick={handleTodoAdd}> ➕ </button>
                    <button onClick={handleClearAll}> 🗑</button>
                </div>
            </div>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <div className="noti">Te quedan <p>{todos.filter((todo) => !todo.completed).length}</p> tareas por terminar</div>
        </Fragment>
    );
}
