import React from "react"

function CreateList(props){
   return ( <ul>
        {props.data.map(elem => <li>{elem}</li>)}
    </ul>
   )
}


export default CreateList