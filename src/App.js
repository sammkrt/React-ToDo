import logo from './logo.svg';
import './App.css';
import ToDoList from './component/ToDoList';
import AddToDo from './component/AddToDo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);


  return (
    <div>
       <h1>ToDo list</h1>
      <ToDoList todos ={todos} />
      <AddToDo setTodos={setTodos}/>
    </div>
  );
}

// const TodoList = (props) => {
//   console.log(props)
// }


export default App;
