import React, { useState } from "react";
import styles from "./editePersoModel.module.css";

function EditePersoModel() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div className={`modal fade `} id="editePersoModel" tabIndex="-1" aria-labelledby="editePersoModelLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className={`modal-header ${styles.container}`}>
            <h1 className="modal-title fs-5" id="editePersoModelLabel">
              Modifier information
            </h1>
          </div>
          <div className="modal-body">
            <div className={styles.card}>
              <label htmlFor="nom">Nom et Prénom *</label>
              <input type="text" id="nom" className="form-control" placeholder="Créer nouveau nom et prénom " />
              <label htmlFor="email">Email *</label>
              <input type="text" id="email" className="form-control" placeholder="Donnez  nouveau  Email" />
            </div>
          </div>
          <div className={`modal-footer ${styles.divButton}`}>
            <button className={`${styles.createButton}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <span>Modifier</span>
            </button>
            <button className={`${styles.supButton} `} data-bs-dismiss="modal">
              <span>Annuler</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditePersoModel;
