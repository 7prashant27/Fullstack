import React from "react"
import Li from "./li"
import Create_heading from './create_heading';

function List_With_Heading(props){
    return (
        <>
        <Create_heading title={props.title} />
        <ul>
            <Li data={props.list_data}/>
        </ul>
        </>
    )
}

export default List_With_Heading