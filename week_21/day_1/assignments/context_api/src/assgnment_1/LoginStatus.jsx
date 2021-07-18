import React from "react";
import { AppContext } from "../Context/AuthContextProvider";

function LoginStatus() {
  return (
    <AppContext.Consumer>
      {(value) => {
        return (
          <div
            style={{
              marginTop: "50px",
              fontSize: "30px",
              border: "5px dashed blue",
              borderRadius: "10px",
              display: "inline-block",
              padding: "10px"
            }}
          >
            Login Status : {`${value.isAuth}`}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

export default LoginStatus;
