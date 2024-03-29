import classNames from "classnames";
import styles from "./Player.module.css";

export function Player() {
  return (
    <div className={styles.barPlayer}>
      <div className={styles.playerControls}>
        <div className={styles.playerBtnPrev}>
          <svg className={styles.playerBtPrevSvg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-prev" />
          </svg>
        </div>
        <div className={classNames(styles.playerBtnPlay, styles._btn)}>
          <svg className={styles.playerBtnPlaySvg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-play" />
          </svg>
        </div>
        <div className={styles.playerBtnNext}>
          <svg className={styles.playerBtnNextSvg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-next" />
          </svg>
        </div>
        <div
          className={classNames(styles.playerBtnRepeat, styles._btnIcon)}
        >
          <svg className={styles.playerBtnRepeatSvg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-repeat" />
          </svg>
        </div>
        <div
          className={classNames(styles.playerBtnShuffle, styles._btnIcon)}
        >
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
              Ты та...
            </a>
          </div>
          <div className={styles.trackPlayAlbum}>
            <a className={styles.trackPlayAlbumLink} href="http://">
              Баста
            </a>
          </div>
        </div>
        <div className={styles.trackPlayLikeDis}>
          <div
            className={classNames(styles.trackPlayLike, styles._btnIcon)}
          >
            <svg className={styles.trackPlayLikeSvg}>
              <use xlinkHref="/image/icon/sprite.svg#icon-like" />
            </svg>
          </div>
          <div
            className={classNames(styles.trackPlayDislike, styles._btnIcon)}
          >
            <svg className={styles.trackPlayDislikeSvg}>
              <use xlinkHref="/image/icon/sprite.svg#icon-dislike" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
