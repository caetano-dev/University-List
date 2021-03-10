import React from "react";
import { useState } from "react";
import University from "./University";
import styles from "../styles/components/SearchBar.module.css";

function SearchBar() {
  const [data, setData] = useState("");
  const [print, setPrint] = useState(false);

  function getData(val) {
    setPrint(false);
    setData(val.target.value);
  }
  function handleKeypress (e) {
  if (e.key === "Enter") {
    setPrint(true);
  }
};
  return (
    <>
      <div className={styles.SearchBar}>
        <input
          type="text"
          placeholder="Name of the country"
          onChange={getData}
          onKeyPress={handleKeypress}
        />
        <button onClick={() => setPrint(true)}>Search</button>
      </div>
      <div className={styles.University}>
        {print ? (
          <div>
            <h1>Showing results for: {data}</h1>
            <University country={data} />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default SearchBar;
