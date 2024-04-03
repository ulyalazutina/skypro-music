import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType = {
  playlist: trackType[];
  currentTrack: null | trackType;
  isPlaying: boolean;
  isShuffled: boolean;
  shuffledPlaylist: trackType[];
};

type setCurrentTrackType = {
  curentTrack: trackType;
  playlist: trackType[];
};

const initialState: PlaylistStateType = {
  playlist: [],
  currentTrack: null,
  isPlaying: false,
  isShuffled: false,
  shuffledPlaylist: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<setCurrentTrackType>) => {
      state.currentTrack = action.payload.curentTrack;
      state.playlist = action.payload.playlist;
      state.shuffledPlaylist = [...action.payload.playlist].sort(() => 0.5 - Math.random());
    },
    setNextTrack: changeTrack(1),
    setPrevTrack: changeTrack(-1),
    setIsShuffled: (state, action: PayloadAction<boolean>) => {
      state.isShuffled = action.payload;
      if (state.isShuffled) {
        state.shuffledPlaylist = [...state.playlist].sort(() => Math.random() - 0.5);
      }
    },
    setIsPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
  },
});

function changeTrack(direction: number) {
  return (state: any) => {
    const playlist = state.isShuffled ? state.shuffledPlaylist : state.playlist;
    const currentTrackIndex = playlist.findIndex((track: trackType) => track.id === state.currentTrack?.id);
    const newTrack = playlist[currentTrackIndex + direction];
    if (newTrack) {
      state.currentTrack = newTrack;
      state.isPlaying = true;
    }
  };
}

export const { setCurrentTrack, setNextTrack, setPrevTrack, setIsShuffled, setIsPlay } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
