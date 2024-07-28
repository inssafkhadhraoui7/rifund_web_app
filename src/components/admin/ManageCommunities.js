import React, { useState } from 'react';
import styles from './ManageCommunities.module.css';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

function ManageCommunities() {
  const [showValiderDialog, setShowValiderDialog] = useState(false);
  const [showRefuserDialog, setShowRefuserDialog] = useState(false);

  const handleValiderClick = () => {
    setShowValiderDialog(true);
  };

  const handleRefuserClick = () => {
    setShowRefuserDialog(true);
  };

  const closeDialog = () => {
    setShowValiderDialog(false);
    setShowRefuserDialog(false);
  };

  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.header}>
        <h2>Gérer Communautés</h2>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Nom de Communauté</th>
            <th>Description</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><img src="communauty.jpeg" alt="Communauté" className={styles.image} /></td>
            <td>Santé</td>
            <td>Projet de santé publique</td>
            <td>01/01/2024</td>
            <td>
              <button
                className={styles.actionButton}
                title="Valider"
                onClick={handleValiderClick}
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button
                className={styles.actionDelete}
                title="Refuser"
                onClick={handleRefuserClick}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {showValiderDialog && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialog}>
            <h3>Valider Communauté</h3>
            <p>Êtes-vous sûr de vouloir valider cet communauté ?</p>
            <button className={styles.confirmButton} onClick={closeDialog}>Oui</button>
            <button className={styles.cancelButton} onClick={closeDialog}>Non</button>
          </div>
        </div>
      )}

      {showRefuserDialog && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialog}>
            <h3>Refuser Communauté</h3>
            <p>Êtes-vous sûr de vouloir refuser cet communauté?</p>
            <button className={styles.confirmButton} onClick={closeDialog}>Oui</button>
            <button className={styles.cancelButton} onClick={closeDialog}>Non</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageCommunities;
