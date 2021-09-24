import React from "react";
import styles from "../styles/components/UniversityCard.module.css";

function UniversityCard({name, web_page, domain}) {
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <a href={web_page}>{domain}</a>
    </div>
  );
}

export default UniversityCard;
