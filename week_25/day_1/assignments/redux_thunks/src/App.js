import React from 'react';

import Route from "./routes/routes"
import Navbar from "./components/navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route/>
    </div>
  );
}

export default App;
