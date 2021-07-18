import React from "react"
import "./batch.css"
function Batch(props){
    return(props.data.map(element => 
    <div className={props.className}>{element}</div>))
}


export default Batch 