import ListTopAnime from "../ListTopAnime";
import { useSelector } from "react-redux";
import { topAnimeListReselect } from "../../store/selectors";
import { Link } from "react-router-dom";

const PreviewTopAnime = () => {
  const listTopAnime = useSelector(topAnimeListReselect);
  if (!listTopAnime) return;

  const previewListTopAnime = listTopAnime.slice(0, 6);

  return (
    <div className="flex flex-col mt-10 mb-10 jus">
      <div className="text-center">
        <Link to={"/top-anime"}>
          <button
            type="button"
            className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
          >
            List anime top{" "}
          </button>
        </Link>
      </div>
      <ListTopAnime list={previewListTopAnime} />
    </div>
  );
};

export default PreviewTopAnime;
