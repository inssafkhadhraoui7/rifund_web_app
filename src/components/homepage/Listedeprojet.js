import React from 'react';
import styles from './Listedeprojet.module.css'; // Ensure consistent file naming
import ProjectCard from './ProjectCard';

function ListeDeProjet() {
  const featuredProjects = [
    {
      id: 1,
      date: "Juin 27, 2024",
      title: "Inondations à Lamboa",
      description: "La communauté de Lamboa a besoin de votre aide pour gérer la crise après 3 jours d'inondations ininterrompues.",
      progress: 40,
      image: "./lamboa.png"
    },
    {
      id: 2,
      date: "Juin 27, 2024",
      title: "Tsunami à Malika",
      description: "Urgence! Un tsunami vient de frapper Malika, dans le district de Tarasudi. Aidez nos frères et sœurs touchés.",
      progress: 60,
      image: "./malika.png"
    },
    {
      id: 3,
      date: "Juin 27, 2024",
      title: "Aidez les enfants Palestiniens",
      description: "Les enfants palestiniens ont besoin de votre aide pour obtenir de la nourriture et de l'eau adéquates. Une crise prolongée est une réelle urgence.",
      progress: 90,
      image: "./palastine1.png"
    }
  ];

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>
        Les Projets <span className={styles.highlight}>en Don</span>
        <div className={styles.underline}></div>
      </h2>

      <form className={styles.searchForm}>
        <div className={styles.inputContainer}>
          <input
            type="search"
            id="projectSearch"
            placeholder="Trouver des dons..."
            className={styles.searchInput}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13e496443de6730e76c9b2382c2a2a87d12e47e47cc91170bdcbe58a31dfda50?apiKey=020fffa760da4a3f892552f6ac11e7d9&"
            alt="Search"
            className={styles.searchIcon}
          />
        </div>
      </form>

      <h3 className={styles.featuredTitle}>Le coup de coeur de RiFund</h3>
      <div className={styles.projectGrid}>
        {featuredProjects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ListeDeProjet;
