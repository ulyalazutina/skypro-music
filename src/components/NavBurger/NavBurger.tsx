import { FC, MouseEventHandler, memo } from "react";
import styles from "./NavBurger.module.css";

type NavBurgerProp = { onClick: MouseEventHandler<HTMLDivElement>; }; 

export const NavBurger: FC<NavBurgerProp> = memo(({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.navBurger}>
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
    </div>
  );
})
NavBurger.displayName = "NavBurger";