import React from 'react'
import styles from './button.module.css'

function Button_Light_Blue(props){
    return(
        <button className={`${styles.btn} ${styles.btn_light_blue}`}>
            {props.textContent}
        </button>
    )
}

export default Button_Light_Blue