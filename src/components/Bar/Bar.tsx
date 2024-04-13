"use client";
import classNames from "classnames";
import styles from "./Bar.module.css";
import { useEffect, useRef, useState } from "react";
import ProgressBar from "@components/ProgressBar/ProgressBar";
import formatTime from "../../libs/formatTime";
import Volume from "@components/Volume/Volume";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  setIsPlay,
  setIsShuffled,
  setNextTrack,
  setPrevTrack,
} from "../../store/feautures/playlistSlice";

export function Bar() {
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const isShuffle = useAppSelector((store) => store.playlist.isShuffled);
  const isPlay = useAppSelector((store) => store.playlist.isPlaying);
  const audioRef = useRef<null | HTMLAudioElement>(null);

  // Состояние для управления зацикливанием
  const [isLoop, setIsLoop] = useState<boolean>(false);
  // Состояние для отслеживания текущего времени воспроизведения
  const [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
    audioRef.current?.play();
    dispatch(setIsPlay(true));
  }, [currentTrack]);

  //автоматически переключает трек при завершении воспроизведения
  useEffect(() => {
    audioRef.current?.addEventListener("ended", () => dispatch(setNextTrack()));
    return () => {
      audioRef.current?.removeEventListener("ended", () => dispatch(setNextTrack()));
    };
  }, []);

  // Функция для воспроизведения и паузы
  const togglePlay = (): void => {
    if (audioRef.current) {
      if (isPlay) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      dispatch(setIsPlay(!isPlay));
    }
  };

  // Функция для зацикливания треков
  const toggleLoop = (): void => {
    if (audioRef.current) {
      console.log(audioRef);
      audioRef.current.loop = !isLoop;
      setIsLoop((prev) => !prev);
      console.log(audioRef.current.loop);
    }
  };

  // Функцкия для управления временм воспроизведения
  const handleChange = (e: any) => {
    setCurrentTime(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = e.target.value;
    }
  };

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <audio
          src={currentTrack?.track_file}
          ref={audioRef}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        ></audio>
        <div className={styles.barPlayerProgress}>
          {currentTime !== 0
            ? `${formatTime(currentTime)} / ${formatTime(audioRef.current && audioRef.current.duration)}`
            : ""}
        </div>
        <ProgressBar
          max={audioRef.current ? audioRef.current.duration.toString() : "0"}
          value={currentTime}
          step={0.01}
          onChange={handleChange}
        />

        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <div className={styles.playerControls}>
              <div className={styles.playerBtnPrev} onClick={() => dispatch(setPrevTrack())}>
                <svg className={styles.playerBtPrevSvg}>
                  <use xlinkHref="/image/icon/sprite.svg#icon-prev" />
                </svg>
              </div>
              <div onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles._btn)}>
                <svg className={styles.playerBtnPlaySvg}>
                  {isPlay ? (
                    <use xlinkHref="/image/icon/sprite.svg#icon-pause" />
                  ) : (
                    <use xlinkHref="/image/icon/sprite.svg#icon-play" />
                  )}
                </svg>
              </div>
              <div className={styles.playerBtnNext} onClick={() => dispatch(setNextTrack())}>
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
              <div
                className={classNames(styles.playerBtnShuffle, styles._btnIcon)}
                onClick={() => dispatch(setIsShuffled(!isShuffle))}
              >
                {isShuffle ? (
                  <svg className={styles.playerBtnShuffleOnSvg}>
                    <use xlinkHref="/image/icon/sprite.svg#icon-shuffleOn" />
                  </svg>
                ) : (
                  <svg className={styles.playerBtnShuffleSvg}>
                    <use xlinkHref="/image/icon/sprite.svg#icon-shuffle" />
                  </svg>
                )}
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
          <Volume audioRef={audioRef} />
        </div>
      </div>
    </div>
  );
}
