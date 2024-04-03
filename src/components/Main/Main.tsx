"use client";
import { Column } from "@components/Column/Column";
import { Filter } from "@components/Filter/Filter";
import { Header } from "@components/Header/Header";
import Playlist from "@components/Playlist/Playlist";
import { Search } from "@components/Search/Search";
import { Sidebar } from "@components/Sidebar/Sidebar";
import styles from "./Main.module.css";
import { Bar } from "@components/Bar/Bar";
import { useAppSelector } from "../../hooks";

export default function Main() {
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);

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
            <Playlist />
          </div>
        </div>
        <Sidebar />
      </main>
      {currentTrack && <Bar />}
    </>
  );
}
