import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <h1 className={styles.title}>
        <Link href="/">
          <a>{process.env.NEXT_PUBLIC_APPLICATION_NAME} Books Catalog</a>
        </Link>
      </h1>
      <p className={styles.description}>Designed and Developed for fun!!!</p>
    </header>
  );
}
