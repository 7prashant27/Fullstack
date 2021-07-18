// import React from "react";
// import "./App.css";
// import Container from "./assgnment_1/AuthContext";
// import LoginStatus from "./assgnment_1/LoginStatus.jsx";

// export default function App() {
//   return (
//     <div className="App">
//       <Container />
//       <LoginStatus />
//     </div>
//   );
// }


import React from "react";
import NavBar from "./assignment_2/components/nav_bar";
import Footer from "./assignment_2/components/footer";
import Form from "./assignment_2/components/form";
import Styles from "./assignment_2/components/theme.module.css";
import { AppContext } from "./assignment_2/Context/ContextProvider";

export default function App() {
  return (
    <AppContext.Consumer>
      {(value) => {
        return (
          <div className={value.theme === "light" ? Styles.light : Styles.dark}>
            <NavBar />
            <div className={Styles.content}>
              <div className={Styles.heading}>
                <h2 style={{paddingTop:"150px"}}>Welcome to Theme Context. <br/><small>Click on Theme Button to change theme</small></h2>
              </div>
              <div className={Styles.from_div}>
                <Form />
              </div>
            </div>
            <Footer />
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

