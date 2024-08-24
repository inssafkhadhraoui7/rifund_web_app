import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';


function RegistrationForm() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lastName || !firstName || !email || !password || !confirmPassword) {
      setError('Veuillez remplir tous les champs.');
    } else if (!validateEmail(email)) {
      setError('Veuillez entrer une adresse e-mail valide.');
    } else if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
    } else {
      setError('');
      // Proceed with form submission
      console.log('Form submitted:', { lastName, firstName, email, password });
    }
  };

  const handleSignupClick = () => {
    window.location.href = '/login'; 
  };

  return (
    <section className={styles.registrationFormSection}>
      <h1 className={styles.registrationFormTitle}>Créer un compte</h1>
      <p className={styles.registrationInstructions}>
        Veuillez remplir les champs pour créer un compte.
      </p>
      <form className={styles.registrationForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="lastName" className={styles.visuallyHidden}>Nom</label>
          <input
            type="text"
            id="lastName"
            placeholder="Nom"
            className={styles.inputField}
            value={lastName}
            onChange={handleLastNameChange}
          />
          <FontAwesomeIcon icon={faUser} className={styles.inputIcon} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName" className={styles.visuallyHidden}>Prénom</label>
          <input
            type="text"
            id="firstName"
            placeholder="Prénom"
            className={styles.inputField}
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <FontAwesomeIcon icon={faUser} className={styles.inputIcon} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.visuallyHidden}>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={styles.inputField}
            value={email}
            onChange={handleEmailChange}
          />
          <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.visuallyHidden}>Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            className={styles.inputField}
            value={password}
            onChange={handlePasswordChange}
          />
          <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword" className={styles.visuallyHidden}>Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirmer le mot de passe"
            className={styles.inputField}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={styles.submitButton}>Créer un compte</button>
      </form>
      <div className={styles.signupPrompt}>
        <div className={styles.promptIcons}>
        <FontAwesomeIcon icon={faFacebookF} className={styles.promptIcon} />
        <FontAwesomeIcon icon={faEnvelope} className={styles.promptIcon} />
        </div>
        <p className={styles.promptText}>Vous avez déjà un compte?</p>
        <button onClick={handleSignupClick} className={styles.signupLink}>Se connecter</button>
      </div>
    </section>
  );
}

export default RegistrationForm;
