import classNames from "classnames";
import styles from "./Player.module.css";

export function Player() {
  return (
    <div className={styles.bar__player}>
      <div className={styles.player__controls}>
        <div className={styles.player__btn_prev}>
          <svg className={styles.player__btn_prev_svg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-prev" />
          </svg>
        </div>
        <div className={classNames(styles.player__btn_play, styles._btn)}>
          <svg className={styles.player__btn_play_svg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-play" />
          </svg>
        </div>
        <div className={styles.player__btn_next}>
          <svg className={styles.player__btn_next_svg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-next" />
          </svg>
        </div>
        <div
          className={classNames(styles.player__btn_repeat, styles._btn_icon)}
        >
          <svg className={styles.player__btn_repeat_svg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-repeat" />
          </svg>
        </div>
        <div
          className={classNames(styles.player__btn_shuffle, styles._btn_icon)}
        >
          <svg className={styles.player__btn_shuffle_svg}>
            <use xlinkHref="/image/icon/sprite.svg#icon-shuffle" />
          </svg>
        </div>
      </div>
      <div className={styles.player__track_play}>
        <div className={styles.track_play__contain}>
          <div className={styles.track_play__image}>
            <svg className={styles.track_play__svg}>
              <use xlinkHref="/image/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className={styles.track_play__author}>
            <a className={styles.track_play__author_link} href="http://">
              Ты та...
            </a>
          </div>
          <div className={styles.track_play__album}>
            <a className={styles.track_play__album_link} href="http://">
              Баста
            </a>
          </div>
        </div>
        <div className={styles.track_play__like_dis}>
          <div
            className={classNames(styles.track_play__like, styles._btn_icon)}
          >
            <svg className={styles.track_play__like_svg}>
              <use xlinkHref="/image/icon/sprite.svg#icon-like" />
            </svg>
          </div>
          <div
            className={classNames(styles.track_play__dislike, styles._btn_icon)}
          >
            <svg className={styles.track_play__dislike_svg}>
              <use xlinkHref="/image/icon/sprite.svg#icon-dislike" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
