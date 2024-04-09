import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType = {
  playlist: trackType[];
  currentTrack: null | trackType;
  isPlaying: boolean;
  isShuffled: boolean;
  shuffledPlaylist: trackType[];
  filteredPlaylist: trackType[];
  activeFilters: {
    authors: Array<string>,
    release_dates: null | string,
    genres: Array<string>,
    searchValue: string,
  };
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
  filteredPlaylist: [],
  activeFilters: {
    authors: [],
    release_dates: null,
    genres: [],
    searchValue: "",
  }
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
    setPlaylist: (state, action: PayloadAction<trackType[]>) => {
      state.playlist = action.payload
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
    setActiveFilter: (state, action: PayloadAction<{ authors?:Array<string>, release_dates?: string, genres?:Array<string>, searchValue?: string}>) => {
      state.activeFilters = {
        authors: action.payload.authors || state.activeFilters.authors,
        release_dates: action.payload.release_dates || null,
        genres: action.payload.genres || state.activeFilters.genres,
        searchValue: action.payload.searchValue || state.activeFilters.searchValue,
      };
      console.log(state.activeFilters);
      state.filteredPlaylist = state.playlist.filter((track)=>{
        const isAuthors = state.activeFilters.authors.length > 0 ? state.activeFilters.authors.includes(track.author) : true;
        const isGenres = state.activeFilters.genres.length > 0 ? state.activeFilters.genres.includes(track.genre) : true;
        const isSearch = state.activeFilters.searchValue !== "" ? track.name.toLowerCase().includes(state.activeFilters.searchValue) : true;
        return isAuthors && isGenres && isSearch
      })
    }
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

export const { setCurrentTrack, setNextTrack, setPrevTrack, setIsShuffled, setIsPlay, setPlaylist, setActiveFilter } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
