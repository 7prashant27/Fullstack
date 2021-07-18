import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./all.module.css"
import { AppContext } from "../Context/AppContextProvider";


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return (
    <>
    <div id={Styles.nav}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        {this.context.isAuth ? <li><Link to="/user/:id">{this.context.userData.name}</Link></li> : <li><Link to="/login">Login</Link></li>}
      </ul>
    </div>
  </>
    )
  }
  
   
}

NavBar.contextType = AppContext;