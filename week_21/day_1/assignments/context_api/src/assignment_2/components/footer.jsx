import React from "react";
import { AppContext } from "../Context/ContextProvider";
import Styles from "./theme.module.css";

export default class Footer extends React.Component {
  render() {
    return (
    <>

       <div className={Styles.footer_bar}>
         <p>Made with React Context API</p>
       </div>
        
    </>
    )
  }
}
