import React from "react";
import { useState } from "react";
import University from "./University";
import styles from "../styles/components/SearchBar.module.css";

function SearchBar() {
  const [data, setData] = useState("");
  const [print, setPrint] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  function getData(val) {
    setPrint(false);
    setData(val.target.value);
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
          onChange={getData}
          onKeyPress={handleKeypress}
        />
        <button disabled={disableButton} onClick={() => setPrint(true)}>
          Search
        </button>
      </div>

      <div className={styles.University}>
        {print ? (
          <div>
            <h1>
              Showing results for: {data[0].toUpperCase() + data.substring(1)}
            </h1>
            <University country={data} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default SearchBar;
