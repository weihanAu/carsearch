import React,{useState} from "react";
import styles from './SmDeviceNav.module.css';


const SmDeviceNav =()=>{

  const [open,setOpen]=useState(false);

  return(
    <div className={styles.siteHeaderRightArea} onClick={()=>setOpen(!open)}>
      <button className={styles.siteHeaderMobileToggle}>
        <div className={styles.burgerMenu} onclick="toggleMenu()">
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </div>
      {open && <div className={styles.xmenu}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>}
      </button>
    </div>
    
  );
}

export default SmDeviceNav;