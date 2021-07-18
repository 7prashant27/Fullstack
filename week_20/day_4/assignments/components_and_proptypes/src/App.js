import React from 'react';

import './App.css';

import InputBoxes from "./Pin_Component/components/pin_input"

export default class App extends React.Component {
    constructor(props){
      super(props)
      this.state ={
        value : ""
      }
    }

    onChange = (value) => {
      this.setState({
        value : value
      })
    }

    render() {
      return (
        <div className="App">
          <InputBoxes onChange={this.onChange} length={5} label=""/>
          <div>{this.state.value}</div>
        </div>
      );
    }
  
}
