"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import { NavBurger } from "@components/NavBurger/NavBurger";
import { NavMenu } from "@components/NavMenu/NavMenu";
import { useState } from "react";
import { useAppSelector } from "../../hooks";

export function Header() {
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.mainNav}>
      {currentTrack?.name}
      <div className={styles.navLogo}>
        <Image className={styles.logoImage} src="/image/logo.png" alt="Logo" width={113.33} height={17} />
      </div>
      <NavBurger onClick={handleMenuClick} />
      {isOpen ? <NavMenu /> : ""}
    </nav>
  );
}
