import React from 'react';
import styles from './deleteCategorie.module.css'; // Create this CSS file for styling

function DeleteConfirmModal({ onClose, onConfirm }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>Confirmation</h3>
        <p>Êtes-vous sûr de vouloir supprimer cette catégorie?</p>
        <div className={styles.buttonContainer}>
          <button className={styles.confirmButton} onClick={onConfirm}>Confirmer</button>
          <button className={styles.cancelButton} onClick={onClose}>Annuler</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;
