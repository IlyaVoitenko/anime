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
      console.log("setTopAnime fulfilled");
    });
    builder.addCase(setTopAnime.pending, (state) => {
      state.isLoading = true;
      console.log("setTopAnime pending");
    });
    builder.addCase(setTopAnime.rejected, (state) => {
      state.isLoading = false;
      console.log("setTopAnime rejected");

      throw Error(500);
    });

    builder.addCase(setAnimeById.fulfilled, (state, action) => {
      state.currentAnime = action.payload;
      state.isLoading = false;
      console.log("setAnimeById fulfilled");
    });
    builder.addCase(setAnimeById.pending, (state) => {
      state.isLoading = true;
      console.log("setAnimeById pending");
    });
    builder.addCase(setAnimeById.rejected, (state) => {
      state.isLoading = false;

      console.log("setAnimeById rejected");

      throw Error("anime not found", 404);
    });

    builder.addCase(setAuthorAnime.fulfilled, (state, action) => {
      state.animeAuthor = { ...action.payload };
      state.isLoading = false;
      console.log("setAuthorAnime fulfilled");
    });
    builder.addCase(setAuthorAnime.pending, (state) => {
      state.isLoading = true;
      console.log("setAuthorAnime pending");
    });
    builder.addCase(setAuthorAnime.rejected, (state) => {
      state.isLoading = false;
      console.log("setAuthorAnime rejected");

      throw Error("anime author is not found", 404);
    });

    builder.addCase(setAnimeTrailer.fulfilled, (state, action) => {
      state.animeTrailer = { ...action.payload };
      state.isLoading = false;
      console.log("setAnimeTrailer fulfilled");
    });
    builder.addCase(setAnimeTrailer.pending, (state) => {
      state.isLoading = true;
      console.log("setAnimeTrailer pending");
    });
    builder.addCase(setAnimeTrailer.rejected, (state) => {
      state.isLoading = false;
      console.log("setAnimeTrailer rejected");

      throw Error("anime trailer is not found", 404);
    });

    builder.addCase(setRecommendedAnime.fulfilled, (state, action) => {
      state.recommendedAnime = [...action.payload];
      state.isLoading = false;
      console.log("setRecommendedAnime fulfilled");
    });
    builder.addCase(setRecommendedAnime.pending, (state) => {
      state.isLoading = true;
      console.log("setRecommendedAnime pending");
    });
    builder.addCase(setRecommendedAnime.rejected, (state) => {
      state.isLoading = false;
      console.log("setRecommendedAnime rejected");

      throw Error("recommended anime not found", 404);
    });
  },
});

export default animeSlice.reducer;
