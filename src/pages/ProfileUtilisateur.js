import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/profileUtilisateurPage/Nav";
import styles from "./profileUtilisateur.module.css";
import InfoPerso from "../components/profileUtilisateurPage/InfoPerso";
import ListeProjet from "../components/profileUtilisateurPage/ListeProjet";
import ListeComm from "../components/profileUtilisateurPage/ListeComm";
import Password from "../components/profileUtilisateurPage/Password";

function ProfileUtilisateur() {
  const [activeComponent, setActiveComponent] = useState("Information personnelle");

  const handleNavClick = (item) => {
    setActiveComponent(item);
  };
  return (
    <div className={styles.profile}>
      <Header />
      <div className={styles.container}>
        <Nav activeItem={activeComponent} onNavClick={handleNavClick} />
        {/* Conditionally render components based on the activeComponent state */}
        {activeComponent === "Information personnelle" && <InfoPerso />}
        {activeComponent === "Liste des projets" && <ListeProjet />}
        {activeComponent === "Liste des communautés" && <ListeComm />}
        {activeComponent === "Mot de passe" && <Password />}
      </div>
      <Footer />
    </div>
  );
}

export default ProfileUtilisateur;
