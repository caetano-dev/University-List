import React from "react";
import styles from "../styles/components/UniversityList.module.css";
import UniversityCard from "./UniversityCard";
import { useState, useEffect } from "react";

function UniversityList({ countryName }) {
  const [universities, setUniversities] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const getUniversities = async () => {
      try {
        setLoad(true);
        const response = await fetch(
          "https://universitylist.herokuapp.com/api",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              msg: countryName,
            }),
          }
        );
        const jsonData = await response.json();
        setUniversities(jsonData);
        setLoad(false);
      } catch (e) {
        console.log(e);
      }
    };
    getUniversities();
  }, [countryName]);

  return (
    <div className={styles.container}>
      {load ? (
        <div className={styles.loading}></div>
      ) : (
        universities.map((university) => (
          <UniversityCard
            key={Math.random()}
            name={university.name}
            web_page={university.web_pages[0]}
            domain={university.domains[0]}
          />
        ))
      )}
    </div>
  );
}

export default UniversityList;
