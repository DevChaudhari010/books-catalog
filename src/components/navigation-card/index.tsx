import styles from "./NavigationCard.module.css";
import Link from "next/link";

export type NavigationCardProps = {
  name: string;
  href: string;
  description?: string;
  showArrow?: boolean;
};

export default function NavigationCard({
  name,
  href,
  description,
  showArrow,
}: NavigationCardProps) {
  return (
    <Link href={href}>
      <a className={styles.card}>
        <h2>
          {name}
          {showArrow && <span> &rarr;</span>}
        </h2>
        {description && <p>{description}</p>}
      </a>
    </Link>
  );
}
