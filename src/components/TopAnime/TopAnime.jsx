import { useSelector } from "react-redux";
import { topAnimeListReselect, isLoadingSelector } from "../../store/selectors";
import Header from "../Header";
import ListTopAnime from "../ListTopAnime";
import Loading from "../Loading";

const TopAnime = () => {
  const listTopAnime = useSelector(topAnimeListReselect);
  const loading = useSelector(isLoadingSelector);

  if (loading) return <Loading />;

  return (
    <div>
      <Header />
      <ListTopAnime list={listTopAnime} />
    </div>
  );
};

export default TopAnime;
