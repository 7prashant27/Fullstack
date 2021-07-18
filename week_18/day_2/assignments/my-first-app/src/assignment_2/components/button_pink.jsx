import React from 'react'
import styles from './button.module.css'

function Button_Pink(props){
    return(
        <button className={`${styles.btn} ${styles.btn_pink}`}>
            {props.textContent}
        </button>
    )
}

export default Button_Pink