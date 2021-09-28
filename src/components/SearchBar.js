import React from "react";
import styles from "../styles/components/SearchBar.module.css";
import { useState, createRef } from "react";
import UniversityList from "./UniversityList";

function SearchBar() {
  const [country, setCountry] = useState("");
  const [disabled, setDisabled] = useState(false);
  let textInput = createRef();

  function validateInput(inputValue) {
    if (inputValue.length && inputValue.trim() !== "") {
      return true;
    }
    return false;
  }
  //rewrite this
  function setCountryName(val) {
    const inputValue = textInput.current.value;

    if (validateInput(inputValue)) {
      const formatedCountryName =
        inputValue[0].toUpperCase() + inputValue.substring(1);

      setCountry(formatedCountryName);
      setDisabled(false);
    }
  }

  function handleKeypress(e) {
    if (e.key === "Enter") {
    }
  }
  function handleClick() {
    setCountry(textInput.current.value);
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
        <button disabled={disabled} onClick={handleClick}>
          Search
        </button>
      </div>
      <UniversityList countryName={country} />
    </>
  );
}

export default SearchBar;
