import { createSelector } from "reselect";

export const topAnimeListSelector = (state) => state.anime.topAnimeList;
export const topAnimeListReselect = createSelector(
  [topAnimeListSelector],
  (product) => product
);
export const currentAnimeSelector = (state) => state.anime.currentAnime;
export const animeAuthorSelector = (state) => state.anime.animeAuthor;
export const animeTrailerSelector = (state) => state.anime.animeTrailer;
export const recommendedAnimeSelector = (state) => state.anime.recommendedAnime;
export const isLoadingSelector = (state) => state.anime.isLoading;
