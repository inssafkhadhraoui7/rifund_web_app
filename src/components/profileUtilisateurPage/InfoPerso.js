import React, { useState } from "react";
import styles from "./infoPerso.module.css";
import EditePersoModel from "./EditePersoModel";

function InfoPerso() {
  const [hovered, setHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleClick = () => (window.location.href = "/creerprojet");

  return (
    <div className={styles.container}>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <td>Imen Missaoui</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col">Email</th>
            <td>imenmissaoui08@gmail.com</td>
          </tr>
          <tr>
            <th scope="col" className={styles.liens}>
              Liens
            </th>
            <td>
              <div>facebook.com</div>
              <div>linkedline.com</div>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className={styles.createButton}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-bs-toggle="modal"
        data-bs-target="#editePersoModel"
      >
        <img src={hovered ? "ModifierV.png" : "ModifierB.png"} alt="" className={styles.buttonIcon} />
        <span>Modifier</span>
      </button>
      <EditePersoModel />
    </div>
  );
}

export default InfoPerso;
