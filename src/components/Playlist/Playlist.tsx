"use client";
import Song from "@components/Song/Song";
import styles from "./Playlist.module.css";
import { getFavotireTracks, getTracks } from "@api/tracks";
import { Suspense, lazy, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { setPlaylist } from "../../store/feautures/playlistSlice";
import { getLocalRefreshToken, getLocalUser } from "@hooks/libs/localStorage";
import { updateToken } from "@api/user";

type PlaylistType = {
  playlistID: string | null;
  isFavorite?: boolean;
};

export default function Playlist({ playlistID, isFavorite }: PlaylistType) {
  //все треки
  const playlist = useAppSelector((store) => store.playlist.playlist);
  const filteredPlaylist = useAppSelector((store) => store.playlist.filteredPlaylist);
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("tokenAccess"));

  useEffect(() => {
    if (isFavorite) {
      const clickDate = new Date();
      let dateAccessToken = new Date(JSON.parse(localStorage.getItem("dateTokenAccess")));
      if (dateAccessToken) {
              if (Math.floor((clickDate.getTime() - dateAccessToken.getTime()) / 1000) > 200) {
                if (getLocalRefreshToken) {
                  updateToken(getLocalRefreshToken)
                    .then((data) => localStorage.setItem("tokenAccess", JSON.stringify(data.access)))
                    .then(() => {
                      getFavotireTracks(token).then((data) => {
                        console.log(data);
                        dispatch(setPlaylist(data));
                      });
                    })
                    .catch((error) => {
                      console.warn(error);
                    });
                }
              } else {
                getFavotireTracks(token).then((data) => {
                  console.log(data);
                  dispatch(setPlaylist(data));
                });
              }
            }
  } else {
    getTracks(playlistID)
      .then((data) => {
        data.items ? dispatch(setPlaylist(data.items)) : dispatch(setPlaylist(data));
      })
      .catch((error) => {
        console.error("Произошла ошибка при получении списка треков:", error);
        dispatch(setPlaylist([]));
      });    
  }

  }, [dispatch, playlistID]);

  return (
    <div className={styles.contentPlaylist}>
      {filteredPlaylist.length === 0
        ? playlist.map((item, index) => {
            return <Song key={index} item={item} playlist={playlist} />;
          })
        : filteredPlaylist.map((item, index) => {
            return <Song key={index} item={item} playlist={playlist} />;
          })}
    </div>
  );
}
