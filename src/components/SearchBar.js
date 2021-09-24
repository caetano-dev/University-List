import React from "react";
import styles from "../styles/components/SearchBar.module.css";
import { useState, useEffect } from "react";

function SearchBar() {
  const [country, setCountry] = useState("");
  const [disabled, setDisabled] = useState(false);
  //const [print, setPrint] = useState(false);

  function validateInput(inputValue) {
    if (inputValue.length && inputValue.trim() !== "") {
      return true;
    }
    return false;
  }

  function setCountryName(val) {
    const inputValue = val.target.value;
    if (validateInput(inputValue)) {
      const formatedCountryName =
        inputValue[0].toUpperCase() + inputValue.substring(1);

      setCountry(formatedCountryName);
      setDisabled(false);
    }
  }

  function handleKeypress(e) {
    if (e.key === "Enter") {
      //press button
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={setCountryName}
        onKeyPress={handleKeypress}
        type="text"
        placeholder="Search country"
      />
      <button disabled={disabled}>Search</button>

      <h1>{country}</h1>
    </div>
  );
}

export default SearchBar;
