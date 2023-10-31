import ListTopAnime from "../ListTopAnime";
import { useSelector } from "react-redux";
import { topAnimeListReselect } from "../../store/selectors";

const PreviewTopAnime = () => {
  const listTopAnime = useSelector(topAnimeListReselect);
  if (listTopAnime === null) return;

  const previewListTopAnime = listTopAnime.slice(0, 6);

  return (
    <div className="flex flex-col mt-10 mb-10 jus">
      <div className="text-center">
        <span>Top anime</span>
      </div>
      <ListTopAnime list={previewListTopAnime} />
    </div>
  );
};

export default PreviewTopAnime;
