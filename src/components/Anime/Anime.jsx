import { useSelector } from "react-redux";
import { currentAnimeSelector } from "../../store/selectors";
import Poster from "./Poster";
import Header from "../Header";
import Description from "./Description";
import Player from "./Player";
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
          {" "}
          <Description
            title_english={title_english}
            score={score}
            synopsis={synopsis}
          />
          <Player />
        </div>
      </div>
    </div>
  );
};

export default Anime;
