import React from "react";

const ToDoList = (props) => {
  console.log(props)
    return (
    <div>
      <ul>
         {props.todos.map(sentence => (
            <li>{sentence.text}</li>
         ))}
      </ul>
    </div>
  );
};

export default ToDoList;
