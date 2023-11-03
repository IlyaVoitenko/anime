import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { recommendedAnimeSelector } from "../../../store/selectors";
import {
  setAnimeById,
  setAuthorAnime,
  setAnimeTrailer,
} from "../../../store/thunk";

const ListRecommendedAnime = () => {
  const dispatch = useDispatch();
  const recommendedAnime = useSelector(recommendedAnimeSelector);
  const listRecommendedAnime = recommendedAnime.slice(0, 4);
  return (
    <div className="flex flex-wrap flex-col sm:flex-row justify-evenly items-start  mt-10 mb-10">
      {listRecommendedAnime.map(({ entry }) => (
        <Link
          key={entry.mal_id}
          to={"/anime"}
          className="text-white flex justify-evenly items-center  mt-5"
          onClick={() => {
            dispatch(setAnimeById(entry.mal_id));
            dispatch(setAuthorAnime(entry.mal_id));
            dispatch(setAnimeTrailer(entry.mal_id));
          }}
        >
          <div className="flex flex-col mr-2 ml-2 w-6/12 sm:w-[14vw] text-center mt-5 mb-5 items-center">
            <img
              src={entry.images.jpg.image_url}
              className="w-screen h-3/4 sm:w-[20vw] sm:h-[23vw]"
              alt={entry.title}
            />
            <span className=" overflow-ellipsis">{entry.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListRecommendedAnime;
