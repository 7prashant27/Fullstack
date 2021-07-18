import React, {useState} from 'react';
import {v4 as uuid} from "uuid"

function Todo() {
  const [title, addTitle] = useState("")
  const [todo,addTodo] = useState([])


 const handleTodo = () => {
    let payload = {
      id : uuid(),
      title : title
    }
    addTodo((state) => {return [...state, payload]})
  }

  const handleDelete = (id) => {
    addTodo((state) => state.filter(elem => elem.id !== id  ))
  }

  return (
    <div className="App">

      <div><h1>Todo</h1></div>
      <input value={title} onChange={(e)=>addTitle(e.target.value)} />
      <button onClick={handleTodo}>Add Task</button>
      {todo && todo.map((item)=>
      <div key={item.id}>
        <p>{item.title}</p>
      <button onClick={() => handleDelete(item.id)}> Delete </button></div>)}
      
   </div>

  );
 }

export default Todo;