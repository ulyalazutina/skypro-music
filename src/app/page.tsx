import { Header } from "@components/Header/Header";
import styles from "./page.module.css";
import { Search } from "@components/Search/Search";
import { Filter } from "@components/Filter/Filter";
import { Column } from "@components/Column/Column";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { Bar } from "@components/Bar/Bar";
import Playlist from "@components/Playlist/Playlist";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <div className={styles.mainCenterblock}>
            <Search />
            <h2 className={styles.centerblockTitle}>Треки</h2>
            <Filter />
            <div className={styles.centerblockContent}>
              <Column />
              <Playlist />
            </div>
          </div>
          <Sidebar />
        </main>
        <Bar />
        <footer />
      </div>
    </div>
  );
}
