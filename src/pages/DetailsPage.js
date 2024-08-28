import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./DetailsPage.module.css";
import Confirmationjoin from "../components/detailsprojet/Confirmationjoin";

function DetailsPage() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const percentage = 29;
  const progressBarSize = 190; // Adjust the size as needed

  const handleClick = () => (window.location.href = "/financeprojet");

  const handleCommunityClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    // Logic to navigate to the CommunautyPage or handle confirmation
    window.location.href = "/communautypage"; // Adjust the URL as needed
  };

  const handleClose = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
      <Header />
      <div className={styles.detailsPage}>
        <div className={styles.imgtext}>
          <img src="./tree.jpeg" alt="Project representation" />
          <div className={styles.text}>
            <p className={styles.descriptiontitle}>Description du projet :</p>
          </div>
          <div>
            <p className={styles.paragrap}>
              Notre projet consiste à développer une plateforme éducative
              numérique destinée aux zones rurales défavorisées. En partenariat
              avec des ONG locales, nous créerons une application mobile offrant
              des cours en ligne, des ressources interactives et des outils
              d'auto-évaluation. Le projet sera lancé initialement dans trois
              régions pilotes, avec pour objectif d'améliorer l'accès à
              l'éducation et les résultats académiques, tout en réduisant les
              disparités éducatives.
            </p>
          </div>
        </div>
        <div className={styles.description}>
          <h2>Ferme de grains de blé</h2>
          <h4>Durée du projet : 1 mois</h4>
          <h4 className={styles.contrib}>Contributions : 18</h4>
          <p className={styles.money}>
            <span className={styles.green}>900$</span>&nbsp;
            <span className={styles.bold}>collectés sur</span>&nbsp;
            <span className={styles.red}>3000$</span>
          </p>
          <div>
            <div
              className={styles.customLink}
              onClick={handleCommunityClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleCommunityClick()}
            >
              <p className={styles.communauty}>
                <FontAwesomeIcon icon={faUsers} /> Communauté Ferme
              </p>
            </div>
          </div>
        </div>
        <div className={styles.progressbarbutton}>
          <div
            style={{ width: progressBarSize, height: progressBarSize }}
            className={styles.circularbar}
          >
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                rotation: 0.5,
                strokeLinecap: "butt",
                trailColor: "#d6d6d6",
                pathColor: "#ff0000",
                textColor: "#333",
              })}
              strokeWidth={10}
            />
          </div>
          <button className={styles.donbutton} onClick={handleClick}>
            <span>Faire un don</span>
          </button>
        </div>
      </div>
      {showConfirmation && <Confirmationjoin onConfirm={handleConfirm} onClose={handleClose} />}
      <Footer />
    </div>
  );
}

export default DetailsPage;
