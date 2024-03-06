import Image from "next/image";
import styles from "./Header.module.css";

export function Header() {
  return (
    <nav className={styles.main__nav}>
      <div className={styles.nav__logo}>
        <Image
          className={styles.logo__image}
          src="/image/logo.png"
          alt="Logo"
          width={113.33}
          height={17}
        />
      </div>
      <div className={styles.nav__burger}>
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
      </div>
      <div className={styles.nav__menu}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a href="#" className={styles.menu__link}>
              Главное
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="#" className={styles.menu__link}>
              Мой плейлист
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="../signin.html" className={styles.menu__link}>
              Войти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
