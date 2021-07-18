import React from 'react';
import Styles from "./App.module.css"
import ToDo from "./assignment_2/components/todo.jsx"
import LoginComp from "./assignment_1/components/Login"
import Design from "./assignment_3/components/Design"

//assignment_1

function App() {
      return (
        <div className={Styles.container}>
          <ToDo/>
        {/* <LoginComp/> */}
        {/* <Design/> */}
        </div>
      )
    }
    

//assignment_2

// function App() {
//   return (
//     <ToDo /> 
//   )
// }

//assignment_3

// function App() {
//     return (
//       <Design /> 
//     )
//   }
  


export default App;
