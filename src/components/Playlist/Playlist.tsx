import Song from "@components/Song/Song";
import styles from "./Playlist.module.css";
import { getTracks } from "@api/tracks";
import { useEffect, useState } from "react";

export default function Playlist() {
  //состояние для всех треков
  const [trackList, setTrackList] = useState<trackType[]>([]);
  useEffect(() => {
    getTracks()
    .then((data) => setTrackList(data))
    .catch((error) => console.error("Произошла ошибка при получении списка треков:", error));
    setTrackList([]);
  }, [])

  return (
    <div className={styles.contentPlaylist}>
      {trackList.map((item, index) => {
        return <Song  key={index} item={item} playlist={trackList}/>;
      })}
    </div>
  );
}
