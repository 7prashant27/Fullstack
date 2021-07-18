import React from "react"
import {Link} from "react-router-dom"
import Styles from "./navbar.module.css"



const links =[
    {
        to:"/",
        title:"Home"
    },
    {
        to: "/about",
        title:"About"
    },
    {
        to:"/contact",
        title: "Contact"
    },
    {
        to:"/products",
        title:"Products"
    }
]

function Navbar(){
    return (
        <>
                <div style={{
                    display:"flex"
                }}>

                    {links.map (({to,title})=>(
                <Link   key = {to} style={{padding:10}} to ={to}>
                    {title}
                </Link> 
            ))}
            </div>
        </>
    )
}

export default Navbar