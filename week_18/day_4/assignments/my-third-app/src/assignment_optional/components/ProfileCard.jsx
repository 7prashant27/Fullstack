import React from "react"
import Styles from "./ProfileCard.module.css"

function ProfileCard(props){
    return (
        <div className={Styles.profile_card} style={{background: props.color}}>
            <div className={Styles.card_img_holder}>
                <img src={props.src} alt={props.alt} className={Styles.profile_img}/>
            </div>
            <div className={Styles.card_content}>
                <h1>{props.name}</h1>
                <p>{props.job}</p>
                <p>{props.experience}</p>
            </div>
        </div>
    )
}

export default ProfileCard