import classNames from "classnames";
import styles from "./Filter.module.css";

export function Filter() {
  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>
      <div className={classNames(styles.filter__button, styles.btn_text)}>
        исполнителю
      </div>
      <div className={classNames(styles.filter__button, styles.btn_text)}>
        году выпуска
      </div>
      <div className={classNames(styles.filter__button, styles.btn_text)}>
        жанру
      </div>
    </div>
  );
}
