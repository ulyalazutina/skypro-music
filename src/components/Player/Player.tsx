import classNames from "classnames";
import styles from "./Player.module.css";
import { MouseEventHandler, useRef, useState } from "react";

type PlayerProps = { currentTrack: trackType | null };

export function Player({ currentTrack }: PlayerProps) {
  const audioRef = useRef<null | HTMLAudioElement>(null);
  // Состояние для управления воспроизведением
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // Состояние для управления зацикливанием
  const [isLoop, setIsLoop] = useState<boolean>(false);

  // Функция для воспроизведения и паузы
  const togglePlay = (): void => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  // Функция для зацикливания треков
  const toggleLoop = (): void => {
    if (audioRef.current) {
      audioRef.current.loop = !isLoop;
      setIsLoop((prev) => !prev);
      console.log(audioRef.current.loop);
    }
  };

  return (
    <div className={styles.barPlayer}>
      <audio src={currentTrack?.track_file} ref={audioRef}></audio>
      <div className={styles.playerControls}>
        <div className={styles.playerBtnPrev}>
          <svg className={styles.playerBtPrevSvg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-prev" />
          </svg>
        </div>
        <div onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles._btn)}>
          <svg className={styles.playerBtnPlaySvg}>
            {isPlaying ? (
              <use xlinkHref="/image/icon/sprite.svg#icon-pause" />
            ) : (
              <use xlinkHref="/image/icon/sprite.svg#icon-play" />
            )}
          </svg>
        </div>
        <div className={styles.playerBtnNext}>
          <svg className={styles.playerBtnNextSvg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-next" />
          </svg>
        </div>
        <div onClick={toggleLoop} className={classNames(styles.playerBtnRepeat, styles._btnIcon)}>
          <svg className={styles.playerBtnRepeatSvg}>
            {isLoop ? (
              <use xlinkHref="/image/icon/sprite.svg#icon-repeatOn" />
            ) : (
              <use xlinkHref="/image/icon/sprite.svg#icon-repeat" />
            )}
          </svg>
        </div>
        <div className={classNames(styles.playerBtnShuffle, styles._btnIcon)}>
          <svg className={styles.playerBtnShuffleSvg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-shuffle" />
          </svg>
        </div>
      </div>
      <div className={styles.playerTrackPlay}>
        <div className={styles.trackPlayContain}>
          <div className={styles.trackPlayImage}>
            <svg className={styles.trackPlaySvg}>
              <use xlinkHref="/image/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className={styles.trackPlayAuthor}>
            <a className={styles.trackPlayAuthorLink} href="http://">
              {currentTrack?.name}
            </a>
          </div>
          <div className={styles.trackPlayAlbum}>
            <a className={styles.trackPlayAlbumLink} href="http://">
              {currentTrack?.author}
            </a>
          </div>
        </div>
        <div className={styles.trackPlayLikeDis}>
          <div className={classNames(styles.trackPlayLike, styles._btnIcon)}>
            <svg className={styles.trackPlayLikeSvg}>
              <use xlinkHref="/image/icon/sprite.svg#icon-like" />
            </svg>
          </div>
          <div className={classNames(styles.trackPlayDislike, styles._btnIcon)}>
            <svg className={styles.trackPlayDislikeSvg}>
              <use xlinkHref="/image/icon/sprite.svg#icon-dislike" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
