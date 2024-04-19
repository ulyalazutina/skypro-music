import Link from "next/link";
import styles from "./NavMenu.module.css";
import { getLocalUser } from "@hooks/libs/localStorage";

export function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                    <Link href="/" className={styles.menuLink}>
                        Главное
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/tracks/myPlaylist" className={styles.menuLink}>
                        Мой плейлист
                    </Link>
                </li>
                {getLocalUser ? null : (                    <li className={styles.menuItem}>
                    <Link href="/signin" className={styles.menuLink}>
                        Войти
                    </Link>
                </li>)}
            </ul>
        </div>
    );
}
