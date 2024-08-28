import React, { useState } from "react";
import styles from "./editePersoModel.module.css";

function EditePersoModel({ field, onClose, initialData }) {
  const [inputValue, setInputValue] = useState(
    field === "Nom" ? initialData : ""
  );
  const [links, setLinks] = useState(field === "Liens" ? initialData : []);

  const handleSave = () => {
    // Implement save logic here, e.g., update the state in the parent component or send the data to an API
    console.log("Saved:", field === "Nom" ? inputValue : links);
    onClose();
  };

  const handleAddLink = () => {
    setLinks([...links, ""]);
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2> {field}</h2>
        {field === "Nom" ? (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        ) : (
          <div>
            {links.map((link, index) => (
              <input
                key={index}
                type="text"
                value={link}
                onChange={(e) => handleLinkChange(index, e.target.value)}
              />
            ))}
            <button onClick={handleAddLink}>Ajouter un lien</button>
          </div>
        )}
        <div className={styles.modalActions}>
          <button onClick={handleSave}>Enregistrer</button>
          <button onClick={onClose}>Annuler</button>
        </div>
      </div>
    </div>
  );
}

export default EditePersoModel;
