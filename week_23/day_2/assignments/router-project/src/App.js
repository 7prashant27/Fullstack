import React from 'react';

// context
import { AppContext } from "./Context/AppContextProvider";

// components 
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

// Routes
import Routes from "./Routes/Routes"
// import PrivateRoutes from "./PrivateRoutes/PrivateRoutes"

// css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AppContext.Consumer>
    {(value) => {
      return (
        <div>
          <Navbar/>
          <Routes/>
          {/* <PrivateRoutes/> */}
          <Footer/>
        </div>
      );
    }}
  </AppContext.Consumer>
  );
}

export default App;


