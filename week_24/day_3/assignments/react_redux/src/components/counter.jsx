// Example of Functional Component with redux connect
import React from "react";
import { connect } from "react-redux";
import {addCounter,reduceCounter} from "../redux/actions"

const Counter = (props) => {
  const { addCounter, reduceCounter, counter } = props;

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={addCounter}>Add</button>
      <button onClick={reduceCounter}>Reduce</button>
    </>
  );
}

  const mapStateToProps = (state) => ({
    counter: state.counter,
  });

  const mapDispatchToProps = dispatch => ({
        addCounter: () => dispatch(addCounter(1)),
        reduceCounter: () => dispatch(reduceCounter(1))
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Counter);


