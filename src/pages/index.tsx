import styles from "@styles/Home.module.css";
import NavigationCard from "@components/navigation-card";

export default function Home() {
  return (
    <div className={styles.grid}>
      <NavigationCard
        name="Books"
        href="/books"
        description="Browse Books we have!!."
        showArrow
      />
      <NavigationCard
        name="Technology Choices"
        href="/technology"
        description="Find information about techonlogies used in this project."
        showArrow
      />
    </div>
  );
}
