import React from 'react';
import './App.css';
import Calculator from "./components/Calculator"

function App() {
  return (
    <div className="App">
      <h2>Calculates value with instance 1</h2>
        <Calculator addByAmount={1}/>
      <h2>Calculates value with instance 10</h2>
      <Calculator addByAmount={10}/>
     
    </div>
  );
}

export default App;