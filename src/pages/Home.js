// src/pages/Home.js
import React from 'react';
import styles from './Home.module.css';
import Listeprojet from '../components/homepage/Listedeprojet';
import Categorie from'../components/homepage/categorie';
import ProjectGrid from '../components/homepage/ProjectGrid';
import About from '../components/contactpage/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className={styles.home}>
      <Header/>
      <div className={styles.imageContainer}>
      
        <img
          className={styles.homeimg}
          alt="Home"
          src="/home.png"
          data-scroll-to="home"
        />
        <div className={styles.overlayText}>
        <div className={styles.Text}>
          <p>Nous sommes là pour vous accompagner à chaque étape</p>
          </div>
          <div className={styles.text2}>
            <p>Donner<br />  un coup  de main s'impliquer</p>
          </div>
        </div>
      </div>
      <div className={styles.listeprojet}>
          <Listeprojet />
          <Categorie />
          <ProjectGrid/>
          <About/>
          <Footer/>

          </div>
    </div>
  );
};

export default Home;
