import React, { useRef } from "react";
import { useState } from "react";

const AddToDo = ({setTodos}) => {
    const inputRef = useRef();
    const handleAddTodo= (event) => {
        event.preventDefault();
        const text = event.target.elements.AddTodo.value;
        const todo = {
            id: 4,
            text ,
            done: false,
        }
        setTodos(prevTodos => {
            return prevTodos.concat(todo)
        })
        inputRef.current.value = "";

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