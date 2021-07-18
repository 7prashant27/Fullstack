import React from "react"
import Styles from "./RoundedProfileIcon.module.css"


function Image(props){
    return (
        <div className={Styles.profile_name}>
        <img src={props.src} className={Styles.img} alt={props.alt}></img>
    <h3>{props.name}</h3>
        </div>
    )
}

export default Image