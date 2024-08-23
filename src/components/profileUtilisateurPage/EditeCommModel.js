import React, { useState } from "react";
import styles from "./editeCommModel.module.css";

function EditeCommModel() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div className={`modal fade `} id="editeCommModel" tabIndex="-1" aria-labelledby="editeCommModelLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className={`modal-header ${styles.container}`}>
            <h1 className="modal-title fs-5" id="editeCommModelLabel">
              Modifier communauté
            </h1>
          </div>
          <div className="modal-body">
            <div className={styles.card}>
              <label htmlFor="titreComm">Nom de communauté*</label>
              <input type="text" id="titreComm" className="form-control" placeholder="Créer le nom de votre communauté" />
              <label htmlFor="descriptionComm">Description *</label>
              <input type="text" id="descriptionComm" className="form-control" placeholder="Donnez  description a votre  communauté" />
              <label htmlFor="imageComm">Donnez image de votre communauté</label>
              <input type="file" id="imageComm" className="form-control" placeholder="Donnez  image de votre communauté" />
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

export default EditeCommModel;
