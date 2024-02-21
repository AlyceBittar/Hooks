import React, { useState } from "react";

const AddNewTodo = ({addTodo}) => {
    const [todos, setTodos] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents auto page reload on form submit
        addTodo(todos);
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Add a Todo</label>
            <input type="text" id="todo" value={todos} onChange={(e) => setTodos(e.target.value)} />
            <input type="Submit" />
        </form>
    );
};

export default AddNewTodo;