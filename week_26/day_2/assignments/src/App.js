import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }

  handleAdd = () =>{
    this.setState({
      count:this.state.count + 5
    })
  }

  handleReduce = () =>{
    this.setState({
      count:this.state.count - 5
    })
  }

  render(){
    const {count} =this.state
     return(
       <div className="App">
         <h1>COUNT</h1>
          <h1 data-testid="counter">{count}</h1>
          <Button label="ADD" onClick={this.handleAdd}></Button>
          <Button label="REDUCE" onClick={this.handleReduce}></Button>
       </div>
    )
  }
}

export default App;
