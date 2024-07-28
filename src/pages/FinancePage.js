import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Financeform from "../components/projectfinance/Financeform";
import styles from "./FinancePage.module.css";

function FinancePage() {
  return (
    <div>
      <Header />
      <h1 className={styles.pageTitle}>Financer projet</h1>
      <main className={styles.mainContent}>
        <div className={styles.imgparagraph}>
          <img alt="" src="cartebancaire.png" className={styles.img}/>
          <div className="paragraphe">
            <p className={styles.paragraph}>
            &nbsp;&nbsp;&nbsp;Votre soutien et une <br />
              &nbsp;&nbsp;&nbsp;lumière qui éclaire notre <br />
              &nbsp;&nbsp;&nbsp;chemin, nous guidant avec <br />
              &nbsp;&nbsp;&nbsp;bienveillance et générosité
            </p>
          </div>
        </div>
        <div className={styles.formContainer}>
          <Financeform />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FinancePage;
