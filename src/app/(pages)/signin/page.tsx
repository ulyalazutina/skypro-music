import styles from "./signin.module.css";
import classNames from "classnames";
import Link from "next/link";
import { FormWrapper } from "@components/FormWrapper/FormWrapper";

export default function SignInPage() {
  return (
    <FormWrapper>
      <input className={classNames(styles.modalInput, styles.login)} type="text" name="login" placeholder="Почта" />
      <input className={styles.modalInput} type="password" name="password" placeholder="Пароль" />
      <button className={styles.modalBtnEnter}>
        <Link href="/">Войти</Link>
      </button>
      <button className={styles.modalBtnSignup}>
        <Link href="/signup">Зарегистрироваться</Link>
      </button>
    </FormWrapper>
  );
}
