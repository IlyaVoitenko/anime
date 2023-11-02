import { createSlice } from "@reduxjs/toolkit";
import { setTopAnime, setAnimeById } from "../thunk";

const initialState = {
  topAnimeList: null,
  currentAnime: null,
};

export const animeSlice = createSlice({
  name: "anime",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setTopAnime.fulfilled, (state, action) => {
      state.topAnimeList = [...action.payload];
    });
    builder.addCase(setTopAnime.rejected, () => {
      throw Error(500);
    });
    builder.addCase(setAnimeById.fulfilled, (state, action) => {
      state.currentAnime = action.payload;
    });
    builder.addCase(setAnimeById.rejected, () => {
      throw Error("anime not found", 404);
    });
  },
});

export default animeSlice.reducer;
