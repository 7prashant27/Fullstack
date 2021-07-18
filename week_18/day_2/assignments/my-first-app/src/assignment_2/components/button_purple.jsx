import React from 'react'
import styles from './button.module.css'

function Button_Purple(props){
    return(
        <button className={`${styles.btn} ${styles.btn_purple}`}>
            {props.textContent}
        </button>
    )
}

export default Button_Purple