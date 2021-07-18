import React from 'react'
import styles from './button.module.css'

function Button(props){
    return(
        <button style={{background: props.color}} className={styles.btn}>
            {props.textContent}
        </button>
    )
}

export default Button