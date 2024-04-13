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
import Title from "@components/Title/Title";

type MainType = {
  playlistID: string;
  isFilter?: boolean;
  isSideBar?: boolean;
};

export default function Main({ playlistID, isFilter = true, isSideBar = true }: MainType) {
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.mainCenterblock}>
          <Search />
          <Title playlistID={playlistID}/>
          {isFilter && <Filter />}
          <div className={styles.centerblockContent}>
            <Column />
            <Playlist playlistID={playlistID}/>
          </div>
        </div>
        {isSideBar && <Sidebar /> }
      </main>
      {currentTrack && <Bar />}
    </>
  );
}
