import React, { useState } from "react";
import styles from "./nav.module.css";

function Nav({ activeItem, onNavClick }) {
  return (
    <div className={styles.navStyle}>
      <ul className={styles.menu}>
        <li className={activeItem === "Information personnelle" ? styles.active : ""} onClick={() => onNavClick("Information personnelle")}>
          <i className="fa-solid fa-user"></i>Information personnelle
        </li>
        <li className={activeItem === "Liste des projets" ? styles.active : ""} onClick={() => onNavClick("Liste des projets")}>
          <i className="fa-solid fa-rectangle-list"></i>Liste des projets
        </li>
        <li className={activeItem === "Liste des communautés" ? styles.active : ""} onClick={() => onNavClick("Liste des communautés")}>
          <i className="fa-solid fa-users"></i>Liste des communautés
        </li>
        <li className={activeItem === "Mot de passe" ? styles.active : ""} onClick={() => onNavClick("Mot de passe")}>
          <i className="fa-solid fa-unlock"></i>Mot de passe
        </li>
      </ul>
    </div>
  );
}

export default Nav;
