import { useDispatch, useSelector } from "react-redux";
import {
  currentAnimeSelector,
  animeAuthorSelector,
  isLoadingSelector,
} from "../../store/selectors";

import Poster from "./Poster";
import Header from "../Header";
import Player from "./Player";
import RatingAndAuthor from "./RatingAndAuthor";
import ListRecommendedAnime from "./ListRecommendedAnime";
import { useEffect } from "react";
import { setRecommendedAnime } from "../../store/thunk";
import Loading from "../Loading";

const Anime = () => {
  const dispatch = useDispatch();
  const anime = useSelector(currentAnimeSelector);
  const author = useSelector(animeAuthorSelector);
  const loading = useSelector(isLoadingSelector);

  const { mal_id, images, title_english, synopsis, score } = anime;

  useEffect(() => {
    dispatch(setRecommendedAnime(mal_id));
  }, [dispatch, mal_id]);

  if (loading) return <Loading />;

  return (
    <div className="w-screen h-screen  ">
      <Header isBlock={true} />
      <Poster
        image={images?.jpg.large_image_url}
        alt={title_english || "alt"}
      />
      <div className=" flex flex-col items-center">
        <div className="w-[70%] mt-10 mb-10 ">
          <RatingAndAuthor
            title_english={title_english}
            score={score}
            author={author}
          />
          <div className="flex flex-col mt-10">
            <p className="mt-5">{synopsis || "synopsis"}</p>
          </div>
          <Player />
          <ListRecommendedAnime />
        </div>
      </div>
    </div>
  );
};

export default Anime;
