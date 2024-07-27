import React from "react";
import styles from './SearchBar.module.css';

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <label htmlFor="search" className={styles.visuallyHidden}>Rechercher</label>
      <input type="text" id="search" placeholder="Rechercher" className={styles.searchInput} />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/13e496443de6730e76c9b2382c2a2a87d12e47e47cc91170bdcbe58a31dfda50?apiKey=020fffa760da4a3f892552f6ac11e7d9&&apiKey=020fffa760da4a3f892552f6ac11e7d9" alt="Search icon" className={styles.searchIcon} />
    </div>
  );
}

export default SearchBar;