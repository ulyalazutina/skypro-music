import Image from "next/image";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personal_name}>Sergey.Ivanov</p>
        <div className={styles.sidebar__icon}>
          <svg>
            <use xlinkHref="/image/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <div className={styles.sidebar__item}>
            <a className={styles.sidebar__link} href="#">
              <Image
                className={styles.sidebar__img}
                src="/image/playlist01.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className={styles.sidebar__item}>
            <a className={styles.sidebar__link} href="#">
              <Image
                className={styles.sidebar__img}
                src="/image/playlist02.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className={styles.sidebar__item}>
            <a className={styles.sidebar__link} href="#">
              <Image
                className={styles.sidebar__img}
                src="/image/playlist03.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
