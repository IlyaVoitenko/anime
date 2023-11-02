import { loadTopAnime, loadAnimeById } from "../../services/api";
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
