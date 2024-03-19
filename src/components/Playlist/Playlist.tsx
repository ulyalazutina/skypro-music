import Song from "@components/Song/Song";
import styles from "./Playlist.module.css";
import { getTracks } from "@api/tracks";

export default async function Playlist() {
  const playlistArray: Array<trackType> = await getTracks();
  return (
    <div className={styles.contentPlaylist}>
      {playlistArray.map((item, index) => {
        return <Song key={index} item={item} />;
      })}
    </div>
  );
}
