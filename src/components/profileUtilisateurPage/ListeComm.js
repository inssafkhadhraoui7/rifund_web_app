import React, { useState } from "react";
import styles from "./ListeComm.module.css";
import EditeCommModel from "./EditeCommModel";
import CreerCommModel from "./CreerCommModel";
import SupCommModel from "./SupCommModel";
import { Link } from "react-router-dom";

function ListeComm() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleClick = () => (window.location.href = "/creerprojet");
  return (
    <div className={styles.container}>
      <button
        className={styles.createButton}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-bs-toggle="modal"
        data-bs-target="#creerCommModel"
      >
        <img src={hovered ? "add.png" : "plus.png"} alt="" className={styles.buttonIcon} />
        <span>Créer communauté</span>
      </button>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nom</th>
            <th scope="col">Date de creation</th>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img
                src="https://s3-alpha-sig.figma.com/img/efca/cda5/18934e16506f536b13e6700ccda29d10?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HfSpBqbbYFDDF4Y7OUXwSFl0CmXKuZXXKqS44Sry9~TOYJ6-6QvB8IH9Zd7zw91ObUdmDpmsD1sIaHs2ggCDhkH-Fyc6-SgSxfz~otaEA7-NBsdcTiwsj8W9H1yxLwOAfKaMWSzfBFrXc9W~-50NYnZEUN2XLAOcsfzWZB0LqowFtuUAD5IqeJLfRyzqUrtlHrlXJxMDx4LvD9wIqi12lO4ce0Y2IRtZTMuOxdDslN4kM3xl5~lKmkUM0KE5B-t-k8KuxtbHKHyoyp1Eh2bbU-Rkq4K4ltaG62pr0oWhgutQ1z0kc59ZKVVIv0e-~296loBWqsza4M7mBgscS0rU0g__"
                alt=""
              />
            </th>
            <td>Titre de communauté</td>
            <td>mars 30 ,2024,10:25 </td>
            <td>
              <div className={styles.actions}>
                <Link to={"/CommunautyPage"}>
                  <i class="fa-solid fa-eye"></i>
                </Link>
                <span data-bs-toggle="modal" data-bs-target="#editeCommModel">
                  <i class="fa-solid fa-file-pen"></i>
                </span>
                <span data-bs-toggle="modal" data-bs-target="#supCommModel">
                  <i class="fa-solid fa-trash-can"></i>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <EditeCommModel />
      <CreerCommModel />
      <SupCommModel />
    </div>
  );
}

export default ListeComm;
