import React from "react";
import styles from "../styles/components/UniversityCard.module.css";

function UniversityCard(name, domain, web_page) {
  return (
    <div className={styles.container}>
      <h1>name</h1>
      <a href="webpage">domain</a>
    </div>
  );
}

export default UniversityCard;
