import styles from "./Search.module.css";

export function Search() {
  return (
    <div className={styles.centerblock__search}>
      <svg className={styles.search__svg}>
        <use xlinkHref="/image/icon/sprite.svg#icon-search" />
      </svg>
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
}
