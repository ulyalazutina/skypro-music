import Song from "@components/Song/Song";
import styles from "./Playlist.module.css";
import { getTracks } from "@api/tracks";

export default async function Playlist() {
  let playlistArray: trackType[];

  try {
    playlistArray = await getTracks();
  } catch (error) {
    console.error("Произошла ошибка при получении списка треков:", error);

    playlistArray = [];
  }
  return (
    <div className={styles.contentPlaylist}>
      {playlistArray.map((item, index) => {
        return <Song key={index} item={item} />;
      })}
    </div>
  );
}
