import React, { useState } from "react";
import styles from './Dashbord.module.css';
import Sidebar from './../../components/admin/Sidebar';
import Profile from '../../components/admin/Profile.js';
import ManageCategories from "../../components/admin/ManageCategories.js";
import ManageProjets from "../../components/admin/ManageProjets.js";
import ManageCommunities from "../../components/admin/ManageCommunities.js";
import ManageUsers from "../../components/admin/ManageUsers.js";

function Dashbord() {
  const [activeItem, setActiveItem] = useState('profile'); // Set 'profile' as the initial state

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Sidebar activeItem={activeItem} onSetActiveItem={setActiveItem} />
        <main className={styles.mainContent}>
          {activeItem === 'profile' && <Profile />}
          {activeItem === 'manageCategories' && <ManageCategories />}
          {activeItem === 'manageProjects' && <ManageProjets />}
          {activeItem === 'manageCommunities' && <ManageCommunities />}
          {activeItem === 'manageUsers' && <ManageUsers />}
        </main>
      </div>
    </div>
  );
}

export default Dashbord;
