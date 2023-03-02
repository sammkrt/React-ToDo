import React from "react";
import { useState } from "react";

const AddToDo = ({setTodos}) => {
    
    const handleAddTodo= (event) => {
        event.preventDefault();
        const text = event.target.elements.AddTodo.value;
        const todo = {
            id: 4,
            text ,
            done: false,
        }
        setTodos(event.target.elements.AddTodo.value)
        setTodos(todo)

    }
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <input  name="AddTodo" placeholder="Add todo"/>
                <button type="submit">Submit</button>
            </form>
        </div>
        
    )
}

export default AddToDo;