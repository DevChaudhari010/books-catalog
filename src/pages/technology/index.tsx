import styles from "./Technology.module.css";
import NavigationCard from "@components/navigation-card";

const technologies = [
  {
    name: "Next.js",
    href: "https://nextjs.org",
  },
  {
    name: "React.js",
    href: "https://reactjs.org",
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    name: "Mongo DB",
    href: "https://www.mongodb.com",
  },
  {
    name: "Axios",
    href: "https://axios-http.com",
  },
  {
    name: "JEST",
    href: "https://jestjs.io",
  },
];

const TechnologyList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {technologies?.map(({ name, href }) => (
          <NavigationCard key={name} name={name} href={href} showArrow />
        ))}
      </div>
    </div>
  );
};

export default TechnologyList;
