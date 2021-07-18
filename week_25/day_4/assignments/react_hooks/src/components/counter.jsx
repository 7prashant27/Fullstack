import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);


  return (
    <div className="App">
      <div>
        <h1>COUNTER</h1>
      </div>
      <div>{counter}</div>
      <br />
      <button onClick={() => setCounter((state) => state + 1)}>ADD</button>
      <button onClick={() => setCounter((state) => state - 1)}>REDUCE</button>
    </div>
  );
}


export default Counter;
