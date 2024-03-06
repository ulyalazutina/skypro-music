import { Bar } from "../../../components/Bar/Bar";
import { Column } from "../../../components/Column/Column";
import { Header } from "../../../components/Header/Header";
import { Search } from "../../../components/Search/Search";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { Song } from "../../../components/Song/Song";
import styles from "./PlaylistOfTheDayPage.module.css";

export default function PlayListOfTheDayPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <div className={styles.main__centerblock}>
            <Search />
            <h2 className={styles.centerblock__h2}>Плейлист дня </h2>
            <div className={styles.centerblock__content}>
              <Column />
              <div className={styles.content__playlist}>
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
