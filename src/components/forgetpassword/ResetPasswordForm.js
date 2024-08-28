import React, { useState } from 'react';
import styles from './ResetPasswordForm.module.css';

function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      setSuccessMessage('');
    } else {
      setError('');
      setSuccessMessage('Votre mot de passe a été réinitialisé avec succès.');
    }
  };

  return (
    <section className={styles.resetPasswordSection}>
      <h2>Créer un nouveau mot de passe</h2>
      <form className={styles.resetPasswordForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="newPassword">Nouveau mot de passe</label>
          <input
            type="password"
            id="newPassword"
            placeholder="Tapez votre nouveau mot de passe"
            className={styles.inputField}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirmez votre mot de passe"
            className={styles.inputField}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        <button type="submit" className={styles.submitButton}>Réinitialiser le mot de passe</button>
      </form>
    </section>
  );
}

export default ResetPasswordForm;
