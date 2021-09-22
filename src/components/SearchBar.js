import React from "react";
import styles from "../styles/components/SearchBar.module.css";
function SearchBar() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search country" />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
