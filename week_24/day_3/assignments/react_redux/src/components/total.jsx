import React from "react";
import { connect } from "react-redux";


const Total = (props) => {
  const { total, completed_task,not_completed} = props;
  return (
    <>
      <p>Total Task = {total}</p>
      <p>Completed task = {completed_task}</p>
      <p>Not completed task = {not_completed}</p>
    </>
  );
}

  const mapStateToProps = (state) => ({
    total: state.total,
    completed_task : state.completed_task,
    not_completed : state.not_completed
  });

  const mapDispatchToProps = dispatch => ({});

  export default connect(mapStateToProps, mapDispatchToProps)(Total);