import classNames from "classnames";
import styles from "./Centerblock.module.css";
import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";
import { Song } from "../Song/Song";
import { Column } from "../Column/Column";

export function Centerblock() {
  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <Filter />
      <div className={styles.centerblock__content}>
        <Column />
        <div className={styles.content__playlist}>
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
        </div>
      </div>
    </div>
  );
}
