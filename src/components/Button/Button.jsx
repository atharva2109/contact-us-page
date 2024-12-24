import React from "react";
import styles from "./Button.module.css";

const Button = ({ isOutline, text, icon }) => {
  return (
    <>
      <button className={isOutline ? styles.secondary_btn : styles.primary_btn}>
        {icon}
        {text}
      </button>
    </>
  );
};

export default Button;
