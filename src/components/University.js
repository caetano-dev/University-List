import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/components/University.module.css";

function University(props) {
  const [universityName, setUniversityName] = useState([]);
  const [load, setLoad] = useState(true);

  const getUniversities = async () => {
    const response = await fetch(
      `http://universities.hipolabs.com/search?country=${props.country}`,
      {
        method: "GET",
      }
    );
    const universities = await response.json();
    setUniversityName(universities);
    setLoad(false);
  };
  useEffect(() => {
    getUniversities();
  }, []);
  if (load) {
    return (
      <>
        <div>
          <h1 className={styles.Loading}>Loading...</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <h2>{universityName.length} universities found.</h2>
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
