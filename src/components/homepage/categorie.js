import React from 'react';
import styles from './categorie.module.css';

function categorie() {
  const categories = [
    "Tous", "Santé", "Enfants", "Art", "Solidarité",
    "Education", "Association", "Animale", "Mariage", "Evènement"
  ];

  return (
    <section className={styles.categoryBrowser}>
      <h2 className={styles.browserTitle}>
        Parcourir Les <span className={styles.highlight}>RIFUND</span> Par Catégorie
        <div className={styles.underline}></div>
      </h2>
 
      <div className={styles.categoryList}>
        {categories.map((category, index) => (
          <button key={index} className={`${styles.categoryButton} ${index === 0 ? styles.active : ''}`}>
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default categorie;