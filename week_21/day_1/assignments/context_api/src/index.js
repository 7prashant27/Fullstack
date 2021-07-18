import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AppContextProvider from "./assignment_2/Context/ContextProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  rootElement
);
