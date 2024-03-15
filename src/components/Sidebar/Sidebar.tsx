import Image from "next/image";
import styles from "./Sidebar.module.css";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
        <div className={styles.sidebarIcon}>
          <svg>
            <use xlinkHref="/image/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <Link
              className={styles.sidebarLink}
              href="/pages/PlaylistOfTheDayPage"
            >
              <Image
                className={styles.sidebarImg}
                src="/image/playlist01.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </Link>
          </div>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/pages/OneHundredDanceHitsPage">
              <Image
                className={styles.sidebarImg}
                src="/image/playlist02.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </Link>
          </div>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/pages/IndieChargePage">
              <Image
                className={styles.sidebarImg}
                src="/image/playlist03.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
