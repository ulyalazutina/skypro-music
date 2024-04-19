import Image from "next/image";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import { useAppDispatch } from "@hooks/hooks";
import { setReset } from "@hooks/store/feautures/userSlice";
import { useRouter } from "next/navigation";
import { getLocalUser } from "@hooks/libs/localStorage";

export function Sidebar() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logoutUser = () => {
    dispatch(setReset());
    localStorage.removeItem('user');
    localStorage.removeItem('tokenRefresh');
    localStorage.removeItem('tokenAccess');
    localStorage.removeItem('dateTokenAccess');
    router.push("/signin");
  };

  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarPersonal}>
        {getLocalUser ? (
          <p className={styles.sidebarPersonalName}>{getLocalUser.username}</p>
        ) : (
          <Link href={"../../signin"} className={styles.sidebarPersonalName}>
            Войти
          </Link>
        )}

        {getLocalUser ? (
          <div className={styles.sidebarIcon} onClick={logoutUser}>
            <svg>
              <use xlinkHref="/image/icon/sprite.svg#logout" />
            </svg>
          </div>
        ) : null}
      </div>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/tracks/1">
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
            <Link className={styles.sidebarLink} href="/tracks/2">
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
