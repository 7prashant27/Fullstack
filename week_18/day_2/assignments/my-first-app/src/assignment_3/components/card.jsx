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
            <Batch textContent="Pro" className="batch_yellow"/>
            <div className={Style.card_body}>
            
                <div className={Style.card_img_holder}>
                <Image className={Style.card_img} src="logo192.png"/>
                </div>
                <Heading textContent="Ricky Park" />
                <Paragraph textContent="NEW YORK" />
                <Paragraph textContent="User interface designer and" />
                <Paragraph textContent="front-end-developer" />
                <div>
                    <Button className="btn btn_active" textContent="Message"  />
                    <Button className="btn" textContent="Following"/>
                </div>
            </div>
            <div className={Style.card_footer}>
                <Paragraph textContent="SKILLS" className="batch"/>
                <Batch textContent="UI/UX" className="batch"/>
                <Batch textContent="Front End Development" className="batch"/>
                <Batch textContent="HTML" className="batch"/>
                <Batch textContent="CSS" className="batch"/>
                <Batch textContent="JavaScript" className="batch"/>
                <Batch textContent="React" className="batch"/>
                <Batch textContent="Node" className="batch"/>
            </div>
        </div>
    )
}


export default Card