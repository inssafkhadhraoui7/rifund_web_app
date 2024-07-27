import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./DetailsPage.module.css";

function DetailsPage({ date, title, description, progress, image }) {
  return (
    <div>
      <Header />
      <div className={styles.DetailPage}>
        <div className={styles.imgtext}>
          <img src="./tree.jpeg" alt="projet ici" />
          <div className={styles.text}>
            <p>Description du projet </p>
          </div>
        </div>
        <div className={styles.description}></div>
        <div className={styles.progressbarbutton}></div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailsPage;
