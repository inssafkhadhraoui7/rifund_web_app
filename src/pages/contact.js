import React from 'react';
import styles from './contact.module.css';
import ContactInfo from '../components/contactpage/ContactInfo';
import ContactForm from '../components/contactpage/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className={styles.contactPage}>
      <main className={styles.mainContent}>
      <Header/>
        <h1 className={styles.pageTitle}>Entrer en Contact</h1>
        <ContactInfo />
        <ContactForm />
        <Footer/>
      </main>
    </div>
  );
}

export default Contact;
