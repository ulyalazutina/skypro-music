import styles from "./SignUpPage.module.css";
import Link from "next/link";
import { FormWrapper } from "@components/FormWrapper/FormWrapper";

export default function SignUpPage() {
  return (
    <FormWrapper>
      <input className={styles.modalInput} type="text" name="login" placeholder="Почта" />
      <input className={styles.modalInput} type="password" name="password" placeholder="Пароль" />
      <input className={styles.modalInput} type="password" name="password" placeholder="Повторите пароль" />
      <button className={styles.modalBtnSignupEnt}>
        <Link href="/pages/SignInPage">Зарегистрироваться</Link>
      </button>
    </FormWrapper>
  );
}
