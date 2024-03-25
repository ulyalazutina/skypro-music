import styles from "./page.module.css";
import { Bar } from "@components/Bar/Bar";
import Main from "@components/Main/Main";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main />
        <Bar />
        <footer />
      </div>
    </div>
  );
}
