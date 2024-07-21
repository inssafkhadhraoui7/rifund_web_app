import React from 'react';
import Createprojectform from '../components/createprojectpage/Createprojectform';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './Createproject.module.css';

function Createproject() {
    return (
        <div className={styles.createPage}>
            <Header/>
            <main className={styles.mainContent}>
                <div className={styles.formContainer}>
                    <h1 className={styles.pageTitle}>Créer projet</h1>
                    <Createprojectform/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Createproject;
