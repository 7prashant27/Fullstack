import React from 'react';
import './App.css';
import { store } from "./redux/store"

import { addCounter, reduceCounter, multiplyCounter, DivideCounter} from "./redux/actions"

// store
// getState
// dispach
// action types
// action creators
// reducres
// store.subscribe


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      value : ""
    }
  }

  componentDidMount(){
    this.unsubscribe =  store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h2>{store.getState().counter}</h2>

        <input type="number" value = {this.state.value} placeholder="Enter the value" onChange={(e) => this.setState({ value : e.target.value })}></input>
        
        <br/>
        <br/>

        <button onClick={() => store.dispatch(addCounter(Number(this.state.value)))} >Add</button>
        <button onClick={() => store.dispatch(reduceCounter(1))} >Reduce</button>

        <br/>
        <br/>

        <button onClick={() => store.dispatch(addCounter(1))} >Add</button>
        <button onClick={() => store.dispatch(reduceCounter(1))} >Reduce</button>
        <button onClick={() => store.dispatch(multiplyCounter(5))} >Multiply</button>
        <button onClick={() => store.dispatch(DivideCounter(0))} >Divide</button>

      </div>
    );
  }
}
