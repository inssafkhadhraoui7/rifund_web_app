import React, { useState } from "react";
import styles from "./supCommModel.module.css";

function SupCommModel() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div className={`modal fade `} id="supCommModel" tabIndex="-1" aria-labelledby="supCommModelLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className={`modal-header ${styles.container}`}>
            <h1 className="modal-title fs-5" id="supCommModelLabel">
              Confirmation
            </h1>
          </div>
          <div className="modal-body">
            <div className={styles.card}>Voulez-vous supprimer cet communauté</div>
          </div>
          <div className={`modal-footer ${styles.divButton}`}>
            <button className={`${styles.createButton}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <span>Oui</span>
            </button>
            <button className={`${styles.supButton} `} data-bs-dismiss="modal">
              <span>Non</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupCommModel;
