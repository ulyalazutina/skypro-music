const API_URL = "https://skypro-music-api.skyeng.tech/catalog/";
const ALL_TRACKS_API = "track/all/";
const SELECTION_TRACKS_API = "selection/";

export async function getTracks(playlistId: string |  null) {
  const res = await fetch(API_URL + (playlistId ? SELECTION_TRACKS_API + playlistId : ALL_TRACKS_API));

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }

  return res.json();
}
