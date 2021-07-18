import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import AppContextProvider from "./Context/AppContextProvider";
import { BrowserRouter } from 'react-router-dom';


let target = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
  <AppContextProvider>
    <App />
  </AppContextProvider>
  </BrowserRouter>,
  target
);
