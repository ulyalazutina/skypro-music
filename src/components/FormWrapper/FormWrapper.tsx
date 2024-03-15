import Image from "next/image";
import styles from "./FormWrapper.module.css";

export function FormWrapper({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin} action="#">
            <a href="../">
              <div className={styles.modalLogo}>
                <Image width={140} height={21} src="/image/logo_modal.png" alt="logo" />
              </div>
            </a>
            {children}{" "}
          </form>
        </div>
      </div>
    </div>
  );
}
