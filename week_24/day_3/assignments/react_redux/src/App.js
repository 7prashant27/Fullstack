import React from 'react';
import './App.css';
import Counter from "./components/counter"
import Todo from "./components/todo"
import Total from "./components/total"



function App() {

    return (
      <div className="App">
        {/* <Counter/> */}
        <br/>
        <Todo/>
        <br/>
        <Total/>        
      </div>
    );
  }

export default App
