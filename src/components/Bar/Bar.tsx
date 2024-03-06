import classNames from "classnames";
import styles from "./Bar.module.css";
import { Player } from "../Player/Player";

export function Bar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <div className={styles.bar__player_progress} />
        <div className={styles.bar__player_block}>
          <Player />
          <div className={styles.bar__volume_block}>
            <div className={styles.volume__content}>
              <div className={styles.volume__image}>
                <svg className={styles.volume__svg}>
                  <use xlinkHref="/image/icon/sprite.svg#icon-volume" />
                </svg>
              </div>
              <div className={classNames(styles.volume__progress, styles._btn)}>
                <input
                  className={classNames(
                    styles.volume__progress_line,
                    styles._btn
                  )}
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
