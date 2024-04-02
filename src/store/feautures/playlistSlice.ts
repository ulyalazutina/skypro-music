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
        setNextTrack: (state) => {
            const playlist = state.isShuffled ? state.shuffledPlaylist : state.playlist;
            const currentTrackIndex = playlist.findIndex((track) => track.id === state.currentTrack?.id);
            const newTrack = playlist[currentTrackIndex + 1];
            if (newTrack) {
                state.currentTrack = newTrack;
            }
        },
        setPrevTrack: (state) => {
            const playlist = state.isShuffled ? state.shuffledPlaylist : state.playlist;
            const currentTrackIndex = playlist.findIndex((track) => track.id === state.currentTrack?.id);
            const newTrack = playlist[currentTrackIndex - 1];
            if (newTrack) {
                state.currentTrack = newTrack;
            }
        },
        setIsShuffled: (state, action: PayloadAction<boolean>) => {
            state.isShuffled = action.payload;
            if (state.isShuffled) {
                state.shuffledPlaylist = [...state.playlist].sort(() => Math.random() - 0.5);
            }
        },
    },
});

export const { setCurrentTrack, setNextTrack, setPrevTrack, setIsShuffled } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
