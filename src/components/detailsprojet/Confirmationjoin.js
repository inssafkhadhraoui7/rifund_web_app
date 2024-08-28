import React from 'react';
import styles from './Confirmationjoin.module.css';
import CommunautyPage from '../../pages/CommunautyPage';

function Confirmationjoin({ onClose, onConfirm }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>Joindre la communauté</h3>
        <p>Êtes-vous sûr de vouloir joindre cette communauté ?</p>
        <div className={styles.buttonContainer}>
          <button className={styles.confirmButton} onClick={<CommunautyPage/>}>Confirmer</button>
          <button className={styles.cancelButton} onClick={onClose}>Annuler</button>
        </div>
      </div>
    </div>
  );
}

export default Confirmationjoin;
