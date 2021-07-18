import React from "react";
import { AppContext } from "../Context/ContextProvider";
import Styles from "./theme.module.css";

export default class Footer extends React.Component {
  render() {
    return <>
    <form>
      <label>Email:</label>
      <input type="text"/>
      <label>Password:</label>
      <input type="text"/>
      <button>Submit</button>
    </form>
    </>;
  }
}
