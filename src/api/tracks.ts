const API_URL = "https://skypro-music-api.skyeng.tech/catalog/";
const ALL_TRACKS_API = "track/all/";
const SELECTION_TRACKS_API = "selection/";
const FAVORITE_TRACKS_API = "/favorite/";
const TRACK_API = "https://skypro-music-api.skyeng.tech/catalog/track/";
const ALL_FAVORITE_TRACKS_API = "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/";


export async function getTracks(playlistId: string |  null) {
  const res = await fetch(API_URL + (playlistId ? SELECTION_TRACKS_API + playlistId : ALL_TRACKS_API));

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }

  return res.json();
}

type favoriteType = { 
  trackId: number, 
  accessToken: string,
}

export async function addFavotireTrack({trackId, accessToken}:favoriteType) {
  const res = await fetch(TRACK_API + trackId + FAVORITE_TRACKS_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  if (!res.ok) {
    throw new Error("Токен устарел");
  }

  return res.json();
}

export async function deleteFavotireTrack({trackId, accessToken}:favoriteType) {
  const res = await fetch(TRACK_API + trackId + FAVORITE_TRACKS_API, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  if (!res.ok) {
    throw new Error("Токен устарел");
  }

  return res.json();
}

export async function getFavotireTracks(accessToken:string) {
  const res = await fetch(ALL_FAVORITE_TRACKS_API, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  if (!res.ok) {
    throw new Error("Токен устарел");
  }

  return res.json();
}

export async function getTrackId(trackId:number) {
  const res = await fetch(TRACK_API + trackId, {
    method: "GET",
  })
  if (!res.ok) {
    throw new Error("Ошибка");
  }

  return res.json();
}
