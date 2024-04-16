"use client";
import styles from "./signup.module.css";
import Link from "next/link";
import { FormWrapper } from "@components/FormWrapper/FormWrapper";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { useRouter } from "next/navigation";
import { setSignup } from "@hooks/store/feautures/userSlice";
import { signupUser } from "@api/user";


export default function SignUpPage() {
  const formData = useAppSelector((store) => store.user.formSignup);
  const user = useAppSelector((store)=>store.user.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleInputChange = (e:any) => {
    const { name, value } = e.target; 
    dispatch(setSignup({
      ...formData,
      [name]: value, 
    }))

  };
  const signupBtn = () => {
    signupUser(formData)
    .then(()=>{
      router.push('/signin')
    })
    console.log(formData);
  }

  return (
    <FormWrapper>
      <input onChange={handleInputChange} value={formData.username} className={styles.modalInput} type="text" name="username" placeholder="Имя" />
      <input onChange={handleInputChange} value={formData.email} className={styles.modalInput} type="text" name="email" placeholder="Почта" />
      <input onChange={handleInputChange} value={formData.password} className={styles.modalInput} type="password" name="password" placeholder="Пароль" />
      <input className={styles.modalInput} type="password" placeholder="Повторите пароль" />
      <button type="button" onClick={signupBtn} className={styles.modalBtnSignupEnt}>
        <p className={styles.modalBtnSignupEntText}>Зарегистрироваться</p>
      </button>
    </FormWrapper>
  );
}
