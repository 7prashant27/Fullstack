import React from "react"

function Li(props){
return (props.data.map(element => 
    <li>{element}</li> 
))
}

export default Li