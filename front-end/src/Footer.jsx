import styles from "./Footer.module.css"; // Import CSS modules for styling.

function Footer() { // Component function for the footer.
  return (
    <footer className={styles.footer}> {/* Footer element with styling. */}
      <div className={styles.footer__content}> {/* Container for footer content. */}
        <p>© {new Date().getFullYear()} MediSupply. All rights reserved.</p> {/* Copyright notice with current year. */}
        <ul className={styles.footer__links}> {/* Unordered list for footer links. */}
          <li> {/* List item for Contact Us link. */}
            <a href="/contact" className={styles.footer__link}>  {/* Anchor tag for Contact Us link. */}
              Contact Us  {/* Link text. */}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer; // Export the Footer component as the default export.
