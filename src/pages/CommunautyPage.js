import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Header from "../components/Header";
import styles from "./CommunautyPage.module.css";
import ChatBox from "../components/communautypagge/ChatBox";

function CommunautyPage() {
  return (
    <div>
      <Header />
      <div className={styles.allthepage}>
        <div className={styles.detailscommunauty}>
          <div className={styles.imgcommunauty}>
            <img src="./communauty.jpeg" alt="Communauté" />
          </div>
          <div>
            <p className={styles.creele}>Creé le 28/07/2024</p>
            <h3 className={styles.apropos}>A propos :</h3>
            <p className={styles.parag}>
              Cette communauté agricole est un groupe de personnes qui
              représentent principalement de l'agriculture, qu'il s'agisse de la
              production de cultures, d'élevage de bétail, ou d'une combinaison
              des deux.
            </p>
          </div>
        </div>
        <div className={styles.members}>
          <h3 className={styles.apropos}>Members :</h3>
          <div className={styles.tablecontent}>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td style={{paddingRight: "100px", paddingLeft: "20px", color: "gray", fontWeight: "bold" }}>
                    Noms d'utilisateur
                  </td>
                  <td style={{ paddingRight: "100px", paddingLeft: "100px", color: "gray", fontWeight: "bold" }}>
                    Rôle
                  </td>
                  <td style={{ paddingRight: "30px", paddingLeft: "20px" }}></td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "100px", paddingLeft: "20px" }}>
                    Ali guiza
                  </td>
                  <td style={{ paddingRight: "100px", paddingLeft: "100px" }}>
                    Admin
                  </td>
                  <td style={{ paddingRight: "30px", paddingLeft: "100px" }}>
                    <FontAwesomeIcon icon={faSignOutAlt} style={{ marginLeft: "100px" }} />
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "100px", paddingLeft: "20px" }}>
                    Walid hemidi
                  </td>
                  <td style={{ paddingRight: "100px", paddingLeft: "100px" }}>
                    Membre
                  </td>
                  <td style={{ paddingRight: "30px", paddingLeft: "100px" }}>
                    <FontAwesomeIcon icon={faSignOutAlt} style={{ marginLeft: "100px" }} />
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "100px", paddingLeft: "20px" }}>
                    Mariem ben moussa
                  </td>
                  <td style={{ paddingRight: "100px", paddingLeft: "100px" }}>
                    membre
                  </td>
                  <td style={{ paddingRight: "30px", paddingLeft: "100px" }}>
                    <FontAwesomeIcon icon={faSignOutAlt} style={{ marginLeft: "100px" }} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ChatBox />
    </div>
  );
}

export default CommunautyPage;
