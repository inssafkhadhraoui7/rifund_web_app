import React, { useState } from "react";
import styles from "./password.module.css";

function Password() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleClick = () => (window.location.href = "/creerprojet");
  return (
    <div className={styles.container}>
      <h2>Modifier mot de passe</h2>
      <div className={styles.card}>
        <label htmlFor="oldPassword">Mot de passe actuel</label>
        <input type="text" id="oldPassword" />
        <label htmlFor="newPassword">Nouveau mot de passe</label>
        <input type="text" id="newPassword" />
      </div>
      <div className={styles.divButton}>
        <button className={styles.createButton} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
          <span>Modifier</span>
        </button>
        <button className={styles.supButton}>
          <span>Annuler</span>
        </button>
      </div>
    </div>
  );
}

export default Password;
