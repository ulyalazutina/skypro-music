"use client";
import styles from "./signin.module.css";
import classNames from "classnames";
import Link from "next/link";
import { FormWrapper } from "@components/FormWrapper/FormWrapper";
import { getToken, signinUser } from "@api/user";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { setSignin, setUser } from "@hooks/store/feautures/userSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";

type errorType = {
  password: string;
  email: string;
  detail: string;
};

export default function SignInPage() {
  const formData = useAppSelector((store) => store.user.formSignin);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [error, setError] = useState<errorType>({
    password: "",
    email: "",
    detail: "",
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    dispatch(
      setSignin({
        ...formData,
        [name]: value,
      }),
    );
  };

  const signinBtn = () => {
    signinUser(formData)
      .then((data) => {
        dispatch(setUser(data));
        localStorage.setItem("user", JSON.stringify(data));
      })
      .then(() => {
        getToken(formData).then((data) => {
          localStorage.setItem("tokenAccess", JSON.stringify(data.access));
          localStorage.setItem("tokenRefresh", JSON.stringify(data.refresh));
          localStorage.setItem("dateTokenAccess", JSON.stringify(new Date().toString()));
        });
      })
      .then(() => {
        router.push("/tracks");
      })
      .catch((error) => {
        const a = JSON.parse(error.message);
        if (a.password) {
          setError(error => ({ ...error, password: a.password.toString() }))
        }  else {
          setError(error => ({ ...error, password: "" }))
        }

        if (a.email) {
          setError(error => ({ ...error, email: a.email.toString() }))
        } else {
          setError(error => ({ ...error, email: "" }))
        }

        if (a.detail) {
          setError(error => ({ ...error, detail: a.detail.toString() }))
        } else {
          setError(error => ({ ...error, detail: "" }))
        }
      });
  };

  function onKeyDown(event: any) {
    if (event.keyCode == 13) {
      event.preventDefault();
      signinBtn();
    }
  }

  return (
    <FormWrapper>
      <div onKeyDown={onKeyDown}>
        <input
          onChange={handleInputChange}
          value={formData.email}
          className={classNames(styles.modalInput, styles.login)}
          type="text"
          name="email"
          placeholder="Почта"
        />
        {error.email && <p className={classNames(styles.errorMsq, styles.errorLogin) }>{error.email}</p>}
        <input
          onChange={handleInputChange}
          value={formData.password}
          className={styles.modalInput}
          type="password"
          name="password"
          placeholder="Пароль"
        />
        {error.password && <p className={classNames(styles.errorMsq, styles.errorPwd) }>{error.password}</p>}
        <button type="button" onClick={signinBtn} className={styles.modalBtnEnter}>
          <p className={styles.modalBtnEnterText}>Войти</p>
        </button>
        <button onClick={(e) => e.preventDefault()} className={styles.modalBtnSignup}>
          <Link href="/signup">Зарегистрироваться</Link>
        </button>
        {error.detail && <p className={classNames(styles.errorMsq, styles.errorDetail)}>{error.detail}</p>}
      </div>
    </FormWrapper>
  );
}
