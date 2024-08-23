import React, { useState } from "react";
import styles from "./listeProjet.module.css";
import EditeProjetModel from "./EditeProjetModel";
import SupProjetModel from "./SupProjetModel";

function ListeProjet() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleClick = () => (window.location.href = "/creerprojet");
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="palastine1.png" alt="" />
        <div className={styles.cardText}>
          <h2>Aidez les enfants Palastiens</h2>
          <p>
            Les enfants palatins ont besoin de votre aide pour obtenir de la nourriture et de l’eau adéquates. Une crise prolongée est une réelle
            urgence.
          </p>
          <div className={styles.progressBar}>
            <div></div>
            <span>90%</span>
          </div>
        </div>
      </div>
      <div className={styles.divButton}>
        <button
          className={styles.createButton}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-bs-toggle="modal"
          data-bs-target="#editeProjetModel"
        >
          <span>Modifier</span>
        </button>
        <button className={styles.supButton} data-bs-toggle="modal" data-bs-target="#supProjetModel">
          <span>Supprimer</span>
        </button>
      </div>
      <EditeProjetModel />
      <SupProjetModel />
    </div>
  );
}

export default ListeProjet;
