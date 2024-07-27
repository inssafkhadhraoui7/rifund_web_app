import PropTypes from 'prop-types';
import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ date, title, description, progress, image }) {
  const handleDonateClick = () => {
    window.location.href = '/financeprojet';
  };

  const handleDetailsClick = () => {
    window.location.href = '/projetdetails';
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
          <button className={styles.moreButton} onClick={handleDetailsClick}>
            Plus
          </button>
          <button className={styles.donateButton} onClick={handleDonateClick}>
            Faire un don
          </button>
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
