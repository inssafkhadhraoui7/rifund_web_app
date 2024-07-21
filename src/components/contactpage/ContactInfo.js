import React from 'react';
import styles from './ContactInfo.module.css'; // Note the change to .module.css

const contactItems = [
  { icon: "phone.png", text: "+33 6 51 94 73", alt: "Phone icon" },
  { icon: "position.png", text: "Paris, Ile-de-France, FRANCE\nHammam Sousse, TUNISIE", alt: "Location icon" },
  { icon: "mail.png", text: "rhgrouperif@gmail.com\ncontact@grouperif.com", alt: "Email icon" }
];

function ContactInfo() {
  return (
    <section className={styles.contactInfo}>
      
      {contactItems.map((item, index) => (
        <div key={index} className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            <img src={item.icon} alt={item.alt} className={styles.icon} />
          </div>
          <p className={styles.infoText}>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default ContactInfo;
