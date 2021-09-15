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
    setCountry(val.target.value);
    if (val.target.value.length) {
      setDisableButton(false);
    }
    if (val.target.value === "") {
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
          placeholder="Where do you want to study?"
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
            <h1>{country[0].toUpperCase() + country.substring(1)}</h1>
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
