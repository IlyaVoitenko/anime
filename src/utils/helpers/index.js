export const validPlayerUrl = (animeTrailer) => {
  console.log("validPlayerUrl :", animeTrailer);

  if (animeTrailer.promo.length !== 0)
    return animeTrailer.promo[0]?.trailer?.embed_url;

  if (animeTrailer.music_videos.length !== 0)
    return animeTrailer.promo[0]?.trailer?.embed_url;

  return "https://www.youtube.com/embed/--IcmZkvL0Q?enablejsapi=1&wmode=opaque&autoplay=1";
};
