import { useSelector } from "react-redux";
import {
  currentAnimeSelector,
  animeAuthorSelector,
} from "../../store/selectors";
import Poster from "./Poster";
import Header from "../Header";
import Player from "./Player";

const Anime = () => {
  const anime = useSelector(currentAnimeSelector);
  const author = useSelector(animeAuthorSelector);
  const { images, title_english, synopsis, score } = anime;
  return (
    <div className="w-screen h-screen  ">
      <Header isBlock={true} />
      <Poster image={images?.jpg.large_image_url} alt={title_english} />
      <div className=" flex flex-col items-center">
        <div className="w-[70%] mt-10 mb-10 ">
          <div className=" flex flex-row justify-between items-center">
            <div className="text-2xl ">
              <span>{title_english}</span> |{" "}
              <span className="text-yellow-400">{score}</span>
            </div>{" "}
            <div className=" w-[8vw]">
              <img
                src={author?.images.jpg.image_url}
                className=""
                alt={author?.name}
              />
              <p>{author?.name}</p>
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <p className="mt-5">{synopsis}</p>
          </div>
          <Player />
        </div>
      </div>
    </div>
  );
};

export default Anime;
