import { loadTopAnime } from "../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const setTopAnime = createAsyncThunk(
  "anime/setTopAnime",
  async (_, apiThunk) => {
    try {
      const data = loadTopAnime();
      return data;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
