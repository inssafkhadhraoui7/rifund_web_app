import React, { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lastName || !firstName || !email || !message) {
      setError('Veuillez remplir tous les champs.');
    } else if (!validateEmail(email)) {
      setError('Veuillez entrer une adresse e-mail valide.');
    } else {
      setError('');
      // Proceed with form submission
      console.log('Form submitted:', { lastName, firstName, email, message });
    }
  };

  return (
    <section className={styles.contactFormSection}>
      <div className={styles.formIntro}>
        <h2 className={styles.formTitle}>NOUS-CONTACTER</h2>
        <div className={styles.verticalLine}></div>
        <p className={styles.formDescription}>
          Si vous avez des questions, remplissez simplement le formulaire de contact et nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <p className={styles.thankYouNote}>
            Nous apprécions votre intérêt et nous vous répondrons rapidement.
          </p>
          <p className={styles.followUs}>
            Suivez-nous sur les réseaux sociaux:
          </p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com" aria-label="Facebook">
              <img src="facebook.png" alt="Facebook" className={styles.socialIcon} />
            </a>
            <a href="mailto:rhgrouperif@gmail.com" aria-label="Email">
              <img src="email.png" alt="Email" className={styles.socialIcon} />
            </a>
            <a href="https://www.rifund.com" aria-label="Site">
              <img src="site.png" alt="Site" className={styles.socialIcon} />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <img src="instagram.png" alt="Instagram" className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.formLabel}>Nom</label>
              <input
                type="text"
                id="lastName"
                className={styles.formInput}
                placeholder="Jane"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className={styles.spacer}></div>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.formLabel}>Prénom</label>
              <input
                type="text"
                id="firstName"
                className={styles.formInput}
                placeholder="Smitherton"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Adresse e-mail</label>
            <input
              type="email"
              id="email"
              className={styles.formInput}
              placeholder="email@janesfakedomain.net"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Votre message</label>
            <textarea
              id="message"
              className={styles.formTextarea}
              placeholder="Entrez votre question ou message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button type="submit" className={styles.submitButton}>Envoyer</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
