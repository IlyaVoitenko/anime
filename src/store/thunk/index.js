import {
  loadTopAnime,
  loadAnimeById,
  loadAuthorById,
  loadTrailerAnime,
  loadRecommendedAnime,
} from "../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const setTopAnime = createAsyncThunk(
  "anime/setTopAnime",
  async (_, apiThunk) => {
    try {
      const data = await loadTopAnime();
      return data;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
export const setAnimeById = createAsyncThunk(
  "anime/setAnimeById",
  async (params, apiThunk) => {
    try {
      const { data } = await loadAnimeById(params);
      return data;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
export const setAuthorAnime = createAsyncThunk(
  "anime/setAuthorAnime",
  async (params, apiThunk) => {
    try {
      const data = await loadAuthorById(params);
      return data;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
export const setAnimeTrailer = createAsyncThunk(
  "anime/setAnimeTrailer",
  async (params, apiThunk) => {
    try {
      const data = await loadTrailerAnime(params);
      return data;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
export const setRecommendedAnime = createAsyncThunk(
  "anime/setRecommendedAnime",
  async (params, apiThunk) => {
    try {
      const data = await loadRecommendedAnime(params);
      return data;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
