import React, { useState } from "react";
import styles from "./editeProjetModel.module.css";

function EditeProjetModel() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div className={`modal modal-lg fade `} id="editeProjetModel" tabIndex="-1" aria-labelledby="editeProjetModelLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className={`modal-header ${styles.container}`}>
            <h1 className="modal-title fs-5" id="editeProjetModelLabel">
              Modifier projet
            </h1>
          </div>
          <div className="modal-body">
            <div className={styles.card}>
              <label htmlFor="titreProjet">Titre du projet *</label>
              <input type="text" id="titreProjet" className="form-control" placeholder="Donnez un titre a votre projet" />
              <label htmlFor="description">Description *</label>
              <input type="text" id="description" className="form-control" placeholder="Donnez  description a votre projet" />
              <label htmlFor="imageProjet">Image de projet *</label>
              <input type="file" id="imageProjet" className="form-control" placeholder="Donnez  image de votre projet" />
              <div>
                <div>
                  <label htmlFor="budget">Budget*</label>
                  <input type="text" id="budget" className="form-control" placeholder="Donnez  votre budget" />
                </div>
                <div>
                  <label htmlFor="device">Device*</label>
                  <select name="device" id="device" className="form-select">
                    <option value="0">Donnez votre device</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date">Date*</label>
                  <input type="text" id="date" className="form-control" placeholder="Donnez  date de projet " />
                </div>
                <div>
                  <label htmlFor="categorie">Catégorie*</label>
                  <select name="categorie" id="categorie" className="form-select">
                    <option value="0">Donnez catégorie de projet</option>
                  </select>
                </div>
              </div>
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

export default EditeProjetModel;
