import React from "react";
import { v4 as uuid } from "uuid";
import TodoItem from "./componentShouldMount.jsx";
import Styles from "./todo.module.css"

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      data: [],
      comp_data: [],
      edit_value: ""
    };
  }


  handleSubmit = () => {
    const { value, data } = this.state;
    if(value == ""){
      return
    }
    let payload = {
      id: uuid(),
      items: value,
      status: false,
      edit_mode:false,
    };

    this.setState({
      data: [...data, payload],
      value: ""
    });
  };


  toggleStatus = (id) => {
    const { data } = this.state;
    let newData = data.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    this.setState({
      data: newData
    });
  };

  handledel = (id) => {
    const { data } = this.state;
    let newData = data.filter((item) =>
       item.id !== id 
    );
    this.setState({
      data: newData
    });
  }

  handleEditSubmit = (id,value) =>{
    const { data } = this.state;
    let newData = data.map((item) =>
      item.id === id ? { ...item, edit_mode: !item.edit_mode, items:value } : item
    );
    this.setState({
      data: newData
    });
  }

  handleEditInput = (e) => {
    this.setState({ edit_value: e.target.value })
  }

  handleEdit = (id) => {
    const { data } = this.state;
    let x = ""
    let newData = data.map((item) => {
      if(item.id === id){
        x = item.items
       return { ...item, edit_mode: !item.edit_mode }
      }
      else {
        return item
      }
    }
    )
    this.setState({
      data: newData,
      edit_value: x
    });
  }

  

  render() {
    return (
      <>
        {/* <h2>Simple ToDo App</h2> */}

        <div className={Styles.container}>
        <div className={Styles.todo_input_div}>
        <button className={Styles.todo_add} onClick={this.handleSubmit}>+</button>
          <input
            className={Styles.todo_input}
            placeholder="Add a to-do here"
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
            spellCheck="false"
          />
          </div>
          <div className={Styles.batch}>TODO ITEMS</div>

          <div>
          {this.state.data.length == 0 ? <p>No items added to todo</p> : this.state.data.map((items) => (
               items.status ? null :
              <TodoItem
                key={items.id}
                data={items}
                toggle={() => this.toggleStatus(items.id)}
                edit = {() => this.handleEdit(items.id)}
                edit_value ={this.state.edit_value}
                edit_input ={() => this.handleEditInput}
                editChange = {(e,value) => this.handleEditSubmit(items.id,value)}
                delete = {() => this.handledel(items.id)}
                
              />
            ))}
          </div>

          <div className={Styles.batch}>SHOW COMPLETED TO-DOS</div>
          {this.state.data.map((items) => (
            items.status ? <TodoItem
            key={items.id}
            data={items}
            toggle={() => this.toggleStatus(items.id)}
            edit = {() => this.handleEdit(items.id)}
            edit_value ={this.state.edit_value}
            edit_input ={this.handleEditInput}
            editChange = {() => this.handleEditSubmit(items.id)}
            delete = {() => this.handledel(items.id)}
            
          /> : null
              
            ))}
        </div>
      </>
    );
  }
}
