import styles from "./Layout.module.css";
import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
