// import classNames from "classnames";
import classNames from "classnames";
import styles from "./FilterItem.module.css";

type FilterItemProps = { children: string; onClick: () => void; isOpened: boolean };

export function FilterItem({ children, onClick, isOpened }: FilterItemProps) {
  return (
    <div className={styles.container}>
      <div onClick={onClick} className={classNames(styles.filterButton, styles.btnText)}>
        {children}
      </div>
      {isOpened && (
        <div className={styles.wrapper}>
          <ul className={styles.items}>
            <li className={styles.item}>Frank Sinatra</li>
            <li className={styles.item}>Frank Sinatra</li>
            <li className={styles.item}>Frank Sinatra</li>
            <li className={styles.item}>Frank Sinatra</li>
            <li className={styles.item}>Frank Sinatra</li>
            <li className={styles.item}>Frank Sinatra</li>
          </ul>
        </div>
      )}
    </div>
  );
}
