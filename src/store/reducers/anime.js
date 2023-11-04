import { createSlice } from "@reduxjs/toolkit";
import {
  setTopAnime,
  setAnimeById,
  setAuthorAnime,
  setAnimeTrailer,
  setRecommendedAnime,
} from "../thunk";

const initialState = {
  topAnimeList: null,
  currentAnime: null,
  animeAuthor: null,
  animeTrailer: null,
  recommendedAnime: null,
  isLoading: false,
};

export const animeSlice = createSlice({
  name: "anime",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setTopAnime.fulfilled, (state, action) => {
      state.topAnimeList = [...action.payload];
      state.isLoading = false;
    });
    builder.addCase(setTopAnime.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setTopAnime.rejected, (state) => {
      state.isLoading = false;

      throw Error(500);
    });

    builder.addCase(setAnimeById.fulfilled, (state, action) => {
      state.currentAnime = action.payload;
      state.isLoading = false;
    });
    builder.addCase(setAnimeById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setAnimeById.rejected, (state) => {
      state.isLoading = false;

      throw Error("anime not found", 404);
    });

    builder.addCase(setAuthorAnime.fulfilled, (state, action) => {
      state.animeAuthor = { ...action.payload };
      state.isLoading = false;
    });
    builder.addCase(setAuthorAnime.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setAuthorAnime.rejected, (state) => {
      state.isLoading = false;

      throw Error("anime author is not found", 404);
    });

    builder.addCase(setAnimeTrailer.fulfilled, (state, action) => {
      state.animeTrailer = { ...action.payload };
      state.isLoading = false;
    });
    builder.addCase(setAnimeTrailer.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setAnimeTrailer.rejected, (state) => {
      state.isLoading = false;

      throw Error("anime trailer is not found", 404);
    });

    builder.addCase(setRecommendedAnime.fulfilled, (state, action) => {
      state.recommendedAnime = [...action.payload];
      state.isLoading = false;
    });
    builder.addCase(setRecommendedAnime.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setRecommendedAnime.rejected, (state) => {
      state.isLoading = false;

      throw Error("recommended anime not found", 404);
    });
  },
});

export default animeSlice.reducer;
