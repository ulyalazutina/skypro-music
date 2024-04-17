"use client";
import styles from "./signin.module.css";
import classNames from "classnames";
import Link from "next/link";
import { FormWrapper } from "@components/FormWrapper/FormWrapper";
import { getToken, signinUser } from "@api/user";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { setError, setSignin, setUser } from "@hooks/store/feautures/userSlice";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const formData = useAppSelector((store) => store.user.formSignin);
  const error = useAppSelector((store)=>store.user.error);
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
      localStorage.setItem('user', JSON.stringify(data));
    })
    .then(()=> {
      getToken(formData).then((data)=> {
        localStorage.setItem('token', JSON.stringify(data));
      })
    })
    .then(()=>{
      router.push('/tracks')
    })
    .catch((error) => {
      dispatch(setError(error.message));
    });
  }
  return (
    <FormWrapper>
      <input onChange={handleInputChange} value={formData.email} className={classNames(styles.modalInput, styles.login)} type="text" name="email" placeholder="Почта" />
      <input onChange={handleInputChange} value={formData.password} className={styles.modalInput} type="password" name="password" placeholder="Пароль" />
      <button type="button" onClick={signinBtn} className={styles.modalBtnEnter}>
        <p className={styles.modalBtnEnterText}>Войти</p>
      </button>
      <button className={styles.modalBtnSignup}>
        <Link href="/signup">Зарегистрироваться</Link>
      </button>
      {error !== null ? <p className={styles.errorMsq}>{error}</p> : null}
    </FormWrapper>
  );
}
