"use client";
import styles from "./signin.module.css";
import classNames from "classnames";
import Link from "next/link";
import { FormWrapper } from "@components/FormWrapper/FormWrapper";
import { signinUser } from "@api/user";
// import { setFormData } from "@store/feautures/userSlice";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { useState } from "react";
import { setSignin, setUser } from "@hooks/store/feautures/userSlice";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const formData = useAppSelector((store) => store.user.formSignin);
  const user = useAppSelector((store)=>store.user.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleInputChange = (e:any) => {
    const { name, value } = e.target; 
    dispatch(setSignin({
      ...formData,
      [name]: value, 
    }))

  };
  const signinBtn = () => {
    signinUser(formData).then((data)=>{
      dispatch(setUser(data));
    })
    .then(()=>{
      router.push('/tracks')
    })
  }
  return (
    <FormWrapper>
      <input onChange={handleInputChange} value={formData.email} className={classNames(styles.modalInput, styles.login)} type="text" name="email" placeholder="Почта" />
      <input onChange={handleInputChange} value={formData.password} className={styles.modalInput} type="password" name="password" placeholder="Пароль" />
      <button type="button" onClick={signinBtn} className={styles.modalBtnEnter}>
        <p>Войти</p>
      </button>
      <button className={styles.modalBtnSignup}>
        <Link href="/signup">Зарегистрироваться</Link>
      </button>
    </FormWrapper>
  );
}
