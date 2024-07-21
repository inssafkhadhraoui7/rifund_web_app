import React from 'react';
import Header from '../components/Header';
import RegistrationForm from '../components/register/RegistrationForm';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={styles.RegisterPage}>
      <Header />
      <main className={styles.mainContent}>
        <RegistrationForm />
      </main>
    </div>
  );
};

export default RegisterPage;
