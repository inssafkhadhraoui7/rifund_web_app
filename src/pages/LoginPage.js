import React from 'react';
import Header from '../components/Header';
import LoginForm from '../components/loginpage/LoginForm';
import styles from './LoginPage.module.css';
function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.welcomeSection}>
          <h1 className={styles.welcomeTitle}>Bon retour parmi nous!</h1>
          <img src="welcome.jpg" alt="Welcome illustration" className={styles.welcomeImage} />
        </section>
        <LoginForm />
      </main>
    </div>
  );
}

export default LoginPage;