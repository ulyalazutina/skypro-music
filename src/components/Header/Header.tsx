import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Image
          className={styles.logoImage}
          src="/image/logo.png"
          alt="Logo"
          width={113.33}
          height={17}
        />
      </div>
      <div className={styles.navBurger}>
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </div>
      <div className={styles.navMenu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link href="/" className={styles.menuLink}>
              Главное
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/pages/MyTracksPage" className={styles.menuLink}>
              Мой плейлист
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/pages/SignInPage" className={styles.menuLink}>
              Войти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
