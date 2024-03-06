import Link from "next/link";
import styles from "./not-found.module.css";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.not_found_block}>
          <h1 className={styles.title}>404</h1>
          <div className={styles.subtitle}>
            Страница не найдена{" "}
            <Image
              src="/image/smile_crying.png"
              alt="smile_crying"
              width={52}
              height={52}
            />
          </div>
          <p className={styles.text}>
            Возможно, она была удалена или перенесена на другой адрес
          </p>
          <Link className={styles.link} href={"/"}>
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
