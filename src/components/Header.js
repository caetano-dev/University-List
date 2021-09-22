import React from "react";
import styles from "../styles/components/Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.Header}>
        <h1>Global University Search</h1>
        <strong>Find universities around the world.</strong>
      </div>
    </header>
  );
}

export default Header;
