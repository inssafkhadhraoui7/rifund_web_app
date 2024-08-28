import React, { useState } from 'react';
import styles from './ForgetForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ForgetForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Veuillez entrer une adresse e-mail valide.');
      setSuccessMessage('');
    } else {
      setError('');
      setSuccessMessage('Un email de réinitialisation a été envoyé.'); // Simulate email sending
    }
  };

  const handleSignupClick = () => {
    window.location.href = '/login'; 
  };

  return (
    <section className={styles.forgetFormSection}>
      <img src="logo.png" alt="Forget icon" className={styles.forgetIcon} />
      <h2>Mot de passe oublié</h2>
      <p className={styles.forgetInstructions}>
        Entrez votre email pour recevoir un mot de passe de réinitialisation par email.
      </p>
      <form className={styles.forgetForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.visuallyHidden}>Votre E-mail</label>
          <input
            type="text"
            id="email"
            placeholder="Tapez votre E-mail"
            className={styles.inputField}
            value={email}
            onChange={handleEmailChange}
          />
          <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        <button type="submit" className={styles.submitButton}>Envoyer</button>
      </form>
      <div className={styles.signinPrompt}>
        <p className={styles.promptText}>Vous avez déjà un compte, </p>
        <button onClick={handleSignupClick} className={styles.signinLink}>Se connecter</button>
      </div>
    </section>
  );
}

export default ForgetForm;
