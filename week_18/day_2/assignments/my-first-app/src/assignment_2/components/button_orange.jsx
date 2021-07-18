import React from 'react'
import styles from './button.module.css'

function Button_Orange(props){
    return(
        <button className={`${styles.btn} ${styles.btn_orange}`}>
            {props.textContent}
        </button>
    )
}

export default Button_Orange