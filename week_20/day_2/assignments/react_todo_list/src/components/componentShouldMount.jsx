import React from "react";
import Styles from "./todo.module.css";
export default class TodoItem extends React.Component {
  // shouldComponentUpdate(nextProps) {
  //   return nextProps.data.status !== this.props.data.status || nextProps.data.edit_mode !== this.props.data.edit_mode;
  // }
  constructor(props){
    super(props)
    this.state = {
      value : props.edit_value
    }
  }
  render() {
    const {
      data: { items, status, edit_mode },
    } = this.props;
    return (
      <div className={Styles.tasks_div}>
        {edit_mode ? (


          <>
            <input type="text" value={this.state.value} onChange={this.props.edit_input} spellCheck="false"/>
            <button onClick={this.props.editChange}>Edit</button>
          </>


        ) : (


          <>
            <input
              className={Styles.task_check}
              type="checkbox"
              checked={status}
              onClick={this.props.toggle}
              spellCheck="false"
            />
            <p
              className={status ? `${Styles.done} ${Styles.task}` : Styles.task}
            >
              {items}
            </p>
            <button className={Styles.star} onClick={this.props.fab}>☆</button>
            <button className={Styles.edit} onClick={this.props.edit}>
              🖉
            </button>
            <button className={Styles.delete} onClick={this.props.delete}>🗑</button>
          </>


        )}
      </div>
    );
  }
}
