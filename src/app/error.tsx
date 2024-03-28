"use client";

import Image from "next/image";
import { MouseEventHandler, useEffect } from "react";
import styles from "./error.module.css";

export default function Error({ error, reset }: { error: string; reset: MouseEventHandler<HTMLButtonElement> }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image src="/image/smile_sad.png" alt="smile sad" width={120} height={120} />
        <h2 className={styles.title}>Ошибка загрузки</h2>
        <p className={styles.text}>
          Проверьте подключение к сети <br></br> и повторите попытку
        </p>
        <button className={styles.btn} onClick={reset}>
          Повторить
        </button>
      </div>
    </div>
  );
}
