import React from "react";
import styles from "../styles/components/SearchBar.module.css";
import { useState, useEffect } from "react";

function SearchBar() {
  //  const [country, setCountry] = useState("");
  const [print, setPrint] = useState(false);

  function getCountryName(val) {
    const inputValue = val.target.value;

    if (inputValue.length && inputValue.trim() !== "") {
      const formatedCountryName =
        inputValue[0].toUpperCase() + inputValue.substring(1);
      //setCountry(formatedCountryName);
    }
  }
  function handleKeypress(e) {
    if (e.key === "Enter") {
      setPrint(true);
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={getCountryName}
        onKeyPress={handleKeypress}
        type="text"
        placeholder="Search country"
      />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
