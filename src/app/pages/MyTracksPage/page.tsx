import { Header } from "@components/Header/Header";
import styles from "./MyTracksPage.module.css";
import { Search } from "@components/Search/Search";
import { Column } from "@components/Column/Column";
import { Song } from "@components/Song/Song";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { Bar } from "@components/Bar/Bar";

export default function PlayListOfTheDayPage() {
  return (
<div className={styles.wrapper}>
  <div className={styles.container}>
    <main className={styles.main}>
      <Header />
      <div className={styles.mainCenterblock}>
        <Search />
        <h2 className={styles.centerblockTitle}>Мои треки</h2>
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
