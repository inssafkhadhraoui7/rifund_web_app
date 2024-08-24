import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Veuillez remplir tous les champs.");
    } else {
      setError("");
      // Proceed with form submission
      console.log("Username:", username);
      console.log("Password:", password);
      localStorage.setItem("login", true);
      navigate("/profile");
    }
  };

  const handleForgotPasswordClick = () => {
    window.location.href = "/password";
  };

  const handleSignupClick = () => {
    window.location.href = "/register";
  };

  return (
    <section className={styles.loginFormSection}>
      <img src="logo.png" alt="Login icon" className={styles.loginIcon} />
      <h2>Connexion</h2>
      <p className={styles.loginInstructions}>veuillez entrer vos coordonnées pour vous connecter.</p>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.visuallyHidden}>
            Nom d'utilisateur
          </label>
          <input
            type="text"
            id="username"
            placeholder="Nom d'utilisateur"
            className={styles.inputField}
            value={username}
            onChange={handleUsernameChange}
          />
          <FontAwesomeIcon icon={faUser} className={styles.inputIcon} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.visuallyHidden}>
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            className={styles.inputField}
            value={password}
            onChange={handlePasswordChange}
          />
          <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={styles.submitButton}>
          Se connecter
        </button>
      </form>
      <button onClick={handleForgotPasswordClick} className={styles.forgotPassword}>
        Mot de passe oublié?
      </button>
      <div className={styles.divider}>
        <span className={styles.dividerText}>Ou</span>
      </div>
      <div className={styles.signupPrompt}>
        <div className={styles.promptIcons}>
        <FontAwesomeIcon icon={faFacebookF} className={styles.promptIcon} />
        <FontAwesomeIcon icon={faEnvelope} className={styles.promptIcon} />
        </div>
        <p className={styles.promptText}>Vous n'avez pas de compte</p>
        <button onClick={handleSignupClick} className={styles.signupLink}>
          S'inscrire
        </button>
      </div>
    </section>
  );
}
export default LoginForm;
