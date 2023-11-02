import { useSelector } from "react-redux";
import { currentAnimeSelector } from "../../store/selectors";
import Poster from "./Poster";
import Header from "../Header";

const Anime = () => {
  const anime = useSelector(currentAnimeSelector);
  console.log(anime);
  const { images, title_english, synopsis, score } = anime;
  return (
    <div className="w-screen h-screen  ">
      <Header isBlock={true} />
      <Poster image={images?.jpg.large_image_url} alt={title_english} />
      <div className=" flex flex-col items-center">
        <div className="w-[70%] mt-10">
          <div className="flex flex-col mt-10">
            <div className="text-2xl ">
              <span>{title_english}</span> |{" "}
              <span className="text-yellow-400">{score}</span>
            </div>
            <p className="mt-5">{synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anime;
