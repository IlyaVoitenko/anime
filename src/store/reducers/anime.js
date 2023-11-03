import { createSlice } from "@reduxjs/toolkit";
import {
  setTopAnime,
  setAnimeById,
  setAuthorAnime,
  setAnimeTrailer,
} from "../thunk";

const initialState = {
  topAnimeList: null,
  currentAnime: null,
  animeAuthor: null,
  animeTrailer: null,
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
    builder.addCase(setAuthorAnime.fulfilled, (state, action) => {
      state.animeAuthor = { ...action.payload };
    });
    builder.addCase(setAuthorAnime.rejected, () => {
      throw Error("anime author is not found", 404);
    });
    builder.addCase(setAnimeTrailer.fulfilled, (state, action) => {
      state.animeTrailer = { ...action.payload };
    });
    builder.addCase(setAnimeTrailer.rejected, () => {
      throw Error("anime trailer is not found", 404);
    });
  },
});

export default animeSlice.reducer;
