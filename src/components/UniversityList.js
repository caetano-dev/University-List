import React from "react";
import styles from "../styles/components/UniversityList.module.css";
import UniversityCard from "./UniversityCard";
import { useState, useEffect } from "react";

function UniversityList() {
  const [universities, setUniversities] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const getUniversities = async () => {
      try {
        const response = await fetch("http://localhost:8080/api", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            //msg: props.country,
            msg: "brazil",
          }),
        });
        const jsonData = await response.json();
        setUniversities(jsonData);
        setLoad(false);
      } catch (e) {
        console.log(e);
      }
    };
    getUniversities();
  }, []);

  return (
    <div className={styles.container}>
      {universities.map((university) => (
        <UniversityCard
          key={Math.random()}
          name={university.name}
          web_page={university.web_page}
          domain={university.domain}
        />
      ))}
    </div>
  );
}

export default UniversityList;
