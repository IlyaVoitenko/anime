import axios from "axios";

export const getTopAnime = async () => {
  const { data } = await axios.get(`https://api.jikan.moe/v4/top/anime`);
  console.log(data.data);
  console.log(data?.data[0].images.jpg.large_image_url);
  return data;
};
