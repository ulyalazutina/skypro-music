import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType = {
    playlist: trackType[],
    currentTrack: null | trackType,
    isPlaying: boolean, 
    isShuffled: boolean,
    shuffledPlaylist: trackType[]
};

type setCurrentTrackType = {
    curentTrack: trackType,
    playlist: trackType[],
}

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
        setCurrentTrack: (state, action: PayloadAction<setCurrentTrackType>) => {
            state.currentTrack = action.payload.curentTrack;
            state.playlist = action.payload.playlist;
            state.shuffledPlaylist = [...action.payload.playlist].sort(()=>0.5 - Math.random(),)
        },
    },
});

export const { setCurrentTrack } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;