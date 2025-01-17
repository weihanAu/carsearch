import React from "react";
import Wraper from "../Wraper/Wraper";
import styles from "./SearchFilter.module.css"
import Button from "../Button/Button";

const SearchFilter =()=>{
  return (
    <Wraper>
      <h1 className={styles.ngStarInserted}>Used car sales</h1>
      <div className={styles.filterWraper}>
        <div className={styles.newFiltersWraper}>
        <div className={styles.filterActions}>
          <a> Show more filters </a>
          <div className={styles.filtersButtons}>
            <Button bgBlack text="Apply" />
            <Button text="Clear" />
          </div>
        </div>
        </div>
      </div>
    </Wraper>
  )
}

export default SearchFilter;