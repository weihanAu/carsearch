import React from "react";
import styles from './Header.module.css';
import Wraper from '../Wraper/Wraper';
import HeaderLink from './HeaderLink/HeaderLink';
import SmDeviceNav from './SmDeviceNav/SmDeviceNav';

const Header = ()=>{
  return (
  <header className={styles.header}>
    <Wraper className={styles.siteHeaderWrapper}>
      <div className={styles.siteHeaderLeftArea}> 
        <a  href="/" class={styles.siteHeaderLogo}>
          <img className={styles.img} width="232" src="/images/header_logo.webp" alt="Prices People Pay Logo" title="Go to home" />
        </a>
      </div>
      <div className={`${styles.siteHeaderRightArea} ${styles.bigScreen}`}>
        <nav className={styles.siteHeaderNav}>
          <div className={styles.mainLinks}>
            <HeaderLink  className={styles.siteHeaderLink} href="/" text={" What's my car worth? "} />
            <HeaderLink  className={`${styles.siteHeaderLink} ${styles.active}`} href="/" text={" Search used car prices "} />
          </div>
        </nav>
      </div>
      {/* {small device menu} */}
      <SmDeviceNav />
    </Wraper>
  </header>
  )
}

export default Header;