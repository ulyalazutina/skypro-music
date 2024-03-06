import { Bar } from "../../../components/Bar/Bar";
import { Centerblock } from "../../../components/Centerblock/Centerblock";
import { Column } from "../../../components/Column/Column";
import { Header } from "../../../components/Header/Header";
import { Search } from "../../../components/Search/Search";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { Song } from "../../../components/Song/Song";
import styles from "./OneHundredDanceHitsPage.module.css";

export default function OneHundredDanceHitsPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <div className={styles.main__centerblock}>
            <Search />
            <h2 className={styles.centerblock__h2}>100 танцевальных хитов</h2>
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
