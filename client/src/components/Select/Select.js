import React, { useState } from "react";
import styles from "./Select.module.css";

const Select = ({ name, options, handleChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className={styles.wraper}>
      <select
        className={styles.select}
        value={selectedValue}
        onChange={(event) => {
          const newValue = event.target.value;
          setSelectedValue(newValue);
          handleChange(newValue);
        }}
      >
        <option value="">{name}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
