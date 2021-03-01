import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/components/styles.module.css";

function University() {
  const [universityName, setUniversityName] = useState([]);
  const [load, setLoad] = useState(true);

  const getUniversities = async () => {
    const response = await fetch(
      "http://universities.hipolabs.com/search?country=Brazil",
      {
        method: "GET",
      }
    );
    const universities = await response.json();
    setUniversityName(universities);
    setLoad(false);
    console.log(universities);
  };
  useEffect(() => {
    getUniversities();
  }, []);
  if (load) {
    return (
      <>
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={styles.Container}>
        {universityName.map((university) => {
          return (
            <div class={styles.University} key={university.name}>
              <h3>{university.name}</h3>
              <a href={university.web_pages}>Visit website</a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default University;
