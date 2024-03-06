import Image from "next/image";
import styles from "./SignInPage.module.css";
import classNames from "classnames";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_enter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login} action="#">
            <a href="../">
              <div className={styles.modal__logo}>
                <Image
                  src="/image/logo_modal.png"
                  alt="logo"
                  width={140}
                  height={21}
                />
              </div>
            </a>
            <input
              className={classNames(styles.modal__input, styles.login)}
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
            <button className={styles.modal__btn_enter}>
              <Link href="/">Войти</Link>
            </button>
            <button className={styles.modal__btn_signup}>
              <Link href="/pages/SignUpPage">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
