import React from "react";
import styles from "../styles/components/SearchBar.module.css";
import { useState, createRef } from "react";
import UniversityList from "./UniversityList";

function SearchBar() {
  const [country, setCountry] = useState("");
  let textInput = createRef();

  function validateInput() {
    const inputValue = textInput.current.value;
    if (inputValue.length && inputValue.trim() !== "") {
      const formatedCountryName =
        inputValue[0].toUpperCase() + inputValue.substring(1);
      return formatedCountryName;
    }
    return "";
  }
  function handleClick() {
    const validatedCountryName = validateInput();
    setCountry(validatedCountryName);
  }

  function handleKeypress(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }
  return (
    <>
      <div className={styles.container}>
        <input
          ref={textInput}
          type="text"
          onKeyPress={handleKeypress}
          placeholder="Search country"
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <UniversityList countryName={country} />
    </>
  );
}

export default SearchBar;
