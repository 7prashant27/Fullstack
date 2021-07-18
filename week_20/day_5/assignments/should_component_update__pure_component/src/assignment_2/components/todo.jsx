
import React from "react";
import { v4 as uuid } from "uuid";
import TodoItem from "./ComponentShouldMount.jsx";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      data: []
    };
  }

  handleSubmit = () => {
    const { value, data } = this.state;
    let payload = {
      id: uuid(),
      items: value,
      status: false
    };

    this.setState({
      data: [...data, payload]
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

  render() {
    console.log(this.state.data);
    return (
      <>
        <div style={{marginTop:"20px",marginLeft:"300px" ,padding:"20px"}}>
          <input
            placeholder="add items.."
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}

          />
          <button onClick={this.handleSubmit}>ADD</button>
          <div>
            {this.state.data.map((items) => (
              <TodoItem
                key={items.id}
                data={items}
                toggle={() => this.toggleStatus(items.id)}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
