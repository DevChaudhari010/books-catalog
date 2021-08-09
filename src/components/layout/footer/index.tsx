import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/deval-chaudhari/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Developed by Deval Chaudhari
      </a>
    </footer>
  );
}
