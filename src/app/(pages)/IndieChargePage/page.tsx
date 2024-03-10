import { Song } from "@components/Song/Song";
import styles from "./IndieChargePage.module.css";
import { Header } from "@components/Header/Header";
import { Search } from "@components/Search/Search";
import { Column } from "@components/Column/Column";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { Bar } from "@components/Bar/Bar";

export default function IndieChargePage() {
  return (
<div className={styles.wrapper}>
  <div className={styles.container}>
    <main className={styles.main}>
      <Header />
      <div className={styles.mainCenterblock}>
        <Search />
        <h2 className={styles.centerblockTitle}>Инди заряд</h2>
        <div className={styles.centerblockContent}>
          <Column />
          <div className={styles.contentPlaylist}>
            <Song />
          </div>
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
