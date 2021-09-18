import React from "react";
import { useState } from "react";
import University from "./University";
import styles from "../styles/components/SearchBar.module.css";

function SearchBar() {
  const [country, setCountry] = useState("");
  const [print, setPrint] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  function getCountry(val) {
    setPrint(false);
    const inputValue = val.target.value;

    if (inputValue.length && inputValue.trim() != "") {
      const formatedCountryName =
        inputValue[0].toUpperCase() + inputValue.substring(1);
      setCountry(formatedCountryName);
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }
  function handleKeypress(e) {
    if (e.key === "Enter") {
      setPrint(true);
    }
  }
  return (
    <>
      <div className={styles.SearchBar}>
        <input
          type="text"
          placeholder="Country name"
          onChange={getCountry}
          onKeyPress={handleKeypress}
        />
        <button disabled={disableButton} onClick={() => setPrint(true)}>
          Search
        </button>
      </div>

      <div className={styles.University}>
        {print ? (
          <div>
            <h1>{country}</h1>
            <University country={country} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default SearchBar;
