import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectGrid.module.css';

function ProjectGrid() {
  const projects = [
    {
      id: 4,
      date: "Juin 27, 2024",
      title: "Incendie de forêt de Tabarka",
      description: "La forêt de Tabarka a pris feu et a affecté la communauté environnante. Aidons-les à acheter leurs établissements de santé !",
      progress: 40,
      image: "./tabarka.jpeg"
    },
    {
      id: 5,
      date: "Juin 27, 2024",
      title: "Séisme de Soporo",
      description: "Un séisme de magnitude 7,3 a secoué le sous-district de Saporo. Aidez-les à se rétablir en leur fournissant de la nourriture et des médicaments.",
      progress: 30,
      image: "./soporo.jpg"
    },
    {
      id: 6,
      date: "Juin 27, 2024",
      title: "Sécheresse terrestre de Lidu",
      description: "Les habitants de Tanah Lidu souffrent actuellement de la sécheresse, aidez-les à obtenir de l'eau potable !",
      progress: 40,
      image: "./lidi.jpeg"
    },
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
    <section className={styles.projectGridSection}>
      <div className={styles.projectGrid}>
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <nav className={styles.pagination} aria-label="Pagination">
        <button className={styles.paginationButton} aria-label="Previous page">
          <img src="./inferieur.svg" alt="Previous" className={styles.paginationIcon} />
        </button>
        <button className={`${styles.paginationButton} ${styles.active}`}>1</button>
        <button className={styles.paginationButton}>2</button>
        <button className={styles.paginationButton}>3</button>
        <span className={styles.paginationEllipsis}>...</span>
        <button className={styles.paginationButton}>49</button>
        <button className={styles.paginationButton}>50</button>
        <button className={styles.paginationButton} aria-label="Next page">
          <img src="./superieur.svg" alt="Next" className={styles.paginationIcon} />
        </button>
      </nav>
    </section>
  );
}

export default ProjectGrid;
