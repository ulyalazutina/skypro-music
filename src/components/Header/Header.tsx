"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import { NavBurger } from "@components/NavBurger/NavBurger";
import { NavMenu } from "@components/NavMenu/NavMenu";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Image className={styles.logoImage} src="/image/logo.png" alt="Logo" width={113.33} height={17} />
      </div>
      <NavBurger onClick={openMenu} />
      {isOpen ? <NavMenu /> : ""}      
    </nav>
  );
}
