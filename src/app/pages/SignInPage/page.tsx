import Image from "next/image";
import styles from "./SignInPage.module.css";
import classNames from "classnames";
import Link from "next/link";

export default function SignInPage() {
  return (
<div className={styles.wrapper}>
  <div className={styles.containerEnter}>
    <div className={styles.modalBlock}>
      <form className={styles.modalFormLogin} action="#">
        <a href="../">
          <div className={styles.modalLogo}>
            <Image
              src="/image/logo_modal.png"
              alt="logo"
              width={140}
              height={21}
            />
          </div>
        </a>
        <input
          className={classNames(styles.modalInput, styles.login)}
          type="text"
          name="login"
          placeholder="Почта"
        />
        <input
          className={styles.modalInput}
          type="password"
          name="password"
          placeholder="Пароль"
        />
        <button className={styles.modalBtnEnter}>
          <Link href="/">Войти</Link>
        </button>
        <button className={styles.modalBtnSignup}>
          <Link href="/pages/SignUpPage">Зарегистрироваться</Link>
        </button>
      </form>
    </div>
  </div>
</div>

  );
}
