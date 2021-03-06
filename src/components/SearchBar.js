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

  return (
    <>
      <div className={styles.SearchBar}>
        <input
          type="text"
          placeholder="Name of the country"
          onChange={getData}
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
