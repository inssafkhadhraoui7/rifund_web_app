import React, { useState } from "react";
import styles from './Financeform.module.css';

function Financeform () {
        const [nomprenom, setNomprenom] = useState("");
        const [numero, setNumero] = useState("");
        const [codesecret, setCodesecret] = useState("");
        const [mois, setMois] = useState("");
        const [annee, setAnnee] = useState("");
        const [budget, setbudget] = useState("");
        const [error, setError] = useState("");
      
        const handleNomprenomChange = (e) => setNomprenom(e.target.value);
        const handleNumeroChange = (e) => setNumero(e.target.value);
        const handleCodesecretChange = (e) => setCodesecret(e.target.value);
        const handleMoisChange = (e) => setMois(e.target.value);
        const handleAnneeChange = (e) => setAnnee(e.target.value);
        const handleBudgetChange = (e) => setbudget(e.target.value);
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          // Check if any required field is empty
          if (!nomprenom || !numero || !codesecret || !mois || !annee || !budget) {
            setError("Veuillez remplir tous les champs.");
          } else {
            setError("");
            // Proceed with form submission
            console.log("Form submitted:", {
              nomprenom,
              numero,
              codesecret,
              mois,
              annee,
              budget,
            });
      
            // Optionally, reset form state after submission
            setNomprenom("");
            setNumero("");
            setCodesecret("");
            setMois("");
            setAnnee("");
            setbudget("");
          }
        };
      
        return (
          <div className={styles.financeFormSection}>
            <div className={styles.mainContent}>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="nomprenom" className={styles.formLabel}>
                    Nom et prénom *
                  </label>
                  <input
                    type="text"
                    id="nomprenom"
                    className={styles.formInput}
                    placeholder="Le propre nom et prenom"
                    value={nomprenom}
                    onChange={handleNomprenomChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="numero" className={styles.formLabel}>
                    Numéro de carte *
                  </label>
                  <input
                    type="text"
                    id="numerocarte"
                    className={styles.formInput}
                    placeholder="12 chiffres"
                    value={numero}
                    onChange={handleNumeroChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="codesecret" className={styles.formLabel}>
                    Numéro de carte *
                  </label>
                  <input
                    type="text"
                    id="codesecret"
                    className={styles.formInput}
                    placeholder="3 chiffres"
                    value={codesecret}
                    onChange={handleCodesecretChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="mois" className={styles.formLabel}>
                    Mois *
                  </label>
                  <select
                    id="mois"
                    className={styles.formInput}
                    value={mois}
                    onChange={handleMoisChange}
                  >
                    <option value="">Sélectionner le mois</option>
                    <option value="Janvier">Janvier</option>
                    <option value="Fevrier">Fevrier</option>
                    <option value="Mars">Mars</option>
                    <option value="Avril">Avril</option>
                    <option value="Mai">Mai</option>
                    <option value="Juin">Juin</option>
                    <option value="Juillet">Juillet</option>
                    <option value="Aout">Aout</option>
                    <option value="Septembre">Septembre</option>
                    <option value="Octobre">Octobre</option>
                    <option value="Novembre">Novembre</option>
                    <option value="Decembre">Decembre</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="annee" className={styles.formLabel}>
                    Année *
                  </label>
                  <select
                    id="annee"
                    className={styles.formInput}
                    value={annee}
                    onChange={handleAnneeChange}
                  >
                    <option value="">Sélectionner l'année</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="budget" className={styles.formLabel}>
                    Budget
                  </label>
                  <input
                    type="text"
                    id="budget"
                    className={styles.formInput}
                    placeholder="Le montant"
                    value={budget}
                    onChange={handleBudgetChange}
                  />
                </div>
                {error && <p className={styles.errorMessage}>{error}</p>}
                <button type="submit" className={styles.submitButton}>
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        );
}

export default Financeform;
