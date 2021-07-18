import React from "react";
import Styles from "./component.module.css" 
export default class CreateRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: "",
      address: "",
      department: null,
      salary: "",
      marital: false,
    };
  }

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    const val = type === "checkbox" ? checked : value;
    this.setState({
      [name]: val,
    });
  };

  render() {
    return (
      this.props.data.edit_mode ? 
      <div className={Styles.row}>
        {Object.keys(this.props.data).map((element, index) => {
        if (element === "edit_mode" || element === "id") {
          return null
        } else {
          return (<div key={index} className={Styles.col}><input type="text" onChange={this.handleChange}/></div>);
        }
      })}
        <div><button onClick={this.props.edit}>Edit</button></div>
      </div>
      : 
      <div key={this.props.data.id} className={Styles.row}>
      {Object.keys(this.props.data).map((element, index) => {
        if (element === "edit_mode" || element === "id") {
          return null
        } else {
          return (<div key={index} className={Styles.col}><p>{this.props.data[element]}</p></div>);
        }
      })}
        <div><button onClick={this.props.edit}>Edit</button></div>
        <div><button onClick={this.props.del}>Delete</button></div>
      </div>
    );
  }
}
