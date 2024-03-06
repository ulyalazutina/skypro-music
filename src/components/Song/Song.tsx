import styles from "./Song.module.css";

export function Song() {
  return (
    <div className={styles.playlist__item}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div className={styles.track__title_image}>
            <svg className={styles.track__title_svg}>
              <use xlinkHref="/image/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div>
            <a className={styles.track__title_link} href="http://">
              Guilt <span className={styles.track__title_span} />
            </a>
          </div>
        </div>
        <div className={styles.track__author}>
          <a className={styles.track__author_link} href="http://">
            Nero
          </a>
        </div>
        <div className={styles.track__album}>
          <a className={styles.track__album_link} href="http://">
            Welcome Reality
          </a>
        </div>
        <div>
          <svg className={styles.track__time_svg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.track__time_text}>4:44</span>
        </div>
      </div>
    </div>
  );
}
