import React from 'react';
import './App.css';

import Icon from "./assignment_optional/components/RoundedProfileIcon"

import ProfileCard from "./assignment_optional/components/ProfileCard"

function App() {
  return (
    <>
    <div className="App">
        <Icon src="bootstrap-logo.png" alt="profile_pic" name="Bootstrap"/>
        <Icon src="javascript-logo.png" alt="profile_pic" name="Javascript"/>
        <Icon src="IMG_5601.jpg" alt="profile_pic" name="Ritesh Ranjan"/>
    </div>
    <div>
    <ProfileCard src="bootstrap-logo.png" alt="profile_pic" name="Bootstrap" job="marketing" experience="4 Years" color="red"/>
    <ProfileCard src="javascript-logo.png" alt="profile_pic" name="Javascript" job="development" experience="2 Years" color="blue"/>
    <ProfileCard src="IMG_5601.jpg" alt="profile_pic" name="Ritesh Ranjan" job="student" experience="15 Years" color="orange"/>
</div>
</>
  );
}

export default App;




// function App() {
//   return (
//     <div>
//         <ProfileCard src="bootstrap-logo.png" alt="profile_pic" name="Bootstrap" job="marketing" experience="4 Years" color="red"/>
//         <ProfileCard src="javascript-logo.png" alt="profile_pic" name="Javascript" job="development" experience="2 Years" color="blue"/>
//         <ProfileCard src="IMG_5601.jpg" alt="profile_pic" name="Ritesh Ranjan" job="student" experience="15 Years" color="orange"/>
//     </div>
//   );
// }

// export default App;
