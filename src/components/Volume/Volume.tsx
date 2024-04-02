import classNames from "classnames";
import styles from "./Volume.module.css";
import { RefObject, useEffect, useState } from "react";

export default function Volume({ audioRef }: {audioRef: RefObject<HTMLAudioElement>}) {
  // Состояние для отслеживания громкости
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Функция для управления громкостью
  const handleChangeVolume = (e: any) => {
    setVolume(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  return (
    <div className={styles.barVolumeBlock}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeImage}>
          <svg className={styles.volumeSvg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-volume" />
          </svg>
        </div>
        <div className={classNames(styles.volumeProgress, styles.btn)}>
          <input
            className={classNames(styles.volumeProgressLine, styles.btn)}
            type="range"
            name="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleChangeVolume}
          />
        </div>
      </div>
    </div>
  );
}
