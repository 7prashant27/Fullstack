import React from "react"
import Style from "./li.module.css"

function Li(props){
return (props.data.map(element => 
    <li>{element}</li> 
))
}

export default Li