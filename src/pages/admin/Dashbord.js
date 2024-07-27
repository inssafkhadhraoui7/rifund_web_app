import React, { useState } from "react";
import styles from './Dashbord.module.css';
import Sidebar from './../../components/admin/Sidebar';
import Profile from '../../components/admin/Profile.js';
import ManageCategories from "../../components/admin/ManageCategories.js";

function Dashbord() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
  
      <Sidebar activeItem={activeItem} onSetActiveItem={setActiveItem} />
      <main className={styles.mainContent}>
        {activeItem === 'profile' && <Profile />}
        {activeItem === 'manageCategories' && <ManageCategories />}
        {/* Add conditions for other components if needed */}
      </main>
      </div>
    </div>
  );
}

export default Dashbord;
