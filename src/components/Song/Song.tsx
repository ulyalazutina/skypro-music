"use client";
import { useRef, useState } from "react";
import styles from "./Song.module.css";
import { useAppDispatch } from "../../hooks";
import { setCurrentTrack } from "../../store/feautures/playlistSlice";

type SongProps = {
  item: trackType;
  // onCLick: () => void;
};

export default function Song({ item }: SongProps) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    // onCLick();
    dispatch(setCurrentTrack(item))
  }
  return (
    <div className={styles.playlistItem} onClick={handleClick}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="/image/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <a className={styles.trackTitleLink} href="http://">
              {item.name} <span className={styles.trackTitleSpan} />
            </a>
          </div>
        </div>
        <div
          className={styles.trackAuthor}
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          <a className={styles.trackAuthorLink} href="http://">
            {item.author}
          </a>
        </div>
        <div
          className={styles.trackAlbum}
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          <a className={styles.trackAlbumLink} href="http://">
            {item.album}
          </a>
        </div>
        <div>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.trackTimeText}>{item.duration_in_seconds}</span>
        </div>
      </div>
    </div>
  );
}
