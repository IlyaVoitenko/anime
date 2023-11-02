import { createSelector } from "reselect";

export const topAnimeListSelector = (state) => state.anime.topAnimeList;
export const topAnimeListReselect = createSelector(
  [topAnimeListSelector],
  (product) => product
);
export const currentAnimeSelector = (state) => state.anime.currentAnime;
