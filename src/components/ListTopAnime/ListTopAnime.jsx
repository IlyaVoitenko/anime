import { useDispatch } from "react-redux";
import {
  setAnimeById,
  setAuthorAnime,
  setAnimeTrailer,
} from "../../store/thunk";
import { Link } from "react-router-dom";

const ListTopAnime = ({ list }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap flex-col sm:flex-row justify-evenly items-start  mt-10 mb-10">
      {list &&
        list.map((anime) => (
          <Link
            key={anime.mal_id}
            to={"/anime"}
            className="text-white flex justify-evenly items-center  mt-5"
            onClick={() => {
              dispatch(setAnimeById(anime.mal_id));
              dispatch(setAuthorAnime(anime.mal_id));
              dispatch(setAnimeTrailer(anime.mal_id));
            }}
          >
            <div className="flex flex-col mr-2 ml-2 w-6/12 sm:w-[14vw] text-center mt-5 mb-5 items-center">
              <img
                src={anime.images.jpg.image_url}
                className="w-screen h-3/4 sm:w-[20vw] sm:h-[23vw]"
                alt={anime.title_english}
              />
              <span className=" overflow-ellipsis">{anime.title_english}</span>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ListTopAnime;
