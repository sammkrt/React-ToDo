import React from "react";

const ToDoList = ({todos}) => {
  
    return (
    <div>
      <ul>
         {todos.map(sentence => (
            <li key={sentence.id}>{sentence.text}</li>
         ))}
         
      </ul>
    </div>
  );
};

export default ToDoList;
