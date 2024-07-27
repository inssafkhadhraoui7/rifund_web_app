import React, { useState } from 'react';
import styles from './ManageCategories.module.css';
import SearchBar from './SearchBar';
import { FaPlus } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import AddCategoryForm from './Categorie/AddCategoryForm'; 
import ModifyCategoryForm from './Categorie/ModifyCategoryForm'; 
import DeleteConfirmModal from './Categorie/deleteCatégorie';

function ManageCategories() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showModifyForm, setShowModifyForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddClick = () => {
    setShowAddForm(true);
  };

  const handleCloseAddForm = () => {
    setShowAddForm(false);
  };

  const handleModifyClick = (category) => {
    setSelectedCategory(category);
    setShowModifyForm(true);
  };

  const handleCloseModifyForm = () => {
    setShowModifyForm(false);
    setSelectedCategory(null);
  };

  const handleDeleteClick = (category) => {
    setSelectedCategory(category);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedCategory(null);
  };

  const handleConfirmDelete = () => {
    // Handle the deletion logic here
    alert(`Catégorie ${selectedCategory.name} supprimée`);
    handleCloseDeleteModal();
  };

  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.header}>
        <h2>Gérer Catégories</h2>
        <button className={styles.addButton} onClick={handleAddClick}>
          <FaPlus />
        </button>
      </div>
      {showAddForm && <AddCategoryForm onClose={handleCloseAddForm} />}
      {showModifyForm && selectedCategory && 
        <ModifyCategoryForm category={selectedCategory} onClose={handleCloseModifyForm} />}
      {showDeleteModal && 
        <DeleteConfirmModal 
          onClose={handleCloseDeleteModal} 
          onConfirm={handleConfirmDelete} 
        />}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Nom</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace with dynamic data */}
          <tr>
            <td>1</td>
            <td><img src="example-image.jpg" alt="Category" className={styles.image} /></td>
            <td>Santé</td>
            <td>01/01/2024</td>
            <td>
              <button className={styles.actionButton} onClick={() => handleModifyClick({ name: 'Santé' })}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className={styles.actiondelete} onClick={() => handleDeleteClick({ name: 'Santé' })}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
          {/* Repeat for more rows */}
        </tbody>
      </table>
    </div>
  );
}

export default ManageCategories;
