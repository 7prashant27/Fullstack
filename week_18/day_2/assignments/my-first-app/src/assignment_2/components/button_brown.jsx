import React from 'react'
import styles from './button.module.css'

function Button_Brown(props){
    return(
        <button className={`${styles.btn} ${styles.btn_brown}`}>
            {props.textContent}
        </button>
    )
}

export default Button_Brown