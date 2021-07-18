import React from "react"
import "./batch.css"
function Batch(props){
    return(
    <div className={props.className}>{props.textContent}</div>
    )
}


export default Batch 