import React from 'react';
import styles from './categorie.module.css';

function Categorie() {
  const categories = [
    { name: "Tous" },
    { name: "Santé", image: "sante.png" },
    { name: "Enfants", image: "sante.png" },
    { name: "Art", image: "sante.png" },
    { name: "Solidarité", image: "sante.png" },
    { name: "Education", image: "sante.png" },
    { name: "Association", image: "sante.png" },
    { name: "Animale", image: "sante.png" },
    { name: "Mariage", image: "sante.png" },
    { name: "Evènement", image: "sante.png" }
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
            {category.name !== "Tous" && (
              <img src={`${category.image}`} alt={category.name} className={styles.categoryImage} />
            )}
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categorie;
