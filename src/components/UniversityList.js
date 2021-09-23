import React from "react";
import styles from "../styles/components/UniversityList.module.css";
import UniversityCard from "./UniversityCard";

function UniversityList() {
  return (
    <div className={styles.container}>
        {/*include map function here*/}
      <UniversityCard />
      <UniversityCard />
      <UniversityCard />
      <UniversityCard />
    </div>
  );
}

export default UniversityList;
