import classNames from "classnames";
import styles from "./Bar.module.css";
import { Player } from "@components/Player/Player";

export function Bar() {
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barPlayerProgress} />
        <div className={styles.barPlayerBlock}>
          <Player />
          <div className={styles.barVolumeBlock}>
            <div className={styles.volumeContent}>
              <div className={styles.volumeImage}>
                <svg className={styles.volumeSvg}>
                  <use xlinkHref="/image/icon/sprite.svg#icon-volume" />
                </svg>
              </div>
              <div className={classNames(styles.volumeProgress, styles.btn)}>
                <input className={classNames(styles.volumeProgressLine, styles.btn)} type="range" name="range" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
