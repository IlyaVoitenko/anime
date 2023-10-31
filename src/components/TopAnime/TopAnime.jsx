import { useSelector } from "react-redux";
import { topAnimeListReselect } from "../../store/selectors";
import Header from "../Header";
import ListTopAnime from "../ListTopAnime";

const TopAnime = () => {
  const listTopAnime = useSelector(topAnimeListReselect);

  return (
    <div>
      <Header />
      <ListTopAnime list={listTopAnime} />
    </div>
  );
};

export default TopAnime;
