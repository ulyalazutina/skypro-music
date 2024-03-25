"use client";
import { Column } from "@components/Column/Column";
import { Filter } from "@components/Filter/Filter";
import { Header } from "@components/Header/Header";
import Playlist from "@components/Playlist/Playlist";
import { Search } from "@components/Search/Search";
import { Sidebar } from "@components/Sidebar/Sidebar";
import styles from "./Main.module.css";
import { useState } from "react";
import { Bar } from "@components/Bar/Bar";

export default function Main() {
  //состояние для текущего трека
  const [currentTrack, setCurrentTrack] = useState<trackType | null>(null);
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.mainCenterblock}>
          <Search />
          <h2 className={styles.centerblockTitle}>Треки</h2>
          <Filter />
          <div className={styles.centerblockContent}>
            <Column />
            <Playlist setCurrentTrack={setCurrentTrack} />
          </div>
        </div>
        <Sidebar />
      </main>
      {currentTrack && <Bar />}
    </>
  );
}
