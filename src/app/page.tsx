import { Bar } from "../components/Bar/Bar";
import { Centerblock } from "../components/Centerblock/Centerblock";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <Centerblock />
          <Sidebar />
        </main>
        <Bar />
        <footer />
      </div>
    </div>
  );
}
