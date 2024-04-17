"use client";
import styles from "./Song.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentTrack, setIsPlay, setLickedTrack } from "../../store/feautures/playlistSlice";
import classNames from "classnames";
import formatTime from "../../libs/formatTime";
import { addFavotireTrack } from "@api/tracks";

type SongProps = {
  item: trackType;
  playlist: trackType[];
};

export default function Song({ item, playlist }: SongProps) {
  const dispatch = useAppDispatch();
  const isPlay = useAppSelector((store) => store.playlist.isPlaying);
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const likedTrack = useAppSelector((store) => store.playlist.lickedTrack);
  const user = useAppSelector((store) => store.user.user);
  const handleClick = () => {
    dispatch(setCurrentTrack({ curentTrack: item, playlist }));
    dispatch(setIsPlay(!isPlay));
  };

  function example() {
    if (likedTrack) {
      const token = JSON.parse(localStorage.getItem("token"));
      const trackId = likedTrack.id;
      const data = {
        trackId: trackId,
        accessToken: token[0],
      };
      addFavotireTrack(data).then((res) => {
        console.log(res);
      });
    } else {
      console.log("айди нет");
    }
  }
  //клик на лайк
  const btnClick = (e) => {
    e.preventDefault();

    dispatch(setLickedTrack({ likedTrack: item, playlist }));
    // example();
  };

  return (
    <div className={styles.playlistItem} onClick={handleClick}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            {currentTrack?.name === item.name ? (
              <div
                className={classNames(styles.trackTitleSvg, styles.playingDot, {
                  [styles.playingDotAnimation]: isPlay,
                })}
              ></div>
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
          <svg className={styles.trackTimeSvg} onClick={btnClick}>
            <use xlinkHref="/image/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.trackTimeText}>{formatTime(item?.duration_in_seconds)}</span>
        </div>
      </div>
    </div>
  );
}
