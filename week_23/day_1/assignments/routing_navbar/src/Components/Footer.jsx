import React from "react"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
          <footer style={{display:"flex",padding:"20px",justifyContent:"space-around",}}>
            <ul>
               <Link to={"/"}> <li style={{listStyleType: "none"}}><img src="https://zerodha.com/static/images/logo.svg" style={{height:"50px", width:"100px"}}></img></li></Link>
                <li style={{listStyleType: "none"}}><h1>+0187983197</h1></li>
                <li style={{listStyleType: "none"}}>© 2010 - 2020, Zerodha Broking Ltd.<br/>All rights reserved.</li>
            </ul>
            
               
                <ul>
                    <h2>Compny</h2>
                  <Link>  <li style={{listStyleType: "none"}}>
                           About
                    </li></Link>
                    <Link> <li style={{listStyleType: "none"}}>
                        Product
                    </li></Link>
                    <Link> <li style={{listStyleType: "none"}}>
                        Pricing
                    </li></Link>
                </ul>
                <ul>
                    <h2>Support</h2>
                    <Link>  <li style={{listStyleType: "none"}}>
                           Contact
                    </li></Link>
                    <Link> <li style={{listStyleType: "none"}}>
                        Support Portal
                    </li></Link>
               
                </ul>
                <ul>
                    <h2>Account</h2>
                    <Link>  <li style={{listStyleType: "none"}}>
                           Open an account
                    </li></Link>
                    <Link>   <li style={{listStyleType: "none"}}>
                         Fund transfer
                    </li></Link>
                    <Link> <li style={{listStyleType: "none"}}>
                        60 day challenge
                    </li></Link>
                </ul>
                <ul>
                    <h2>Support</h2>
                    <Link>  <li style={{listStyleType: "none"}}>
                           Contact
                    </li></Link>
                    <Link> <li style={{listStyleType: "none"}}>
                        Support Portal
                    </li></Link>
               
                </ul>
            </footer>
        </>
    )
}

export default Footer