import React from "react";
import styles from './Wraper.module.css';

const Wraper = ({ children, className }) => {
 
  return (
    <div className={`${styles.wraper} ${className}`}>
      {children}
    </div>
  );
};

export default Wraper;
