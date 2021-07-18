// Example of class component with redux connect
import React from "react"
import { connect } from "react-redux";
import { addTodo, deleteTodo, toggleStatus } from "../redux/actions";
import {v4 as uuid} from "uuid"  
 


class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value : ""
    }
  }

  render(){
    const {todo,addTodo,deleteTodo,toggleStatus} = this.props;
    return (
      <>
      <input type="text" value = {this.state.value} placeholder="Enter the value" onChange={(e) => this.setState({ value : e.target.value })}/>
      <button onClick={() => {
        addTodo( {id:uuid(),title:this.state.value} )}}>Add</button>
    {todo && todo.map(item => 
    <div key = {item.id}>
      <p>{item.title}</p>
    <button onClick={() => deleteTodo(item.id)}>Delete</button> 
    <button onClick={() => toggleStatus(item.id)}>{item.status? "Done" : "Not Done"}</button>
    </div>)}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  todo: state.todo
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: payload => dispatch(addTodo(payload)),
  deleteTodo: payload => dispatch(deleteTodo(payload)),
  toggleStatus : payload => dispatch(toggleStatus(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);



