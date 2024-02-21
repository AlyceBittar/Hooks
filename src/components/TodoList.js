import React, { useState } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { 
            id: 1,
            text: 'Feed dogs'
        },
        { 
            id: 2,
            text: 'Do homework'
        },
        { 
            id: 3,
            text: 'Clean up the poop'
        }
    ]);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            {
                id: Math.random(), 
                text
            }
        ]);
    };

    return(
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
            {/* <button onClick={ addTodo }>Add a Todo</button> */}
            <AddNewTodo addTodo={addTodo} />
        </div>
    )
};

export default TodoList;