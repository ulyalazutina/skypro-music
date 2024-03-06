import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "../components/Header/Header";
import { Centerblock } from "../components/Centerblock/Centerblock";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Bar } from "../components/Bar/Bar";

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
