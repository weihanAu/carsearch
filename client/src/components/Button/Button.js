import React from "react";
import styles from './Button.module.css';

const Button = ({text,onClick,bgBlack})=>{

  if(bgBlack){
    return(
      <button className={`${styles.main} ${styles.black}`} onClick={onClick}>{text}</button>
    )
  }
  
  return (
    <button className={styles.main} onClick={onClick}>{text}</button>
  )
}

export default Button;

