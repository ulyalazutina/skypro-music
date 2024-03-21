"use client";
import { useRef, useState } from "react";
import styles from "./Song.module.css";

export default function Song({ item }: { item: trackType }) {
  const audioRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    console.log(audio);
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying((prev) => !prev);
  };
  
  return (
    <div className={styles.playlistItem}>
      <audio ref={audioRef} src={item.track_file}></audio>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage} onClick={togglePlay}>
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
