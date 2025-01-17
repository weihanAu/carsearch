import React,{useState} from "react";
import styles from './SmDeviceNav.module.css';


const SmDeviceNav =()=>{

  const [open,setOpen]=useState(false);

  return(
    <div className={styles.siteHeaderRightArea} onClick={()=>setOpen(!open)}>
      <button className={styles.siteHeaderMobileToggle}>
        <div className={`${styles.burgerMenu} ${open && styles.open}`}>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </div>
      {open && <div className={styles.xmenu }>
            <a class={styles.siteHeaderLink} href="/get-started">Search used car prices</a>
            <a class={styles.siteHeaderLink} href="/">What's my car worth?</a>
        </div>}
      </button>
    </div>
    
  );
}

export default SmDeviceNav;