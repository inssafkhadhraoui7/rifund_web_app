import React from 'react';
import styles from './Listedeprojet.module.css'; // Ensure consistent file naming
import ProjectCard from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          <input
            type="search"
            id="projectSearch"
            placeholder="Trouver des dons..."
            className={styles.searchInput}
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
