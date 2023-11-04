import { useEffect } from "react";
import { setTopAnime } from "../../store/thunk";
import { useDispatch, useSelector } from "react-redux";
import { isLoadingSelector } from "../../store/selectors";

import Loading from "../Loading";
import MainPoster from "../MainPoster";
import PreviewTopAnime from "../PreviewTopAnime";
import Header from "../Header";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingSelector);
  useEffect(() => {
    console.log("started");
    dispatch(setTopAnime());
  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <section>
      <div className="relative">
        <Header isBlackLinksColors={true} />
        <MainPoster />
      </div>
      <PreviewTopAnime />
    </section>
  );
};

export default Home;
