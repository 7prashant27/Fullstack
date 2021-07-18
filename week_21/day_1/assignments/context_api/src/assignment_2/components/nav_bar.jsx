import React from "react";
import { AppContext } from "../Context/ContextProvider";
import Styles from "./theme.module.css";
export default class Navbar extends React.Component {
  render() {
    return (
      <div className={Styles.navbar}>
        <button
          className={Styles.toggleButton}
          onClick={this.context.toggleTheme}
        >
          Theme : {this.context.theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    );
  }
}

Navbar.contextType = AppContext;
