import React from 'react';
import {Navbar} from './Components/Navbar';
import { Routes } from './Routes/Routes';



function App(props) {
  return (
    <div>
      <Navbar>{props.children}</Navbar>
      <Routes/>
    </div>
  );
}

export default App;
