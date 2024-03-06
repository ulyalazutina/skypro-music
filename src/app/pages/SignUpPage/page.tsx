import Image from "next/image";
import styles from "./SignUpPage.module.css";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_signup}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login}>
            <a href="../">
              <div className={styles.modal__logo}>
                <Image
                  width={140}
                  height={21}
                  src="/image/logo_modal.png"
                  alt="logo"
                />
              </div>
            </a>
            <input
              className={styles.modal__input}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={styles.modal__input}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <input
              className={styles.modal__input}
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <button className={styles.modal__btn_signup_ent}>
              <Link href="/pages/SignInPage">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
