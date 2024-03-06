import classNames from "classnames";
import styles from "./Column.module.css";

export function Column() {
    return (
        <div className={styles.content__title}>
        <div className={classNames(styles.playlist_title__col, styles.col01)}>
          Трек
        </div>
        <div className={classNames(styles.playlist_title__col, styles.col02)}>
          Исполнитель
        </div>
        <div className={classNames(styles.playlist_title__col, styles.col03)}>
          Альбом
        </div>
        <div className={classNames(styles.playlist_title__col, styles.col04)}>
          <svg className={styles.playlist_title__svg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
    );
}