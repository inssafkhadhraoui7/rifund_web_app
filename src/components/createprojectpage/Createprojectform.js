import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"; // You need to install react-icons if not already installed
import styles from "./Createprojectform.module.css";

function Createprojectform() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [budget, setBudget] = useState("");
  const [devise, setDevise] = useState("");
  const [date, setDate] = useState("");
  const [categorie, setCategorie] = useState("");
  const [error, setError] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleImagesChange = (e) => setImages(e.target.value);
  const handleBudgetChange = (e) => setBudget(e.target.value);
  const handleDeviseChange = (e) => setDevise(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleCategorieChange = (e) => setCategorie(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (!title || !description || !images || !budget || !date || !categorie) {
      setError("Veuillez remplir tous les champs.");
    } else {
      setError("");
      // Proceed with form submission
      console.log("Form submitted:", {
        title,
        description,
        images,
        budget,
        devise,
        date,
        categorie,
      });

      // Optionally, reset form state after submission
      setTitle("");
      setDescription("");
      setImages("");
      setBudget("");
      setDevise("");
      setDate("");
      setCategorie("");
    }
  };

  const handleIconClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).map((file) => file.name).join(", ");
    setImages(files);
  };

  return (
    <div className={styles.createFormSection}>
      <div className={styles.mainContent}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="titre" className={styles.formLabel}>
              Titre du projet *
            </label>
            <input
              type="text"
              id="title"
              className={styles.formInput}
              placeholder="Ecrivez le titre de votre projet"
              value={title}
              onChange={handleTitleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.formLabel}>
              Description *
            </label>
            <textarea
              type="text"
              id="description"
              className={styles.formTextarea}
              placeholder="Ecrivez description à votre projet"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="images" className={styles.formLabel}>
              Images de projet
            </label>
            <input
              type="text"
              id="images"
              className={styles.formInput}
              placeholder="Donnez les images de votre projet"
              value={images}
              onChange={handleImagesChange}
            />
            <button
              type="button"
              className={styles.iconButton}
              onClick={handleIconClick}
            >
              <FaPlusCircle />
            </button>
            <input
              type="file"
              id="fileInput"
              className={styles.hiddenFileInput}
              multiple
              onChange={handleFileChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="budget" className={styles.formLabel}>
              Budget
            </label>
            <input
              type="text"
              id="budget"
              className={styles.formInput}
              placeholder="Donnez le budget de votre projet"
              value={budget}
              onChange={handleBudgetChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="devise" className={styles.formLabel}>
              Devise *
            </label>
            <select
              id="devise"
              className={styles.formInput}
              value={devise}
              onChange={handleDeviseChange}
            >
              <option value="">Sélectionner le devise</option>
              <option value="Dinar tunisien">TND</option>
              <option value="Dollar americain">USD</option>
              <option value="Euro europien">Euro</option>
              <option value="Pound britanique">GBP</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date" className={styles.formLabel}>
              Date
            </label>
            <input
              type="date"
              id="date"
              className={styles.formInput}
              placeholder="Donnez la date de votre projet"
              value={date}
              onChange={handleDateChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="categorie" className={styles.formLabel}>
              Categorie *
            </label>
            <select
              id="categorie"
              className={styles.formInput}
              value={categorie}
              onChange={handleCategorieChange}
            >
              <option value="">Sélectionner une catégorie</option>
              <option value="Santé">Santé</option>
              <option value="Enfants">Enfants</option>
              <option value="Art">Art</option>
              <option value="Solidarité">Solidarité</option>
              <option value="Education">Education</option>
              <option value="Association">Association</option>
              <option value="Animale">Animale</option>
              <option value="Mariage">Mariage</option>
              <option value="Evènement">Evènement</option>
            </select>
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button type="submit" className={styles.submitButton}>
            Créer projet
          </button>
        </form>
      </div>
    </div>
  );
}

export default Createprojectform;
