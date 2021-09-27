import React from "react";
import styles from "../styles/components/Header.module.css";
function Header() {
  return (
    <>
      <div className={styles.headerImage}></div>
      <div className={styles.container}>
        <h1>University Search</h1>
        <h2>Find universities around the world.</h2>
      </div>
    </>
  );
}

export default Header;
