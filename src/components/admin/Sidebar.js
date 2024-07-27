import React, { useState } from "react";
import styles from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faUser, faProjectDiagram, faUsers, faUserCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ activeItem, onSetActiveItem }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleItemClick = (item) => {
    onSetActiveItem(item);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logged out");
  };

  const menuItems = [
    { icon: faUserCircle, text: "Profil", id: "profile"  },
    { icon: faLayerGroup, text: "Gérer Catégorie", id: "manageCategories" },
    { icon: faUser, text: "Gérer Utilisateurs", id: "manageUsers" },
    { icon: faProjectDiagram, text: "Gérer Projets", id: "manageProjects" },
    { icon: faUsers, text: "Gérer Communautés", id: "manageCommunities" }
  ];

  return (
    <aside className={styles.sidebar}>
      <h1 className={styles.logo}><strong>RiFund</strong></h1>
      <div className={styles.userProfile}>
        <hr className={styles.divider} />
        <FontAwesomeIcon icon={faUserCircle} className={styles.avatar} />
        <div className={styles.userInfo}>
          <span className={styles.userName}>Misaaoui Imen</span>
          <FontAwesomeIcon 
            icon={faCaretDown} 
            className={styles.userStatus} 
            onClick={handleDropdownToggle} 
          />
        </div>
        {isDropdownOpen && (
          <div className={styles.dropdownMenu}>
            <button className={styles.dropdownItem} onClick={handleLogout}>
              Déconnexion
            </button>
            {/* Add more dropdown items if needed */}
          </div>
        )}
        <hr className={styles.divider} />
      </div>
      <nav className={styles.sidebarMenu}>
        {menuItems.map((item) => (
          <button 
            key={item.id} 
            className={`${styles.menuItem} ${activeItem === item.id ? styles.active : 'profile'}`}
            onClick={() => handleItemClick(item.id)}
          >
            <FontAwesomeIcon icon={item.icon} className={styles.menuIcon} />
            <span>{item.text}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
