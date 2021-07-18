import React from 'react'
import styles from './button.module.css'

function Button_Blue(props){
    return(
        <button className={`${styles.btn} ${styles.btn_blue}`}>
            {props.textContent}
        </button>
    )
}

export default Button_Blue