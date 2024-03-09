import Image from "next/image";
import styles from "./SignUpPage.module.css";
import Link from "next/link";

export default function SignUpPage() {
  return (
<div className={styles.wrapper}>
  <div className={styles.containerSignup}>
    <div className={styles.modalBlock}>
      <form className={styles.modalFormLogin}>
        <a href="../">
          <div className={styles.modalLogo}>
            <Image
              width={140}
              height={21}
              src="/image/logo_modal.png"
              alt="logo"
            />
          </div>
        </a>
        <input
          className={styles.modalInput}
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
        <input
          className={styles.modalInput}
          type="password"
          name="password"
          placeholder="Повторите пароль"
        />
        <button className={styles.modalBtnSignupEnt}>
          <Link href="/pages/SignInPage">Зарегистрироваться</Link>
        </button>
      </form>
    </div>
  </div>
</div>

  );
}
