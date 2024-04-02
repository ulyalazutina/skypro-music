import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType = {
    playlist: trackType[],
    currentTrack: null | trackType,
    isPlaying: boolean, 
    isShuffled: boolean,
    shuffledPlaylist: trackType[]
};

const initialState: PlaylistStateType = {
    playlist: [],
    currentTrack: null,
    isPlaying: false, 
    isShuffled: false,
    shuffledPlaylist: []
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        setCurrentTrack: (state, action: PayloadAction<trackType>) => {
            state.currentTrack = action.payload;
        },
    },
});

export const { setCurrentTrack } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;