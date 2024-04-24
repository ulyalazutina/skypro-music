"use client";
import styles from "./signup.module.css";
import { FormWrapper } from "@components/FormWrapper/FormWrapper";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { useRouter } from "next/navigation";
import { setSignup } from "@hooks/store/feautures/userSlice";
import { signupUser } from "@api/user";
import { useState } from "react";
import classNames from "classnames";

type errorType = {
  password: string;
  email: string;
  username: string;
  repeatPassword: string;
};

export default function SignUpPage() {
  const formData = useAppSelector((store) => store.user.formSignup);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [error, setError] = useState<errorType>({
    password: "",
    email: "",
    username: "",
    repeatPassword: " ",
  });
  const [repeatPwd, setRepeatPwd] = useState("");
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    dispatch(
      setSignup({
        ...formData,
        [name]: value,
      }),
    );
  };
  const signupBtn = () => {
    if (repeatPwd !== formData.password) {
      setError((error) => ({ ...error, repeatPassword: "Пароли не совпдают" }));
    } else {
      setError((error) => ({ ...error, repeatPassword: "" }));
      signupUser(formData)
        .then((data) => {
          console.log(data);
        })
        .then(() => {
          router.push("/signin");
        })
        .catch((error) => {
          const a = JSON.parse(error.message);
          if (a.password) {
            setError((error) => ({ ...error, password: a.password.toString() }));
          } else {
            setError((error) => ({ ...error, password: "" }));
          }

          if (a.email) {
            setError((error) => ({ ...error, email: a.email.toString() }));
          } else {
            setError((error) => ({ ...error, email: "" }));
          }

          if (a.username) {
            setError((error) => ({ ...error, username: a.username.toString() }));
          } else {
            setError((error) => ({ ...error, username: "" }));
          }
        });
    }
  };

  function onKeyDown(event: any) {
    if (event.keyCode == 13) {
      event.preventDefault();
      signupBtn();
    }
  }

  return (
    <FormWrapper>
      <div onKeyDown={onKeyDown}>
        <input
          onChange={handleInputChange}
          value={formData.username}
          className={styles.modalInput}
          type="text"
          name="username"
          placeholder="Имя"
        />
        {error.username && <p className={classNames(styles.errorMsq, styles.errorName)}>{error.username}</p>}
        <input
          onChange={handleInputChange}
          value={formData.email}
          className={styles.modalInput}
          type="text"
          name="email"
          placeholder="Почта"
        />
        {error.email && <p className={classNames(styles.errorMsq, styles.errorLogin)}>{error.email}</p>}
        <input
          onChange={handleInputChange}
          value={formData.password}
          className={styles.modalInput}
          type="password"
          name="password"
          placeholder="Пароль"
        />
        {error.password && <p className={classNames(styles.errorMsq, styles.errorPwd)}>{error.password}</p>}
        <input
          className={styles.modalInput}
          name="repeatPwd"
          type="password"
          placeholder="Повторите пароль"
          onChange={(e) => setRepeatPwd(e.target.value)}
        />
        {error.repeatPassword && <p className={classNames(styles.errorMsq, styles.errorRepeat)}>{error.repeatPassword}</p>}  
        <button type="button" onClick={signupBtn} className={styles.modalBtnSignupEnt}>
          <p className={styles.modalBtnSignupEntText}>Зарегистрироваться</p>
        </button>
      </div>
    </FormWrapper>
  );
}
