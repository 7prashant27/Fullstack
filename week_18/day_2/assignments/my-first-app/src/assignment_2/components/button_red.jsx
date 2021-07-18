import React from 'react'
import styles from './button.module.css'

function Button_Red(props){
    return(
        <button className={`${styles.btn} ${styles.btn_red}`}>
            {props.textContent}
        </button>
    )
}

export default Button_Red