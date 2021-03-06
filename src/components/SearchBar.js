import React from "react";
import { useState } from "react";
import University from "./University";

function SearchBar() {
  const [data, setData] = useState("");
  const [print, setPrint] = useState(false);

  function getData(val) {
    setPrint(false);
    setData(val.target.value);
    console.log(data);
  }
  return (
    <div>
      <input type="text" placeholder="Country" onChange={getData} />
      <button onClick={() => setPrint(true)}>Search</button>
      {print ? (
        <div>
          <h1>Showing results for: {data}</h1>
          <University country={data} />
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
