import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songId: null,
  url: null,
  img: null,
  artistName: null,
  songTitle: null,
  play: null,
  audioTag: null,
};

export const PlayerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setSong: (state, action) => {
      state.songId = action.payload.songId;
      state.url = action.payload.url;
      state.img = action.payload.img;
      state.artistName = action.payload.artistName;
      state.songTitle = action.payload.songTitle;
    },
    reset: (state) => initialState,
    setPlay: (state, action) => {
      state.play = action.payload;
    },
    setAudioTag: (state, action) => {
      state.audioTag = action.payload;
    },
  },
});

export const { setSong, reset, setPlay, setAudioTag } = PlayerSlice.actions;

export default PlayerSlice.reducer;
