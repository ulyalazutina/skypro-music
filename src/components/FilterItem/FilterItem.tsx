// import classNames from "classnames";
import classNames from "classnames";
import styles from "./FilterItem.module.css";
import { MouseEventHandler } from "react";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { setActiveFilter } from "../../store/feautures/playlistSlice";

type FilterItemProps = {
  children: string;
  onClick: () => void;
  isOpened: boolean;
  list: string[];
  toggleSelectedAuthors: (authors:string)=>void
};

export function FilterItem({ children, onClick, isOpened, list, toggleSelectedAuthors }: FilterItemProps) {

  return (
    <div className={styles.container}>
      <div onClick={onClick} className={classNames(styles.filterButton, styles.btnText, isOpened && styles.btnActive)}>
        {children}
      </div>
      {isOpened && (
        <div className={styles.wrapper}>
          <ul className={styles.items}>
            {list.map((item, index) => (
              <li onClick={()=>toggleSelectedAuthors(item)} className={styles.item} key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
