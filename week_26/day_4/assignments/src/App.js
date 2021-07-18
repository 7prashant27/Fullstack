import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from './Redux/action'
import {v4 as uuid} from 'uuid'
import './App.css';


function App() {
	const [todo, settodo] = useState("")
	const data = useSelector(state => state.todoData)
	const dispatch = useDispatch()


	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(addTodo(todo))
	}


	return (
		<div className = "App">
			<form onSubmit = {handleSubmit}>
				<input type = "text" value = {todo} data-testid = "todo-input" onChange = {(e) => settodo(e.target.value)} />
				<button type = "submit" data-testid = "add-todo-btn">Add</button>
			</form>
			
			{
				data && data.map((item) => (
					<div data-testid = "todo-container" key = {uuid()} style = {{marginTop:"10px"}}>
						{item}
					</div>
				))
			}
		</div>
	);
}

export default App;
