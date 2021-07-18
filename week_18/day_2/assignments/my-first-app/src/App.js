import React from 'react';
import Style from './App.module.css';

import CreateHeading from "./assignment_1/components/create_heading"
import List from "./assignment_1/components/list"

import ButtonRed from "./assignment_2/components/button_red"
import ButtonBlue from "./assignment_2/components/button_blue"
import ButtonBrown from "./assignment_2/components/button_brown"
import ButtonGreen from "./assignment_2/components/button_green"
import ButtonLight_Blue from "./assignment_2/components/button_light_blue"
import ButtonPink from "./assignment_2/components/button_pink"
import ButtonPurple from "./assignment_2/components/button_purple"
import ButtonOrange from "./assignment_2/components/button_orange"


import Card from "./assignment_3/components/card"



// assignment-1

// function App() {
//   return (
//   <>
//     <CreateHeading title="Mobile Operating Systen"/>
//      <List data={["Android","Blackberry","iphone","Windows Phone"]}/>
//      <CreateHeading title="Mobile Manufacturers"/>
//      <List data={["Samsung","HTC","Micromax","Apple"]}/>
//   </>
//   );
// }


// assignment-2

// function App() {
//   return (
//     <>
//       <div>
//         <ButtonBlue textContent="JOIN US" />
//         <ButtonLight_Blue textContent="SETTING" />
//         </div>
//         <div>
//         <ButtonOrange textContent="LOGIN" />
//         <ButtonRed textContent="CONTACT US" />
//         </div>
//         <div>
//         <ButtonGreen textContent="SEARCH" />
//         <ButtonPurple textContent="HELP" />
//       </div>
//       <div>
//         <ButtonPink textContent="HOME" />
//         <ButtonBrown textContent="DOWNLOAD" />
//       </div>
//     </>
//   );
// }


// assignment-3

function App(){
  return (
    <div>
      <Card/>
    </div>
  )
} 




export default App;




