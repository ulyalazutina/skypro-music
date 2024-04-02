import Song from "@components/Song/Song";
import styles from "./Playlist.module.css";
import { getTracks } from "@api/tracks";
import { useEffect, useState } from "react";

type PlaylistProps = { setCurrentTrack: (param: trackType) => void };

export default function Playlist({ setCurrentTrack }: PlaylistProps) {
  //состояние для всех треков
  const [trackList, setTrackList] = useState([]);
  useEffect(() => {
    getTracks()
    .then((data) => setTrackList(data))
    .catch((error) => console.error("Произошла ошибка при получении списка треков:", error));
    setTrackList([]);
  }, [])

  return (
    <div className={styles.contentPlaylist}>
      {trackList.map((item, index) => {
        return <Song setCurrentTrack={() => setCurrentTrack(item)} key={index} item={item} />;
      })}
    </div>
  );
}
