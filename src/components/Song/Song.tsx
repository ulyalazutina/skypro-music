"use client";
import { useRef, useState } from "react";
import styles from "./Song.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentTrack, setIsPlay } from "../../store/feautures/playlistSlice";
import classNames from "classnames";

type SongProps = {
  item: trackType;
  playlist: trackType[];
};

export default function Song({ item, playlist }: SongProps) {
  const dispatch = useAppDispatch();
  const isPlay = useAppSelector((store) => store.playlist.isPlaying);
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const handleClick = () => {
    dispatch(setCurrentTrack({ curentTrack: item, playlist }));
    dispatch(setIsPlay(!isPlay));
  };
  return (
    <div className={styles.playlistItem} onClick={handleClick}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            {currentTrack?.name === item.name ? (
              <div className={classNames(styles.trackTitleSvg, styles.playingDot, {[styles.playingDotAnimation] : isPlay})}></div>
            ) : (
              <svg className={styles.trackTitleSvg}>
                <use xlinkHref="/image/icon/sprite.svg#icon-note" />
              </svg>
            )}
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
