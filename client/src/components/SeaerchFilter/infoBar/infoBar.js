import React from "react";
import styles from "./infoBar.module.css"

const InfoBar = ()=>{
  return(
    <div className={styles.vehicleStatsSort}>
      <div className={styles.vehicleStats}>
         <div className={styles.stat}>
            <p>Records: <strong>15</strong></p>
          </div>
          <div className={styles.stat}>
            <p>Average KM: <strong>118,218</strong></p>
          </div>
          <div className={styles.stat}>
            <p>Average age: <strong>10<i>yrs</i> 6<i>mos</i></strong></p>
          </div>
      </div>
      
      <div className={styles.sortContainer}>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>
            <span className={styles.dropdownIcon}>☰</span> Sort by Sold Date ▼
          </button>
        </div>
        <div className={styles.toggleButtons}>
          <button className={`${styles.toggleButton} ${styles.active}`}>ASC</button>
          <button className={styles.toggleButton}>DESC</button>
        </div>
      </div>
    </div>
  )
}

export default InfoBar;