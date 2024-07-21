import React from 'react';
import Header from '../components/Header';
import ForgetForm from '../components/forgetpassword/ForgetForm';
import styles from './ForgetPassword.module.css';

function ForgetPassword() {
  return (
    <div className={styles.ForgerPage}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.welcomeSection}>
          <h1 className={styles.welcomeTitle}>Bon retour parmi nous!</h1>
          <img src="welcome.jpg" alt="Welcome illustration" className={styles.welcomeImage} />
        </section>
        <ForgetForm />
      </main>
    </div>
  );
}

export default ForgetPassword;
