"use client";
import { useRef, useState } from "react";
import styles from "./Song.module.css";

type SongProps = {
  item: trackType;
  setCurrentTrack: () => void;
};

export default function Song({ item, setCurrentTrack }: SongProps) {
  return (
    <div className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage} onClick={setCurrentTrack}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="/image/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div>
            <a className={styles.trackTitleLink} href="http://">
              {item.name} <span className={styles.trackTitleSpan} />
            </a>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <a className={styles.trackAuthorLink} href="http://">
            {item.author}
          </a>
        </div>
        <div className={styles.trackAlbum}>
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
