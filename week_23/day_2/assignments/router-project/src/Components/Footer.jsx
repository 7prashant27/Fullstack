import React from 'react'
//import { Link } from 'react-router-dom'
import Styles from "./all.module.css"



function Footer() {
  return (
    <>
      <div id={Styles.nav} style={{ color: "white" }}>
        <div>
          <ul>
            <li>Join us on</li>
            <li>Company</li>
            <li></li>
            <li>Download Mobile App</li>
          </ul>
        </div>
        <div>
          <ul>
             <li></li>
            <li>Sitemap</li>
            <li>About Us</li>
            <li></li>
          </ul>
        </div>
        <div>
          <ul>
          <li></li>
            <li> Contact Us</li>
            <li>Advertise with us</li>
            <li></li>
          </ul>
        </div>
        <div>
          <ul>
          <li></li>
            <li></li>
            <li></li>
            <li>
              <img class="" width="100" alt=""
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icon-AppStore_lg30tv"></img>
                <img class="" width="100" alt=""
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icon-AppStore_lg30tv"></img>
            </li>
            
          </ul>
        </div>
        <hr/>
      </div>
    </>
  )
}
export default Footer
