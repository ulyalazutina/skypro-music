import Image from "next/image";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import { useAppSelector } from "@hooks/hooks";

export function Sidebar() {
  const user = useAppSelector((store) => store.user.user);
  console.log(user)
  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarPersonal}>
        <Link href={"../../signin"} className={styles.sidebarPersonalName}>{user.username !== "" ? user.username : "Войти"}
        <div className={styles.sidebarIcon}>
          <svg>
            <use xlinkHref="/image/icon/sprite.svg#logout" />
          </svg>
        </div>
        </Link>
      </div>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <Link
              className={styles.sidebarLink}
              href="/tracks/1"
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
            <Link className={styles.sidebarLink}
              href="/tracks/2"
            >
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
            <Link className={styles.sidebarLink} href="/tracks/3">
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
