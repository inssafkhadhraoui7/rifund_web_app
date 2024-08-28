import React, { useState } from "react";
import styles from "./infoPerso.module.css";
import EditePersoModel from "./EditePersoModel";

function InfoPerso() {
  const [hovered, setHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedField, setSelectedField] = useState("");


  const openModal = (field) => {
    setSelectedField(field);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedField("");
  };

  return (
    <div className={styles.container}>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <td>Imen Missaoui</td>
            <td className={styles.plus} onClick={() => openModal("Nom")}>
              <i className="fas fa-chevron-right"></i>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col">Email</th>
            <td>imenmissaoui08@gmail.com</td>
            <td></td>
          </tr>
          <tr>
            <th scope="col" className={styles.liens}>
              Liens
            </th>
            <td>
              <div>facebook.com</div>
              <div>linkedin.com</div>
            </td>
            <td className={styles.plus} onClick={() => openModal("Liens")}>
              <i className="fas fa-plus"></i>
            </td>
          </tr>
        </tbody>
      </table>

      {isModalOpen && (
        <EditePersoModel
          field={selectedField}
          onClose={closeModal}
          initialData={
            selectedField === "Nom"
              ? "Imen Missaoui"
              : ["facebook.com", "linkedin.com"]
          }
        />
      )}
    </div>
  );
}

export default InfoPerso;
