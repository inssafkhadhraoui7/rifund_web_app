import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ date, title, description, progress, image }) {
  const handleClick = () => {
    window.location.href = '/financeprojet'; 
  };
  return (
    <article className={styles.projectCard}>
      <img src={image} alt={title} className={styles.projectImage} />
      <div className={styles.projectInfo}>
        <time className={styles.projectDate}>{date}</time>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.moreButton}>Plus</button>
          <button className={styles.donateButton} onClick={handleClick}>Faire un don</button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
