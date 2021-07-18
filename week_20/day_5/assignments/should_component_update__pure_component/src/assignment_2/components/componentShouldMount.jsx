import React from "react";
let count = 0;

export default class TodoItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.data.status !== this.props.data.status;
  }
  render() {
    console.log(count++);
    const {
      data: { items, status }
    } = this.props;
    return (
      <div>
        <p> {items} </p>
        <p> {status ? "Done" : "Not done"}</p>
        <button onClick={this.props.toggle}>Toggle </button>
      </div>
    );
  }
}
