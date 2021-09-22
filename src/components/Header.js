import React from "react";
import styles from "../styles/components/Header.module.css";
import SearchBar from "./SearchBar";
function Header() {
  return (
    <>
      <div className={styles.headerImage}></div>
      <div className={styles.container}>
        <h1>university search</h1>
        <h2>Find universities around the world.</h2>
      </div>
      <SearchBar />
    </>
  );
}

export default Header;
