import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import NavBar from "./Components/Navbar/index"
import  Routes  from './Components/Navbar/routes';

function App() {
  return (
   <BrowserRouter>
      <NavBar/>
      <Routes/>
   </BrowserRouter>
  )
}

export default App