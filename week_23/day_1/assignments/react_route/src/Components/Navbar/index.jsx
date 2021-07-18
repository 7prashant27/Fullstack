import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./index.module.css"



function NavBar() {
  return (
    <>
      <div>
        <ul id={Styles.nav}>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ="/contact">Contact</Link></li>
        <li><Link to ="/about-us">About</Link></li>
        <li><Link to ="/services">Services</Link></li>
        <li><Link to ="/login">Login</Link></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
