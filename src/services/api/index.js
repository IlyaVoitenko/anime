import axios from "axios";

export const loadTopAnime = async () => {
  const { data } = await axios.get(`https://api.jikan.moe/v4/top/anime`);
  return data.data;
};
export const loadAnimeById = async (id) => {
  const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
  return data;
};
export const loadAuthorById = async (id) => {
  const { data } = await axios.get(`https://api.jikan.moe/v4/people/${id}`);
  return data.data;
};
export const loadTrailerAnime = async (id) => {
  const { data } = await axios.get(
    `https://api.jikan.moe/v4/anime/${id}/videos`
  );
  return data;
};
