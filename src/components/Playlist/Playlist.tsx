"use client";
import Song from "@components/Song/Song";
import styles from "./Playlist.module.css";
import { getTracks } from "@api/tracks";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { setPlaylist } from "../../store/feautures/playlistSlice";

type PlaylistType = {
  playlistID: string | null
}

export default function Playlist({playlistID} : PlaylistType) {
  //все треки
  const playlist = useAppSelector((store) => store.playlist.playlist);
  const filteredPlaylist = useAppSelector((store) => store.playlist.filteredPlaylist);

  const dispatch = useDispatch();
  useEffect(() => {
    getTracks(playlistID)
      .then((data) => {
        data.items? 
        dispatch(setPlaylist(data.items)) : dispatch(setPlaylist(data))
      })
        .catch((error) => {
        console.error("Произошла ошибка при получении списка треков:", error);
        dispatch(setPlaylist([]))
      });
  }, [dispatch, playlistID])

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
