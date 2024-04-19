"use client";
import { Column } from "@components/Column/Column";
import { Filter } from "@components/Filter/Filter";
import { Header } from "@components/Header/Header";
import Playlist from "@components/Playlist/Playlist";
import { Search } from "@components/Search/Search";
import { Sidebar } from "@components/Sidebar/Sidebar";
import styles from "./Main.module.css";
import { Bar } from "@components/Bar/Bar";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Title from "@components/Title/Title";
import Link from "next/link";
import { setIsAuthorization } from "@hooks/store/feautures/userSlice";

type MainType = {
  playlistID: string | null;
  isFilter?: boolean;
  isSideBar?: boolean;
  isFavorite?: boolean;
};

export default function Main({ playlistID, isFilter = true, isSideBar = true, isFavorite = false }: MainType) {
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const isAuthorization = useAppSelector((store) => store.user.isAuthorization);
  const dispatch = useAppDispatch();

  const closePopUp = () => {
    dispatch(setIsAuthorization(false));
  };
  return (
    <>
      <main className={styles.main}>
        {isAuthorization && (
          <div className={styles.popUp}>
            <button className={styles.popUpBtn} onClick={closePopUp}>&#x2715;</button>
            <p className={styles.popUpText}>
              <Link className={styles.popUpLink} href="/signin">
                Войдите
              </Link>{" "}
              в свой профиль, чтобы добавить трек в избранное
            </p>
          </div>
        )}
        <Header />
        <div className={styles.mainCenterblock}>
          <Search />
          <Title playlistID={playlistID} />
          {isFilter && <Filter />}
          <div className={styles.centerblockContent}>
            <Column />
            <Playlist playlistID={playlistID} isFavorite={isFavorite} />
          </div>
        </div>
        {isSideBar && <Sidebar />}
      </main>
      {currentTrack && <Bar />}
    </>
  );
}
