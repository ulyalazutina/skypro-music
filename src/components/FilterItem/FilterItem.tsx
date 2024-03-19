// import classNames from "classnames";
import classNames from "classnames";
import styles from "./FilterItem.module.css";

type FilterItemProps = {
  children: string;
  onClick: () => void;
  isOpened: boolean;
  list: Array<{ id: number; name: string }>;
};

export function FilterItem({ children, onClick, isOpened, list }: FilterItemProps) {
  return (
    <div className={styles.container}>
      <div onClick={onClick} className={classNames(styles.filterButton, styles.btnText, isOpened && styles.btnActive)}>
        {children}
      </div>
      {isOpened && (
        <div className={styles.wrapper}>
          <ul className={styles.items}>
            {list.map((item) => (
              <li className={styles.item} key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
