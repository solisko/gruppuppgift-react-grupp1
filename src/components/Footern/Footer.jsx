import React from 'react';
import styles from "./footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h3>Kontakt</h3>
          <ul>
            <li>Telefon: 08-910 568 10</li>
            <li>Adress: Isafjordsgatan 30A</li>
            <li>E-post: Auctioneers@gmail.se</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
