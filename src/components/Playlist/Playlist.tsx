import Song from "@components/Song/Song";
import styles from "./Playlist.module.css";
import { getTracks } from "@api/tracks";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { setPlaylist } from "../../store/feautures/playlistSlice";

export default function Playlist() {
  //все треки
  const playlist = useAppSelector((store) => store.playlist.playlist);
  const filteredPlaylist = useAppSelector((store) => store.playlist.filteredPlaylist);

  const dispatch = useDispatch();
  useEffect(() => {
    getTracks()
      .then((data) => dispatch(setPlaylist(data))).catch((error) => {
        console.error("Произошла ошибка при получении списка треков:", error);
        dispatch(setPlaylist([]))
      });
  }, [])

  return (
    <div className={styles.contentPlaylist}>
      {
      filteredPlaylist.length === 0 ? 
      playlist.map((item, index) => {
        return <Song key={index} item={item} playlist={playlist} />;
      }) 
      : 
      filteredPlaylist.map((item, index) => { return <Song key={index} item={item} playlist={playlist} />; })
      }
    </div>
  );
}
