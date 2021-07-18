import React from "react";
import { AppContext } from "../Context/AuthContextProvider";

export default class Container extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            height: "50px",
            backgroundColor: "coral",
            position: "relative"
          }}
        >
          <button
            style={{
              position: "absolute",
              left: "80%",
              top: "10px",
              padding: "5px 20px",
              border: "none",
              outline: "none",
              borderRadius: "5px",
              backgroundColor: this.context.isAuth ? "orangered" : "lightgreen"
            }}
            onClick={this.context.toggleAuth}
          >
            {this.context.isAuth ? "Logout" : "Login"}
          </button>
        </div>
      </>
    );
  }
}

Container.contextType = AppContext;
