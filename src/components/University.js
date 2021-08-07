import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/components/University.module.css";
import axios from "axios";

function University(props) {
  const [universityName, setUniversityName] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [load, setLoad] = useState(true);
  const url = `http://universities.hipolabs.com/search?country=${props.country}`
  const getUniversities = () => {
  axios.get(url)
    .then(response => {
      setUniversityName(response.data);
      setLoad(false)
    })
  }
  useEffect(() => {
    getUniversities();
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 21);
    scrollToTop();
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 21);
    scrollToTop();
  };
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
        {universityName
          .slice(currentPage, currentPage + 21)
          .map((university) => {
            return (
              <div className={styles.University} key={Math.random()}>
                <h3>{university.name}</h3>
                <button>
                  <a href={university.web_pages}>Visit website</a>
                </button>
              </div>
            );
          })}
      </div>
      <div className={styles.ButtonsContainer}>
        <button
          className={styles.PreviousButton}
          onClick={() => previousPage()}
        >
          Previous
        </button>
        <button className={styles.NextButton} onClick={() => nextPage()}>
          Next
        </button>
      </div>
    </>
  );
}

export default University;
