import React from 'react'
import styles from './button.module.css'

function Button_Green(props){
    return(
        <button className={`${styles.btn} ${styles.btn_green}`}>
            {props.textContent}
        </button>
    )
}

export default Button_Green