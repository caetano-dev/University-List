import React from "react";
import styles from "../styles/components/UniversityList.module.css";
import UniversityCard from "./UniversityCard";
import { useState, useEffect } from "react";

function UniversityList() {

  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const getUniversities = async () => {
      try {
        const response = await fetch(
          "localhost:8080/api",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              //msg: props.country,

              msg: "brazil",
            }),
          }
        );
        const data = await response.json();
        setUniversities(data);
        //setLoad(false);
      } catch (e) {
        console.log(e);
      }
    };
    getUniversities();
  }, []);

  return (
    <div className={styles.container}>
      <UniversityCard name="uni" web_page="com" domain="www.com" />
      <UniversityCard name="uni" web_page="com" domain="www.com" />
      <UniversityCard name="uni" web_page="com" domain="www.com" />
      <UniversityCard name="uni" web_page="com" domain="www.com" />
      <UniversityCard name="uni" web_page="com" domain="www.com" />
    </div>
  );
}

export default UniversityList;
