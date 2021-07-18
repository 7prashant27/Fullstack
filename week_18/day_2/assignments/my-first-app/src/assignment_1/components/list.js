import React from "react"
import Li from "./li"



function List(props){
    return (
        <ul>
            <Li data={props.data}/>
        </ul>
    )
}

export default List