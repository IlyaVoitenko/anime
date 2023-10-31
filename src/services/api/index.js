import axios from "axios";

export const loadTopAnime = async () => {
  const { data } = await axios.get(`https://api.jikan.moe/v4/top/anime`);
  return data.data;
};
