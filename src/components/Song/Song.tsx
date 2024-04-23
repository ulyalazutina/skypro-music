"use client";
import styles from "./Song.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentTrack, setIsPlay } from "../../store/feautures/playlistSlice";
import classNames from "classnames";
import formatTime from "../../libs/formatTime";
import { setIsAuthorization } from "@hooks/store/feautures/userSlice";
import { updateToken } from "@api/user";
import { getLocalAccessToken, getLocalRefreshToken, getLocalUser } from "@hooks/libs/localStorage";
import { addFavotireTrack, deleteFavotireTrack } from "@api/tracks";
import { useState } from "react";

type SongProps = {
  item: trackType;
  playlist: trackType[];
};

export default function Song({ item, playlist }: SongProps) {
  const dispatch = useAppDispatch();
  const isPlay = useAppSelector((store) => store.playlist.isPlaying);
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  // const dateGetAccessToken = useAppSelector((store) => store.user.dateToken);
  const [isLiked, setIsLiked] = useState<boolean>(returnLike());
  function returnLike() {
    if (item.stared_user) {
      if (item.stared_user.find((el) => el.id == getLocalUser?.id)) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
  //включить/выключить трек
  const handleClick = () => {
    dispatch(setCurrentTrack({ curentTrack: item, playlist }));
    dispatch(setIsPlay(!isPlay));
  };

  const handleLiked = () => {
    if (getLocalAccessToken) {
      const data = {
        trackId: item.id,
        accessToken: getLocalAccessToken,
      };
      console.log(data);
      if (isLiked) {
        deleteFavotireTrack(data).then((res) => {
          console.log(res);
          setIsLiked(false);
        });
      } else {
        addFavotireTrack(data).then((res) => {
          console.log(res);
          setIsLiked(true);
        });
      }
    }
  };

  //клик на лайк
  const likeClick = (event: any) => {
    event.stopPropagation();
    //проверка на наличие авторизации
    if (getLocalUser) {
      //дата нажатия на лайк
      const clickDate = new Date();
      let dateAccessToken = new Date(localStorage.getItem("dateTokenAccess"));
      console.log(dateAccessToken);
      console.log(clickDate);
      //проверка на устаревший токен
      if (Math.floor((clickDate.getTime() - dateAccessToken.getTime()) / 1000) > 200) {
        console.log("Прошло 200 секунд");
        if (getLocalRefreshToken) {
          updateToken(getLocalRefreshToken)
            .then((data) => localStorage.setItem("tokenAccess", JSON.stringify(data.access)))
            .then(() => {
              handleLiked();
            })
            .catch((error) => {
              console.warn(error);
            });
        }
      } else {
        console.log("Не прошло 200 секунд");
        handleLiked();
      }
    } else {
      dispatch(setIsAuthorization(true));
    }
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
          <svg className={styles.trackTimeSvg} onClick={likeClick}>
            {isLiked ? (
              <use xlinkHref="/image/icon/sprite.svg#icon-liked" />
            ) : (
              <use xlinkHref="/image/icon/sprite.svg#icon-like" />
            )}
          </svg>
          <span className={styles.trackTimeText}>{formatTime(item?.duration_in_seconds)}</span>
        </div>
      </div>
    </div>
  );
}
