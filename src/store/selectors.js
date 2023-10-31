import { createSelector } from "reselect";

export const topAnimeListSelector = (state) => state.anime.topAnime;
export const topAnimeListReselect = createSelector(
  [topAnimeListSelector],
  (product) => product
);
