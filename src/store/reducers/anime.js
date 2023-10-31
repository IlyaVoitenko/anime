import { createSlice } from "@reduxjs/toolkit";
import { setTopAnime } from "../thunk";

const initialState = {
  topAnime: null,
};

export const animeSlice = createSlice({
  name: "anime",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setTopAnime.fulfilled, (state, action) => {
      state.topAnime = [...action.payload];
    });
    builder.addCase(setTopAnime.rejected, () => {
      throw Error(500);
    });
  },
  reducers: {},
});

// export const {} = animeSlice.actions;

export default animeSlice.reducer;
