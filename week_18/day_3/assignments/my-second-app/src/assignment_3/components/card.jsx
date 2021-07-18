import React from "react"
import Heading from "./heading.jsx"
import Paragraph from "./p.jsx"
import Button from "./button.jsx"
import Batch from "./batch.jsx"
import Style from "./card.module.css"
import Image from "./img"
function Card(props) {
    return (
        <div className={Style.card}>
            <Batch data={props.data.subscription} className="batch_yellow"/>
            <div className={Style.card_body}>
            
                <div className={Style.card_img_holder}>
                <Image className={Style.card_img} src={props.data.avatar}/>
                </div>
                <Heading textContent={props.data.name} />
                <Paragraph textContent={props.data.city} />
                <Paragraph textContent={props.data.describe} />
                <div>
                    <Button className="btn btn_active" textContent="Message"  />
                    <Button className="btn" textContent="Following"/>
                </div>
            </div>
            <div className={Style.card_footer}>
                <Paragraph textContent="SKILLS" className="batch"/>
                <Batch data={props.data.skills} className="batch"/>
            </div>
        </div>
    )
}


export default Card