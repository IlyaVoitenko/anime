import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./reducers/anime";

const store = configureStore({
  reducer: {
    anime: animeReducer,
  },
});

export default store;
