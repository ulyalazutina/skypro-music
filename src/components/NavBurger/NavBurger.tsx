import { FC, MouseEventHandler } from "react";
import styles from "./NavBurger.module.css";

type NavBurgerProp = { onClick: MouseEventHandler<HTMLDivElement>; }; 

export const NavBurger: FC<NavBurgerProp> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.navBurger}>
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
    </div>
  );
}
